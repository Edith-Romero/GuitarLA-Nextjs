import { useEffect, useState } from "react"
import Layout from "../../components/Layout"
import Image from "next/image"
import { formatearFecha } from "../../helpers"
import styles from "../../styles/Entrada.module.css"

const EntradaBlog = ({entrada}) => {

  const {titulo,publishedAt, contenido, imagen, url} = entrada.data[0].attributes;
  const {name} = imagen.data.attributes;

  return (
    <Layout
      pagina={titulo}
    >
        <main className='contenedor'>
            <h1 className='heading'>{titulo}</h1>
               <article className={styles.entrada}>
                <Image layaout = 'responsive' width = {800} height= {600} src={name} alt={`imagen entrada ${titulo}`}/>
                <div>
                    <p  className= {styles.fecha}>{formatearFecha(publishedAt)}</p>
                    <p className={styles.texto}>{contenido}</p>
                </div>
            </article>
        </main>
    </Layout>
    
  )
}

// Esta sintaxis permite a next compliar el proyecto antes de subirlo, es mas seguro, mas barato y tambien es mas barato.

export async function getStaticPaths() {
    const url= `${process.env.API_URL}/api/blogs?populate=*`
    const respuesta= await fetch(url)
    const entradas = await respuesta.json()

    const paths = entradas.data.map(entrada => ({
        params:{ url: entrada.attributes.url}
    }))

    return{
        paths,
        fallback:false //fallback: es una llave false: Es cuando tienes pocas rutas y sabes cuales se van a construir, true:trae una serie de ruta estaticamentes, next.js van a generarse cuando sean solicitadas
        // y las demas seran servidas de forma estatrica  blocking: es como el getServerSideProps
      }
}
// Cuando usas getStaticPropsy tienes routing dinamico requieres las funcion de getStaticPaths
// // getStaticPaths: Este obtiene las rutas estaticas y crea las pagina o el routing para cada una de ellas, es decir esta funcion  identifica que paginas va a construir y construye los enlaces
// // getStaticProps: Las rutas se van a crear cuando hagas npm run build y subas tu proyecto a un servidor, es decir esta funcion es la que va a traer la informacion que va a colocar en esos enlaces

export async function getStaticProps({params}) {
    
    const {url} = params

    const urlBlog = `${process.env.API_URL}/api/blogs?filters[url][$eq]=${url}&populate=*`
    const respuesta= await fetch(urlBlog)
    const entrada = await respuesta.json()
   
    return{
      props:{
        entrada
      }
    }
} 
export default EntradaBlog



// export async function getServerSideProps({query}) {
    
//     const {id} = query

//     //console.log(id);
//     const url= `${process.env.API_URL}/api/blogs/${id}`
//     //console.log(url);
//     const respuesta= await fetch(url)
//     const entrada = await respuesta.json()

//     //console.log(entrada)
  
//     return{
//       props:{
//         entrada
//       }
//     }
// }

// export default EntradaBlog


// ***** Esto es un ejemplo de como puedo acceder al router dinamico***
// import {useRouter} from 'next/router'

// const EntradaBlog = () => {

//     const router = useRouter()
    
//     console.log(router.query.id);

//   return (
//     <h1>Desde entrada Blog</h1>
//   )
// }

// export default EntradaBlog