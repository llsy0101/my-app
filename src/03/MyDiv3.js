

export default function MyDiv3(probs) {
  return (
    <div className="flex flex-col p-5 m-10 w-3/4 h-3/4 bg-red-400 text-black" >
       {`${probs.dn1} > ${probs.dn2} > ${probs.dn3}`} 
    </div>
  )
}
