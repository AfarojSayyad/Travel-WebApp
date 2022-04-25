import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
    return ( 
        <><li className='cards__item'>
        <Link to={props.path} className="cards__item__link"> 
            {/*The <figure> tag in HTML is used to add self-contained content like illustrations, diagrams, photos, or codes listing in a document.*/}
            <figure className='cards__item__pic-wrap' data-category={props.label}>
                {/* use src instead of url for url images<img className='cards__item__img' src={props.src} alt='Travel '></img> */}
                <img className='cards__item__img' src={props.url} alt='Travel '></img>
            </figure>
            <div className='card__item__info'>
                <h5 className='cards__item__text'>{props.text}</h5>
            </div>
         </Link> 
        </li>
        </>
     );
}

export default CardItem;