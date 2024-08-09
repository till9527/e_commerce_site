import React, { useState } from 'react';
import App from './App'; // Import the original App component

function LandingPage() {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleSignInClick = () => {
    setShowSignIn(true);
  };

  const handleSignOut = () => {
    setShowSignIn(false); // Return to landing page after sign-out
  };

  return (
    <>
      {!showSignIn ? (
        <div>
          <h1>Welcome to the Landing Page</h1>
          <button onClick={handleSignInClick}>Sign in</button>
        </div>
      ) : (
        <App onSignOut={handleSignOut} /> // Pass the sign-out handler to App
      )}
    </>
  );
}

export default LandingPage;
