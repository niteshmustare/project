import { Carousel } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import img from '../assets/img.jpg'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/Army.jpg'
import img5 from '../assets/Airforce.jpg'
import img6 from '../assets/Navy.jpeg'
import img7 from '../assets/rajnath.jpg'
import img8 from '../assets/Ajay.jpg'
import img9 from '../assets/cds.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import Figure from 'react-bootstrap/Figure';
import "./defence.css";



export function DefenceContent(){
    return(
      <div>
      <div>
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
        src={img3}
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    </div>
    <div>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
  <div style={{ flex: '0 0 30%', maxWidth: '30%' }}>
    <Figure style={{ textAlign: 'center' }}>
      <Figure.Image
        width={300}
        height={350}
        alt="300x350"
        src={img7}
        style={{ display: 'block', margin: 'auto' }}
      />
      <Figure.Caption style={{ marginTop: '10px' }}><h4>Defence Minister of India</h4></Figure.Caption>
    </Figure>
  </div>
  <div style={{ flex: '0 0 30%', maxWidth: '30%' }}>
    <Figure style={{ textAlign: 'center' }}>
      <Figure.Image
        width={300}
        height={350}
        alt="300x350"
        src={img8}
        style={{ display: 'block', margin: 'auto' }}
      />
      <Figure.Caption style={{ marginTop: '10px' }}><h4>Minister of State in the Ministry of Defence</h4></Figure.Caption>
    </Figure>
  </div>
  <div style={{ flex: '0 0 30%', maxWidth: '30%' }}>
    <Figure style={{ textAlign: 'center' }}>
      <Figure.Image
        width={300}
        height={350}
        alt="300x350"
        src={img9}
        style={{ display: 'block', margin: 'auto' }}
      />
      <Figure.Caption style={{ marginTop: '10px' }}><h4>Chief of Defence Forces</h4></Figure.Caption>
    </Figure>
  </div>
</div>

<h1 class="half-underline">About the Ministry</h1>


<p><h5>The Government of India is responsible for ensuring the defence of India and every part thereof. The Supreme Command of the Armed Forces vests in the President. The responsibility for national defence rests with the Cabinet.</h5></p>
<p><h5>This is discharged through the Ministry of Defence, which provides the policy framework and wherewithal to the Armed Forces to discharge their responsibilities in the context of the defence of the country. The Raksha Mantri (Defence Minister) is the head of the Ministry of Defence.</h5></p>
<p><h5>The principal task of the Defence Ministry is to obtain policy directions of the Government on all defence and security related matters and communicate them for implementation to the Services Headquarters,Inter-Services Organisations,Production Establishments and Research and Development Organisations.It is also required to ensure effective implementation of the Government's policy directions and the execution of approved programmes within the allocated resources. Ministry of Defence comprises of five Departments viz.Department of Defence (DOD), Department of Defence Production (DDP), Department of Defence Research & Development (DDR&D) and Department of Ex-Servicemen Welfare and also Finance Division</h5></p>
</div>





<div>
  <br/>
  <div class="card">
    <div class="card-body text-center">
        <h3>IMPORTANT ORGANIZATION</h3>
    </div>
</div>

<div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img4}  />
        <Card.Body>
          <Card.Title>INDIAN ARMY</Card.Title>
          <Card.Text>
          The motto of the Indian army is 'Seva Paramo Dharma' and it means 'Service Before Self'
          </Card.Text>
          <Button variant="primary" href="https://indianarmy.nic.in/">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src= {img5} />
        <Card.Body>
          <Card.Title>INDIAN AIR FORCE</Card.Title>
          <Card.Text>
          The Motto of Indian Air Force (Touch the sky with Glory) has been taken from eleventh chapter of the Gita
          </Card.Text>
          <Button variant="primary" href="https://indianairforce.nic.in/">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img6}  />
        <Card.Body>
          <Card.Title>INDIAN NAVY</Card.Title>
          <Card.Text>
          The motto of the Indian Navy “Sam no Varunah” (Be auspicious unto us Oh Varuna) 
          </Card.Text>
          <Button variant="primary" href="https://indiannavy.nic.in/">Go somewhere</Button>
        </Card.Body>
      </Card>
      </div>
</div>
</div>
    );
}