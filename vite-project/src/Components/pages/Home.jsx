import React from 'react'
import "./Home.css";
export const Home = () => {
  return (
    <>
    <div className='heading-main'> 
    <h1>Heading</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quo obcaecati accusantium provident? Dicta maiores molestiae neque recusandae ipsa incidunt dolorum deleniti sed omnis? Aliquam culpa placeat molestias id? Placeat.</p>
    </div>

    <div className="brandName">
      <h1>companies I have worked with:</h1>
      <div className="brand"></div>
      <div className="brand"></div>
      <div className="brand"></div>
      <div className="brand"></div>
      <div className="brand"></div>
      <div className="brand"></div>
      <div className="brand"></div>
      <div className="brand"></div>
    </div>
 
    <div className="testimonials">
      <h1>Testimonials</h1>
      <div className="testi"></div>
      <div className="testi"></div>
      <div className="testi"></div>
      <div className="testi"></div>
      <div className="testi"></div>
    </div> 

    <div className="portfolio">
      <h1>Portfolio</h1>
     <div className="portfolio-demos"></div>
     <div className="portfolio-demos"></div>
     <div className="portfolio-demos"></div>
     <div className="portfolio-demos"></div>
    </div>

    </>
  )
}
