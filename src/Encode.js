import React, { useState } from 'react';

export const ENCODE = () => {
  const [text, setText] = useState('[ここにリアルタイムで変換されます]');

  const handleChange = (e) => {
    const encoded = btoa(e.target.value);
    setText(() => (encoded));
  }

  return (
    <>
      <div> [Text to Base64]</div>
      <input onChange={handleChange} type="password"></input>
      <div>エンコード結果：{text}</div>
      <br/>
    </>
  );
}
