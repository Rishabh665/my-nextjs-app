"use client"

import React, { useEffect, useState } from 'react'

function BgcolorChanger() {
    const[bgColor,setBgColor] = useState("#ffffff");

  

    const handleColorchange = (e) => {
      setBgColor(e.target.value);
    };
    useEffect(() => {
      document.body.style.backgroundColor = bgColor;
    }, [bgColor]);

  return (
    <button color='black'>
        {"Choose Color: "}
        <input type="color" onChange={handleColorchange} />
    </button>
  )
}

export default BgcolorChanger;