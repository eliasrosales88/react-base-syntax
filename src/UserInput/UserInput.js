import React from 'react'

 const UserInput = ( props ) => {
   const inputStyle = {
    border: '2px solid black',
    backgroundColor: 'lightgray',
    color: 'black',
    width: '60%',
    margin: ' 30px 20%',
    
   }
  return (
    <div>
      <input style={inputStyle} type='text' name='text' onChange={props.change} value={props.username} />         
    </div>
  )
}

export default UserInput;
