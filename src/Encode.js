import React, { useState } from 'react';

export const ENCODE = () => {
  const [text, setText] = useState('-');

  const handleChange = (e) => {
    const encoded = btoa(e.target.value);
    setText(() => (encoded));
  }

  return (
    <>
      <div> [Text to Base64]</div>
      <input onChange={handleChange} type="text"></input>
      <div>エンコード結果：{text}</div>
      <br/>
    </>
  );
}
