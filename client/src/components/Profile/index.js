import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render(){
    return (
      <div>
        <div className="rounded-full bg-green-500 cursor-pointer w-12 h-12 sm:w-10 sm:h-10" />
      </div>
    )
  }
}

export default Profile;
