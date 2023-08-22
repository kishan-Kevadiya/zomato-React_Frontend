import React from 'react'
import './rastro.css'
import CardItem from './cardColl/CardItem'

const rastro = ({item,name}) => {
  return <div className='col-main max-width'>
    <h1 className="col-tittle" key={1}>{name}</h1>
    <div className="col-grid">
      {
        item.map((rastro)=>{
          return <CardItem rastro={rastro}/>
        })
      }
    </div>
  </div>
  
}

export default rastro