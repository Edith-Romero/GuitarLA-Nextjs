import Layout from "../components/Layout"
import styles from '../styles/Carrito.module.css'
import Image from "next/image"

const Carrito = ({carrito}) => {
  console.log(carrito, "Estoy en carrito");
  return (
    <Layout pagina = {"Carrito de Compras"}>
      <h1 className="heading">Carrito</h1>
      <main className={`${styles.contenido} contenedor`}>
        <div className={styles.carrito}>
          {carrito.length === 0 ? 'Carrito Vacio' 
          : ( carrito.map(producto=>(
            <div 
              key={producto.id} 
              className={styles.producto}>
              <div>
                <Image layout="responsive" width={250} height={480} src={producto.imagen} alt={producto.nombre}/>
                </div>
              <div>
                <p className={styles.nombre}> {producto.nombre}</p>
                <p className={styles.cantidad}> {producto.cantidad}</p>
                <p className={styles.precio}> $<span>{producto.precio}</span></p>
                <p className={styles.subtotal}> Subtotal: $<span>{producto.precio * producto.cantidad}</span></p>
                </div>

            </div>
          ))  
          )}
        </div>
        <div>2</div>
      </main>
    </Layout>
  )
}

export default Carrito
