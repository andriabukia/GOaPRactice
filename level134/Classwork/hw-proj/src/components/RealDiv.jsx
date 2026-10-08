
const profile = (
  <div>
    <h1>My Profile</h1>
    <p>მე ვარ პროგრამირების მოსწავლე</p>
    <button className="bat">Contact Me</button>
  </div>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(profile);