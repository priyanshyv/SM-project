import React from 'react';
import './MusicContent.css';
import bayaan from './media/bayaansm.jpeg'
import n from './media/n sm.jpeg'
import nayaab from './media/nayaab-sm.jpeg'
import lunchbreak from './media/lunch-breaksm.jpeg'
const MusicContent = () => {
  return (
    <div className="music_content">
      <h2 id="music_content_title">Album/Mixtape Collection</h2>
      <div className="album_grid">
        <div className="item1">
          <img id="album_logo" src={bayaan} alt="bayaan" />
          <span id="logo_text">Bayaan</span>
        </div>

        <div className="item1">
          <img id="album_logo" src={n} alt="n" />
          <span id="logo_text">N</span>
        </div>

        <div className="item1">
          <img id="album_logo" src={nayaab} alt="naayab" />
          <span id="logo_text">Nayaab</span>
        </div>

        <div className="item1">
          <img id="album_logo" src={lunchbreak} alt="lunch-break" />
          <span id="logo_text">Lunch-Break</span>
        </div>
      </div>
    </div>
  );
};

export default MusicContent;

