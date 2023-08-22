import React from 'react'
import './delivery.css'
import Filter from '../filter/Filter'
import Collection from './Collection'
import Rastro from './Rastroo'
import { rastro } from '../../data/data'

const collection = [
  // {
  //   head:'Inspiration for your first order'
  // },
  {
    id:1,
    tittle:'Idli',
    cover:'https://b.zmtcdn.com/data/dish_images/d9766dd91cd75416f4f65cf286ca84331634805483.png',
  },
  {
    id:2,
    tittle:'Dosa',
    cover:'https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png',
  },
  {
    id:3,
    tittle:'Pizza',
    cover:'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png',
  },
  {
    id:4,
    tittle:'Parotha',
    cover:'https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png',
  },
  {
    id:5,
    tittle:'Poha',
    cover:'https://b.zmtcdn.com/data/o2_assets/1ab6211f526df5d920d41787907d1a051632716576.png',
  },
  {
    id:6,
    tittle:'Thali',
    cover:'https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png',
  },
  {
    id:7,
    tittle:'Khaman',
    cover:'https://b.zmtcdn.com/data/dish_photos/646/70c556759b901b0363e7797211656646.jpg',
  },
  {
    id:8,
    tittle:'Gujarati',
    cover:'https://b.zmtcdn.com/data/o2_assets/57e54896b9cdcd9925359ad77a0fa0b91676478619.jpeg',
  },
  {
    id:9,
    tittle:'Vada',
    cover:'https://b.zmtcdn.com/data/o2_assets/bf4bde7b78d517ac8460ea03d4c64a7f1632716550.png',
  },
  {
    id:10,
    tittle:'Sandvich',
    cover:'https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png',
  },
  {
    id:11,
    tittle:'Fafda',
    cover:'https://b.zmtcdn.com/data/dish_photos/e76/cbfc85008eacc92dd6b816e9b80eae76.jpg',
  },
  {
    id:12,
    tittle:'Cake',
    cover:'https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png',
  },
]

const brands = [
  {
    id:1,
    tittle:"McDonald's",
    cover:'https://b.zmtcdn.com/data/brand_creatives/logos/0e6f4a6a6d54c88d548abaa04a0227bc_1625165036.png'
  },
  {
    id:2,
    tittle:"La Pino'z Pizza",
    cover:'https://b.zmtcdn.com/data/brand_creatives/logos/1b51d0bca33e149302056def63fb5fa3_1536924805.png'
  },
  {
    id:3,
    tittle:"Jay Bhavani Vadapav",
    cover:'https://b.zmtcdn.com/data/brand_creatives/logos/246cce69e468341e27e835f5bb3a535b_1568093471.png?output-format=webp'
  },
  {
    id:4,
    tittle:"Subway",
    cover:"https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676520829.png?output-format=webp"
  },
  {
    id:5,
    tittle:"La Milano Pizzeria",
    cover:'https://b.zmtcdn.com/data/brand_creatives/logos/e6e910553f67822ba525dbe9f515a700_1671005129.png?output-format=webp'
  },
  {
    id:6,
    tittle:"Gwalia Sweets & Fast Food",
    cover:'https://b.zmtcdn.com/data/brand_creatives/logos/03599494c6aa23782f85b9dc127548d8_1605092896.png?output-format=webp'
  },
  {
    id:7,
    tittle:"Domino's Pizza",
    cover:'https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1583218253.png?output-format=webp'
  },
  {
    id:8,
    tittle:"Burger King",
    cover:'https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187636.png?output-format=webp'
  },
  {
    id:9,
    tittle:"Hocco Eatery",
    cover:'https://b.zmtcdn.com/data/brand_creatives/logos/407045cc3b0e1959542a25912cd99d31_1673932014.png?output-format=webp'
  },
  {
    id:10,
    tittle:"Shakti - The Sandwich Shop",
    cover:'https://b.zmtcdn.com/data/brand_creatives/logos/64f933acfd78553d4e7e723defdfcf76_1568093266.png?output-format=webp'
  },
]

const rastroList = rastro;


const Delivery = () => {
  return (
    <div>
      <Filter/>
      <div className="colle">
<Collection  item={collection} value={'Inspiration for your first order'} />
      </div>
<div className="brand">
<Collection  item={brands} value={'Top brands for you'} />
</div>

< Rastro item={rastroList} name='Kevadiya Collony Special Restaurants, Sanosara' />
    </div>
  )
}

export default Delivery