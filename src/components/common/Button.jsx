import React from 'react'

const Button = ({name, className}) => {
  return (
    <span className={`${className || ''} py-[12px] px-[20px] text-[15px] font-medium duration-300 ease-in-out rounded-[15px] cursor-pointer `}>{name}</span>
  )
}

export default Button