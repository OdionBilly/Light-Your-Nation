import React from 'react'

export const Testimonia = ( {text, handleClick} ) => {
  return (
    <div>
      <button 
      onClick={handleClick}
      className="bg-[#2b2ba5] px-4 py-2 text-[#fff] cursor-pointer hover:bg-[#4f4fee]">
        {text}
      </button>
    </div>
  );
}
