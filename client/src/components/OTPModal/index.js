import React, { Component } from 'react';

const Input = (props) => {
  const { onChange } = props;

  return (
    <input onChange={onChange} maxLength="1" className="w-1/6 px-1 py-2 mx-2 sm:mx-1 bg-gray-400 border-b-2 border-red-800 text-center " />
  )
};

class OTPModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: '',
    }
  }

  onChangeOTP = (e) => {
    this.setState({ otp: this.state.otp + e.target.value });
  }

  onSubmitOTP = () => {
    this.props.onSubmit(this.state.otp);
  }

  render() {
    const renderInputs = () => {
      let inputs = [];

      for(let i = 0; i < 6; i++) {
        inputs.push(<Input onChange={this.onChangeOTP} />);
      }

      return inputs;
    }

    return (
      <div className="absolute flex items-center justify-center left-0 top-0 w-full h-full z-10">
        <div className="w-1/4 h-30vh sm:w-11/12 md:w-3/4 bg-white rounded-md z-10 flex flex-col justify-around items-center text-black p-2">

          <div className="text-center px-5">
            We have sent an OTP to your registered mobile number. Please input the code here to continue disabling your vehicle.
          </div>

          <div className="flex px-5">
            {renderInputs()}
          </div>

          <button onClick={this.onSubmitOTP} className="px-4 py-2 bg-red-700 hover:bg-red-600 rounded text-white">Submit</button>
        </div>

        <div onClick={this.props.onClose} className="absolute left-0 top-0 w-full h-full bg-gray-800 opacity-50" />
      </div>
    )
  }
}

export default OTPModal;
