import React, { useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import taxApplication from '../images/taxApplication.png';
import './blogDetails.css';
import blogDImg1 from '../images/blogDImg1.png';
import blogDImg2 from '../images/blogDImg2.png';
import blogDImg3 from '../images/blogDImg3.png';

const BlogDetails = () => {
 

  return (
    <section className='BlogDetailsSection'>

      <Navbar />

      <div className='container'>
        <h4 className='BlogDetailHead'>
          Blog > <span>Blog Details</span>
        </h4>

        <div className='BlogDetailsSectionFirst'>
          <img src={taxApplication} />
     
     <div className='BlogDetailsSectionFirstBelow'>
          <div className='row belowTaxApplicationRow'>
            <div className='col-6 belowTaxApplicationRowLeft d-flex justify-content-center flex-column align-items-start'>
              <p>By: Peter Rowardson</p>
              </div>
            <div className='col-6 belowTaxApplicationRowRight d-flex justify-content-center flex-column align-items-end'>
              <p>29.Jun.2021</p>
              </div>
          </div>

          <hr style={{ borderBottom: '2px solid rgba(229, 229, 229, 1)', marginLeft: '20px', marginRight: '20px' }} />

      <div className='blogDetailsDescription'>   
          <h3>Instagram artists with great photography skills</h3>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae eleifend velit, vitae dignissim dolor. 
            Duis in nibh ornare nisi vestibulum rutrum sed sed nisl. Proin hendrerit neque sed tincidunt interdum. 
            Duis fringilla mollis est ut fermentum. Proin dapibus tincidunt aliquet. Mauris iaculis ipsum ac lorem 
            congue varius. Aliquam libero augue, eleifend at suscipit a, laoreet non neque. 
            <br/> <br/>
            Aenean tristique id nisl vel sagittis. In hac habitasse platea dictumst. In aliquam nisl vitae leo fermentum 
            accumsan. Suspendisse eget tempor odio. Phasellus sagittis volutpat massa id interdum. Nam sed fringilla nunc. 
            Fusce porta ex nisi, non posuere metus venenatis sit amet. Vestibulum convallis justo id mollis suscipit. 
            Praesent gravida est mauris,
        </p>

        <h4>Instagram artists with great photography skills Instagram artists with great photography skills</h4>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae eleifend velit, vitae dignissim dolor. 
            Duis in nibh ornare nisi vestibulum rutrum sed sed nisl. Proin hendrerit neque sed tincidunt interdum. 
            Duis fringilla mollis est ut fermentum. Proin dapibus tincidunt aliquet. Mauris iaculis ipsum ac lorem 
            congue varius. Aliquam libero augue, eleifend at suscipit a, laoreet non neque. 
            <br/> <br/>
            Aenean tristique id nisl vel sagittis. In hac habitasse platea dictumst. In aliquam nisl vitae leo fermentum 
            accumsan. Suspendisse eget tempor odio. Phasellus sagittis volutpat massa id interdum. Nam sed fringilla nunc. 
            Fusce porta ex nisi, non posuere metus venenatis sit amet. Vestibulum convallis justo id mollis suscipit. 
            Praesent gravida est mauris,
        </p>
        </div> 
    </div>
        </div>


        <div className='BlogDetailsSectionSecond'>

          <div className='row BlogDetailsSecondHeadRow'>
            <div className='col-12 col-lg-6 d-flex flex-column justify-content-left align-items-left'>
              <h3>Related Blog</h3>
            </div>
            <div className='col-12 col-lg-6 d-flex flex-column justify-content-end align-items-end'>
               <button>View all</button>
            </div>
          </div>

          <div className='row cardsRow'>

          <div className="col cardCol ">
           <img className="card-img-top" src={blogDImg1} alt="CardImage"/>
           <button className='creativeBtn'>CREATIVE</button>
           <div className="card-body ">
             <h5 className="card-title ">Instagram artists with great photography skills</h5>
               <p className="card-text">taxoreo your go-to platform for connecting skilled freelancers in the 
               field of Accounting and Taxation Services with clients seeking expert assistance. Whether you're a seasoned
                professional or just starting your freelancing journey, our platform provides you with opportunities 
                to showcase your expertise and grow your client base.</p>

                <hr style={{ borderColor: 'rgba(229, 229, 229, 1)' }} />

                <div className='row cardBelowRow'>
                <div className='col-6 belowTaxApplicationRowLeft d-flex justify-content-center flex-column align-items-start'>
              <p>By: Peter Rowardson</p>
              </div>
            <div className='col-6 belowTaxApplicationRowRight d-flex justify-content-center flex-column align-items-end'>
              <p>29.Jun.2021</p>
              </div>
                </div>

                
            </div>
        </div>

        <div className="col cardCol ">
           <img className="card-img-top" src={blogDImg2} alt="CardImage"/>
           <button className='creativeBtn'>CREATIVE</button>
           <div className="card-body ">
             <h5 className="card-title ">Instagram artists with great photography skills</h5>
               <p className="card-text">taxoreo your go-to platform for connecting skilled freelancers in the 
               field of Accounting and Taxation Services with clients seeking expert assistance. Whether you're a seasoned
                professional or just starting your freelancing journey, our platform provides you with opportunities 
                to showcase your expertise and grow your client base.</p>

                <hr style={{ borderColor: 'rgba(229, 229, 229, 1)' }} />

                <div className='row cardBelowRow'>
                <div className='col-6 belowTaxApplicationRowLeft d-flex justify-content-center flex-column align-items-start'>
              <p>By: Peter Rowardson</p>
              </div>
            <div className='col-6 belowTaxApplicationRowRight d-flex justify-content-center flex-column align-items-end'>
              <p>29.Jun.2021</p>
              </div>
                </div>

                
            </div>
        </div>

        <div className="col cardCol ">
           <img className="card-img-top" src={blogDImg3} alt="CardImage"/>
           <button className='creativeBtn'>CREATIVE</button>
           <div className="card-body ">
             <h5 className="card-title ">Instagram artists with great photography skills</h5>
               <p className="card-text">taxoreo your go-to platform for connecting skilled freelancers in the 
               field of Accounting and Taxation Services with clients seeking expert assistance. Whether you're a seasoned
                professional or just starting your freelancing journey, our platform provides you with opportunities 
                to showcase your expertise and grow your client base.</p>

                <hr style={{ borderColor: 'rgba(229, 229, 229, 1)' }} />

                <div className='row cardBelowRow'>
                <div className='col-6 belowTaxApplicationRowLeft d-flex justify-content-center flex-column align-items-start'>
              <p>By: Peter Rowardson</p>
              </div>
            <div className='col-6 belowTaxApplicationRowRight d-flex justify-content-center flex-column align-items-end'>
              <p>29.Jun.2021</p>
              </div>
                </div>

                
            </div>
        </div>

          </div>

        </div>



  

      </div>
      
      <Footer />

    </section>
  )
}

export default BlogDetails;







