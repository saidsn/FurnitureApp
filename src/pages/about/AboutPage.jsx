import React from 'react';
import BredCrumbs from '../../components/bredcrumbs/BredCrumbs';
import Title from '../../components/title/Title';
import About from '../../components/about/About';
import Counter from '../../components/counter/Counter';


const AboutPage = () => {
  return (
    <div className='container'>
      <BredCrumbs />
      <About />
      <Counter />
    </div>
    
  )
}

export default AboutPage;