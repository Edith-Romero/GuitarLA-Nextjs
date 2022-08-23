import Link from 'next/link'
import styles from '../styles/NoEncontrado.module.css'

const PaginaNoEncontrada = () => {
  return (
    <div className={ styles.no_encontrado}>
      <h1 className='heading'>Pagina No Encontrada</h1>
      <Link href= "/">Volver al inicio</Link>
    </div>
  )
}

export default PaginaNoEncontrada
