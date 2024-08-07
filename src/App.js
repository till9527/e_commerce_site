import React, { useState, useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import { fetchUserAttributes } from '@aws-amplify/auth';

Amplify.configure(awsExports);

function App({ signOut, user }) {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        // Fetch user attributes
        const userAttributesData = await fetchUserAttributes();

        // Log the fetched user attributes data
        console.log('Fetched User Attributes:', userAttributesData);

        // Accessing specific attributes from the object
        const adminStatus = userAttributesData['custom:isAdmin'] === 'Yes';
        
        // Set the isAdmin state
        setIsAdmin(adminStatus);
      } catch (error) {
        console.error('Error fetching user attributes:', error);
      }
    };

    checkAdmin();
  }, []); // Empty dependency array to run only once on component mount

  return (
    <>
      <h1>Hello {user.username}</h1>
      <p>Status: {isAdmin ? 'Admin' : 'Not Admin'}</p>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);




