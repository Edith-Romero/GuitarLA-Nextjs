import Link from 'next/link'
import Image from 'next/image'
import {formatearFecha} from '../helpers' 
import styles from '../styles/Entrada.module.css'

const Entrada = ({entrada}) => {
  const {id} = entrada
  const {titulo,resumen,publishedAt,url} = entrada.attributes
  const {name} = entrada.attributes.imagen.data.attributes

  // console.log(entrada.attributes);
  // console.log(entrada.attributes.imagen);
  // console.log(entrada.attributes.imagen.data.attributes);
  // console.log(entrada.attributes.imagen.data.attributes.name);
  


  return (
    <article>
      <Image layaout = 'responsive' width = {800} height= {600} src={name} alt={`imagen block ${titulo}`}/>
      <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.resumen}>{resumen}</p> 
            <Link href={`/blog/${url}`}>
              <a className={styles.enlace}>Leer Entrada</a>
            </Link>
      </div>
    </article>
  )
}

export default Entrada