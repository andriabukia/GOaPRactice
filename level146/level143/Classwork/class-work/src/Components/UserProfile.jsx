import { useEffect } from "react";

function UserProfile({ count }) {
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return <div>Count: {count}</div>;
}