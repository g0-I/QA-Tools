import React, { useState } from 'react';

export const UNIX = () => {

  const unix = () => {
    const unixtime = 1646916281225;
    let dateTime = new Date(unixtime * 1000);
    console.log(dateTime.toString());
  }

  return (
    <>
      <div>[UNIX Timestamp to Date] </div>
      <textarea></textarea>
    </>
  );
}
