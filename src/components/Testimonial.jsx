import React from 'react';
import "./Testimonial.css";


const Testimonial = () => {
      return(
        <div className= 'container-testimonial'>
          <img 
          className='imagen-testimonial' 
          src={require('../imagenes/testimonio-emma.png')}
          alt='imagen de Emma'
          />
          <div className ='container-text'>
            <p className='name-testimonial'>Emma Bostian en Suecia</p>
            <p className='cargo-testimonial'>Ingeniera de Software en Spotify</p>
            <p className='text-testimonial'>"Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."</p>
          </div>
        </div>

      );
}

export default Testimonial;
