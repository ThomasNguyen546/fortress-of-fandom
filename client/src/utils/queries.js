import gql from 'graphql-tag'

export const QUERY_COMMENTS = gql `
    query comments{
        comments {
            _id
            commentText
            createdAt
            username
        }
    }
`;

