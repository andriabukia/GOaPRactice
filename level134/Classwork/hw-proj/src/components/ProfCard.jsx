const ProfileCard = (
    <div className="Card">
        <h2 className="profile-name">ანდრია</h2>
        <p>16</p>
        <p>Fullstack Dev</p>
        <button className="button">View Profile</button>
    </div>
);
const container = document.getElementById('root')
const root = createRoot(container)
root.render(ProfileCard)

// virtual dom - dom-ის ვირტუალური ვერსია, რომელიც მონაცემის შეცვლის შემდეგ ქმნის ახალ virtual dom-ს
// diff- არის პროცესი სადაც react ერთმანეთს ადარებს ძველ ვირტუალ დომს და ახალს