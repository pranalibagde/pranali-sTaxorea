import React from 'react';
import './section1.css';
import paper_Element from '../images/paper_Element.png';
import person from '../images/person.png';
const Section1 = () => {
  return (
    <>
    <section className='sectionOne'>
      <div className='container sectionOneContainer'>
        <h1 className="sectionOneFirstHeading">
        Tax Filing Made Simple
        </h1>
        <h5 className='sectionOneSecondHeading'>
        Your One-Stop Solution for Seamless Tax Filing
        </h5>
        <div className="sectionOneImgs">
          <img className="paperElementImg" src={paper_Element} />
          <img className="personImg" src={person} />    
        </div>
      </div>
    </section>
    </>
  )
}

export default Section1;
