import React from 'react';
import "./Content.css"
import smImage from "./media/seedhe-maut (1).avif";
import { useNavigate } from 'react-router-dom';
const Content = () => {
  const navigate = useNavigate();
  function clickHandler(){
    navigate("/tour");
  }
  return (
    <div className="content">
      <div className="main_content">
        <div className="content_left">
          <p id="section_label" style={{ color: 'rgb(103, 101, 99)' }}>Tera Bhai SeedheMaut</p>
          <h1 id="section_title" style={{ color: '#FF9901' }}>BEST IN THE BUSINESS SEEDHEMAUT</h1>
          <span id="section_desc">
            Ek aur <br />
            Mujhe ghar chahiye ek aur <br />
            Mast deal chahiye ek aur <br />
            Hain jootey padhe 20 chahiye ek aur <br />
            Bhooka hu plate chaiye ek aur <br />
            Pet bhara, pet chaiye ek aur <br />
            Vo bolte hai "jeetega kitna?"
          </span>
          <div className="maincontent_button">
            <button className="button-54" role="button" onClick={clickHandler}>Tour Tickets</button>
          </div>
        </div>
        <div className="content_right">
          <img id="sm_img" src={smImage} alt="seedhe-maut" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Content;

