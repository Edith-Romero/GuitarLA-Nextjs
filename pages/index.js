import Layaout from '../components/Layaout'

export default function Home() {
  return (
    // le enviamos la prop de pagina para que me muestre la pagina en a la que nos encontramos
    <Layaout
      pagina = 'Inicio'
    >
        <h1>Desde Inicio</h1>
    </Layaout>
  )
}
