import React from 'react'

type tileProps = {
  value: number
}

const Tile = (props: tileProps) => {
  return (
    <div className='h-16 w-16 text-white border-2 border-black rounded-xl flex justify-center items-center text-center m-2' style={{ backgroundColor: props.value === 0 ? "white" : `rgb(022,022,022)` }}>{props.value}</div>
  )
}

export default Tile