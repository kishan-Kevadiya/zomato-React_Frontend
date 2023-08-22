import React,{useState,useEffect} from 'react'
import Header from '../../components/common/header/Header'
import TabOption from '../../components/common/tabOption/TabOption'
import Footer from '../../components/common/footer/Footer'
import Delivery from '../../components/delivery/Delivery'
import DiningOut from '../../components/Dining Out/DiningOut'
import Nightlife from '../../components/Nightlife/Nightlife'
import Loader from '../Loader/Loader'

const HomePage = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);



    const [tab,setTab] = useState('Delivery')

  return (

    <div>
<div className="loader">
{loading === true && <Loader/>}
</div>


        <Header/>
        <TabOption tab={tab} setTab={setTab} />
        {/* its changed compo */}
{getCorrectScreen(tab)}

      <div className="footer" style={{
        backgroundColor:'rgb(209, 210, 212)',
        paddingTop:'5vh'
      }}>
      <Footer/>
      </div>
    </div>
  )
}

const getCorrectScreen=(tab) => {

  
    switch (tab) {
        case 'Delivery':
        return <Delivery/>
            // break;
        case 'Dining Out':
        return <DiningOut/>
            // break;
        case 'Nightlife':
        return <Nightlife/>
            // break;
    
        default:
            return <Delivery/>
            // break;
    }
}

export default HomePage