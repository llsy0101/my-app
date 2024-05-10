import fooddata from './fooddata.json' ;
import ButtonC from "../ui/ButtonC" ;
import FoodCard from './FoodCard';
import { useState } from 'react';

export default function FoodMain() {

    const [c1List, setc1List] = useState([]);

    let c1 =  fooddata.map(item => item['운영주체 분류']) ;
    c1 = new Set(c1) ;
    c1 = [...c1] ;
  

    const handleC1 = (c) => {
        console.log(c);
        let tm = fooddata.filter(item => item['운영주체 분류'] === c)
                         .map(item => <FoodCard data={item} key={item["사업장명"]} />)
                         setc1List(tm);
        console.log(tm);
    }
    const c1Bts = c1.map(item =>
                          <ButtonC caption={item}
                                   key={item}
                                   bcolor={'red'}
                                   handleClick= {() => handleC1(item)} />
    ) ;

    


    // let c1List =  fooddata.map(item => <FoodCard key={item} data={item} />) ;


  return (
    <div className='flex flex-col w-full h-full
                    justify-start items-center'>
      <div className='w-full
                      my-2  
                      grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-1
                      justify-between items-center'>
       {c1Bts}
      </div>
      <div className="w-full grid grid-cols-2 gap-4">
        {c1List}
     </div>
    </div>
  )
}
