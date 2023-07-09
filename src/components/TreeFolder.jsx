import React, { useState } from 'react'
import { SingleBar } from './SingleBar'

export const TreeFolder = (props) => {
    const {name, children,  id} = props
    const [isExpanded, setIsExpanded] = useState(false)
  return (
  <>
    <div data-folderId={id} className='border h-12 border-solid rounded flex items-center justify-start my-3 relative'>
        <div className='h-full w-10 bg-slate-300 flex justify-center items-center'>
        <div className='h-1/2 w-1/2 bg-white rounded'></div>
        </div>
        <p className='mx-3'>{name}</p>
        { !isExpanded?
        <p className='p-1 bg-slate-300 h-1/2 flex items-center rounded justify-center cursor-pointer' onClick={() => setIsExpanded(true)}>{'>'}</p>
        :
        <p className='p-1 px-2 bg-slate-300 h-1/2 flex items-center rounded justify-center cursor-pointer' onClick={() => setIsExpanded(false)}>{'v'}</p>
        }
        {/* children && isExpanded && children.map((c) => <SingleBar key={c.name} data={c.name} className='m-4'/>) */}
     </div>
    {children &&isExpanded  && <div className={`m-4 top-6 w-10/12 z-20 `}>{children}</div>}
  </>
  )
}
