import Layaout from '../components/Layaout'
import Listado from '../components/Listado';


const Tienda = ({guitarras}) => {

  // console.log("Guitarras", guitarras);

  return (
    <Layaout
        pagina='tienda'
    >
        <main className='contenedor'>
            <h1 className='heading'>Nuestra Coleccion</h1>

            <Listado
              guitarras = { guitarras } 
            />

        </main>
    </Layaout>
  )
}

export async function getServerSideProps(){

  const url = `${process.env.API_URL}/api/guitarras?populate=*`
  const respuesta =  await fetch(url)
  const guitarras = await respuesta.json()

  // console.log(
  //   "guitarras", guitarras
  // );

  return{
    props:{
      guitarras
    }
  }
}

export default Tienda

// NOTAS: 
  // const url = `${process.env.API_URL}/api/guitarras?populate=*&_sort=precio:desc`
  // const url = `${process.env.API_URL}/api/guitarras?populate=*&_sort=created_at:desc` // Sirver para filtar de las ultimas entradas que se crearon asi  las ordena.