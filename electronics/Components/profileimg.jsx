import React from 'react'

export const Profileimg = ({puser, size}) => {
  return (
    <img
      src={puser.avatar}
      alt="User Avatar"
      className="rounded-circle shadow-lg"
      style={{
        // width: "120px",
        width: size,
        height: size,
        border: "3px solid #00e0ff",
        boxShadow: "0 0 20px rgba(0,224,255,0.6)",
      }}
    />
  )
}
