import React from 'react';
import './Divider.scss';

export const Divider = ({text}: { text: string }) => {
  return (
    <div className="as__divider">
      <div className="as__divider_text">{text}</div>
    </div>
  );
};