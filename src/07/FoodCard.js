import bank from './img/bank.png' ;
import busan from './img/busan.png' ;
import market from './img/market.png' ;

import { useState } from 'react';


export default function FoodCard({data}) {
    const [isShow, setIsShow] = useState(false) ;
    const handleShow = () => {
        setIsShow(!isShow);
    }



  return (
    <div className='flex w-full h-40
                    justify-center items-start my-10 '>
      <div className='w-1/4 h-80  
                      justify-center items-start'>
      <img src={data["구분"] === "광역지원센터" ? busan :
                 data["구분"] === "기초푸드뱅크" ? bank : market} />
      </div>
      <div className='flex flex-col w-3/4
                      justify-start items-start mx-5'>
        <div className='my-5'>
           <h1 className='text-2xl text-black font-bold'>
            {data["사업장명"]}
            </h1>
           <h2 className='text-xl text-black font-bold'>
            {data["운영주체명"]}
            </h2>
           <p className='text-sm text-gray-700 font-bold'>
            {data["사업장 소재지"]}
            </p>
        </div>
        <div className='w-full p-2 h-10 bg-rose-300 rounded-lg'
             onClick={handleShow}>
            { isShow && <p className='text-black font-bold'>
               📞 {data["연락처(대표번호)"]}
                </p>
               }
        </div>
      </div>
    </div>
  )
}
