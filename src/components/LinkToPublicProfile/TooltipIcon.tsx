import React from 'react';

const TooltipIcon: React.FC = () => {
  return (
    <div
      className="flex items-center justify-center bg-white border rounded-full h-2.5 w-2.5"
      style={{ borderColor: '#3B755F' }}
    >
      <span
        className="text-xs font-bold"
        style={{
          color: '#3B755F',
          lineHeight: '20px',
          fontSize: '5.5px',
          fontFamily: 'Cabin, sans-serif',
        }}
      >
        i
      </span>
    </div>
  );
};

export default TooltipIcon;
