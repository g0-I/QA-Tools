import React, { useState } from 'react';

export const UNIX = () => {
  const [time, setTime] = useState('-');

  const handleChange = (e) => {
    const dateTime = new Date(parseInt(e.target.value));
    setTime(() => (dateTime.toString()));
  }

  return (
    <>
      <div> [UNIX Timestamp to Date] </div>
      <input onChange={handleChange} type="text"></input>
      <div>TimeStamp(ms)：{time}</div>
      <br/>
    </>
  );

}
