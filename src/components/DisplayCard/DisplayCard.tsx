import image from '../../logo.svg';
import './DisplayCard.css';

const DisplayCard = () => {
  return (
    <div className='DisplayCard-container'>
      <img src={image} className='DisplayCard-image' alt='image' />
      <div className='DisplayCard-text'>filename</div>
    </div>
  )
}

export default DisplayCard;