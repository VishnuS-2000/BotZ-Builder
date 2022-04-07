import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {AuthContextProvider} from "../auth"
import {useRouter} from "next/router"

import ProtectedRoute from "../protected"


const noAuthRequired=["/","/login","/signup"]

function MyApp({ Component, pageProps }: AppProps) {

  const router=useRouter()

  return (<AuthContextProvider>

    {noAuthRequired.includes(router.pathname)?  <Component {...pageProps} />:
    <ProtectedRoute>
      <Component {...pageProps} />
      </ProtectedRoute>
    }


  </AuthContextProvider>
  )
}

export default MyApp
