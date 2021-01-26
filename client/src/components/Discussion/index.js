import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_COMMENT } from '../../utils/mutations';
import { QUERY_COMMENTS } from '../../utils/queries'
import '../../App.css';

function Discussion({ comments }) {
    const [commentText, setCommentText] = useState('');

    const [addComment, { error }] = useMutation(ADD_COMMENT, {
        update(cache, { data: { addComment } }) {
            try {
                const { comments } = cache.readQuery({ query: QUERY_COMMENTS });
                //put the newest comment at the beginning of the array
                cache.writeQuery({
                    query: QUERY_COMMENTS,
                    data: { comments: [addComment, ...comments] }
                })
            } catch (e) {
                console.error(e);
            }
        }
    });
    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
            await addComment({
                variables: { commentText }
            });
            setCommentText('');
        } catch (e) {
            console.error(e);
        }
    };


    return (
        <section className="discussion">
            <h4> Join the Discussion of this week's Episode!</h4>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/6G8YcVVgBZY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <form
                className=""
                onSubmit={handleFormSubmit}
            >
                <textarea
                    placeholder="Spiderman is undoubtly the best super hero there is..."
                    value={commentText}
                    className="formFields"
                >
                </textarea>
                <button className='submit-btn formFields' type="submit">
                    Submit
            </button>
            </form>
            <h5>Here are some peoples comments!</h5>
            {comments && comments.map(comment => (
                <div key={comment._id} className="">
                    <p className="">
                        {comment.username}
                    </p>
                    <p>Created on {comment.createdAt}</p>
                    <p>{comment.commentText}</p>
                </div>
            ))}
        </section>
    );
}

export default Discussion;