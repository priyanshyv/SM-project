import React from 'react'
import "./Bio.css"
import smImage from "./media/seedhe-maut (2).avif";
const Bio = () => {
  return (
    <div className="bio">
            <div className="bio_grid">
                <div className="bio_title">
                    <h1 className="bio_title_h1">Biography</h1>
                </div>
    
                <div className="bio_quote">
                    <h3 className="bio_quote_h3">“For the last decade or so, the story of Indian Rap has been synonymous with Mumbai-based gully rap. But that’s set to change with Seedhe Maut.” – GQ India </h3>
                </div>
    
                <div className="bio_img">
                    <img className="sm_img2" src={smImage} alt="sm-image"/>
                </div>
    
                <div className="bio_desc">
                   <p className="bio_desc_para">Seedhe Maut represent the next stage in the evolution of the capital’s hip-hop sound. Having mastered the art of delivering razor sharp, combative and witty rhymes, the duo are following in the trailblazing footsteps of international hip-hop collectives such as Run The Jewels, Clipse, Black Hippy, Mobb Deep, Blackstar and more. Their debut album Bayaan, made in collaboration with Sez On The Beat, earned widespread critical acclaim and has earmarked them as one of the acts to watch out for in 2019. Singles such as Shaktimaan and Kyu, who offer an insight into the frustrations of the Indian youth with the opportunities available to them, are staples across the country’s club circuit.
    
                    The duo are set to take 2020 and beyond by storm and are tipped by many to be the next big act to break out of the burgeoning Indian hip hop scene.</p>
                </div>
            </div>
        </div>
  )
}

export default Bio;
