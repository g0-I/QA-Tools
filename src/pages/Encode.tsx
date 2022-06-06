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
      <div>[エンコード]</div>
      <input onChange={Encode} type="password"></input>
      <div>変換結果：{encodedText}</div>

      <div> [デコード]</div>
      <input onChange={Decode} type="text"></input>
      <div>変換結果：{decodedText}</div>
      <br/>
    </>
  );
}
