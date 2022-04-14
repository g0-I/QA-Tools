import React, { useState } from 'react';

export const ENCODE = () => {
  const [text, setText] = useState('-');
  const [decodedText, setDecodedText] = useState('-');

  const handleChange = (e:any) => {
    setText(() => (btoa(e.target.value)));
  }

  const handleChange2 = (e:any) => {
    setDecodedText(() => (atob(e.target.value)));
  }

  return (
    <>
      <div> [Text to Base64]</div>
      <input onChange={handleChange} type="password"></input>
      <div>エンコード結果：{text}</div>
      <div> [Base64 to Text]</div>
      <input onChange={handleChange2} type="text"></input>
      <div>デコード結果：{decodedText}</div>
      <br/>
    </>
  );
}
