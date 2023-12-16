import React from 'react'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBusinessTime,faChartPie,faTruckFast,faUserClock,faHouseLaptop,faPhone } from '@fortawesome/free-solid-svg-icons'
import AboutImage from '../../assets/about/about_img.jpg'

function About() {

 // Icons
 const faBusinessIcon = <FontAwesomeIcon icon={faBusinessTime}/>
 const faChartPieIcon = <FontAwesomeIcon icon={faChartPie}/>
 const faTruckFastIcon = <FontAwesomeIcon icon={faTruckFast}/>
 const faUserClockIcon = <FontAwesomeIcon icon={faUserClock}/>
 const faHouseLaptopIcon = <FontAwesomeIcon icon={faHouseLaptop}/>
 const faPhoneIcon = <FontAwesomeIcon icon={faPhone}/>
  return (
    <>
      <section id='about'>
        <div className="container">
            <div className="title_headling">
               <h3>We Provides Stortage Remarkable Ideas</h3>
               <p>
                Ut aut reiciendis voluptatibus maiores alias consequator aut preferndis doloribus
                asperiores repellat.
               </p>
            </div>
            <div className="about_box_wrapper">
                <div className="about_box">
                    <div className="about_icon">
                      {faBusinessIcon }
                    </div>
                    <div className="about_content">
                        <h5>Development</h5>
                        <p>
                         Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque
                         laudan sit accusa.
                        </p>
                    </div>
                </div>

                <div className="about_box">
                    <div className="about_icon green_icon">
                      {faChartPieIcon  }
                    </div>
                    <div className="about_content">
                        <h5>Integration</h5>
                        <p>
                         Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque
                         laudan sit accusa.
                        </p>
                    </div>
                </div>

                <div className="about_box">
                    <div className="about_icon blue_icon">
                      {faTruckFastIcon}
                    </div>
                    <div className="about_content">
                        <h5>Branding</h5>
                        <p>
                         Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque
                         laudan sit accusa.
                        </p>
                    </div>
                </div>
            </div>
            <div className="about_box_details">
                <div className="about_col">
                    <div className="about_image">
                        <img src={AboutImage} alt="about" className='about_main'/>
                    </div>
                    <div className="img_info_box">
                        <h6 className="img_info_title">GET A PRICE QUOTE TODAY</h6>
                        <p>Nemo enim ipsam oluptetum quia oluptas <br /> sit aspernatur aut odit aut fugit.</p>
                        <a href="/">{faPhoneIcon} <span>1-800-654-3210</span></a>
                    </div>
                </div>
                <div className="about_col more_space">
                    <h3>We have Business skills that will increase your earnings.</h3>
                     <p> 
                      Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque
                      laudan sit accusa.
                     </p>
                     <div className="grid_info">
                        <div className="icon">{faUserClockIcon}</div>
                        <div className="detail">
                            <h4>Start your own business in minutes</h4>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque
                               laudan sit accusa.</p>
                        </div>
                     </div>

                     <div className="grid_info">
                        <div className="icon green_icon">{faHouseLaptopIcon}</div>
                        <div className="detail">
                            <h4>Open a business account online</h4>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque
                               laudan sit accusa.</p>
                        </div>
                     </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default About