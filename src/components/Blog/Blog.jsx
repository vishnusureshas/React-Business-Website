import React from 'react'
import './Blog.css'
import BlogImage from '../../assets/blog/blog.jpg'

function Blog() {
  return (
    <>
    <div id="blog">
      <div className="container">
        <div className="blog_wrapper">
          <div className="blog_col">
            <h3>  WE HELP BUSINESS LAUNCH,GROW AND SUCCEED</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices dui augue, 
              quis blandit nibh fermentum id. Nunc condimentum vulputate nulla</p>
              <div className="btn_wrapper">
                <a href="/" className='btn' >Get Started</a>
              </div>
          </div>
          <div className="blog_col">
            <div className="blog_image">
              <img src={BlogImage} alt="Blog" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Blog