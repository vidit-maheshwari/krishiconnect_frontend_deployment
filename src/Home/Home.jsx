import React from 'react'
import Navbar from '../Components/Navbar'
import '../Home/Home.css'


import image1 from '../Image/mainimage.png'
import p1 from '../Image/p1.jpeg'
import p2 from '../Image/p2.jpeg'
import p4 from '../Image/p4.jpeg'
import p3 from '../Image/p3.jpg'
import p5 from '../Image/p5.jpeg'
import Footer from '../Components/Footer'

import video1 from '../Image/intro.mp4'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <div>
            <Navbar />

            <div className='home1'>
                <div className='home2'>
                    <div className='home3' >
                        <div className='home4'>
                            <p style={{ color: 'rgb(46, 141, 78)', fontWeight: '600', marginBottom: '0%', fontSize: '17px' }}>Welcome To KrishiConnect</p>
                            <h1>A dedicated <span style={{ color: 'rgb(234,80,73)' }}>Friend you</span> can <span style={{ color: 'rgb(46, 141, 78)' }}>trust !</span></h1>
                            <p>Discover our exclusive range of high-quality, affordable smart plant monitoring systems. Designed and manufactured by our brand, these products ensure superior performance and reliability. Find the perfect fit for your needs and experience the difference with our products</p>
                            <Link to="/dashboard" className='bg-red-400 p-2 px-4 rounded-md font-medium'>Explore</Link>
                        </div>
                    </div>
                    <div className='home3' style={{ justifyContent: 'end' }}>
                        <img src={image1} alt='Doctor' />
                    </div>
                </div>
            </div>


            <div className='home25'>
                <div className='home26'>
                    <h2>Focusing on a future that’s better</h2>
                    <p>Focusing on a future that's better, KrishiConnect is at the forefront of revolutionizing agriculture. By harnessing advanced technologies, including AI-driven crop monitoring, disease detection, and yield optimization, we envision a sustainable tomorrow. Our goal is to empower farmers to make informed decisions, boost productivity, and play a vital role in ensuring global food security.</p>
                </div>
            </div>


            <div className='home5'>
                <h2>See What Our Model <span style={{ color: 'rgb(46, 141, 78)' }}>Offers</span> & What We <span style={{ color: 'rgb(234,80,73)' }}>Provide</span></h2>
                <div className='home6'>
                    <div className='home7'>
                        <div className='home9'>
                            <img src={p1} width='100%' style={{ borderTopLeftRadius: "10px", borderTopRightRadius: '10px' }} />
                        </div>
                        <div className='home11'>
                            <h3>Crop AI</h3>
                            <p>Our AI assists in monitoring crops, detecting diseases, optimizing yield, and recommending suitable crops based on analysis.</p>
                        </div>
                    </div>
                    <div className='home7'>
                        <div className='home9'>
                            <img src={p2} width='100%' style={{ borderTopLeftRadius: "10px", borderTopRightRadius: '10px' }} />
                        </div>
                        <div className='home11'>
                            <h3>Animal Detection</h3>
                            <p>Detect and track animals, useful for wildlife monitoring and livestock management.</p>
                        </div>
                    </div>
                    <div className='home7'>
                        <div className='home9'>
                            <img src={p3} width='100%' />

                        </div>
                        <div className='home11'>
                            <h3>Crop Doctor</h3>
                            <p>Our AI system uses sensor data and advanced analysis to monitor crop health, detect diseases and optimize yield.</p>
                        </div>
                    </div>
                    <div className='home7'>
                        <div className='home9'>
                            <img src={p4} width='100%' />

                        </div>
                        <div className='home11'>
                            <h3>Monitoring and Analytics</h3>
                            <p>Offers real-time visualization, historical analysis, and predictive analytics for monitoring.</p>
                        </div>
                    </div>
                </div>
            </div>



            <Footer/>
        </div>
    )
}

export default Home