import {useState} from 'react'
import Image from 'next/image'
import Layout from '../../components/Layout'
import styles from '../../styles/Guitarra.module.css'

const  Producto = ({guitarra,agregarCarrito}) => {

    const {descripcion,imagen,nombre,precio}= guitarra.data[0].attributes
    const{id} = guitarra.data[0]
    const {name} = imagen.data.attributes
    const[cantidad,setCantidad] = useState(1);

    // console.log(guitarra.data[0].attributes);
    // console.log(guitarra.data[0]);
    console.log(name);

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(cantidad <1){
            alert("Cantidad no valida");
            return;
        }

        //Agregar al carrito un producto
        const guitarraSeleccionada = {
            id,
            imagen: name,
            nombre,
            precio,
            cantidad,
        };
        // console.log(guitarraSeleccionada);
        agregarCarrito(guitarraSeleccionada)
    }

  return (
    <Layout
        pagina={`Guitarra ${nombre}`}
    >
        <div className={styles.guitarra}>
            <Image layout='responsive' width={180} height = {350} src={name} alt={`Imagen de Guitarra ${nombre}`}/>
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>

                <form className={styles.formulario} onSubmit={handleSubmit}>
                    <label>Cantidad: </label>

                    <select
                        value={cantidad}
                        onChange={e=> setCantidad(parseInt(e.target.value))}
                    >
                        <option value="0">-- Seleccione --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>     
                    <input
                        type="submit"
                        value="Agregar al carrito"
                    />           
                </form>
            </div>
        </div>        
    </Layout>
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
