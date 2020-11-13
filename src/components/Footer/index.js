import React from 'react'

import './Footer.css'


const options = {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: false,
};

const Footer = React.memo(({ text, setText, setMessages }) => {
  const onChangeHandler = (e) => {
    setText(e.target.value)
  }

  const onSend = (e) => {
    if (e.key === 'Enter' && text.trim().length) {
      const now = new Date();
      const time = Intl.DateTimeFormat('en-US', options).format(now)
      const date = Intl.DateTimeFormat('en-US').format(now)
      setMessages((prev) => [...prev, { text, time, date, user: true }])
      setText('')
    }
  }

  const onClickBtn = () => {
    const now = new Date();
    const time = Intl.DateTimeFormat('en-US', options).format(now)
    const date = Intl.DateTimeFormat('en-US').format(now)
    setMessages((prev) => [...prev, { text, time, date, user: true }])
    setText('')
  }

  return (
    <footer className='footer'>
      <input
        value={text}
        onChange={onChangeHandler}
        onKeyDown={onSend}
        placeholder='Type a message...'
        className='footer_input'
      />
      <button
        onClick={onClickBtn}
        disabled={!text.trim()}
        className='footer_button'
      >
        Send
      </button>
    </footer>
  )
})

export default Footer
