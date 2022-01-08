import React from 'react';

const Button: React.FC<{ onClick: () => void; children: any }> = ({
  onClick,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      style={{ padding: '15px', backgroundColor: 'pink', fontSize: '16px' }}
    >
      {children}
    </button>
  );
};
export default Button;
