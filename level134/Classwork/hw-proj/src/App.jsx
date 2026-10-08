
const userInfo = (
  <div>
    <h1>სახელი: Nika</h1>
    <p>ასაკი: 17</p>
    <p>ჰობი: Programming</p>
  </div>
);
const container = document.getElementById('root');
const root = createRoot(container);
root.render(userInfo);