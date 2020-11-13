import React from 'react'

import './Header.css'

const Header = React.memo(({avatar, userName}) => {
  return (
    <header className='header'>
      <img src={avatar} alt={userName} className='header_image' />
      <span className='header_name'>
        {userName}
      </span>
    </header>
  )
})

export default Header
