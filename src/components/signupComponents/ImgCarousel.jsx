import Carousel from 'react-bootstrap/Carousel';
// Carousel Images
import carouselImg1 from './carouselImages/car-1.png';
import carouselImg2 from './carouselImages/car-2.png';
import carouselImg3 from './carouselImages/car-3.png';


function ImgCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={carouselImg1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Hurry!</h3>
          <p>Sign Up Noww!!!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={carouselImg2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Get Hired!</h3>
          <p>Get Hired on Our Platform</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={carouselImg3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Top Companies</h3>
          <p>
              Job Openings of 1000+ Leading Companies
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImgCarousel;