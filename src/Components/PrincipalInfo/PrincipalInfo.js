import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './PrincipalInfo.css'
import { useState } from 'react';

const PrincipalInfo = ({data}) =>{
    const [degrees, setDegrees] = useState(true)
    const [degreesValues, setDegreesValues] = useState(`${Math.floor(data.data?.main.temp - 273.15)} °C`)
    

    
    
    console.log(data)
    return(
        <div className='PrincipalInfo'>
            <div className='title'>
                <FontAwesomeIcon icon={faLocationDot} />
                <h2>{`${data.data?.name}, ${data.data?.sys.country}`}</h2>
            </div>
            <div className='temperature'>
                <div className='infoTemp'>
                <img src={`http://openweathermap.org/img/wn/${data.data?.weather[0].icon}@2x.png`} alt = ''/>
                <h1>{degrees? `${Math.floor(data.data?.main.temp - 273.15)} °C` : `${Math.floor(((data.data?.main.temp - 273.15)*1.8)+32)} °F`}</h1>
                </div>
                <button onClick={() => setDegrees(!degrees) }>Celsius/Farenheit</button>
            </div>
        </div>
    );
}



export default PrincipalInfo;
