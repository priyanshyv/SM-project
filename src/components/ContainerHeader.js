import React from 'react'
import "./ContainerHeader.css"
import addtocart from "./media/add to cart.png"
import threeslide from "./media/threeslide.png"
const Container_header = () => {
  return (
    <div className="container_header">
    <div className="header">
        <div className="title">
            
            <div className="title_name">
                SeedheMaut
            </div>
        </div>
        <div className="middleMenu">
            <div className="home">
                <a href="/">Home</a>
            </div>
            <div className="merch">
                <a href="/merch">Merchandise</a>
            </div>
            <div className="music">
                <a href="/artists">DL91</a>
            </div>
            <div className="event">
                <a href="/tour">Event</a>
            </div>
        </div>
        <div className="add">
            <a href="/merch" className="addtocart">
                <img src={addtocart} className="addto" alt="addtocart" loading="lazy" />
            </a>
            <a href="/form" className="three">
                <img src={threeslide} className="threeslide" alt="threeslide" loading="lazy" />
            </a>

        </div>
    </div>
    </div>
  );
};

export default Container_header;
