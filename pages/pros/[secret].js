import Head from 'next/head'
import Error from 'next/error'
import React from 'react'
import { useState } from 'react'
import db from '@/utils/db'

import NavigationBar from '@/components/NavigationBar'
import SearchPros from '@/components/SearchPros'
import ProsContainer from '@/components/ProsContainer'

export const getServerSideProps = async ({ params }) => {
  const { secret } = params

  if (secret == process.env.ADMIN_SECRET) {
    const [rows] = await db.execute('SELECT * FROM professional')
    return { props: { verified: true, secret: secret, data: rows } }
  }

  return { props: { verified: false } }
}

export default function Professionals({ verified, secret, data }) {
  if (!verified) return (<Error statusCode={401} />)

  const [filteredData, setFilteredData] = useState(data)

  const handleSearch = ({ name, startedBefore, startedAfter }) => {
    const filtered = data.filter((professional) => {
      const nameMatch = !name || professional.stageName.toLowerCase().includes(name.toLowerCase())
  
      const startedBeforeMatch = !startedBefore || (professional.playingSince && professional.playingSince <= startedBefore)
  
      const startedAfterMatch = !startedAfter || (professional.playingSince && professional.playingSince >= startedAfter)
  
      return nameMatch && startedBeforeMatch && startedAfterMatch
    })
  
    setFilteredData(filtered)
  }

  return (
    <div className='containerNotB'>
      <Head>
        <title>Professionals</title>
      </Head>

      <NavigationBar secret={secret}/>
      <SearchPros onSearch={handleSearch}/>
      <ProsContainer pros={filteredData}/>
    </div>
  )
}
