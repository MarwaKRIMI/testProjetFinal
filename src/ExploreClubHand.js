import React, { Component } from 'react';
import { Carousel, CarouselInner, CarouselItem } from 'mdbreact';
import './App.css'
import image1 from './images/58debd7d479a4550008b5696.jpg';
import image2 from './images/06362fdc-7698-11e3-87ca-cfcd83175838_original.jpg_h380.jpg';
import image3 from './images/14390625_10154437529094462_4389508975692741080_n.jpg';
import image4 from './images/DSC_0152.JPG';
import image5 from './images/DSC01048.JPG';
import image6 from './images/jeunesse-et-dynamisme-au-bilan-du-basket-club-basse-loire.jpg';



class ExploreClubHand extends Component {

  render(){
    return(
      <div>
        <div>
        <i> <h1 style={{textAlign:'center',marginTop:'50px', marginBottom:'50px',color:'#1E90FF',
        fontWeight:'bold'}}>CLUB HANDBALL</h1></i>
          </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <Carousel style={{marginLeft:'5%', marginRight:'5%'}}
              activeItem={1}
              length={6}
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
               
             
              </CarouselInner>
            </Carousel>
          </div>
        </div>
      </div>
      <div className='about-peinture' >
      <h4>Instructeur : </h4>
      
        <p style={{ textAlign: 'justify',marginLeft: '5%',
    marginRight: '5%',   fontFamily: 'Open Sans',color:'black'}}>



        </p>
        </div>
      
    <h2>La liste des inscrits au club de peinture</h2>

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

export default ExploreClubHand;