import styles from '../styles/Cursos.module.css'

const Cursos = ({cursos,entradas}) => {

    const {titulo, contenido}=cursos.data[0].attributes

  return (
    <section>
        <div className={`contenedor ${styles.grid}`}>
            <div className={styles.contenido}>
                <h2 className='heading'>{titulo}</h2>
                <p className={styles.texto}>{contenido}</p>
                <a className={styles.enlace} href='#'>Mas informacion</a>
            </div>
        </div>
        <style jsx>
            {
                `section{
                    padding: 10rem 0;
                    margin-top: 10rem;
                    background-image: url("https://res.cloudinary.com/edithjromero/image/upload/v1661421084/Guitarras/cursos_bg_pem4jm.jpg");
                    background-size: cover;
                    background-position: 50%;
                }`
            }
        </style>
    </section>
  )
}

export default Cursos
//background-image: linear-gradient(to right, (0 0 0 / 0.65), rgb(0 0 0 / .7)),url((${foto}));