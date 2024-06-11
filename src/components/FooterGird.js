import React from 'react';
import './FooterGrid.css'
import spotify from './media/spotify.png'
import soundclound from './media/soundcloud.png'
import youtube from './media/youtube.png'
import insta from './media/insta.png'
import smlogo from './media/SMlogo.webp'
const FooterGrid = () => {
  return (
    <div className="footer_grid">
      <div className="smlogo">
        <div className="smlogo_img">
          <img src={smlogo} alt="smlogo" />
        </div>
      </div>
      <div className="copyright">
        <div className="icons">
          <div><a href="/@"><img className="idk" src={spotify} alt="spotify" /></a></div>
          <div><a href="/@"><img className="idk" src={soundclound} alt="soundcloud" /></a></div>
          <div><a href="/@"><img className="idk" src={youtube} alt="youtube" /></a></div>
          <div><a href="/@"><img className="idk" src={insta} alt="instagram" /></a></div>
          
        </div>
        <div className="copyright_info">
          <p style={{ color: 'white' }}>© Copyright 2023 Seedhe Maut - Best In The Business</p>
        </div>
      </div>
      <div className="smtitle">
        <h1 className="smtitle_h1" style={{ fontFamily: 'Rock Salt', color: 'white' }}>SeedheMaut</h1>
      </div>
    </div>
  );
};

export default FooterGrid;


