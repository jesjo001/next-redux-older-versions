import { AuthWrapper } from '../redux/AuthWrapper'
import { ReduxProvider } from '../redux/provider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ReduxProvider>
      <AuthWrapper>
      <Component {...pageProps} />
      </AuthWrapper>
    </ReduxProvider>
  )
}

export default MyApp
