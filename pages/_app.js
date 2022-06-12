import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Head from 'next/head'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  const [showChild, setShowChild] = useState()
  useEffect(() => {
    setShowChild(true)
  }, [])
  if (!showChild) {
    return null
  }
  return (
    <>
      <Head>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <header>
        <NavBar />
      </header>
      <Component {...pageProps} />
    </>
  )
}

export default App
