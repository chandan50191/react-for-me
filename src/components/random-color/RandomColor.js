import React, { useEffect, useState } from 'react'

function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
    }
    
    function handleCreateRandomHexColor(params) {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';

        for (let i = 0 ; i < 6 ; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }

        console.log(hexColor);
        setColor(hexColor);

    }

    function handleCreateRandomRgbColor(params) {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        setColor(`rgb(${r},${g},${b})`);
        console.log(`rgb(${r},${g},${b})`);
    }

    useEffect(() => {
        if (typeOfColor === 'rgb') handleCreateRandomRgbColor();
        else handleCreateRandomHexColor();
    },[typeOfColor])
  return (
    <div className='container' 
        style={{
            width: '100vw',
            height: '100vh',
            background: color
        }}>
        <button onClick={() => setTypeOfColor('hex')}>Generate hex color</button>
        <button onClick={() => setTypeOfColor('rgb')}>Gerate rgb color</button>
        <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate random colodivr</button>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            fontSize: '60px',
            margin: '50px',
            flexDirection: 'column',
            gap: '20px'
        }}>
            <h3>{typeOfColor === 'rgb' ? 'RGB color' : 'HEX Color'}</h3>
            <h1>{color}</h1>
        </div>
    </div>
  )
}

export default RandomColor