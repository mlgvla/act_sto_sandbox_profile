import React from "react"

function Navbar({ profile }) {
  const { first_name, profile_pic_url } = profile

  return (
    <>
      <div className="navbar">
        <div>Active Storage User/Profile Demo</div>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <div>Hi, {first_name}</div>
          <img className="avatar" src={profile_pic_url} alt="" />
        </div>
      </div>
      <hr />
    </>
  )
}

export default Navbar
