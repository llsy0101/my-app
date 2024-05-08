export default function Ball({n}) {
    const colorN = {
        'b0' : 'bg-rose-200',
        'b1' : 'bg-rose-300' ,
        'b2' : 'bg-rose-400' ,
        'b3' : 'bg-rose-500' ,
        'b4' : 'bg-rose-600'
    }
  return (
    <div className={`inline-flex w-16 h-16 
                    mx-2
                    justify-center items-center
                    font-bold rounded-full text-2xl
                    ${colorN["b"+ Math.floor(n/10)]} text-white`} >
      {n}
    </div>
  )
}
