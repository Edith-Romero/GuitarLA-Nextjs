import Cursos from '../components/Cursos'
import Layout from '../components/Layout'
import Listado from '../components/Listado'
import ListadoBlog from '../components/ListadoBlog'

export default function Home({guitarras,cursos, entradas}) {

  const {titulo,contenido,imagen} =  cursos.data[0].attributes
  
  return (
    // le enviamos la prop de pagina para que me muestre la pagina en la que nos encontramos
    <Layout
      pagina = 'Inicio'
      guitarras = {guitarras.data[3]}
    >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra Coleccion</h1>

          <Listado
            guitarras = { guitarras } 
      />
      </main>
      <Cursos
        cursos={cursos}
        entradas={entradas}
      />

      <section>
        <ListadoBlog 
          entradas={entradas}
        />
      </section>

    </Layout>
  )
}
export async function getServerSideProps(){

  const urlGuitarras = `${process.env.API_URL}/api/guitarras?populate=*`
  const urlCursos = `${process.env.API_URL}/api/cursos?populate=*`
  const urlBlog = `${process.env.API_URL}/api/blogs?&populate=*&pagination[limit]=3`

  const [resGuitarras, resCursos,resBlog] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlog)
  ])

  const[guitarras,cursos,entradas]=await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resBlog.json()
  ])

  return{
    props:{
      guitarras,
      cursos, 
      entradas
    }
  }
}
// Dejo la funcion basica para guia...
// export async function getServerSideProps(){

//   const url = `${process.env.API_URL}/api/guitarras?populate=*`
//   const respuesta =  await fetch(url)
//   const guitarras = await respuesta.json()

//   // console.log(
//   //   "guitarras", guitarras
//   // );

//   return{
//     props:{
//       guitarras
//     }
//   }
// }
