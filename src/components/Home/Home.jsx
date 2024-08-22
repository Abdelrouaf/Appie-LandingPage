import React from 'react'
import heroMen from '../../images/hero-mans.png'
import shape9 from '../../images/shape-9.png'
import shape10 from '../../images/shape-10.png'
import shape11 from '../../images/shape-11.png'
import shape12 from '../../images/shape-12.png'
import heroThumb from '../../images/hero-thumb-3.png'
import './_Home.scss'

export default function Home() {
    return (
        <section className='home'>

            <div className='container'>
            
                <div className='row'>
                
                    <div className='col-md-6'>
                    
                        <div className='homeBox'>
                        
                            <div className='spanBefore'>
                            
                                <span>14 days free</span>
                            
                            </div>
                        
                            <h3 className='title' >Ready to launch your app in one, <span>application</span></h3>
                        
                            <p className='paragraph my-3'>Find the best application in the appie.</p>
                        
                            <div className='inputBox rounded-pill'>
                            
                                <i class="fa-regular fa-envelope"></i>
                            
                                <input type='email' placeholder='info@appie.com' className=''/>
                            
                                <i class="fa-solid fa-arrow-right"></i>
                            
                            </div>
                        
                        </div>
                    
                        <div className='feedback d-flex align-items-center'>
                        
                            <div className='images'>
                            
                                <img src={heroMen}/>
                            
                            </div>
                        
                            <span>30K <span>feedback</span></span>
                        
                        </div>
                    
                    </div>
                
                </div>
            
                <div className='shape-1'>
                
                    <img src={shape9}/>
                
                </div>
            
                <div className='shape-2'>
                
                    <img src={shape10}/>
                
                </div>
            
                <div className='shape-3'>
                
                    <img src={shape11}/>
                
                </div>
            
                <div className='shape-4'>
                
                    <img src={shape12}/>
                
                </div>
            
            </div>

            <div className='right'>
                
                <img src={heroThumb}/>
            
            </div>

        </section>
    );
}
