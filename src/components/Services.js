import React from 'react'
import Title from './Title'
import {services} from '../data.js'
const Services = () => {
  return (
    <section className="section services" id="services">
    <Title title='our' subTitle='services' />
    <div className="section-center services-center">
    {
      services.map((sr)=>{
       return <article className="service" key={sr.id}>
        <span className="service-icon">
          <i className={sr.serviceIcon}></i>
          </span>
        <div className="service-info">
          <h4 className="service-title">{sr.serviceTitle}</h4>
          <p className="service-text">{sr.serviceText}</p>
        </div>
      </article>
      })
    }
    
    

     
    </div>
  </section>
  )
}

export default Services
