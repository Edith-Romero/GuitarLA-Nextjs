import Layaout from "../components/Layaout"
import ListadoBlog from "../components/ListadoBlog"


const Blog = ({entradas}) => {

  return (
    <Layaout
      pagina='blog'
    >
      <main className='contenedor'>
        <ListadoBlog
          entradas={entradas}
        />
      </main>
    </Layaout>
  )
}

export async function getStaticProps() {

  const url= `${process.env.API_URL}/api/blogs?populate=*`
  const respuesta= await fetch(url)
  const entradas = await respuesta.json()

  return{
    props:{
      entradas
    }
  }
}

export default Blog

// Este es el ejemplo de getServerSideProps: Construye la pagina en cada Request, es decir cada vez 
// consulto una pagina el va a la API y construye una respuesta, eso causa un uso intensivo del 
// servidor, por eso lo comentamos y usamos getStaticProps()  porque el blog es un
// contenido estatico

// export async function getServerSideProps() {

//   const url= 'http://localhost:1337/api/blogs'
//   const respuesta= await fetch(url)
//   const entradas = await respuesta.json()

//   return{
//     props:{
//       entradas
//     }
//   }
// }