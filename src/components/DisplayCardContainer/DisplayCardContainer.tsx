import DisplayCard from '../DisplayCard/DisplayCard';
import './DisplayCardContainer.css'

const DisplayCardContainer = () => {
  return (
    <div className='DisplayCardContainer'>
      <DisplayCard/>
      <DisplayCard/>
      <DisplayCard/>
    </div>
  )
}

export default DisplayCardContainer;