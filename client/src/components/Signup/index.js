import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import '../../App.css';

const Signup = () => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [addUser, { error }] = useMutation(ADD_USER);

    //update state if the form changes
    const handleChange = event => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    //submitting the form function
    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            const { data } = await addUser({
                variables: { ...formState }
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <main className="userForms">
            <h4>Sign Up</h4>
            <div >
            <form onSubmit={handleFormSubmit}>
                <input
                    className="formFields"
                    placeholder="Username"
                    name="username"
                    type="username"
                    id="username"
                    value={formState.username}
                    onChange={handleChange}
                />
                <input
                    className="formFields"
                    placeholder="Email"
                    name="email"
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                />
                <input
                    className="formFields"
                    placeholder="Password"
                    name="password"
                    type="password"
                    id="password"
                    value={formState.password}
                    onChange={handleChange}
                />
                <button className="formFields submit-btn" type="submit">
                    Submit
            </button>
            </form>
            </div>
            {error && <div>Signup failed</div>}
        </main>
    )
}

export default Signup;