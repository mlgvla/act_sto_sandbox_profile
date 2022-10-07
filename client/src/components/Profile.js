import React from 'react'

function Profile({profile}) {

  return (
    <div>
       {profile.first_name}
       <img src={profile.profile_pic_url} alt={profile.first_name} height="400" width="auto"/>
    </div>
  )
}

export default Profile