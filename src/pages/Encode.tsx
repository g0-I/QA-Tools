import React, { useState } from 'react';
import { Buffer } from 'buffer';

export const ENCODE = () => {
  const [encodedText, setEncodeText] = useState('-');

  const Encode = (e : any) => {
    setEncodeText(() => (Buffer.from(e.target.value).toString('base64')));
  }

  return (
    <>
      <div>[エンコード]</div>
      <input onChange={Encode} type="password"></input>
      <div>変換結果：{encodedText}</div>
    </>
  );
}

export default ENCODE;
