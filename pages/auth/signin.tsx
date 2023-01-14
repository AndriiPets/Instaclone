
import React from 'react'

import { getProviders, signIn } from 'next-auth/react'
import Header from '../../components/Header'

function SignIn({providers}:any) {
  return (
    <>

    <Header />
    <div className='flex flex-col items-center justify-center min-h-screen py-2 -mt-36 px-14 text-center'>
      <img className='w-80'
      src='https://links.papareact.com/ocw'></img>
      <p>App made for educational purposes only!</p>
      <div className='mt-40'>
      {Object.values(providers).map((provider:any) => (
        <div key={provider.name}>
          <button className='p-3 bg-blue-400 rounded-lg text-white' 
          onClick={() => signIn(provider.id ,{callbackUrl: '/'})}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
      </div>
    </div>
  </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers
    }
  }
}

export default SignIn
