import React, { useState } from 'react';
import { Buffer } from 'buffer';

export const ENCODE = () => {
  const [encodedText, setEncodeText] = useState('-');
  const [decodedText, setDecodedText] = useState('-');

  const Encode = (e : any) => {
    setEncodeText(() => (Buffer.from(e.target.value).toString('base64')));
  }

  const Decode = (e : any) => {
    setDecodedText(() => (Buffer.from(e.target.value, 'base64').toString('ascii')));
  }

  return (
    <>
      <div> [Text to Base64]</div>
      <input onChange={Encode} type="password"></input>
      <div>エンコード結果：{encodedText}</div>
      
      <div> [Base64 to Text]</div>
      <input onChange={Decode} type="text"></input>
      <div>デコード結果：{decodedText}</div>
      <br/>
    </>
  );
}
