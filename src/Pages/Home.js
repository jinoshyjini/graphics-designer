import React from 'react';
import Background from '../Assets/Images/Background.png';
import Icon from '../Assets/Images/Portfolio Icon-14.png';
import '../Assets/Css/Home.css';
import { Button } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Designer from '../Assets/Images/personal.png';
import Photoshop from '../Assets/Images/Portfolio Icon-02.png';
import Illustrator from '../Assets/Images/Portfolio Icon-04.png';
import AfterEffects from '../Assets/Images/Portfolio Icon-05.png';
import PremierePro from '../Assets/Images/Portfolio Icon-03.png';
import Lightroom from '../Assets/Images/Portfolio Icon-07.png';
import Audition from '../Assets/Images/Portfolio Icon-06.png';
import Canva from '../Assets/Images/Portfolio Icon-10.png';
import Videography from '../Assets/Images/Portfolio Icon-11.png';
import Photography from '../Assets/Images/Portfolio Icon-08.png';

function Home() {

    const Technology = [
        { tech: "Brand Identity Designer" },
        { tech: "Digital Design" },
        { tech: "Print Design" },
        { tech: "Typography" },
        { tech: "Illustration" },
        { tech: "Motion Graphics" },
        { tech: "Logo Design" },
        { tech: "Branding" },
        { tech: "Social Media Ad" },
        { tech: "Video Editing" },
        { tech: "Audio Editing" },
        { tech: "2D Animation" }
    ]

    const Skills = [
        { skill: "Adobe Photoshop", image: <img src={Photoshop} className='skill-icon' alt="Adobe Photoshop" /> },
        { skill: "Adobe Illustrator", image: <img src={Illustrator} className='skill-icon' alt="Adobe Illustrator" /> },
        { skill: "Adobe After Effects", image: <img src={AfterEffects} className='skill-icon' alt="Adobe After Effects" /> },
        { skill: "Adobe Premiere Pro", image: <img src={PremierePro} className='skill-icon' alt="Adobe Premiere Pro" /> },
        { skill: "Adobe Lightroom", image: <img src={Lightroom} className='skill-icon' alt="Adobe Lightroom" /> },
        { skill: "Adobe Audition", image: <img src={Audition} className='skill-icon' alt="Adobe Audition" /> },
        { skill: "Canva", image: <img src={Canva} className='skill-icon' alt="Canva" /> },
        { skill: "Videography", image: <img src={Videography} className='skill-icon' alt="Videography" /> },
        { skill: "Photography", image: <img src={Photography} className='skill-icon' alt="Photography" /> }
    ]

    return (
        <>
            <div className='section-container pb-5'>
                <div className="home-container">
                    <img
                        src={Background}
                        alt="Working"
                        className="home-bg"
                    />
                    <div className="home-content">
                        <div className='home-hlo'>Hello Everyone <img src={Icon} alt="Hello" className="home-icon" /></div>
                        <p className='home-person'>I'm Jetly Johnson</p>
                        <p className='home-txt'>Graphic Designer & Video Editor</p>
                        <a href="/Jetly_Johnson_CV.pdf" download>
                            <Button variant="outlined" className='home-btn'>Download CV</Button>
                        </a>
                        <div className='contact-info'>
                            <div className='contact-txt'>
                                <WhatsAppIcon className="contact-icon" /> +971 54 422 0855
                            </div>
                            <div className='contact-txt'>
                                <MailOutlineIcon className="contact-icon" /> jetlyjohn1212@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section'>
                    <div className='about-container'>
                        <img
                            src={Designer}
                            alt="Graphic Designer & Video Editor"
                            className="designer"
                        />
                        <div className='dsgn'>
                            <div className='designer-abt'>About Me
                                <div className='line'></div>
                            </div>
                            <p className='designer-txt'>I'm a Graphic Designer with over 6 years of experience turning ideas into impactful visuals.
                                My passion lies in creating designs that not only look great but also tell a story and achieve results.
                            </p>
                            <p className='designer-txt'>I've had the opportunity to work across various industries, from real estate to advertising,
                                which has allowed me to develop a diverse skill set. Whether it's branding, digital marketing, or video editing,
                                I approach each project with creativity and strategic thinking.</p>
                            <p className='designer-txt'>I'm always exploring new trends and technologies to keep my work fresh and innovative. When I'm
                                not designing, I enjoy learning new skills and finding inspiration in the world around me.</p>
                            <div className='designer-btn'>
                                <a href="/Jetly_Johnson_CV.pdf" download>
                                    <Button variant="outlined" className='home-btn'>Download CV</Button>
                                </a>
                                <Button variant="outlined" className='home-btn'>Portfolio</Button>
                            </div>
                        </div>
                    </div>
                    <div className='strength-container'>
                        <div className='designer-abt'>What I do
                            <div className='line'></div>
                        </div>
                        <div className='row'>
                            {
                                Technology?.map((ele, index) => {
                                    return (
                                        <div key={index} className='col-lg-3 col-md-3 col-sm-4 col-xs-6 col-6 designer-txt'>
                                            <TaskAltIcon className='contact-icon' />&nbsp; {ele?.tech}
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className='strength-container'>
                        <div className='skill-heading'>My Skills
                            <div className='line'></div>
                        </div>
                        <div className='skill-content'>
                            <div className='skill-txt'>
                                I specialize in creating impactful designs and engaging videos. My graphic design skills
                                encompass brand identity creation, digital and print design, and expert typography,
                                all utilizing advanced graphic design software to ensure visually compelling and effective communication.
                                In video editing, I focus on crafting polished final products through seamless editing, color grading,
                                and the integration of motion graphics and visual effects, delivering a cohesive and dynamic viewing experience.
                            </div>
                            <div className='row'>
                                {
                                    Skills?.map((ele, index) => {
                                        console.log(ele)
                                        return (
                                            <div key={index} className='col-6 designer-txt'>
                                                {ele?.image} &nbsp; {ele?.skill}
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='strength-container'>
                        <div className='resume-heading'>Resume
                            <div className='resume-line'></div>
                        </div>
                        <div className='experience-heading'>Experience
                            <div className='exp-line'></div>
                        </div>
                        <div className='skill-content mt-2'>
                            <div className='exp-designation'>Senior Graphic Designer Cum Video Editor & Videographer</div>
                            <div class="experience-container">
                                <div class="company-section">
                                    <div className='exp-cmny'>Ecorp Real Estate_Dubai
                                        <span className='exp-year'>May'23 - Present</span></div>
                                    <p className="exp-description">
                                        As a Graphic Designer, Videographer, and Video Editor at a dynamic real estate company,
                                        I aim to enhance the visual representation of properties and the overall brand,
                                        transforming raw video into captivating content for both buyers and sellers.
                                    </p>
                                    <p className='exp-description'>I excel in creating visually appealing property brochures,
                                        digital marketing materials, and social media assets that effectively highlight unique
                                        features and attract potential buyers.
                                    </p>
                                    <p className='exp-description'>I specialize in producing high-quality property videos,
                                        virtual tours, and promotional content using professional camera equipment, ensuring
                                        optimal lighting, composition, and storytelling.
                                    </p>
                                    <p className='exp-description'>I utilize industry-standard video editing software to arrange
                                        footage, add transitions, special effects, and enhance audio, ensuring that every
                                        property video is polished to perfection.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='skill-content mt-2'>
                            <div className='exp-designation'>Graphic Designer Cum Video Editor</div>
                            <div class="experience-container">
                                <div class="company-section">
                                    <div className='exp-cmny'>HYM Investment Group of Company LLC_Dubai
                                        <span className='exp-year'>Aug'22 - Apr'23</span></div>
                                    <p className="exp-description">
                                        Create visual branding to effectively sell products and services both online and offline,
                                        ensuring accurate messaging through graphics.
                                    </p>
                                    <p className='exp-description'>Schedule and visit properties to capture high-quality photos and videos
                                        for property portals and social media, while coordinating with the marketing team and providing
                                        media support to agents.
                                    </p>
                                    <p className='exp-description'>Experienced in creating and promoting content on Facebook and Instagram,
                                        including the design of flyers, templates, and social media materials.
                                    </p>
                                    <p className='exp-description'>Deliver post-production work and media content efficiently, ensuring timely
                                        completion with minimal turnaround.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='skill-content mt-2'>
                            <div className='exp-designation'>Graphic Designer Cum Motion Graphics Designer</div>
                            <div class="experience-container">
                                <div class="company-section">
                                    <div className='exp-cmny'>Al Faras Al Thahabi Adv. Pro & Design_Sharja
                                        <span className='exp-year'>May'19 - June'22</span></div>
                                    <p className="exp-description">
                                        Conceptualized, created, and executed innovative 2D computer graphic and motion graphic designs,
                                        establishing the overall visual look and feel for various programs.
                                    </p>
                                    <p className='exp-description'>Led the complete design of Basicxx Fashion Brand shops and Al Yasra Fashion
                                        Retail shops, spearheading brand positioning, promotions, and digital marketing for multiple companies.
                                    </p>
                                    <p className='exp-description'>Developed creative advertising content across various media, including catalogs,
                                        menus, business cards, flyers, posters, stamp designs, as well as conceptualizing logo design, 2D animations,
                                        videos, and social media promotions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='skill-content mt-2'>
                            <div className='exp-designation'>Graphic Designer</div>
                            <div class="exp-container">
                                <div class="company-section">
                                    <div className='exp-cmny'>Proget Excellence_TamilNadu, India
                                        <span className='exp-year'>May'19 - June'22</span></div>
                                    <p className="exp-description">Have worked as a Project Assistant (create Advertising, poster, Facebook ads) for 1 year.</p>
                                </div>
                            </div>
                        </div>
                        <div className='experience-heading'>Education
                            <div className='exp-line'></div>
                        </div>
                        <div className='skill-content mt-2'>
                            <div className='exp-designation'>B.Sc (Computer Science)</div>
                            <div class="exp-container">
                                <div class="company-section">
                                    <div className='exp-cmny'>Manonmaniam Sundarnar University_TamilNadu, India
                                        <span className='exp-year'>2013 - 2016</span></div>
                                </div>
                            </div>
                        </div>
                        <div className='experience-heading'>Certification
                            <div className='exp-line'></div>
                        </div>
                        <div className='skill-content mt-2'>
                            <div className='exp-designation'>Diploma in Multimedia & Graphic Design</div>
                            <div class="exp-container">
                                <div class="company-section">
                                    <div className='exp-cmny'>Arena Animation_Chennai | TamilNadu, India
                                        <span className='exp-year'>2017 - 2018</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='check'></div>
                </div>
            </div>
        </>
    )
}
export default Home;
