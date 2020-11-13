import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

import user from './mockData.js'

import './App.css'


const options = {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: false,
}

function App () {
  const [text, setText] = React.useState('')
  const [messages, setMessages] = React.useState([])

  React.useEffect(() => {
    if (user.messages) {
      const sortMessages = user.messages.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      )
      setMessages(sortMessages)
    }

    const interval = setInterval(() => {
      const now = new Date()
      const randText = Math.random().toString(36)
      const time = Intl.DateTimeFormat('en-US', options).format(now)
      const date = Intl.DateTimeFormat('en-US').format(now)
      setMessages(prev => [...prev, { text: randText, time, date }])
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      <Header avatar={user.avatar} userName={user.userName}/>
      <Main avatar={user.avatar} messages={messages} userName={user.userName}/>
      <Footer text={text} setText={setText} setMessages={setMessages}/>
    </>
  )
}

export default App
