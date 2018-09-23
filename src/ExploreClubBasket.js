import React, { Component } from 'react';
import { Carousel, CarouselInner, CarouselItem } from 'mdbreact';
import './App.css'
import image1 from './images/58debd7d479a4550008b5696.jpg';
import image2 from './images/06362fdc-7698-11e3-87ca-cfcd83175838_original.jpg_h380.jpg';
import image3 from './images/14390625_10154437529094462_4389508975692741080_n.jpg';
import image4 from './images/DSC_0152.JPG';
import image5 from './images/DSC01048.JPG';
import image6 from './images/jeunesse-et-dynamisme-au-bilan-du-basket-club-basse-loire.jpg';



class ExploreClubBasket extends Component {

  render(){
    return(
      <div>
        <div>
        <i> <h1 style={{textAlign:'center',marginTop:'50px', marginBottom:'50px',color:'#1E90FF',
        fontWeight:'bold'}}>CLUB BASKETBALL</h1></i>
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
    présentation:
    Le Basket Club Millois a été créé le 14 juin 1971, sous le statut d’Association loi 1901,<br/>
     à Aix les Milles, un village de 7 000 habitants situé au sud de la commune d’Aix-en-Provence.<br/>
    40 ans plus tard, le “BCMillois” est toujours actif, et a pour vocation de proposer la pratique et <br/>
    l’apprentissage du Basketball, ainsi que la promotion de ce sport dans le Pays d’Aix, et les Bouches-du-Rhône.

    Sous l’impulsion de ses membres, le Basket Club Millois vous invite à pratiquer le basketball tout au long de l’année scolaire (de septembre à juin) dans la catégorie Senior (masculin, féminin et mixte). Retrouver nous au Gymnase Evelyne Castel, à l’entrée du village d’Aix les Milles (Voir le plan).
      Entrainements:<br/>
L'équipe Sénior masculine le mercredi de 20h30 à 22h00.<br/>

L'équipe jeune le mercredi de 19h00 à 20h30.<br/>

Le minibasket le mercredi de 18h00 à 19h00.<br/>
Le minibasket le samedi de 14h00 à 15h30.<br/>

L'équipe Sénior féminine le lundi de 18h00 à 20h00.<br/>

L'équipe Sénior masculine le vendredi de 20h00 à 22h00.<br/>

Horaires	Détails<br/>
9h – 9h30	Déplacements vers les quatre salles<br/>
9h30-11h30	Entrainements techniques par groupe répartis sur les quatre salles<br/>
12h -14h	Déjeuner commun sur Saint-Gély-du-Fesc<br/>
14h-17h	Temps calme + entraînements par équipe ou sortie découverte / ludique<br/>
17h-21h	Match type officiel FFBB de 40 minutes avec arbitre et table de marque pour chaque équipe. Un challenge supplémentaire pour pimenter cette rencontre internationale.<br/>
Après 21h	Retour en famille
LES CONDITIONS<br/>
Le montant du camp est de 250€ par joueur et comprend :<br/>

Une tenue complète d’entraînement<br/>
Les séances d’entraînement par des coachs qualifiés<br/>
Les matchs / les déplacements entre 9h et 21h<br/>
Cinq repas du midi<br/>
L’hébergement au sein des familles des licenciés du Saint Gély Basketball<br/>
Animations


        </p>
        </div>
      
    <h2>La liste des inscrits au club Basketball</h2>

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

export default ExploreClubBasket;