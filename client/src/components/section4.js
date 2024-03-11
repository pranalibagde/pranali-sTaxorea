// import React from 'react';
// import './section4.css';


// const Section4 = () => {
//   return (
//     <>
//     <section className="sectionFour">
//     <div className='container sectionFourContainer'>
//         <div className="row sectionFourFirstRow">
//             <div className='col sectionFourFirstRowCol'>
//                 <h4 className="sectionFourFirstHeading">20K+</h4>
//                 <p className="sectionFourFirstRowPara">GST registration completed</p>
//             </div>
//             <div className='col sectionFourFirstRowCol'>
//                 <h4 className="sectionFourFirstHeading">20K+</h4>
//                 <p className="sectionFourFirstRowPara">GST registration completed</p>
//             </div>
//             <div className='col sectionFourFirstRowCol'>
//                 <h4 className="sectionFourFirstHeading">20K+</h4>
//                 <p className="sectionFourFirstRowPara">GST registration completed</p>
//             </div>
//             <div className='col sectionFourFirstRowCol'>
//                 <h4 className="sectionFourFirstHeading">20K+</h4>
//                 <p className="sectionFourFirstRowPara">GST registration completed</p>
//             </div>
//         </div>
//     </div>
//      </section>

//      <section className="sectionFourSecond">
//         <div className='container sectionFourSecond-container'>
//             <div className="row sectionFourSecondRow">
//                 <div className='col-4 sectionFourSecondCol'>
//                     <h2 className="sectionFourThirdHeading">
//                     What people say <span>about Us.</span>
//                     </h2>
//                     <p className='sectionFourSecondPara'>
//                     Our Clients send us bunch of smilies with our services and we love them.
//                     </p>
//                 </div>
//                 <div className='col-8'>
//                 </div>
//             </div>
//         </div>
//      </section>
//     </>
//   )
// }

// export default Section4;


import React from 'react';
import './section4.css';
import imgItem1 from '../images/imgItem1.png';
import imgItem2 from '../images/imgItem2.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import './carousel.css';


const Section4 = () => {
  return (
    <>
    <section className="sectionFour">
    <div className='container sectionFourContainer'>
        <div className="row sectionFourFirstRow">
            <div className='col sectionFourFirstRowCol'>
                <h4 className="sectionFourFirstHeading">20K+</h4>
                <p className="sectionFourFirstRowPara">GST registration completed</p>
            </div>
            <div className='col sectionFourFirstRowCol'>
                <h4 className="sectionFourFirstHeading">20K+</h4>
                <p className="sectionFourFirstRowPara">GST registration completed</p>
            </div>
            <div className='col sectionFourFirstRowCol'>
                <h4 className="sectionFourFirstHeading">20K+</h4>
                <p className="sectionFourFirstRowPara">GST registration completed</p>
            </div>
            <div className='col sectionFourFirstRowCol'>
                <h4 className="sectionFourFirstHeading">20K+</h4>
                <p className="sectionFourFirstRowPara">GST registration completed</p>
            </div>
        </div>
    </div>
     </section>

     <section className="sectionFourSecond">
        <div className='container sectionFourSecond-container'>
            <div className="row sectionFourSecondRow">
                <div className='col-4 sectionFourSecondCol'>
                    <h2 className="sectionFourThirdHeading">
                    What people say <span>about Us.</span>
                    </h2>
                    <p className='sectionFourSecondPara'>
                    Our Clients send us bunch of smilies with our services and we love them.
                    </p>
                </div>

            <div className='col-8 sectionFourCarousel'>
                <div className=' row carouselItem'>
           <div className='carouselDiv'>
        <div className='row carouselUpperRow'>
            <div className='col-3'><img src={imgItem1} /></div>
            <div className='col-9 justify-content-start'>
                <h5>Esther Hills</h5>
                <h6>Lead Intranet Technician</h6>
            </div>
        </div>
        <div className='row carousellowerRow'>
            <p>Omnis totam molestiae delectus nemo alias nesciunt harum et. Nobis dolorum excepturi quod vel. 
                Sunt est qui ab non dolores repellat rem impedit dolores. Ut ea rerum cum eum. Alias dolores tempore 
                illo accusantium est et voluptatem voluptas.</p>
        </div>
    </div>
    </div>      
     
    <div className='row carouselBtnRow'>
    <button className="carousel-control-prev circular-btn"><FaArrowLeft /></button>
    <button className="carousel-control-next circular-btn"><FaArrowRight /></button>
</div>
              
            </div>

            </div>
        </div>
     </section>
    </>
  )
}

export default Section4;
