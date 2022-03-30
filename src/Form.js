import React, { useState } from 'react';

export const ID = () => {
  const [id, setId] = useState('')

  const handleChange = (e) => {
    setId(() => e.target.value);
  }

  const encoding = () => {
    const encoded = btoa(id);
    alert("エンコード結果：" + encoded);
  }

  return (
    // <label>
    // ID： 　
    //   <input type="text" name="id" value={id} />
    // </label>
    <>
      <div> ID:PASSの形式で入力</div>
      <input value={id} onChange={handleChange} type="text" />
      <button onClick={encoding}>encoding to base64</button>
    </>
  );
}

// export const PASS = () => {
//   const [pass, setPass] = useState('')

//   const handleChange = (e) => {
//     setPass(() => e.target.value)
//   }

//   return (
//     <label>
//     PASS：
//       <input type="password" name="pass" value={pass} />
//     </label>
//   );
// }

// export const BUTTON = () => {
//   const [txt, setTxt] = useState("test");
//   return (
//     <button className='Button' onClick={() => setTxt(txt + ":")}>
//     encoding to base64
//   </button>  
//   );
// }


