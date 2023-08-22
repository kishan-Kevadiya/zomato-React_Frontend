import React from 'react'
import './tabOption.css'

const tabs = [
  {
    id: 1,
    name: 'Delivery',
    inactive_img: 'https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png',
    active_img: 'https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png',
    backdrop: 'rgb(252, 238, 192)',
  },
  {
    id: 2,
    name: 'Dining Out',
    active_img: 'https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png',
    inactive_img: 'https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png',
    backdrop: 'rgb(229, 243, 243)',
  },
  {
    id: 3,
    name: 'Nightlife',
    active_img: 'https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png',
    inactive_img: 'https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png',
    backdrop: 'rgb(237, 244, 255)',
  },
]

const TabOption = ({ tab, setTab }) => {

  return <>
    <div className='max-width tabOp'>
      {
        tabs.map((tabs) => (
          <div onClick={() => setTab(tabs.name)} className="main" key={tabs.id} style={{
            borderBottom: tab === tabs.name ? '3px solid #ef4f5f' : '',}}>
            <div className='img' style={{ backgroundColor: tab === tabs.name ? tabs.backdrop : 'rgb(235, 231, 231)',
          }}>
              <img key={tabs.id} src={tab === tabs.name ? tabs.active_img : tabs.inactive_img} alt={tabs.name} />
            </div>
            <h3 style={{ color: `${tab === tabs.name ? '#ef4f5f' : 'gray'}` }}>{tabs.name}</h3>
          </div>
        ))
      }
    </div>
      <div className="line"></div>

  </>
}

export default TabOption