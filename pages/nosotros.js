import Layout from '../components/Layout'
import Image from 'next/image'

const Nosotros = () => {
  return (
    <Layout
        pagina='Nosotros'
    >
        <main className="contenedor"> 
          <h2 className="heading">Nosotros</h2>
            <div>
              {/* el layout permite que la imagen sea responsive pero es obligatorio el width y heigth sino no toma la imagen cuando uso el src no requiero colocar toda la 
              ruta solo con el / el detecta la ruta publica de la imagen al menos que lo lo tenga en otra pagina y requiera el https */}
              <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="Imagen sobre nosotros"/>

              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Nam quis turpis orci. Ut diam leo, facilisis sed dui eu, condimentum tincidunt ligula. 
                  Donec quis massa in erat auctor commodo. Nulla tincidunt, quam non convallis porta, 
                  est nibh placerat metus, sed tristique enim purus id elit. Suspendisse vel maximus diam, 
                  pretium rutrum ipsum. Aliquam suscipit commodo tortor, et efficitur magna condimentum imperdiet. 

                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                  Etiam eu orci sit amet risus fermentum fermentum. Duis non tristique sapien, eget auctor nulla. 
                  Maecenas nulla urna, eleifend in interdum non, porta vel risus. Vivamus non justo quis mi sagittis ultricies. 
                  Quisque nec augue facilisis, faucibus metus at, facilisis eros.</p>

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Nam quis turpis orci. Ut diam leo, facilisis sed dui eu, condimentum tincidunt ligula. 
                  Donec quis massa in erat auctor commodo. Nulla tincidunt, quam non convallis porta, 
                  est nibh placerat metus, sed tristique enim purus id elit. Suspendisse vel maximus diam, 
                  pretium rutrum ipsum. Aliquam suscipit commodo tortor, et efficitur magna condimentum imperdiet. 

                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                  Etiam eu orci sit amet risus fermentum fermentum. Duis non tristique sapien, eget auctor nulla. 
                  Maecenas nulla urna, eleifend in interdum non, porta vel risus. Vivamus non justo quis mi sagittis ultricies. 
                  Quisque nec augue facilisis, faucibus metus at, facilisis eros.</p>
              </div>
            </div>
        </main>
    </Layout>
  )
}

export default Nosotros