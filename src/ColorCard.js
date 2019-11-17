import React from 'react';
import useResize from './useResize';

const ColorCard = () => {
  const win = useResize();

  return (
    <div className={win.width > 1000 ? 'bg-red card' : 'bg-yellow card'}>
      <h2>ColorCard</h2>
      {win.width > 500 ? '宽度大于1000px' : '宽度小于等于1000'}
    </div>
  );
}

export default ColorCard;
