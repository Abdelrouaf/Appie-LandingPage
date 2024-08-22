import React from 'react'
import '../Style/Base/_Base.scss'

export default function Pricing() {
    return (
        <section className='pricing' style={{padding: "100px 0", position: "relative", zIndex: "5"}}>
        
            <div className='container'>
            
                <div className='head-title text-center'>
                
                    <h3 style={{color: "#0e1133", fontSize: "36px", fontWeight: "800", marginBottom: "15px"}}>Simple pricing for Everyone</h3>
                
                    <p>The full monty spiffing good time no biggie cack grub fantastic.</p>
                
                    <ul className='box' style={{display: "inline-block", padding: "3px", border: "2px solid #e7eaef", margin: "0", listStyle: "none", borderRadius: "40px", marginBottom: "16px", marginTop: "55px"}}>
                
                        <li style={{display: "inline-block"}}><a style={{textDecoration: "none", color: "#505056", fontSize: "14px", fontWeight: "500", borderRadius: "30px", padding: "5px 20px", display: "block"}} href='#'>Monthly</a></li>
                    
                        <li style={{display: "inline-block"}}><a style={{textDecoration: "none", backgroundColor: "#ff0e66", color: "#fff", fontSize: "14px", fontWeight: "500", borderRadius: "30px", padding: "5px 20px", display: "block"}} href='#'>Yearly</a></li>
                    
                    </ul>
                
                </div>
            
                <div className='row'>
                
                    <div className='col-md-6 col-lg-4'>
                    
                        <div className='cardBox' style={{backgroundColor: "#fff", padding: "40px", border: "1px solid #eef0f4", borderRadius: "6px", marginBottom: "20px"}}>
                        
                            <div style={{borderBottom: "1px solid #e1e4ea", marginBottom: "25px"}}>
                            
                                <h4 style={{color: "#0e1133", fontSize: "20px", fontWeight: "500", lineHeight: "1.2", margin: "0", marginBottom: "17px"}}>Fresh</h4>
                            
                                <span style={{display: "inline-block", color: "#0e1133", fontSize: "24px", fontWeight: "400"}}>$ <h3 style={{display: "inline-block", fontSize: "44px", fontWeight: "800"}}>32</h3><span style={{fontSize: "14px"}}>/Yearly</span></span>
                            
                                <p style={{fontSize: "14px", color: "#505056", lineHeight: "1.8"}}>Get your 14 day free trail</p>
                            
                            </div>
                        
                            <ul style={{listStyle: "none", margin: "0", padding: "0"}}>
                            
                                <li style={{fontSize: "15px", fontWeight: "500", marginBottom: "10px", color: "#0e1133"}}><span style={{display: "inline-block", backgroundColor: "#eef4fe", height: "26px", width: "26px", fontSize: "14px", textAlign: "center", borderRadius: "50%", lineHeight: "2.6", marginRight: "8px"}}><i class="fa-solid fa-check" style={{color: "#3172f5"}}></i> </span>60-day chat history</li>
                            
                                <li style={{fontSize: "15px", fontWeight: "500", marginBottom: "10px", color: "#0e1133"}}><span style={{display: "inline-block", backgroundColor: "#eef4fe", height: "26px", width: "26px", fontSize: "14px", textAlign: "center", borderRadius: "50%", lineHeight: "2.6", marginRight: "8px"}}><i class="fa-solid fa-check" style={{color: "#3172f5"}}></i> </span>15 GB cloud storage</li>
                            
                                <li style={{fontSize: "15px", fontWeight: "500", marginBottom: "10px", color: "#0e1133", marginBottom: "20px"}}><span style={{display: "inline-block", backgroundColor: "#eef4fe", height: "26px", width: "26px", fontSize: "14px", textAlign: "center", borderRadius: "50%", lineHeight: "2.6", marginRight: "8px"}}><i class="fa-solid fa-check" style={{color: "#3172f5"}}></i> </span>24/7 Support</li>
                            
                            </ul>
                        
                            <div style={{marginTop: "35px"}}><a style={{textDecoration: "none", color: "#0e1133", fontWeight: "500", padding: "7px 16px", border: "1px solid #eee", borderRadius: "30px"}} href='#'>Choose plan</a></div>
                        
                        </div>
                    
                    </div>
                
                    <div className='col-md-6 col-lg-4'>
                    
                        <div className='cardBox' style={{backgroundColor: "#fff", padding: "40px", border: "1px solid #eef0f4", borderRadius: "6px", borderTop: "3px solid #ff3e66", boxShadow: "0px -3px 0px 0px rgba(255, 62, 102, 0.004), 0px 40px 40px 0px rgba(14, 17, 51, 0.1)", position: "relative", marginBottom: "20px"}}>
                        
                            <span style={{position: "absolute", top: "30px", right: "0", backgroundColor: "#2a6df5", color: "#fff", borderRadius: "30px 0 0 30px", padding: "0 18px"}}>Most Popular</span>
                        
                            <div style={{borderBottom: "1px solid #e1e4ea", marginBottom: "25px"}}>
                            
                                <h4 style={{color: "#0e1133", fontSize: "20px", fontWeight: "500", lineHeight: "1.2", margin: "0", marginBottom: "17px"}}>Sweat</h4>
                            
                                <span style={{display: "inline-block", color: "#0e1133", fontSize: "24px", fontWeight: "400"}}>$ <h3 style={{display: "inline-block", fontSize: "44px", fontWeight: "800"}}>116</h3><span style={{fontSize: "14px"}}>/Yearly</span></span>
                            
                                <p style={{fontSize: "14px", color: "#505056", lineHeight: "1.8"}}>Billed $276 per website annually.</p>
                            
                            </div>
                        
                            <ul style={{listStyle: "none", margin: "0", padding: "0"}}>
                            
                                <li style={{fontSize: "15px", fontWeight: "500", marginBottom: "10px", color: "#0e1133"}}><span style={{display: "inline-block", backgroundColor: "#eef4fe", height: "26px", width: "26px", fontSize: "14px", textAlign: "center", borderRadius: "50%", lineHeight: "2.6", marginRight: "8px"}}><i class="fa-solid fa-check" style={{color: "#3172f5"}}></i> </span>60-day chat history</li>
                            
                                <li style={{fontSize: "15px", fontWeight: "500", marginBottom: "10px", color: "#0e1133"}}><span style={{display: "inline-block", backgroundColor: "#eef4fe", height: "26px", width: "26px", fontSize: "14px", textAlign: "center", borderRadius: "50%", lineHeight: "2.6", marginRight: "8px"}}><i class="fa-solid fa-check" style={{color: "#3172f5"}}></i> </span>50 GB cloud storage</li>
                            
                                <li style={{fontSize: "15px", fontWeight: "500", marginBottom: "10px", color: "#0e1133", marginBottom: "20px"}}><span style={{display: "inline-block", backgroundColor: "#eef4fe", height: "26px", width: "26px", fontSize: "14px", textAlign: "center", borderRadius: "50%", lineHeight: "2.6", marginRight: "8px"}}><i class="fa-solid fa-check" style={{color: "#3172f5"}}></i> </span>24/7 Support</li>
                            
                            </ul>
                        
                            <div style={{marginTop: "35px"}}><a style={{textDecoration: "none", color: "#fff", backgroundColor: "#ff3e66", fontWeight: "500", padding: "7px 16px", borderRadius: "30px"}} href='#'>Choose plan</a></div>
                        
                        </div>
                    
                    </div>
                
                    <div className='col-md-6 col-lg-4'>
                    
                        <div className='cardBox' style={{backgroundColor: "#fff", padding: "40px", border: "1px solid #eef0f4", borderRadius: "6px", marginBottom: "20px"}}>
                        
                            <div style={{borderBottom: "1px solid #e1e4ea", marginBottom: "25px"}}>
                            
                                <h4 style={{color: "#0e1133", fontSize: "20px", fontWeight: "500", lineHeight: "1.2", margin: "0", marginBottom: "17px"}}>Juicy</h4>
                            
                                <span style={{display: "inline-block", color: "#0e1133", fontSize: "24px", fontWeight: "400"}}>$ <h3 style={{display: "inline-block", fontSize: "44px", fontWeight: "800"}}>227</h3><span style={{fontSize: "14px"}}>/Yearly</span></span>
                            
                                <p style={{fontSize: "14px", color: "#505056", lineHeight: "1.8"}}>Billed $276 per website annually.</p>
                            
                            </div>
                        
                            <ul style={{listStyle: "none", margin: "0", padding: "0"}}>
                            
                                <li style={{fontSize: "15px", fontWeight: "500", marginBottom: "10px", color: "#0e1133"}}><span style={{display: "inline-block", backgroundColor: "#eef4fe", height: "26px", width: "26px", fontSize: "14px", textAlign: "center", borderRadius: "50%", lineHeight: "2.6", marginRight: "8px"}}><i class="fa-solid fa-check" style={{color: "#3172f5"}}></i> </span>60-day chat history</li>
                            
                                <li style={{fontSize: "15px", fontWeight: "500", marginBottom: "10px", color: "#0e1133"}}><span style={{display: "inline-block", backgroundColor: "#eef4fe", height: "26px", width: "26px", fontSize: "14px", textAlign: "center", borderRadius: "50%", lineHeight: "2.6", marginRight: "8px"}}><i class="fa-solid fa-check" style={{color: "#3172f5"}}></i> </span>Data security</li>
                            
                                <li style={{fontSize: "15px", fontWeight: "500", marginBottom: "10px", color: "#0e1133"}}><span style={{display: "inline-block", backgroundColor: "#eef4fe", height: "26px", width: "26px", fontSize: "14px", textAlign: "center", borderRadius: "50%", lineHeight: "2.6", marginRight: "8px"}}><i class="fa-solid fa-check" style={{color: "#3172f5"}}></i> </span>100 GB cloud storage</li>
                            
                                <li style={{fontSize: "15px", fontWeight: "500", marginBottom: "10px", color: "#0e1133", marginBottom: "20px"}}><span style={{display: "inline-block", backgroundColor: "#eef4fe", height: "26px", width: "26px", fontSize: "14px", textAlign: "center", borderRadius: "50%", lineHeight: "2.6", marginRight: "8px"}}><i class="fa-solid fa-check" style={{color: "#3172f5"}}></i> </span>24/7 Support</li>
                            
                            </ul>
                        
                            <div style={{marginTop: "35px"}}><a style={{textDecoration: "none", color: "#0e1133", fontWeight: "500", padding: "7px 16px", border: "1px solid #eee", borderRadius: "30px"}} href='#'>Choose plan</a></div>
                        
                        </div>
                    
                    </div>
                
                </div>
            
                <div className='row' style={{backgroundImage: `url("https://quomodosoft.com/html/appie/assets/appie-demo/assets/images/testimonial-bg-2.jpg")`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", padding: "50px"}}>
                
                    <div className='col-lg-4'>
                    
                        <div className='box-1'>
                        
                            <img src='https://quomodosoft.com/html/appie/assets/appie-demo/assets/images/testimonial-user-1.png' style={{maxWidth: "100%"}}/>
                        
                            <div className='stars d-flex mt-3 ms-4 mb-3'>
                            
                                <i class="fa-solid fa-star" style={{color: "#ffb848"}}></i>
                            
                                <i class="fa-solid fa-star" style={{color: "#ffb848"}}></i>
                            
                                <i class="fa-solid fa-star" style={{color: "#ffb848"}}></i>
                            
                                <i class="fa-solid fa-star" style={{color: "#ffb848"}}></i>
                            
                                <i class="fa-solid fa-star" style={{color: "#ffb848"}}></i>
                            
                            </div>
                        
                            <span className='text-center' style={{fontSize: "14px", color: "#bed3fc", marginLeft: "32px"}}>(4.7) review</span>
                        
                        </div>
                    
                    </div>
                
                    <div className='col-lg-8'>
                    
                        <div className='box-2'>
                        
                            <p style={{color: "#fff", fontSize: "20px", lineHeight: "30px"}}>Why I say old chap that is spiffing chip shop such a fibber the bee's knees, the wireless Richard fantastic do one cracking goal pukka baking cakes starkers mush don't get shirty with me argy bargy, I naff chimney pot blimey he lost his bottle cup.</p>
                        
                            <h4 style={{color: "#fff", fontSize: "20px", fontWeight: "700"}}>Hanson Deck</h4>
                        
                            <span style={{color: "#fff", opacity: "0.6", fontSize: "14px"}}>Web developer</span>
                        
                        </div>
                    
                    </div>
                
                </div>
            
                <div className='head-title text-center' style={{padding: "80px 0"}}>
                
                    <h4 style={{color: "#0e1133", fontSize: "34px", fontWeight: "800", lineHeight: "40px", marginBottom: "15px"}}>Appie works best with <br /> your favorite platforms</h4>
                
                    <p>Join over 40,000 business worldwide.</p>
                
                </div>
            
                <div className='platforms'>
                
                    <div className='row'>
                    
                        <div className='col-lg-12'>
                        
                            <div className='platformBox d-flex justify-content-center'>
                            
                                <div className='sponser' style={{backgroundColor: "#fff", width: "100px", height: "100px", textAlign: "center", lineHeight: "100px", borderRadius: "6px", boxShadow: "0px 40px 60px 0px rgba(14, 17, 51, 0.14)", margin: "30px 16px 0"}}>
                                
                                    <img src='https://quomodosoft.com/html/appie/assets/appie-demo/assets/images/sponser-1.png' style={{maxWidth: "100%"}}/>
                                
                                </div>
                            
                                <div className='sponser' style={{backgroundColor: "#fff", width: "100px", height: "100px", textAlign: "center", lineHeight: "100px", borderRadius: "6px", boxShadow: "0px 40px 60px 0px rgba(14, 17, 51, 0.14)", margin: "30px 16px 0"}}>
                                
                                    <img src='https://quomodosoft.com/html/appie/assets/appie-demo/assets/images/sponser-2.png' style={{maxWidth: "100%"}}/>
                                
                                </div>
                            
                                <div className='sponser' style={{backgroundColor: "#fff", width: "100px", height: "100px", textAlign: "center", lineHeight: "100px", borderRadius: "6px", boxShadow: "0px 40px 60px 0px rgba(14, 17, 51, 0.14)", margin: "30px 16px 0"}}>
                                
                                    <img src='https://quomodosoft.com/html/appie/assets/appie-demo/assets/images/sponser-3.png' style={{maxWidth: "100%"}}/>
                                
                                </div>
                            
                                <div className='sponser' style={{backgroundColor: "#fff", width: "100px", height: "100px", textAlign: "center", lineHeight: "100px", borderRadius: "6px", boxShadow: "0px 40px 60px 0px rgba(14, 17, 51, 0.14)", margin: "30px 16px 0"}}>
                                    
                                    <img src='https://quomodosoft.com/html/appie/assets/appie-demo/assets/images/sponser-4.png' style={{maxWidth: "100%"}}/>
                                
                                </div>
                            
                                <div className='sponser' style={{backgroundColor: "#fff", width: "100px", height: "100px", textAlign: "center", lineHeight: "100px", borderRadius: "6px", boxShadow: "0px 40px 60px 0px rgba(14, 17, 51, 0.14)", margin: "30px 16px 0"}}>
                                    
                                    <img src='https://quomodosoft.com/html/appie/assets/appie-demo/assets/images/sponser-5.png' style={{maxWidth: "100%"}}/>
                                
                                </div>
                            
                                <div className='sponser' style={{backgroundColor: "#fff", width: "100px", height: "100px", textAlign: "center", lineHeight: "100px", borderRadius: "6px", boxShadow: "0px 40px 60px 0px rgba(14, 17, 51, 0.14)", margin: "30px 16px 0"}}>
                                    
                                    <img src='https://quomodosoft.com/html/appie/assets/appie-demo/assets/images/sponser-6.png' style={{maxWidth: "100%"}}/>
                                
                                </div>
                            
                            </div>
                        
                            <div className='platformBox d-flex justify-content-center'>
                            
                            <div className='sponser' style={{backgroundColor: "#fff", width: "100px", height: "100px", textAlign: "center", lineHeight: "100px", borderRadius: "6px", boxShadow: "0px 40px 60px 0px rgba(14, 17, 51, 0.14)", margin: "30px 16px 0"}}>
                            
                                <img src='https://quomodosoft.com/html/appie/assets/appie-demo/assets/images/sponser-7.png' style={{maxWidth: "100%"}}/>
                            
                            </div>
                        
                            <div className='sponser' style={{backgroundColor: "#fff", width: "100px", height: "100px", textAlign: "center", lineHeight: "100px", borderRadius: "6px", boxShadow: "0px 40px 60px 0px rgba(14, 17, 51, 0.14)", margin: "30px 16px 0"}}>
                            
                                <img src='https://quomodosoft.com/html/appie/assets/appie-demo/assets/images/sponser-8.png' style={{maxWidth: "100%"}}/>
                            
                            </div>
                        
                            <div className='sponser' style={{backgroundColor: "#fff", width: "100px", height: "100px", textAlign: "center", lineHeight: "100px", borderRadius: "6px", boxShadow: "0px 40px 60px 0px rgba(14, 17, 51, 0.14)", margin: "30px 16px 0"}}>
                            
                                <img src='https://quomodosoft.com/html/appie/assets/appie-demo/assets/images/sponser-9.png' style={{maxWidth: "100%"}}/>
                            
                            </div>
                        
                            <div className='sponser' style={{backgroundColor: "#fff", width: "100px", height: "100px", textAlign: "center", lineHeight: "100px", borderRadius: "6px", boxShadow: "0px 40px 60px 0px rgba(14, 17, 51, 0.14)", margin: "30px 16px 0"}}>
                                
                                <img src='https://quomodosoft.com/html/appie/assets/appie-demo/assets/images/sponser-10.png' style={{maxWidth: "100%"}}/>
                            
                            </div>
                        
                        </div>
                        
                        </div>
                    
                    </div>
                
                </div>
            
                <div className='backShape' style={{position: "absolute", left: "50%", top: "88%", transform: "translate(-50%, -50%)", zIndex: "-1"}}>
                
                    <img src='https://quomodosoft.com/html/appie/assets/appie-demo/assets/images/sponser-shape.png' style={{maxWidth: "100%"}}/>
                
                </div>
            
            </div>
        
        </section>
    )
}
