import React, { useState } from 'react';

const Checkbox: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="ml-auto checkbox-container">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        className={`form-checkbox h-5 w-5 rounded ${
          isChecked ? 'bg-custom-green checkbox-checked' : ''
        }`}
        style={{
          appearance: 'none',
          borderWidth: isChecked ? '0' : '3.5px',
          borderColor: isChecked ? 'transparent' : '#212121',
        }}
      />
    </div>
  );
};

export default Checkbox;
