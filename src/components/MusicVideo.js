import React from 'react';
import './MusicVideo.css';

const MusicVideo = () => {
  return (
    <div className="music_video">
      <div className="music_video_content">
        <div className="music_heading">
          <h2 className="mv_heading">Music Video</h2>
          <p className="mv_desc">
            "Immerse yourself in the groundbreaking world of Indian hip-hop with Seedhe Maut, the pioneers who've redefined the genre. Experience the raw energy and lyrical prowess as you explore their latest music videos. Let the beats speak for themselves, as Seedhe Maut continues to shape the future of hip-hop in India. Get ready for a musical journey like no other!"
          </p>
        </div>
        <div className="music_grid">
          {/* <!-- card 1 --> */}
          <div className="music_card">
            <div className="music_video">
              <iframe
                className="video"
                src="https://www.youtube.com/embed/hJfQ-J6SLlk?si=24kBQXJSdy-FxFzR&amp;start=33"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="music_info">
              <div className="music_title">
                <h3>Dikkat-Seedhemaut</h3>
              </div>
              <div className="music_desc">
                <p>
                  Dive into Seedhe Maut's 'Dikkat' a fierce anthem showcasing the duo's lyrical prowess and raw beats. Experience the unfiltered intensity of Indian hip-hop as Seedhe Maut commands your attention with this electrifying track
                </p>
              </div>
            </div>
          </div>
          {/* <!-- card 2 --> */}
          <div className="music_card">
            <div className="music_video">
              <iframe
                className="video"
                src="https://www.youtube.com/embed/7pNo-geT_MA?si=6Hr41CSIOx-D1-cl&amp;start=23"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="music_info">
              <div className="music_title">
                <h3>Brand New-Seedhemaut</h3>
              </div>
              <div className="music_desc">
                <p>
                  "Brand New" is not just a song; it's a sonic journey that introduces a new chapter in Seedhe Maut's musical narrative. With each verse and every beat, experience the innovation and authenticity that define Seedhe Maut's unmistakable style.
                </p>
              </div>
            </div>
          </div>

          <div className="music_card">
            <div className="music_video">
              <iframe
                className="video"
                src="https://www.youtube.com/embed/adhIpm4nwKU?si=aGYfHjnXS8CsIPGj&amp;start=23"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="music_info">
              <div className="music_title">
                <h3>I Don't Miss That Life - Seedhemaut</h3>
              </div>
              <div className="music_desc">
                <p>
                  a powerful anthem encapsulating their journey and resilience. With gritty beats and raw lyricism, the track is a bold declaration of moving forward, leaving behind the past. Feel the emotion and groove to the rhythm as Seedhe Maut delivers another unforgettable musical experience.
                </p>
              </div>
            </div>
          </div>

          <div className="music_card">
            <div className="music_video">
              <iframe
                className="video"
                src="https://www.youtube.com/embed/GMGi2p63ga0?si=Dy0kvSE41RR5rE4p&amp;start=2"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="music_info">
              <div className="music_title">
                <h3>Nadaan-Seedhemaut</h3>
              </div>
              <div className="music_desc">
                <p>This track weaves a tapestry of emotion through its evocative beats and poignant lyrics. Seedhe Maut takes you on a journey, capturing the essence of innocence and vulnerability. "Nadaan" is not just a song; it's a heartfelt expression that resonates with the listener.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicVideo;

