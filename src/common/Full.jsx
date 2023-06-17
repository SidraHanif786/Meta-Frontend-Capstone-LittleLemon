import React from 'react';

const Full = ({ children, className }) => {
  return (
    <div className={`w-[100%] p-0 m-0 ${className || ''}`}>{children}</div>
  );
};

export default Full;
