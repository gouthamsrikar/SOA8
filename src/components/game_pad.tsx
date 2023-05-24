import React from 'react'
import ActionButton from './action_button'

type GamePadProps = {
 
    onUp: React.MouseEventHandler<HTMLButtonElement>
    onDown: React.MouseEventHandler<HTMLButtonElement>
    onLeft: React.MouseEventHandler<HTMLButtonElement>
    onRight: React.MouseEventHandler<HTMLButtonElement>

}

const GamePad = (props: GamePadProps) => {
    return (
        <div >
            <div className='flex justify-center' >
                <ActionButton onClick={props.onUp} text={"↑"} />
            </div>
            <div className='flex justify-center'>
                <ActionButton onClick={props.onLeft} text={"←"} />
                <ActionButton onClick={props.onDown} text={"↓"} />
                <ActionButton onClick={props.onRight} text={"→"} />
            </div>
        </div>
    )
}

export default GamePad