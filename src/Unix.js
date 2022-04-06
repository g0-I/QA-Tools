import React, { useState } from 'react';

export const UNIX = () => {
  const [time, setTime] = useState('-');

  const handleChange = (e) => {
    const dateTime = new Date(e.target.value * 1000);
    setTime(() => (dateTime.toString()));
  }

  return (
    <>
      <div> [UNIX Timestamp to Date] ※調整中</div>
      <input onChange={handleChange} type="text"></input>
      <div>変換結果：{time}</div>
      <br/>
    </>
  );

}
