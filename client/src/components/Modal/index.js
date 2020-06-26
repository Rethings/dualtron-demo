import React, { Fragment } from 'react';
import { XCircle, CheckCircle } from 'react-feather';

function SuccessModal(props) {
  const { text, onOk } = props;

  return (
    <Fragment>
      <div className="h-2/4 w-full bg-green-500 flex flex-col items-center justify-center rounded">
        <CheckCircle color="white" size={50} />
        <h1 className="text-white font-bold mt-3">SUCCESS</h1>
      </div>
      <h1 className="h-1/4 py-2 px-3">{text}</h1>
      <div className="h-1/4 w-full flex items-center justify-center">
        <button onClick={onOk} className="w-1/3 bg-green-500 py-1 rounded text-white">OK</button>
      </div>
    </Fragment>
  )
}

function ErrorModal(props) {
  const { text, onOk } = props;

  return (
    <Fragment>
    <div className="h-2/4 w-full bg-red-500 flex flex-col items-center justify-center rounded">
      <XCircle color="white" size={50} />
      <h1 className="text-white font-bold mt-3">ERROR</h1>
    </div>
    <h1 className="h-1/4 py-2 px-3">{text}</h1>
    <div className="h-1/4 w-full flex items-center justify-center">
      <button onClick={onOk} className="w-1/3 bg-red-500 py-1 rounded text-white">OK</button>
    </div>
    </Fragment>
  )
}

function Modal(props) {
  const { className, children, type="default", text="", onClose, onOk } = props;

  return (
    <div className="absolute flex items-center justify-center left-0 top-0 w-full h-full z-10">
      <div className={`${ className } modal w-1/4 h-30vh min-h-30vh sm:w-11/12 md:w-3/4 lg:w-2/4 bg-white rounded-md z-10 flex flex-col items-center justify-between`}>
        {type === "default" && children}
        {type === "success" && <SuccessModal text={text} onOk={onOk} />}
        {type === "error" && <ErrorModal text={text} onOk={onOk} />}
      </div>

      <div onClick={onClose} className="absolute left-0 top-0 w-full h-full bg-gray-800 opacity-50" />
    </div>
  )
}

export default Modal;
