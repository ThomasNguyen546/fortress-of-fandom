import React, { useState, useEffect} from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { ADD_COMMENT } from '../../utils/mutations';
import { QUERY_COMMENTS } from '../../utils/queries'
import '../../App.css';


function Discussion() {
    const {loading, data}= useQuery(QUERY_COMMENTS)
    const comments = data?.comments || {};
    
    const [commentText, setCommentText] = useState('');
    
    
    const [addComment, { error }] = useMutation(ADD_COMMENT, {
        
        update(cache, {data:  { addComment } }) {
            try {
                const { comments } = cache.readQuery({ query: QUERY_COMMENTS });
                //put the newest comment at the beginning of the array
                console.log(comments);
                cache.writeQuery({
                    query: QUERY_COMMENTS,
                    data: { comments: [addComment, ...comments] }
                })
            } catch (e) {
                console.error(e);
            }
        }
    });
    
    // const comments = data?.comments || {}
    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
            await addComment({
                variables: { commentText },
            });
            await setCommentText('');
        } catch (e) {
            console.error(e);
        }
    };
    const handleCommentChange = event => {
        setCommentText(event.target.value);
    }
    
    return (
        <section className="discussion">
            <h4> Join the Discussion of this week's Episode!</h4>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/6G8YcVVgBZY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <form
            className=""
                onSubmit={handleFormSubmit}
                >
                <textarea
                    placeholder="Spider-Man is undoubtedly the best super hero there is..."
                    value={commentText}
                    onChange={handleCommentChange}
                    className="formFields"
                >
                </textarea>
                <button className='login-btn formFields' type="login">
                    Login
            </button>
                <button className='submit-btn formFields' type="submit">
                Submit
                </button>
                </form>
                <h5>Here are some peoples comments!</h5>
                
                {!loading ? comments.map(comment=> {
                    return comment.commentText
                }) : "loading..."}
            </section>
            );
}

export default Discussion;