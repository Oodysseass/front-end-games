import Head from 'next/head'
import Error from 'next/error'
import { useRouter } from 'next/router'
import React from 'react'

import NavigationBar from '@/components/NavigationBar'

export const getServerSideProps = async ({ params }) => {
  const { secret } = params

  if (secret == process.env.ADMIN_SECRET) {
    return { props: { verified: true, secret: secret } }
  }

  return { props: { verified: false } }
}

export default function Pros({ verified, secret }) {
  if (!verified) return (<Error statusCode={401} />)

  return (
    <div className='containerNotB'>
      <Head>
        <title>Pros</title>
      </Head>

      <NavigationBar secret={secret}/>
    </div>
  )
}
