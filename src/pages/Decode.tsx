import React, { useState } from 'react';
import { Buffer } from 'buffer';

export const DECODE = () => {
  const [decodedText, setDecodedText] = useState('-');

  const Decode = (e : any) => {
    setDecodedText(() => (Buffer.from(e.target.value, 'base64').toString('ascii')));
  }

  return (
    <>
      <div> [デコード]</div>
      <input onChange={Decode} type="text"></input>
      <div>変換結果：{decodedText}</div>
      <br/>
    </>
  );
}

export default DECODE;
