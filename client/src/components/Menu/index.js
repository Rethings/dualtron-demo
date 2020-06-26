import React, { Component } from 'react';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    return (
      <div>
        <div className="flex w-12 h-12 flex-col justify-between px-1 py-3 cursor-pointer group">
          <div className="h-1 bg-gray-900 w-full group-hover:bg-gray-700" />
          <div className="h-1 bg-gray-900 w-1/2 group-hover:bg-gray-700" />
          <div className="h-1 bg-gray-900 w-2/3 group-hover:bg-gray-700" />
        </div>
      </div>
    )
  }
}

export default Menu;
