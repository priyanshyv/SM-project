import React from 'react'
import ContainerHeader from './ContainerHeader'
import Content from "./Content"
import MusicVideo from "./MusicVideo"
import MusicContent from "./MusicContent"
import Bio from "./Bio"
import NewsletterContainer from "./NewsletterContainer"
import FooterGrid from "./FooterGird"
const Home = () => {
  return (
    <div className='wrapper'>
      <ContainerHeader></ContainerHeader>
        <Content></Content>
        <MusicContent/>
        <MusicVideo/>
        <Bio></Bio>
        <NewsletterContainer/>
        <FooterGrid/>
    </div>
  )
}

export default Home
