import React from 'react'

import './Main.css'


const options = {
  year: 'numeric',
  month: 'short',
  day: 'numeric'
};

const Main = React.memo(({ messages, avatar, userName }) => {
  const handleDate = (date, time) => {
    const now = new Date()
    const today = Intl.DateTimeFormat('en-US').format(now)
    const timeToDate = new Date(date).getTime()

    if (timeToDate !== new Date(today).getTime()) {
      return Intl.DateTimeFormat('en-US', options).format(timeToDate)
    } else {
      return time
    }
  }

  React.useEffect(() => {
    document.querySelector('.main_wrapper').scrollTo(0, 999999)
  }, [messages])

  return (
    <main className='main'>
      <div className='main_wrapper'>
        {messages.map((message) => {
          const lastMessageFrom = messages.filter(item => !item.user).slice(-1)[0]

          return (
            <div
              key={message.time + message.text}
              className={`main_message ${message.user ? 'right' : ''}`}
            >
              <span className='main_message_text'>
                {message.text}
              </span>
                  <span className='main_message_date'>
                {handleDate(message.date, message.time)}
              </span>
              {
                Object.is(lastMessageFrom, message) && (
                  <img
                    src={avatar}
                    alt={userName}
                    className='main_message_image'
                  />
                )
              }
            </div>
          )
        })}
      </div>
    </main>
  )
})

export default Main
