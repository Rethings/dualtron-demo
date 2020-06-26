import React from 'react';

function Toast(props) {
  const { text } = props;

  return (
    <span className="bg-green-500 w-48 py-1 absolute bottom-0 right-0 rounded text-white text-center">{ text }</span>
  )
}

export default Toast;
