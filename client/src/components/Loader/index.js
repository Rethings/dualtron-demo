import React from 'react';

function Loader(props) {
  return (
    <div className="w-full h-full absolute flex justify-center items-center">
      <div className="loader h-20 w-20 ease-linear rounded-full border-8 border-t-8 border-gray-200 z-10" />

      <div className="w-full h-full absolute bg-gray-700 opacity-75" />
    </div>
  )
}

export default Loader;
