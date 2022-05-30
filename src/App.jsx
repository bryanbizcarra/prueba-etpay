import './App.css';
import Navegacion from './componentes/Navegacion';
import Boton from './componentes/Boton';
import imgBaner from './imagenes/Imagen-baner.svg'
import './estilos/Boton.css'
import imgVideo from './imagenes/Video.png'
import botonPlay from './imagenes/Action.svg'

// imports icons features
import iconMetrics from './imagenes/icon-metrics.svg'
import iconRegistration from './imagenes/icon-registration.svg'
import iconBranded from './imagenes/icon-branded.svg'
import iconOrganized from './imagenes/icon-organizer.svg'
import iconEngagement from './imagenes/icon-engagement.svg'
import iconCalendar from './imagenes/icon-calendar.svg'
import Items from './componentes/Items';

// imports iconos slide 3
import icono1 from './imagenes/icon1-slide3.svg'
import icono2 from './imagenes/icon2-slide3.svg'
import icono3 from './imagenes/icon3-slide3.svg'
import icono4 from './imagenes/icon4-slide3.svg'
import icono5 from './imagenes/icon5-slide3.svg'
import icono6 from './imagenes/icon6-slide3.svg'
import icono7 from './imagenes/icon7-slide3.svg'
import Footer from './componentes/Footer'
function App() {
  return (
    <div className="App">
      <Navegacion></Navegacion>
      <div className='baner'>
        <div className="contenedor-contenido">
          <h1>Event Registration
            Reimagined</h1>
          <p>Manage your event registrations hassle free and without any dependency with the technical team. Isn’t it sounds amazing?</p>
          <Boton></Boton>
        </div>
        <div className="contenedor-img">
          <img src={imgBaner} alt="" />
        </div>
      </div>
      <div className="slide2">
        <h1 className='titulo-slide2'>
          All-in-one Event Platform
        </h1>
        <p className='texto-slide2'>
          Deliver an exceptional event experience
        </p>
        <div className="contenedor-video">
          <img className='img-video' src={imgVideo} alt="" />
          <img className='boton-play' src={botonPlay} alt="" />
        </div>
        <div className="slide2-items">
          <Items img={iconMetrics} titulo='Event Metrics' descripcion='Track your ticket sales, attendees count and more with much ease.'></Items>
          <Items img={iconRegistration} titulo='Registration & Ticketing' descripcion='Manage your Event registrations and ticket sales easier and receive payments instantly.'></Items>
          <Items img={iconBranded} titulo='Branded Badges' descripcion='Create your custom branded badges for your events and get them printed.'></Items>
          <Items img={iconOrganized} titulo='Oragniser App' descripcion='Manage your events at the palm of your hand with our Oragniser App.'></Items>
          <Items img={iconEngagement} titulo='Attendee Engagement' descripcion='Engage with your attendees via email, surveys and much more.'></Items>
          <Items img={iconCalendar} titulo='Add to Calendar' descripcion='Effortless way to add your events to registered users calendars by 1-click.'></Items>
        </div>
      </div>
      <div className="slide3">
        <div className="fondo-slide3">
          <div className="contenedor-contenido">
            <h3 className='titulo-slide3'>Integrate with your
              favorite tools</h3>
            <p className='descripcion-slide3'>Connect RegiM with your most favorite sales and marketing tools</p>
          </div>
          <div className="contenedor-iconos">
            <img src={icono1} alt="" />
            <img src={icono2} alt="" />
            <img src={icono3} alt="" />
            <img src={icono4} alt="" />
            <img src={icono5} alt="" />
            <img src={icono6} alt="" />
            <img src={icono7} alt="" />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
