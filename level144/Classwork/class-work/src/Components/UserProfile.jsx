import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
    useEffect(() => {
    if (!userId) {
    return <p>მომხმარებლის ID არ არის მითითებული.</p>;
    }
    console.log("მონაცემების ჩატვირთვა ID-სთვის:", userId);
  }, [userId]);



  
  return <div>User ID: {userId}</div>;
}

export default UserProfile;