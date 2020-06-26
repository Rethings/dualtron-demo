import React, { Component } from 'react';

import Loader from '../Loader';
import Modal from '../Modal';


const elemRefs = [];

const Input = (props) => {
  const { onChange, autoTab, index } = props;
  const ref = React.createRef();
  elemRefs.push(ref);

  return (
    <input
    ref={ref}
    onChange={onChange}
    index={index}
    onKeyUp={autoTab}
    maxLength={1}
    pattern="\d*"
    className="w-1/6 px-1 py-2 mx-2 sm:mx-1 bg-gray-400 border-b-2 border-red-800 text-center " />
  )
};

class OTPModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: '',
      isLoading: false,
    }
  }

  onChangeOTP = (e) => {
    this.setState({ otp: e.target.value });
  }

  onSubmitOTP = () => {
    this.setState({ isLoading: true });

    setTimeout(() => {
      this.props.onSubmit(this.state.otp);
    }, '5000');
  }

  autoTab = e => {
    const BACKSPACE_KEY = 8;
    const DELETE_KEY = 46;

    let tabindex = e.target.getAttribute("index") || 0;
    tabindex = Number(tabindex);

    let elem = null;
    if (e.keyCode === BACKSPACE_KEY) {
      elem = tabindex > 0 && elemRefs[tabindex - 1];
    } else if (e.keyCode !== DELETE_KEY) {
      elem = tabindex < elemRefs.length - 1 && elemRefs[tabindex + 1];
    }

    if (elem) {
      elem.current.focus();
    }
  };

  inputs = Array.from({ length: 6 }, (element, key) => (
    <Input key={key} index={key} onChange={this.onChangeOTP} autoTab={this.autoTab} />
  ))

  render() {
    return (
      <Modal
        className="justify-around items-center py-3 px-1 md:p-5"
        onClose={this.props.onClose}
      >
        <div className="text-center sm:px-2 px-5 mb-5">
          We have sent an OTP to your registered mobile number. Please input the code here to continue disabling your vehicle.
        </div>

        <input onChange={this.onChangeOTP} placeholder="6-digits" className="w-3/5 rounded px-1 py-2 text-center bg-gray-400 border-b-2 border-red-800" />
        <button onClick={this.onSubmitOTP} className="px-4 py-2 bg-red-700 hover:bg-red-600 rounded text-white my-2">Submit</button>

        {this.state.isLoading && <Loader />}
      </Modal>
    )
  }
}

export default OTPModal;
