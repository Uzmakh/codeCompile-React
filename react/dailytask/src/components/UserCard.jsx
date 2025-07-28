import React from 'react'

function UserCard({ name = "Guest user", profession }) {
    // console.log(props);
    // const { name, profession } = props;
    const newName = name || "Guest !";
  return (
    <div style={{border:'1px solid grey',padding: '12px',marginBottom:'8px'}}>
          <h2>user card</h2>
          <h3>{newName}</h3>
          <h3>{profession}</h3>
    </div>
  )
}

export default UserCard
