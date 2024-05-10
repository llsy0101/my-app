export default function ButtonC({caption, bcolor, handleClick}) {

    const colorB = {
        'red' : 'bg-red-400',
        'orange' : 'bg-orange-500'
    }

    const colorBHover = {
        'red' : 'hover:bg-red-500',
        'orange' : 'hover:bg-orange-800'
    }


  return (
    <button className={`inline-flex px-2 py-3
                       rounded-md
                       justify-center items-center
                       text-sm
                       text-white font-bold
                       ${colorB[bcolor]}
                       ${colorBHover[bcolor]}`}
                       onClick={handleClick}>
                        
      {caption}
    </button>
  )
}
