import React from "react";

export const BarsSvg = ({ action }: { action: () => void }) => {
  return (
    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={action}>
      <path d="M26.668 9.83594L5.33463 9.83594" stroke="#B8860B" strokeWidth="2" strokeLinecap="round" />
      <path opacity="0.5" d="M26.668 16.5L5.33463 16.5" stroke="#B8860B" strokeWidth="2" strokeLinecap="round" />
      <path d="M26.668 23.1641L5.33463 23.1641" stroke="#B8860B" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};
