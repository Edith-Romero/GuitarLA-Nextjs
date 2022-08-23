import Link from 'next/link'
import styles from '../styles/Footer.module.css'


const Footer = () =>{

    return(
        <footer className={styles.footer}>
            <div className={`contenedor ${styles.contenido}`}>
                <nav className={styles.navegacion}>
                    <Link href="/">Inicio</Link>
                    <Link href="/nosotros">Nosotros</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/tienda">Tienda</Link>
                </nav>
                <p>Todos los derechos reservados <span> --- Sitio web creado por &copy; Edith Romero</span></p>
            </div>
        </footer>
    )
}
export default Footer