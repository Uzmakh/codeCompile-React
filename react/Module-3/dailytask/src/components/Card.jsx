import React from 'react'
import UserCard from './UserCard'

const Card = () => {
  return (
    <div>
          <h1>Hello Card Component</h1>
          <UserCard name="Ajay Suneja" profession="Software Engineer" />
          <UserCard name="" profession="DevOps Engineer"/>
    </div>
  )
}

export default Card
