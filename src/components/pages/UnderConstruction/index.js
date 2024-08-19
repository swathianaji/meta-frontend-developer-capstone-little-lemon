import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import comingSoonImage from './coming_soon.jpg';
import './index.css';

const UnderConstruction = () => {
  return (
    <div className="container under-construction">
      <img src={comingSoonImage} />
    </div>
  );
};

export default UnderConstruction;
