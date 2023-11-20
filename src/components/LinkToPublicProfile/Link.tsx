import React from 'react';

const Link: React.FC = () => {
  return (
    <a
      href="#"
      className="hover:underline"
      style={{ fontSize: '14px', color: '#3B755F' }}
    >
      Link to Public Profile
    </a>
  );
};

export default Link;
