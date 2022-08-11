import './App.css';
import Testimonial from './components/Testimonial';
import React from "react";
import { dataBase } from './baseDatos.js';


// console.log(dataBase[0].name)

function App() {
  
 
  return (
    <div className="App">
      <div className='principal-container'>
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      {dataBase.map((dataBase, index) => {
        return (
          <Testimonial
          name= {dataBase.name}
          country={dataBase.country}
          imagen={dataBase.imagen}
          position={dataBase.position}
          company={dataBase.company}
          testimonial={dataBase.testimonial}
          key={index}
          />
        );
      })}
      {/* <Testimonial  
            name= {dataBase[0].name}
            country={dataBase[0].country}
            imagen='shawn'
            position='Software Engineer'
            company='Amazon'
            testimonial='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando en los cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida '
            key={dataBase.id}
          />
      <Testimonial 
           name='Sarah Chima'
           country='Nigeria'
           imagen='sarah'
           position='Ingeniero de Software'
           company='ChatDesk'
           testimonial='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mi conocimiento de codificación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble'
          />    
      <Testimonial 
           name='Emma Bostian'
           country='Suecia'
           imagen='emma'
           position='Ingeniero de Software'
           company='Spotify'
           testimonial='Siempre me ha costado aprender JavaScript. Tomé muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como un ingeniero de software en Spotify'
          />     */}
      </div>
    </div>
  );
}

export default App;
