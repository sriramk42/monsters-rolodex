import React from 'react'
import Card from './Card'
import '../styles/CardList.css'

const CardList = ({monsters}) => {
  return (
    <div className='card-list'>
      {monsters.map(monster => {
        return <Card key={monster.id} monster={monster}/>
      })}
    </div>
  )
}

export default CardList