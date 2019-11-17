import React from 'react';
import useResize from './useResize';

const TextCard = () => {
  const win = useResize();

  return (
    <div className='card'>
      <h2>TextCard</h2>
      <p>width: {win.width}</p>
      <p>height: {win.height}</p>
    </div>
  );
}

export default TextCard;
