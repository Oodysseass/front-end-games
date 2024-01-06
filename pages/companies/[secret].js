import Head from 'next/head'
import Error from 'next/error'
import React from 'react'
import { useState } from 'react'
import db from '@/utils/db'

import NavigationBar from '@/components/NavigationBar'
import CompaniesContainer from '@/components/CompaniesContainer'
import SearchCompanies from '@/components/SearchCompanies'

export const getServerSideProps = async ({ params }) => {
  const { secret } = params

  if (secret == process.env.ADMIN_SECRET) {
    const [rows] = await db.execute('SELECT * FROM company')
    return { props: { verified: true, secret: secret, data: rows } }
  }

  return { props: { verified: false } }
}

export default function Professionals({ verified, secret, data }) {
  if (!verified) return (<Error statusCode={401} />)

  const [filteredData, setFilteredData] = useState(data)

  const handleSearch = ({ name, startedBefore, startedAfter }) => {
    const filtered = data.filter((company) => {
      const nameMatch = !name || company.name.toLowerCase().includes(name.toLowerCase())

      const startedBeforeMatch = !startedBefore || (company.yearEST && company.yearEST <= startedBefore)

      const startedAfterMatch = !startedAfter || (company.yearEST && company.yearEST >= startedAfter)

      return nameMatch && startedBeforeMatch && startedAfterMatch
    })

    setFilteredData(filtered)
  }



  return (
    <div className='containerNotB'>
      <Head>
        <title>Professionals</title>
      </Head>

      <NavigationBar secret={secret} />
      <SearchCompanies onSearch={handleSearch} />
      <CompaniesContainer companies={filteredData} />
    </div>
  )
}
