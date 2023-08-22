// Import React and necessary CSS file
import React from 'react';
import './card.css';

// Define the CardItem functional component
const CardItem = ({ rastro }) => {
  // Extract relevant properties from the "rastro" object using optional chaining (?.) and nullish coalescing (??) operators
  const name = rastro?.info?.name ?? '';
  const coverImg = rastro?.info?.image?.url;
  const deliveryTime = rastro?.order?.deliveryTime;
  const rating = rastro?.info?.rating?.rating_text;
  const approxPrice = rastro?.info?.cfo?.text;
  const offers = rastro?.bulkOffers ?? [];
  const cuisines = `${rastro?.info?.cuisine?.map((item) => item.name).slice(0, 3)}`;
  const bottomContainers = rastro?.bottomContainers[0]?.text;
  const bottomImg = rastro?.bottomContainers[0]?.image?.url
  const goldOff = rastro?.gold?.text;
  const proOff = offers.length > 1 ? offers[0].text : null;
  const discount = offers.length > 1 ? offers[1].text : offers.length === 1 ? offers[0].text : null;

  // Render the component with the extracted data
  return (
    <div className="card-cover">
      <div className="card-main">
        <img src={coverImg} alt={name} className="card-img" />
        

       {discount && <h1 className='discount-card'>{discount}</h1>}
      </div>
   

<div className="card-name">
  <div className='name-rastro'>{name}</div>
  <div className='rate'>{rating}<i class="material-symbols-outlined">
star_half
</i></div>
</div>

<div className="cuisin">
  <div className="cuisin-item">{cuisines}</div>
  <div className="cuisin-price">{approxPrice}</div>
</div>
{/* <hr /> */}
  <div className="del-t-w">
    <div className="del-t">

    </div>
    <div className="del-time">
    <div className="time">{deliveryTime}</div>
  </div>
  </div>



<div>{bottomContainers && <hr/>}</div>
<div className="card-bottom">
<div className="b-image">
    {bottomImg && <img src={bottomImg} alt='protocol' className='bottom-img' />}
</div>
<div className="b-text">
{bottomContainers && <span className='bottomText'>{bottomContainers}</span>}
</div>
</div>

    </div>
  );
};

// Export the CardItem component
export default CardItem;
