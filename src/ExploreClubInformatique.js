import React, { Component } from 'react';
import { Carousel, CarouselInner, CarouselItem } from 'mdbreact';
import './App.css'
import image1 from './images/160501_nf5ab_moncton-educode_sn635.jpg';
import image2 from './images/352781_fag_13758_14_01_02.jpg';
import image3 from './images/Code-Club-e1486717182355-800x435.jpg';
import image4 from './images/enfants.jpg';
import image5 from './images/IMG_2242.jpg';
import image6 from './images/informatique-615x408.jpg';



class ExploreClubInformatique extends Component {

  render(){
    return(
      <div>
        <div>
        <i> <h1 style={{textAlign:'center',marginTop:'50px', marginBottom:'50px',color:'#1E90FF',
        fontWeight:'bold'}}>CLUB INFORMATIQUE ET MULTIMEDIA</h1></i>
          </div>
      <div className="container mt-8">
        <div className="row">
          <div className="col-md-12">
            <Carousel 
              activeItem={1}
              length={6}
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
               
             
              </CarouselInner>
            </Carousel>
          </div>
        </div>
      </div>
      <div className='about-peinture' >
      <h4>Instructeur : </h4>
      
        <p style={{ textAlign: 'justify',marginLeft: '5%',
    marginRight: '5%',   fontFamily: 'Open Sans',color:'black'}}>
Présentation:
La  section informati que est une filière qui s’inscrit sous les  domaines  scientifiques de l’Association Jeunes Science de Tunisie .<br/>
 Elle  s’est  fixée depuis 2 ans une démarche qui consiste en l’orientation de   l’activité des clubs, répartis dans plusieurs villes en Tunisie , <br/>
 dans  le  domaine du libre. Elle  regroupe des jeunes enthousiastes et passionnés par les nouvelles technologies de l’informatique. Ayant l’esprit créatif et innovateur,<br/> 
   les membres de la section participent régulièrement aux Challenges Informatique et Hackathons et contribuent à la promotion et la  diffusion  de la culture des logiciels libres.<br/>

La vision de la section informatique est de conquérir le sommet des communautés supportant les logiciels libres dans le but d’être l’un des plus importants représentant des logiciels libres à l’échelle nationale.<br/>

Nos Activités:<br/>
Les membres de l’équipe d’informatique peuvent assister à toutes les activités organisées par la section. Celles-ci comprennent notamment :<br/>

Les rencontres des membres de la section :<br/>
Les rencontres ont pour but de présenter les activités à venir, de participer à des ateliers/formations sur l’informatique et de discuter de tout et de rien.<br/>

Les cours, les travaux pratiques, les conférences, etc. :<br/>
Se tiendront chaque samedi du 03 octobre 2015 au 25 juin 2016.<br/>
        </p>
        </div>
      
    <h2>La liste des inscrits au club informatique et multimédia</h2>

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

export default ExploreClubInformatique;