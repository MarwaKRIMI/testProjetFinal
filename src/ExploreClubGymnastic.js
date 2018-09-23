import React, { Component } from 'react';
import { Carousel, CarouselInner, CarouselItem } from 'mdbreact';
import './App.css'
import image1 from './images/201305291157-full.jpg';
import image2 from './images/cr.jpg';
import image3 from './images/event1.jpg';
import image4 from './images/event3.jpg';
import image5 from './images/floor.jpg';
import image6 from './images/gym-group.jpg';
import image7 from './images/img-etirements.jpg';
import image8 from './images/little_gym1.jpg';
import image9 from './images/registration-960x322.jpg';
import image10 from './images/wissem-herzi.jpg';
import image11 from './images/1111.jpg';


class ExploreClubGymnastic extends Component {

  render(){
    return(
      <div>
        <div>
         <i> <h1 style={{textAlign:'center',marginTop:'50px', marginBottom:'50px',color:'#1E90FF',
        fontWeight:'bold'}}>CLUB GYMNASTIQUE</h1></i>
          </div>
      <div className="container mt-8">
        <div className="row">
          <div className="col-md-12">
            <Carousel 
              activeItem={1}
              length={11}
              showControls={true}
              showIndicators={false}
              className="z-depth-1">
              <CarouselInner>
                <CarouselItem itemId="1">
                <img className="video-fluid d-block" style={{width:'1400px',height:'600px'}}  src={image1}/>
                </CarouselItem>
                <CarouselItem itemId="2">
                  <img className="video-fluid d-block" style={{width:'1400px',height:'600px'}}src={image2}/>
                   
               
                </CarouselItem>
                <CarouselItem itemId="3">
                  <img className="video-fluid d-block" style={{width:'1400px',height:'600px'}}  src={image3}/>
                
                  
                </CarouselItem>
                <CarouselItem itemId="4">
                  <img className="video-fluid d-block" style={{width:'1400px',height:'600px'}}  src={image4}/>
                
                  
                </CarouselItem>
                <CarouselItem itemId="5">
                  <img className="video-fluid d-block" style={{width:'1400px',height:'600px'}}  src={image5}/>
                
                  
                </CarouselItem>
                <CarouselItem itemId="6">
                  <img className="video-fluid d-block" style={{width:'1400px',height:'600px'}}  src={image6}/>
                
                  
                </CarouselItem>
                <CarouselItem itemId="7">
                  <img className="video-fluid d-block" style={{width:'1400px',height:'600px'}}  src={image7}/>
                
                  
                </CarouselItem>
                <CarouselItem itemId="8">
                  <img className="video-fluid d-block" style={{width:'1400px',height:'600px'}}  src={image8}/>
                
                  
                </CarouselItem>
                <CarouselItem itemId="9">
                  <img className="video-fluid d-block" style={{width:'1400px',height:'600px'}}  src={image9}/>
                
                  
                </CarouselItem>
                <CarouselItem itemId="10">
                  <img className="video-fluid d-block" style={{width:'1400px',height:'600px'}}  src={image10}/>
                
                  
                </CarouselItem>
                <CarouselItem itemId="11">
                  <img className="video-fluid d-block" style={{width:'1400px',height:'600px'}}  src={image11}/>
                
                  
                </CarouselItem>
                
             
              </CarouselInner>
            </Carousel>
          </div>
        </div>
      </div>
      <div className='about-peinture' >
  
      <h4>Présentation du Club</h4>
      
      
        <p style={{ textAlign: 'justify',marginLeft: '5%',
    marginRight: '5%',   fontFamily: 'Open Sans',color:'black',border:'1px solid black',padding:'50px'}}>
la section Gymnastique du complexe des jeunes de Sousse  a su s'imposer grâce à un encadrement compétent.

Commençant alors avec une quarantaine de membres,la section Gymnastique et propose actuellement diverses activités telles que : Gymnastique de Compétition et de Loisirs,<br/>
Baby-Gym, Fitness, Hip-Hop, Ragga et touche un public allant de 15 à 35 ans! et permet aux pratiquants d'évoluer et d'accéder aux filières de Haut Niveau.<br/>

Depuis, chaque année, plusieurs gymnastes représentent le club au niveau national sur les compétitions individuelles et par équipes.<br/>

Pratiques compétitives : <br/>


la Gymnastique Artistique Féminine: exercices aux 4 agrès (saut de cheval, barres asymétriques, poutre et sol).<br/>
la Gymnastique Rythmique: pratique gymnique rythmée, chorégraphique et avec le maniement d'engins (le cerceau, la corde, les massues et le ballon).<br/>
l'aérobic : pratique gymniques rythmée<br/>
Le trampoline : discipline acrobatique par excellence.<br/>
Le Tumbling : discipline acrobatique à grande vitesse<br/>
<br/>
Pratiques de loisirs : <br/>
<br/>
<br/>
la Gymnastique Forme Loisir: gymnastique d'entretien pour les adolescent(e)s et les adultes.<br/>
l'école de gym Acro-loisir le mercredi après-midi pour les 6/12 ans.(mixte)<br/>
le trampoline pour les ados et les adultes (deux séances en soirée)<br/>
la Baby-Gym : gymnastique petite enfance pour les 2/6 ans. Notre club a reçu le label petite enfance de la fédération française de gymnastique.<br/>

        </p>
        </div>

   
        <button type="button" class="btn btn-amber">voir la liste des inscrits</button>


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

export default ExploreClubGymnastic;