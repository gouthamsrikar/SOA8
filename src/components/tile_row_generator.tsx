import React from 'react'
import Tile from './tile'

type TileRowGeneratorProps = {
  values: number[]
}

const TileRowGenerator = (props: TileRowGeneratorProps) => {
  return (
    <div className='flex justify-center'>
      {props.values.map((value, index) => <Tile key={index} value={value}></Tile>)}
    </div>
  )
}

export default TileRowGenerator