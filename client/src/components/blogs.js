// import React, { useState } from 'react';
// import Navbar from './navbar';
// import './blogs.css';
// import messageWindow from '../images/messageWindow.png';
// import blogDImg1 from '../images/blogDImg1.png';
// import blogDImg2 from '../images/blogDImg2.png';
// import blogDImg3 from '../images/blogDImg3.png';
// import blogDImg4 from '../images/blogDImg4.png';
// import blogDImg5 from '../images/blogDImg5.png';
// import blogDImg6 from '../images/blogDImg6.png';
// import { Pagination } from 'react-bootstrap';

// const Blogs = () => {
//     const [selectedOption, setSelectedOption] = useState('Most Recent');

//     const handleOptionChange = (newOption) => {
//       setSelectedOption(newOption);
//     };
//   return (
//     <section className="blogSection">

//         {/* <Navbar /> */}

//         <div className='blogSectionFirst'>
//             <div className='container'>
//                 <div className='row blogSectionFirstRow'>
//                     <div className='col-6 blogSectionFirstRowLeft'>
//                         <h1>Blogs</h1>
//                         <h4>Elevate Your Accounting</h4>
//                     </div>
//                     <div className='col-6 blogSectionFirstRowRight'>
//                         <img src={messageWindow} />
//                     </div>
//                 </div>
//             </div>
//         </div>

//         <div className='BlogDetailsSectionSecond'>
//             <div className='container'>         
//             <div className='row DetailesSecFirstRow'>
//             <div className='col-6 d-flex justify-content-start  align-items-start'>
//             </div>         
//             <div className='col-6 d-flex justify-content-end align-items-end'>
//       <div className='dropdown'>
//         <button className='recentButton dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
//           {selectedOption}
//         </button>
//         <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
//           <button className='dropdown-item' onClick={() => handleOptionChange('Most Recent')}>Most Recent</button>
//           <button className='dropdown-item' onClick={() => handleOptionChange('Option 2')}>Option 2</button>
//           <button className='dropdown-item' onClick={() => handleOptionChange('Option 3')}>Option 3</button>
//         </div>
//       </div>
//     </div>

//           </div>

//          <div className='row DetailesSecSecondRow'>

//           <div className='row cardRow'>

//        <div className="col cardsCol ">
//  <img className="card-img-top" src={blogDImg1} alt="CardImage"/>
//  <button className='creativeBtn'>CREATIVE</button>
//  <div className="card-body ">
//    <h5 className="card-title ">Instagram artists with great photography skills</h5>
//      <p className="card-text">taxoreo your go-to platform for connecting skilled freelancers in the 
//      field of Accounting and Taxation Services with clients seeking expert assistance. Whether you're a seasoned
//       professional or just starting your freelancing journey, our platform provides you with opportunities 
//       to showcase your expertise and grow your client base.</p>

//       <hr style={{ borderColor: 'rgba(229, 229, 229, 1)' }} />

//       <div className='row cardBelowRow'>
//       <div className='col-6 belowTaxApplicationRowLeft d-flex justify-content-center flex-column align-items-start'>
//     <p>By: Peter Rowardson</p>
//     </div>
//   <div className='col-6 belowTaxApplicationRowRight d-flex justify-content-center flex-column align-items-end'>
//     <p>29.Jun.2021</p>
//     </div>
//       </div>

      
//   </div>
//     </div>

//     <div className="col cardsCol ">
//  <img className="card-img-top" src={blogDImg2} alt="CardImage"/>
//  <button className='creativeBtn'>CREATIVE</button>
//  <div className="card-body ">
//    <h5 className="card-title ">Instagram artists with great photography skills</h5>
//      <p className="card-text">taxoreo your go-to platform for connecting skilled freelancers in the 
//      field of Accounting and Taxation Services with clients seeking expert assistance. Whether you're a seasoned
//       professional or just starting your freelancing journey, our platform provides you with opportunities 
//       to showcase your expertise and grow your client base.</p>

