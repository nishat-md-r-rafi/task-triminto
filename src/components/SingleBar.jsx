import React, { useState } from 'react'

export const SingleBar = (props) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const {data} = props;
  return (
    <div>
    <div className='border h-12 border-solid rounded flex items-center justify-start my-3'>
        <div className='h-full w-10 bg-slate-300 flex justify-center items-center'>
        <div className='h-1/2 w-1/2 bg-white rounded'></div>
        </div>
        <p className='mx-3'>{props?.name}</p>
        { !isExpanded?
        <p className='p-1 bg-slate-300 h-1/2 flex items-center rounded justify-center cursor-pointer' onClick={() => setIsExpanded(true)}>{'>'}</p>
        :
        <p className='p-1 px-2 bg-slate-300 h-1/2 flex items-center rounded justify-center cursor-pointer' onClick={() => setIsExpanded(false)}>{'v'}</p>
        }
    </div>
    </div>
  )
}
