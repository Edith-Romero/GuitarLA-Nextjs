import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Header.module.css'

const Header = () => {
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
        </div>
    </header>
  )
}

export default Header