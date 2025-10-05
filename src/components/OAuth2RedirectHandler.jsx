import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const OAuth2RedirectHandler = () => {
    // useSearchParams hook to easily get URL query parameters
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        // Get the 'token' parameter from the URL
        const token = searchParams.get('token');

        if (token) {
            console.log("Successfully received token:", token);
            // Save the token to localStorage for future API calls
            localStorage.setItem('token', token);

            // Redirect the user to the main dashboard or a protected page
            navigate('/dashboard');
        } else {
            console.error("OAuth2 redirect error: No token found in URL.");
            // If no token is found, redirect to the login page with an error
            navigate('/login?error=AuthenticationFailed');
        }
    }, [searchParams, navigate]);

    // You can show a loading spinner or a simple message while this logic runs
    return (
        <div>
            <p>Loading, please wait...</p>
        </div>
    );
};

export default OAuth2RedirectHandler;
