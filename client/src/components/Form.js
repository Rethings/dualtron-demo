import React, {Component} from 'react';

export const Label = (props) => {
  return (
    <label
      style={props.style}
      for={props.labelFor}
      className="text-gray-600 mb-2">
      {props.children}
    </label>
  )
}

export const Input = (props) => {
  return (
    <input
      style={props.style}
      placeholder={props.placeholder}
      type={props.type}
      className="bg-gray-200 h-10 w-full p-1 px-2 border-gray-400 border-solid border rounded " />
  )
}

export const FormGroup = (props) => {
  return (
    <div
      style={props.style}
      className={`${props.className} mb-4 `}>
      {props.children}
    </div>
  )
}

export const Submit = (props) => {
  return (
    <input
      style={props.style}
      onClick={props.onClick}
      type="submit"
      value={props.children}
      className={props.className} />
  )
}

export const Form = (props) => {
  return (
    <form className={props.className}>{props.children}</form>
  )
}
