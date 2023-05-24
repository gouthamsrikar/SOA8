import React from 'react'

type ActionButtonProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>
    text: any
}

const ActionButton = (props: ActionButtonProps) => {
    return (
        <button onClick={props.onClick} className='h-16 w-16 rounded-xl border-2 border-black text-center m-2 flex justify-center items-center'>{props.text}</button>
    )
}

export default ActionButton