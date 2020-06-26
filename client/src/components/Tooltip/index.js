import React from 'react';

function Tooltip(props) {
  const { text, position = "left" } = props;

  const tooltipPos = () => {
    switch (position) {
      case "left":
        return { left: "-155%" }
      case "right":
        return { right: "-155%" }
      default:
        return { left: "-155%" }
    }
  }

  return (
    <span style={ tooltipPos() } className="absolute z-10 py-1 px-4 bg-black text-white text-center mr-10 rounded">{ text }</span>
  )
}

export default Tooltip;
