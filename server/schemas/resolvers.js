const { User, Comments } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // get all users
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('comments');
    },
    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('comments');
    },
    comments: async (parent, {username}) => {
      console.log(username);
      return Comments.find(username).sort({ createdAt: -1 });
    },
    comment: async (parent, { _id }) => {
      return Comments.findOne({ _id });
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      return { token, user };
    }, 
    addComment: async (parent, args, context) => {
      console.log(context)
      if(context.user) {
        var username = context.user.username
        const comment = await Comments.create({...args, username: username });
        await User.findByIdAndUpdate (
          {_id: context.user._id},
          {$push: {comments: comment._id}},
          {new: true}
        )
        return comment;
      }
      throw new AuthenticationError('Please sign up or login to make a comment');
    }
  }
};

module.exports = resolvers;