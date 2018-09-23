import React, { Component } from 'react';
import { Carousel, CarouselInner, CarouselItem } from 'mdbreact';
import './App.css'
import image1 from './images/04_9_14_2_1.jpg';
import image2 from './images/7d22936d6aa2617ecd6229316f7f43b2.jpg';
import image3 from './images/belles-femmes-exercant-a-nice-aerobic-fitness-club-g194ca.jpg';
import image4 from './images/fitness-first-aerobic-club-subhash-nagar-dehradun-dance-classes-ipdpnz1.jpg';
import image5 from './images/IMG_3837_82141.jpg';
import image6 from './images/maxresdefault (1).jpg';
import image7 from './images/maxresdefault.jpg';
import image8 from './images/step-aerobics.jpg';


class ExploreClubAerobic extends Component {

  render(){
    return(
      <div>
        <div>
        <i> <h1 style={{textAlign:'center',marginTop:'50px', marginBottom:'50px',color:'#1E90FF',
        fontWeight:'bold'}}>CLUB AEROBIQUE</h1></i>
          </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <Carousel style={{marginLeft:'5%', marginRight:'5%'}}
              activeItem={1}
              length={8}
              showControls={true}
              showIndicators={false}
              className="z-depth-1">
              <CarouselInner>
                <CarouselItem itemId="1">
                <img className="video-fluid d-block" style={{width:'1000px',height:'600px'}}  src={image1}/>
                </CarouselItem>
                <CarouselItem itemId="2">
                  <img className="video-fluid d-block" style={{width:'1000px',height:'600px'}}src={image2}/>
                   
               
                </CarouselItem>
                <CarouselItem itemId="3">
                  <img className="video-fluid d-block" style={{width:'1000px',height:'600px'}}  src={image3}/>
                
                  
                </CarouselItem>
                <CarouselItem itemId="4">
                  <img className="video-fluid d-block" style={{width:'1000px',height:'600px'}}  src={image4}/>
                
                  
                </CarouselItem>
                <CarouselItem itemId="5">
                  <img className="video-fluid d-block" style={{width:'1000px',height:'600px'}}  src={image5}/>
                
                  
                </CarouselItem>
                <CarouselItem itemId="6">
                  <img className="video-fluid d-block" style={{width:'1000px',height:'600px'}}  src={image6}/>
                
                  
                </CarouselItem>
                <CarouselItem itemId="7">
                  <img className="video-fluid d-block" style={{width:'1000px',height:'600px'}}  src={image7}/>
                
                  
                </CarouselItem>
                <CarouselItem itemId="8">
                  <img className="video-fluid d-block" style={{width:'1000px',height:'600px'}}  src={image8}/>
                
                  
                </CarouselItem>
             
              </CarouselInner>
            </Carousel>
          </div>
        </div>
      </div>
      <div className='about-aerobic' >
      <h4>Instructeur : </h4>
      
        <p style={{ textAlign: 'justify',marginLeft: '5%',
    marginRight: '5%',   fontFamily: 'Open Sans',color:'black'}}>



        </p>
        </div>
      
    <h2>La liste des inscrits au club aerobique</h2>

        <table>
  <thead>
    <tr>
      <th>Nom</th>
      <th>Prénom</th>
      <th>Téléphone</th>
      <th>Email</th>
     
      <th></th>
    </tr>
  </thead>

    <tr>
      <td>Marwa</td>
      <td>KRIMI</td>
      <td>20000000</td>
      <td>Marwa@gmail.com</td>
    
      <td><button>Supprimer</button></td>
    </tr>
    <tr>
      <td>Marwa</td>
      <td>KRIMI</td>
      <td>20000000</td>
      <td>Marwa@gmail.com</td>
    
      <td><button>Supprimer</button></td>
    </tr>

      <tr>
      <td>Marwa</td>
      <td>KRIMI</td>
      <td>20000000</td>
      <td>Marwa@gmail.com</td>
     
      <td><button>Supprimer</button></td>
    </tr>

</table>

  
          </div>

    );
  }
}

export default ExploreClubAerobic;