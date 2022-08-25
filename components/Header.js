import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'
import styles from '../styles/Header.module.css'

const Header = ({guitarras}) => {

  const router = useRouter()

  // console.log(
  //   "Este nos dice en que pagina estamos en este momento", router.pathname
  // );

  return (
    <header className={styles.header}>
      <div className="contenedor">
          <div className={styles.barra}>
            {/* AL dar click en la imagen me lleva a la pagina de inicio */}
              <Link href="/">
                <a>
                  {/*Aca automaticamente el src ubica la direccion en public no requiero colocar nada mas */}
                  <Image  width={400} height={100} src="/img/logo.svg"alt="Imagen Logo"/> 
                </a>
              </Link>
              {/* Creando los link de la barra de navegacion */}
              <nav className={styles.navegacion}>
                  <Link href="/">Inicio</Link>
                  <Link href="/nosotros">Nosotros</Link>
                  <Link href="/blog">Blog</Link>
                  <Link href="/tienda">Tienda</Link>
              </nav>
          </div>
            {guitarras && (
              <div className={styles.modelo}>
                <h2>Modelo {guitarras.attributes.nombre}</h2>
                <p>{guitarras.attributes.descripcion}</p>
                <p className={styles.precio}>${guitarras.attributes.precio}</p>
                <Link href={`/guitarras/${guitarras.attributes.url}`}>
                  <a className={styles.enlace}>
                    Ver producto
                  </a>
                </Link> 
              </div>
            )}
        </div>
        {router.pathname === '/' && (
          <div className = {styles.guitarra}>
              <Image layout='fixed' width={500} height={1200} src='/img/header_guitarra.png' alt="Imagen de Guitarra en header"
              />
          </div>
        )}
    </header>
  )
  }

  export default Header