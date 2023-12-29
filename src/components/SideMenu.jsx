import  subscription from '../assets/subscription_icon.svg' ;
import papayaMusic from '../assets/papaya_music_icon.svg' ;
import papaya from '../assets/Papaya.svg' ;
import download from '../assets/download_icon.svg' ;
import history from '../assets/history_icon.svg' ;
import library from '../assets/library_icon.svg' ;
import video_icon from '../assets/video_icon.svg' ;
import watchLater from '../assets/watch_later_icon.svg' ;
import DesignCode from '../assets/DesignCodeLogo.svg' ;
import Figma from '../assets/FigmaLogo.svg'
import Sketch from '../assets/SketchLogo.svg'
import Spline from '../assets/SplineLogo.svg'
import home from '../assets/home_icon.svg' ;
import browser from '../assets/Browser Button.svg'
import hamburger from '../assets/hamburger.svg'
import chevronDown from '../assets/chevron_down.svg'

import SideMenuSection from "./SideMenuSection";
const SideMenu = () => {
    
    const nav = [
      {
        icon: home,
        name: 'Home',
      },   
      {
        icon: video_icon,
        name: 'Shorts',
      },   
      {
        icon: subscription,
        name: 'Subscriptions',
      },   
      {
        icon: papayaMusic,
        name: 'Papaya Music',
      },   
    ]
    const section1 = [ 
        {
            icon:library,
            name:'Library'
        },
        
        {
            icon: history,
            name:'History'
        },
        {
            icon: video_icon,
            name:'Your Video'
        }, 
        {
            icon: watchLater,
            name:'Watch Later'
        }, 
        {
            icon: download,
            name:'Downloads'
        }, 
        {
            icon: chevronDown,
            name:'Show More'
        }
    ]
    const section2 = [
        {
            icon: DesignCode,
            name:'Design Code'
        }, 
        {
            icon: Figma,
            name:'Figma'
        }, 
        {
            icon: Sketch,
            name:'Sketch'
        }, 
        {
            icon: Spline,
            name:'Splina'
        }
    ]
return(
    <div className='sidemenu'>
      <img className='browerbutton' src={browser} alt="browser button" />
      <button>
        <img src={hamburger} alt="hamburger" />
        <img src={papaya} alt="Papaya Logo" />
      </button>
      <nav>
        <SideMenuSection items={nav} heading = '' />
        <SideMenuSection items={section1} heading = "My Channel"/>
        <SideMenuSection items={section2} heading = 'Subscriptions' />
      </nav>
    </div>
)
}
export default SideMenu;