import '../styles/globals.css'
import Nav from './componet/nav'

function MyApp({ Component, pageProps }) {
  return <>
  <Nav></Nav>
  <Component {...pageProps} />
  </>
}

export default MyApp
