import React from 'react'
import salad from "../../images/greeksalad.jpg";
import star from "../../images/star.jpg";

const CustomerCard = ({className, img, name, des}) => {
  return (
    <div className={`${className||''} sm:w-1/3 md:w-1/5 md:h-[500px] shadow-lg bg-[#e9e9e900] mb-[30px] sm:h-[460px] `} >
        <img className="w-[] " src={img} alt="" />
        <div className='px-[20px] pt-[20px] '>

        <h1 className="font-markazi text-[22px] font-bold leading-6">{name}</h1>
        <div className='flex'>
            <img className='w-[15px]'  src={star} alt="" />
            <img className='w-[15px]'  src={star} alt="" />
            <img className='w-[15px]'  src={star} alt="" />
            <img className='w-[15px]'  src={star} alt="" />
            <img className='w-[15px]'  src={star} alt="" />
        </div>
        <p className="text-[#7e7e7e] mb-[25px] h-[128px] pt-[15px] sm:text-[12px] md:text-[14px] ">{des}</p>
        </div>
    </div>
  )
}

export default CustomerCard