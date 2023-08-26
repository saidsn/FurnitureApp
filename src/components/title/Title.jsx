import React from 'react';
import './Title.scss';

const Title = (props) => {
  return (
      <h3 className='title'>{props.title}</h3>
  )
}

export default Title;