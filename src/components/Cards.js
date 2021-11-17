import React from 'react';
import './Cards.css';
import CardItems from './CardItems';
import Zoom from "react-reveal"

function Cards() {
  return (
    <div className='cards'>
        
        <h1>Check out these Destinations!</h1>
        <div className='cards-container'>
        <div className='cards-wrapper'>
          <ul className='cards-items'>
            <Zoom left>
            <CardItems
              src='images/img-5.jpg'
              text='Various Types of Cultures and Temples In One Country '
              label='IndianCultures'
              path='/services'
            />
            </Zoom>
            
            <Zoom right>
            <CardItems
              src='images/img-6.jpg'
              text='Travel through the Islands of the World in a Private ship'
              label='Adventures'
              path='/services'
            />
            </Zoom>
          </ul>
          <ul className='cards-items'>
            <Zoom left>
            <CardItems
              src='images/img-8.jpg'
              text='Moracco Sahara Desert CampFire in Dec'
              label='CampFire'
              path='/services'
            />
            </Zoom>
            
            <Zoom bottom>
            <CardItems
              src='images/img-10.jpg'
              text='Boat Riding in Switzerland Lake Brienz'
              label='Boatriding'
              path='/services'
            />
            </Zoom>

            <Zoom right>
            <CardItems
              src='images/img-11.jpg'
              text='different Mountaineering in NewZealand'
              label='Adventures'
              path='/services'
            />
            </Zoom>
          </ul>
          
          
        </div>
      </div>
    </div>
  );
}

export default Cards;