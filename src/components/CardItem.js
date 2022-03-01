import React from 'react';


function CardItem(props) {
  return (
    <>
    <li className = 'cards-item'>
        <a href={props.url} className='cards-item-link' target={props.target} rel='noreferrer'>
        <figure className = 'cards-item-pic-wrap' data-category={props.label}>
          <img className='cards-item-img' alt='Project Image' src={props.src}/>
        </figure>
          <div className = 'cards-item-info'>
            <h5 className='cards-item-text'>{props.text}</h5>
          </div>
        </a>
    </li>
    </>
  );
}

export default CardItem;
