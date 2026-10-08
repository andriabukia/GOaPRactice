import './Profile.css'; 

function ProfileCard() { 
    const cardStyle = {
        backgroundColor: '#f4f4f9',
        border: '1px solid #ddd',
        borderRadius: '12px',
        padding: '16px',
    };

    return (
        <>
            <div style={cardStyle}>
                <h1 style={{ color: 'red', backgroundColor: 'blue' }}>
                    name
                </h1>
                <button>Click me</button>
            </div>
        </>
    );
}

export default ProfileCard; 