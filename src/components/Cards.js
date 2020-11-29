import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>All Projects</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='card__item'>
              <CardItem
                src = '/Images/ServingsUpOpt.png'
                text = 'ServingsUp'
                label = 'iOS'
                url = 'https://github.com/iamelias/servingsup-app'
                target = '_blank'
                />
              <CardItem
                src = '../Images/BinDecHexWebOpt.png'
                text = 'BinDecHex'
                label = 'iOS'
                url = 'https://github.com/iamelias/bindechex-swiftui'
                target = '_blank'
                />
              <CardItem
                src = '../../Images/DietCardsWebOpt.png'
                text = 'DietCards(private)'
                label = 'iOS'
                url = 'https://github.com/iamelias/dietcards-app'
                target = '_blank'

                />
            </ul>
            <ul className='card__item'>
              <CardItem
                src = './Images/GetCoordinatesOpt.png'
                text = 'GetCoordinates'
                label = 'iOS'
                url = 'https://github.com/iamelias/getcoordinates-app'
                target = '_blank'
                />
              <CardItem
                src = '/Images/StarDayWebOpt.png'
                text = 'StarDay'
                label = 'iOS'
                url ='https://github.com/iamelias/appointments-app'
                target = '_blank'
                />
              <CardItem
                src = '/Images/QuickPDFWebOpt.png'
                text = 'QuickPDF'
                label = 'iOS'
                url = 'https://github.com/iamelias/quickpdf-app'
                target = '_blank'
                />
            </ul>
            <ul className='card__item'>
              <CardItem
                src = '/Images/LocationShareAppOpt.png'
                text = 'LocationShareApp'
                label = 'iOS'
                url = 'https://github.com/iamelias/location-map-app'
                target = '_blank'
                />
              <CardItem
                src = '/Images/FlickrAlbumWebOpt.png'
                text = 'FlickrAlbumApp'
                label = 'iOS'
                url = 'https://github.com/iamelias/flickr-album-app'
                target = '_blank'
                />
              <CardItem
                src = '/Images/MemeAppWebOpt.png'
                text = 'MemeApp'
                label = 'iOS'
                url = 'https://github.com/iamelias/meme-gen-app'
                target = '_blank'
                />
            </ul>
            <ul className='card__item'>
              <CardItem
                src = '/Images/VoiceChangeWebOpt.png'
                text = 'VoiceChangeApp'
                label = 'iOS'
                url = 'https://github.com/iamelias/voice-change-app'
                target = '_blank'
                />
            </ul>
          </div>
        </div>
    </div>
  );
}

export default Cards;
