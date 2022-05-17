import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './InfoBlock.css'



const InfoBlock = ({icon, title, dataInfo}) => {
    return(
        <div className='InfoBlock'>
            <FontAwesomeIcon icon={icon} />
            <div className='contain'>
                <h3>{title}</h3>
                <p>{dataInfo}</p>
            </div>
        </div>
    );
}

export default InfoBlock;