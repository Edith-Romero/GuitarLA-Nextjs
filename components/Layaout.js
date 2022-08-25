import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

const Layaout = ({children, pagina,guitarras}) => {
  return (
    <div>
        <Head>
            <title>GuitarLA - {pagina}</title>
            <meta name="description" content = "Sitio Web de venta de guitarras"/>
        </Head>
        <Header
          guitarras = {guitarras}
        />
        {children}
        <Footer/>
    </div>
  )
}

// Esto se hace porque en nostros tambien usamos guitarras y salta undefine por ende pasamos su valor a null para cuando no este sea pro default
Layaout.defauldProps = {
  guitarra: null
}

export default Layaout