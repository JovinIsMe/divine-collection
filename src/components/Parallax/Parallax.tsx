import './Parallax.css';

// Ref: https://codepen.io/amustill/pen/AJXYwX
const Parallax = () => {
  var maxScroll: number;
  window.addEventListener('scroll', function() {
    var scrolled = window.pageYOffset;
    document.getElementsByTagName("html")[0].style.fontSize = `${(scrolled / maxScroll) * 7}px`;
    maxScroll = window.outerHeight - window.innerHeight;
  });

  return (
    <div>
      <img src="https://source.unsplash.com/category/food/400x400" className='parallax image-1' alt={"unsplash400"}/>
      <img src="https://source.unsplash.com/category/food/500x500" className='parallax image-2' alt={"unsplash500"}/>
      <img src="https://source.unsplash.com/category/food/600x600" className='parallax image-3' alt={"unsplash600"}/>
      <img src="https://picsum.photos/500" className='parallax image-4' alt={"picsum500"}/>
      <img src="https://picsum.photos/600?blur" className='parallax image-5' alt={"picsum600blur"}/>
    </div>
  )
}

export default Parallax;