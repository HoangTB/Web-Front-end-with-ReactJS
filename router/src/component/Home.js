import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <Carousel variant="dark">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://top10danang.vn/wp-content/uploads/2022/10/hinh-anh-da-nang-1.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://phunugioi.com/wp-content/uploads/2020/11/hinh-anh-thanh-pho-da-nang.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://media.vneconomy.vn/images/upload/2021/11/13/f1e2ce6a-64b4-4915-a80a-ac1a2ec6324a.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
}

export default Home;