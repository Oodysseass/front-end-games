import Head from 'next/head'
import Error from 'next/error'
import { useRouter } from 'next/router'
import React from 'react'

import NavigationBar from '@/components/NavigationBar'
import InfoSection from '@/components/info'

export const getServerSideProps = async ({ params }) => {
  const { secret } = params

  if (secret == process.env.ADMIN_SECRET) {
    return { props: { verified: true, secret: secret } }
  }

  return { props: { verified: false } }
}

export default function HomePage({ verified, secret }) {
  if (!verified) return (<Error statusCode={401} />)

  const router = useRouter()

  return (
    <div className='containerNotB'>
      <Head>
        <title>HomePage</title>
      </Head>

      <NavigationBar secret={secret}/>
      <InfoSection/>
    </div>
  )
}
