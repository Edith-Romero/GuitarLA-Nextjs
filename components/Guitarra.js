import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Guitarra.module.css'

const Guitarra = ({guitarra}) => {

    const {descripcion,imagen,nombre,precio,url}= guitarra.attributes
    const {name} = imagen.data.attributes

    // console.log(
    //     "Desde Guitarra", url
    // );

  return (
    <div className={styles.guitarra}>
      <Image layout='responsive' width={180} height = {350} src={name} alt={`Imagen de Guitarra ${nombre}`}/>
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
        <Link href={`/guitarras/${url}`}> 
            <a className={styles.enlace}>Ver Producto</a>
        </Link>
    </div>
    </div>

  )
}

export default Guitarra
