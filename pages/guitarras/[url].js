import Image from 'next/image'
import Layaout from '../../components/Layaout'
import styles from '../../styles/Guitarra.module.css'

const  Producto = ({guitarra}) => {

    console.log("desde props", guitarra
    );

    const {descripcion,imagen,nombre,precio,}= guitarra.data[0].attributes
    const {name} = imagen.data.attributes

  return (
    <Layaout
        pagina={`Guitarra ${nombre}`}
    >
        <div className={styles.guitarra}>
            <Image layout='responsive' width={180} height = {350} src={name} alt={`Imagen de Guitarra ${nombre}`}/>
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>
            </div>
        </div>        
    </Layaout>
  )
}

export async function getServerSideProps({params: {url}}){

    const urlGuitarra = `${process.env.API_URL}/api/guitarras?filters[url][$eq]=${url}&populate=*`
    const respuesta = await fetch(urlGuitarra)
    const guitarra = await respuesta.json()

    const producto = guitarra.data.map(unidad => ({
        params:{ url: unidad.attributes.url}
    }))

    return{
        props:{
            guitarra
        }
    }
}

export default Producto
