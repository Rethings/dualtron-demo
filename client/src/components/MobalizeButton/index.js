import React, { Component, Fragment } from 'react';

import motor_off from '../../assets/motor_off.png';
import motor_on from '../../assets/motor_on.png';

import OTPModal from './OTPModal';

import Tooltip from '../Tooltip';
import Modal from '../Modal';

class CustomButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: "",
      isImmobilized: false,
      isModalOpen: false,
      isTooltipShown: false,
      success: false,
      error: false,
    }

    this.onSubscribe = this.onSubscribe.bind(this);
  }

  componentWillMount() {
    window.mq.subscribe('jms-vt0git1/immobilize', this.onImmobilize);
  }

  onOpenModal = () => {
    if(this.state.isImmobilized) {
      this.setState({ isImmobilized: false });
      this.onPublish(false);
    } else {
      this.setState({ isModalOpen: true });
    }
  }

  onCloseModal = () => {
    this.setState({ isModalOpen: false })
  }

  onSubscribe = (message) => {

  }

  onPublish = (status) => {
    window.mq.publish('jms-vt0git1/immobilize', status);
  }

  onSubmit = (otp) => {
    if(otp === "898989") {
      this.setState({
        isImmobilized: true,
        isModalOpen: false,
        success: true,
      })
      this.onPublish(true);
    } else {
      this.setState({
        isModalOpen: false,
        error: true,
      })
    }
  }

  onOk = () => {
    this.setState({
      success: false,
      error: false,
    })
  }

  setToolTip = (isShown) => {
    this.setState({
      isTooltipShown: isShown
    })
  }

  render() {
    const { isImmobilized } = this.state;

    return (
      <Fragment>
        <button onMouseEnter={() => this.setToolTip(true)} onMouseLeave={() => this.setToolTip(false)} onClick={this.onOpenModal} className={`${isImmobilized ? "bg-green-500 hover:bg-green-400" : "bg-red-500 hover:bg-red-400"} sm:w-16 sm:h-16 w-20 h-20 flex items-center justify-center absolute bottom-0 right-0 m-20 rounded-full sm:mx-auto sm:left-0 sm:mb-10 shadow-lg`}>
          <div>
            <img className="h-16 w-16 sm:h-12 sm:w-12" alt="" src={isImmobilized ? motor_on : motor_off}/>
          </div>

          {this.state.isTooltipShown &&  <Tooltip text={isImmobilized ? "Mobilize" : "Immobilized"} />}
        </button>

        {this.state.isModalOpen && <OTPModal onClose={this.onCloseModal} onSubmit={this.onSubmit} />}
        {this.state.success && <Modal type="success" text="Successfully Immobilized" onOk={this.onOk} />}
        {this.state.error && <Modal type="error" text="There's a problem Immobilizing Vehicle" onOk={this.onOk} />}
      </Fragment>
    )
  }
}

export default CustomButton;
