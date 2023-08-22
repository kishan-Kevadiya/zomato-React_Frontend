import React from 'react'
import './filter.css'

const filter = [
    {
        name:'Filter',
        icon:<i className="material-symbols-outlined">tune</i>,
    },
    {
        name:'Rating :4.0',
        icon:'+',
    },
    {
        name:'Cuisines',
        icon:<i className="material-symbols-outlined">expand_more</i>,
    },
]

const Filter = () => {
  return <>
  {/* <div className="line"></div> */}
    <div className='Filter max-width'>
{
    filter.map((i)=>(
        <div className='mainn max-width' key={i.name}>
            <p>{i.name} <span>{i.icon}</span></p>
        </div>
    ))
}
    </div>
  </>
}

export default Filter