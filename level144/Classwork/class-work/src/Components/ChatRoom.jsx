import { useState, useEffect, useEffectEvent } from 'react';

function ChatRoom({ roomId, theme }) {
  // 1. შექმენით useEffectEvent სადაც ჩაწერთ log-ის ლოგიკას
  const func = useEffectEvent(() => {
    console.log(theme);
  });

  useEffect(() => {
    // 2. გამოაძახეთ Event ეფექტის შიგნიდან
    func();
  }, [roomId]);

  return <div>მიმდინარე ოთახი: {roomId}</div>;
}

export default ChatRoom;