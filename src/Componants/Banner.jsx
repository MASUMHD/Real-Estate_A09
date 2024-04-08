import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '20px',
  
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '500px'
}
const slideImages = [
  {
    url: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/2/8/1/CI_Halstead_History-of-Penthouses-6.jpg.rend.hgtvcom.1280.720.suffix/1518139442662.jpeg',
  },
  {
    url: 'https://w0.peakpx.com/wallpaper/239/158/HD-wallpaper-beautiful-house-luxury-house-luxurious-house-luxurious-home.jpg',
    
  },
  {
    url: 'https://img.pikbest.com/wp/202408/swimming-pool-terrace-and-landscape-garden-in-exquisite-exterior-design-of-house-home-villa-3d-render_9761322.jpg!sw800',
    
  },
];


const Banner = () => {
  return (
    <div className='mt-5 mb-20'>


      <div className="slide-container">
        <Slide >
         {slideImages.map((slideImage, index)=> (
            <div key={index} >
              <div  style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
      
    </div>
  );
};

export default Banner;
