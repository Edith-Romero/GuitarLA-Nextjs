import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

const Layaout = ({children, pagina}) => {
  return (
    <div>
        <Head>
            <title>GuitarLA - {pagina}</title>
            <meta name="description" content = "Sitio Web de venta de guitarras"/>
        </Head>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layaout