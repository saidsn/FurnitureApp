import React from 'react';
import './Title.scss';

const Title = (props) => {
  return (
    <div className="container">
      <h3 className='title'>{props.title}</h3>
    </div>
  )
}

export default Title;