import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter-Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello World</h1>

      <main>
        
        <Sidebar />

        {/* Feed */}

        {/* Widgets */}

      </main>

    </div>
  )
}

export default Home
