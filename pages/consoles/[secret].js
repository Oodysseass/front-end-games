import Head from 'next/head'
import Error from 'next/error'
import React from 'react'
import { useState } from 'react'
import db from '@/utils/db'

import NavigationBar from '@/components/NavigationBar'
import ConsolesContainer from '@/components/ConsolesContainer'
import SearchConsoles from '@/components/SearchConsoles'

export const getServerSideProps = async ({ params }) => {
  const { secret } = params

  if (secret == process.env.ADMIN_SECRET) {
    const [rows] = await db.execute('SELECT * FROM console')
    return { props: { verified: true, secret: secret, data: rows } }
  }

  return { props: { verified: false } }
}

export default function Professionals({ verified, secret, data }) {
  if (!verified) return (<Error statusCode={401} />)

  const [filteredData, setFilteredData] = useState(data)

  const handleSearch = ({ name, startedBefore, startedAfter, companyName }) => {
    const filtered = data.filter((console) => {
      const nameMatch = !name || console.name.toLowerCase().includes(name.toLowerCase())

      const startedBeforeMatch = !startedBefore || (console.year && console.year <= startedBefore)

      const startedAfterMatch = !startedAfter || (console.year && console.year >= startedAfter)

      const companyNameMatch = !companyName || console.company_name?.toLowerCase().includes(companyName.toLowerCase())

      return nameMatch && startedBeforeMatch && startedAfterMatch && companyNameMatch
    })

    setFilteredData(filtered)
  }

  return (
    <div className='containerNotB'>
      <Head>
        <title>Consoles</title>
      </Head>

      <NavigationBar secret={secret} />
      <SearchConsoles onSearch={handleSearch} />
      <ConsolesContainer consoles={filteredData} />
    </div>
  )
}
