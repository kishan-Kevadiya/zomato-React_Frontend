import React from 'react'
import './diningOut.css'
import Places from './places/PlacesColl'


const dine = [
  {
    key:1,
    url:'https://www.zomato.com/ahmedabad/picturesque-cafes',
    name:'7 Pictureques Cafe',
    place:'7 Places',
  },
  {
    key:2,
    url:'https://www.zomato.com/ahmedabad/zomato-restaurant-awards-2023-winners',
    name:'Winners of Zomato Rest...',
    place:'8 Places',
  },
  {
    key:3,
    url:'https://www.zomato.com/ahmedabad/newly-opened',
    name:'8 Newly Opened Rasr...',
    place:'7 Places',
  },
  {
    key:4,
    url:'https://www.zomato.com/ahmedabad/best-buffet',
    name:'7 Greate Buffets',
    place:'7 Places',
  },
  {
    key:5,
    url:'https://www.zomato.com/ahmedabad/fine-dining-restaurants',
    name:'10 Best Luxury Dine...',
    place:'10 Places',
  },
  {
    key:6,
    url:'https://www.zomato.com/ahmedabad/gujarati-thali',
    name:'8 Places For Gujarati Thalis',
    place:'8 Places',
  },
  {
    key:7,
    url:'https://www.zomato.com/ahmedabad/great-breakfasts',
    name:'7 Blissful Breakfast',
    place:'7 Places',
  },
  {
    key:8,
    url:'hhttps://www.zomato.com/ahmedabad/rooftop',
    name:'6 Serena Rooftop',
    place:'7 Places',
  },
]
  


const DiningOut = () => {
  return<div className='dining-out'>
    
<div className="places">

  <Places item={dine} value={'Explore curated lists of top restaurants, cafes, pubs, and bars in Ahmedabad, based on trends'}/>
</div>





  </div>
  
}

export default DiningOut