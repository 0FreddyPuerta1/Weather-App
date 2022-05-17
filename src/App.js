import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { faCloud, faDroplet, faEye } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import PrincipalInfo from './Components/PrincipalInfo/PrincipalInfo';
import InfoBlock from './Components/InfoBlock/InfoBlock';

function App() {
 const [data, setData] = useState({})
  useEffect(()=>{
    
    function success(pos) {
      var crd = pos.coords;
    
      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);

      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=2628082de1344f94e97b37270a143444`)
        .then(res => setData(res))
    }
    
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
    navigator.geolocation.getCurrentPosition(success, error);
  }, [])
  return (
    <div className="App">
      <div className='container'>
      <PrincipalInfo data={data}/>
      <div className='AditionalInfo'>
      <InfoBlock 
      icon={faDroplet}
      title="Humidity"
      dataInfo={`${data.data?.main.humidity}%`}
      />
      <InfoBlock 
      icon={faCloud}
      title="Clouds"
      dataInfo={`${data.data?.clouds.all}%`}
      />
      <InfoBlock 
      icon={faEye}
      title="Visibility"
      dataInfo={`${data.data?.visibility / 1000} Km`}
      />
      </div>
      </div>
      
    </div>
  );
}

export default App;
