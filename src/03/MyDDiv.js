import MyDiv2 from "./MyDiv2" ;
import { useState } from "react";


export default function MyDDiv(probs) {
  const [n, setN] = useState(0);

  const dname1 = 'vdiv1' ;
  const dname2 = 'vdiv2' ;
  const dname3 = 'vdiv3' ;
  let cnt = 0 ;

  const handleCount = () => {
    cnt = cnt + 1 ;
    setN(n + 1);
    console.log("handleCount = ", cnt);
  }



  return (
    <div className="flex flex-col p-5 m-10 justify-center items-center w-2/3 h-2/3 text-2xl bg-red-200 text-black " >
      <div className="w-full h-10 border p-5 m-5 flex justify-end items-center"> 
      <span className="inline-flex p-5 mx-5" onClick={handleCount}>
        💖
        </span>
      <span>
        {n}
      </span>
      </div>
      <div className="w-full">
      {dname1}
      </div>   
      <MyDiv2 dn1={dname1} dn2={dname2} dn3={dname3} />
    </div>




  )
}
