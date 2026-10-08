import { useState } from 'react';

function UserCard({ isLoggedIn, username }) {
  const [status, setStatus] = useState('Active');

  if (!isLoggedIn) {
    return <p>გთხოვთ გაიაროთ ავტორიზაცია</p>;
  }

  return (
    <div>
      <h3>{username}</h3>
      <p>სტატუსი: {status}</p>
      <button onClick={() => setStatus('Offline')}>Offline-ზე გადაყვანა</button>
    </div>
  );
}

export default UserCard;