//       <hr style={{ borderColor: 'rgba(229, 229, 229, 1)' }} />

//       <div className='row cardBelowRow'>
//       <div className='col-6 belowTaxApplicationRowLeft d-flex justify-content-center flex-column align-items-start'>
//     <p>By: Peter Rowardson</p>
//     </div>
//   <div className='col-6 belowTaxApplicationRowRight d-flex justify-content-center flex-column align-items-end'>
//     <p>29.Jun.2021</p>
//     </div>
//       </div>

      
//   </div>
//     </div>

//     <div className="col cardsCol ">
//  <img className="card-img-top" src={blogDImg3} alt="CardImage"/>
//  <button className='creativeBtn'>CREATIVE</button>
//  <div className="card-body ">
//    <h5 className="card-title ">Instagram artists with great photography skills</h5>
//      <p className="card-text">taxoreo your go-to platform for connecting skilled freelancers in the 
//      field of Accounting and Taxation Services with clients seeking expert assistance. Whether you're a seasoned
//       professional or just starting your freelancing journey, our platform provides you with opportunities 
//       to showcase your expertise and grow your client base.</p>

//       <hr style={{ borderColor: 'rgba(229, 229, 229, 1)' }} />

//       <div className='row cardBelowRow'>
//       <div className='col-6 belowTaxApplicationRowLeft d-flex justify-content-center flex-column align-items-start'>
//     <p>By: Peter Rowardson</p>
//     </div>
//   <div className='col-6 belowTaxApplicationRowRight d-flex justify-content-center flex-column align-items-end'>
//     <p>29.Jun.2021</p>
//     </div>
//       </div>

      
//   </div>
// </div>


// </div>

// <div className='row cardRow'>

// <div className="col cardsCol ">
// <img className="card-img-top" src={blogDImg4} alt="CardImage"/>
// <button className='creativeBtn'>CREATIVE</button>
// <div className="card-body ">
// <h5 className="card-title ">Instagram artists with great photography skills</h5>
// <p className="card-text">taxoreo your go-to platform for connecting skilled freelancers in the 
// field of Accounting and Taxation Services with clients seeking expert assistance. Whether you're a seasoned
// professional or just starting your freelancing journey, our platform provides you with opportunities 
// to showcase your expertise and grow your client base.</p>

// <hr style={{ borderColor: 'rgba(229, 229, 229, 1)' }} />

// <div className='row cardBelowRow'>
// <div className='col-6 belowTaxApplicationRowLeft d-flex justify-content-center flex-column align-items-start'>
// <p>By: Peter Rowardson</p>
// </div>
// <div className='col-6 belowTaxApplicationRowRight d-flex justify-content-center flex-column align-items-end'>
// <p>29.Jun.2021</p>
// </div>
// </div>


// </div>
// </div>

// <div className="col cardsCol ">
// <img className="card-img-top" src={blogDImg5} alt="CardImage"/>
// <button className='creativeBtn'>CREATIVE</button>
// <div className="card-body ">
// <h5 className="card-title ">Instagram artists with great photography skills</h5>
// <p className="card-text">taxoreo your go-to platform for connecting skilled freelancers in the 
// field of Accounting and Taxation Services with clients seeking expert assistance. Whether you're a seasoned
// professional or just starting your freelancing journey, our platform provides you with opportunities 
// to showcase your expertise and grow your client base.</p>

// <hr style={{ borderColor: 'rgba(229, 229, 229, 1)' }} />

// <div className='row cardBelowRow'>
// <div className='col-6 belowTaxApplicationRowLeft d-flex justify-content-center flex-column align-items-start'>
// <p>By: Peter Rowardson</p>
// </div>
// <div className='col-6 belowTaxApplicationRowRight d-flex justify-content-center flex-column align-items-end'>
// <p>29.Jun.2021</p>
// </div>
// </div>


// </div>
// </div>

