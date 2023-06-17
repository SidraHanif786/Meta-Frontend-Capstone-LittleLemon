import React from 'react'

const Button = ({name, className}) => {
  return (
    <span className={`bg-yellow py-[12px] px-[20px] text-[15px] font-medium duration-300 ease-in-out rounded-[15px] hover:bg-black hover:text-t-white cursor-pointer ${className || ''}`}>{name}</span>
  )
}

export default Button