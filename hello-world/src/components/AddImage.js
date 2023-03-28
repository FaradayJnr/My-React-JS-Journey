import React from 'react'

const user = {
    name:'Ransford',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,

};

function AddImage() {
  return (
    <>
    <h1>{user.name}</h1>
    <img
      className="avatar"
      src={user.imageUrl}
      alt={'Photo of ' + user.name}
      style={{
        width: user.imageSize,
        height: user.imageSize
      }}
    />
  </>
  )
}

export default AddImage