// <div className="col cardsCol ">
// <img className="card-img-top" src={blogDImg6} alt="CardImage"/>
// <button className='creativeBtn'>CREATIVE</button>
// <div className="card-body ">
// <h5 className="card-title ">Instagram artists with great photography skills</h5>
// <p className="card-text">taxoreo your go-to platform for connecting skilled freelancers in the 
// field of Accounting and Taxation Services with clients seeking expert assistance. Whether you're a seasoned
// professional or just starting your freelancing journey, our platform provides you with opportunities 
// to showcase your expertise and grow your client base.</p>

// <hr style={{ borderColor: 'rgba(229, 229, 229, 1)' }} />

// <div className='row cardBelowRow'>
// <div className='col-6 belowTaxApplicationRowLeft d-flex justify-content-center flex-column align-items-start'>
// <p>By: Peter Rowardson</p>
// </div>
// <div className='col-6 belowTaxApplicationRowRight d-flex justify-content-center flex-column align-items-end'>
// <p>29.Jun.2021</p>
// </div>
// </div>


// </div>
// </div>


// </div>

//           </div>




//           </div> 
//         </div>
      
//     </section>
//   )
// }

// export default Blogs;



import React, { useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import './blogs.css';
import messageWindow from '../images/messageWindow.png';
import blogDImg1 from '../images/blogDImg1.png';
import blogDImg2 from '../images/blogDImg2.png';
import blogDImg3 from '../images/blogDImg3.png';
import blogDImg4 from '../images/blogDImg4.png';
import blogDImg5 from '../images/blogDImg5.png';
import blogDImg6 from '../images/blogDImg6.png';
import Pagination from 'react-bootstrap/Pagination';

const Blogs = () => {
    const [selectedOption, setSelectedOption] = useState('Most Recent');

    const handleOptionChange = (newOption) => {
      setSelectedOption(newOption);
    };
  return (
    <section className="blogSection">

        <Navbar />

        <div className='blogSectionFirst'>
            <div className='container'>
                <div className='row blogSectionFirstRow'>
                    <div className='col-6 blogSectionFirstRowLeft'>
                        <h1>Blogs</h1>
                        <h4>Elevate Your Accounting</h4>
                    </div>
                    <div className='col-6 blogSectionFirstRowRight'>
                        <img src={messageWindow} />
                    </div>
                </div>
            </div>
        </div>

        <div className='BlogDetailsSectionSecond'>
            <div className='container'>         
            <div className='row DetailesSecFirstRow'>
            <div className='col-6 d-flex justify-content-start  align-items-start'>
            </div>         
            <div className='col-6 d-flex justify-content-end align-items-end'>
      <div className='dropdown'>
        <button className='recentButton dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
          {selectedOption}
        </button>
        <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
          <button className='dropdown-item' onClick={() => handleOptionChange('Most Recent')}>Most Recent</button>
          <button className='dropdown-item' onClick={() => handleOptionChange('Option 2')}>Option 2</button>
          <button className='dropdown-item' onClick={() => handleOptionChange('Option 3')}>Option 3</button>
        </div>
      </div>
    </div>

          </div>

         <div className='row DetailesSecSecondRow'>

          <div className='row cardRow'>

       <div className="col cardsCol ">
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

    <div className="col cardsCol ">
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

    <div className="col cardsCol ">
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

<div className='row cardRow'>

<div className="col cardsCol ">
<img className="card-img-top" src={blogDImg4} alt="CardImage"/>
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

<div className="col cardsCol ">
<img className="card-img-top" src={blogDImg5} alt="CardImage"/>
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

<div className="col cardsCol ">
<img className="card-img-top" src={blogDImg6} alt="CardImage"/>
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

<div className='row paginationRow justify-content-end'>
<Pagination className='pagiNation'>
      <Pagination.Prev disabled  />
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item>{9}</Pagination.Item>
      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Next />
    </Pagination>
      </div>



          </div> 
        </div>

        <Footer/>
      
    </section>
  )
}

export default Blogs;
