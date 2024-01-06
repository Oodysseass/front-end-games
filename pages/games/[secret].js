import Head from 'next/head'
import Error from 'next/error'
import React from 'react'
import { useState } from 'react'
import db from '@/utils/db'

import NavigationBar from '@/components/NavigationBar'
import GameContainer from '@/components/GameContainer'
import SearchGames from '@/components/SearchGames'

export const getServerSideProps = async ({ params }) => {
  const { secret } = params

  if (secret == process.env.ADMIN_SECRET) {
    const [rows] = await db.execute('SELECT * FROM game')
    return { props: { verified: true, secret: secret, data: rows } }
  }

  return { props: { verified: false } }
}

export default function Games({ verified, secret, data }) {
  if (!verified) return (<Error statusCode={401} />)

  const [filteredData, setFilteredData] = useState(data)

  const handleSearch = ({ name, beforeYear, afterYear, genre }) => {
    const filtered = data.filter((game) => {
      const nameMatch = !name || game.name.toLowerCase().includes(name.toLowerCase())
  
      const beforeYearMatch = !beforeYear || game.year <= beforeYear
      const afterYearMatch = !afterYear || game.year >= afterYear
  
      const genreMatch = !genre || game.genre === genre
  
      return nameMatch && beforeYearMatch && afterYearMatch && genreMatch
    })

    setFilteredData(filtered)
  }

  return (
    <div className='containerNotB'>
      <Head>
        <title>Games</title>
      </Head>

      <NavigationBar secret={secret}/>
      <SearchGames onSearch={handleSearch}/>
      <GameContainer games={filteredData}/>
    </div>
  )
}
