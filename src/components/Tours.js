import React from 'react' 
import {tours} from '../data.js'
import Title from './Title'
const Touts = () => {
  return (
    <section className="section" id="tours">
 
    <Title title='featured' subTitle='tours' />

    <div className="section-center featured-center">
      

      {
        tours.map((tr)=>{
          return <article className="tour-card" key={tr.id}>
          <div className="tour-img-container">
            <img src={tr.img} className="tour-img" alt="" />
            <p className="tour-date">{tr.date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{tr.title}</h4>
            </div>
            <p>{tr.text}</p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> {tr.country}
              </p>
              <p>{tr.day}</p>
              <p>{tr.price}</p>
            </div>
          </div>
        </article>
        })
      }
    </div>
  </section>
  )
}

export default Touts
