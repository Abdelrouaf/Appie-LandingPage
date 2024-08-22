import React from 'react'
// import a from 'react-router-dom'

export default function Home() {
    return (
        <section className='home' style={{position: "relative", backgroundColor: "#eef1f6", padding: "100px 0", zIndex: "10"}}>

            <div className='container'>
            
                <div className='row'>
                
                    <div className='col-md-6'>
                    
                        <div className='homeBox'>
                        
                            <div className='spanBefore' style={{position: "relative"}}>
                            
                                <span className='Before' style={{position: "absolute", left: "8%", top: "20%", transform: `translate(-50%, -50%)`, width: "130px", height: "70px", backgroundImage: `URL("https://quomodosoft.com/html/appie/assets/appie-demo/assets/images/hero-line.png")`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}></span>
                            
                                <span style={{fontSize: "16px", color: "#ff3e66"}}>14 days free</span>
                            
                            </div>
                        
                            <h3 style={{fontSize: "50px", lineHeight: "50px", fontWeight: "400", color: "#0e1133", margin: "0", marginTop: "15px"}} >Ready to launch your app in one, <span style={{fontWeight: "900", textTransform: "capitalize"}}>application</span></h3>
                        
                            <p className='my-3' style={{fontSize: "18px", color: "#0e1133"}}>Find the best application in the appie.</p>
                        
                            <div className='rounded-pill' style={{position: "relative", backgroundColor: "white", padding: "15px 10px", borderLeft: "2px solid #ff3e66", width: "350px"}}>
                            
                                <i class="fa-regular fa-envelope" style={{opacity: 0.4, marginLeft: "10px"}}></i>
                            
                                <input type='email' placeholder='info@appie.com' className='' style={{border: "none", offset: "none", outline: "none", marginLeft: "10px"}}/>
                            
                                <i class="fa-solid fa-arrow-right" style={{position: "absolute", right: "15px", top: "20px", color: "#ff3e66", opacity: "0.6"}}></i>
                            
                            </div>
                        
                        </div>
                    
                        <div className='feedback d-flex align-items-center' style={{marginTop: "40px"}}>
                        
                            <div className='images'>
                            
                                <img src='https://quomodosoft.com/html/appie/assets/appie-demo/assets/images/hero-mans.png'/>
                            
                            </div>
                        
                            <span style={{display: "inline-block", color: "#0e1133", marginLeft: "20px", fontSize: "26", fontWeight: "800", lineHeight: "16px", width: "60px"}}>30K <span style={{textTransform: "capitalize", fontWeight: "500", fontSize: "13px", color: "#505056", display: "inline-block"}}>feedback</span></span>
                        
                        </div>
                    
                    </div>
                
                </div>
            
                <div className='shape-1' style={{position: "absolute", bottom: "450px", right: "450px", zIndex: "-1"}}>
                
                    <img src='https://quomodosoft.com/html/appie/assets/appie-demo/assets/images/shape/shape-9.png'/>
                
                </div>
            
                <div className='shape-2' style={{position: "absolute", top: "480px", left: "230px", zIndex: "-1"}}>
                
                    <img src='https://quomodosoft.com/html/appie/assets/appie-demo/assets/images/shape/shape-10.png'/>
                
                </div>
            
                <div className='shape-3' style={{position: "absolute", top: "50px", left: "130px", zIndex: "-1"}}>
                
                    <img src='https://quomodosoft.com/html/appie/assets/appie-demo/assets/images/shape/shape-11.png'/>
                
                </div>
            
                <div className='shape-4' style={{position: "absolute", top: "210px", right: "130px", zIndex: "-1"}}>
                
                    <img src='https://quomodosoft.com/html/appie/assets/appie-demo/assets/images/shape/shape-12.png'/>
                
                </div>
            
            </div>

            <div className='right' style={{position: "absolute", right: "0", bottom: "0", width: "48%"}}>
                
                <img src='https://quomodosoft.com/html/appie/assets/appie-demo/assets/images/hero-thumb-3.png' style={{width: "100%"}}/>
            
            </div>

        </section>
    );
}
