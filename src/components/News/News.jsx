import React from 'react'
import '../Style/Base/_Base.scss'

export default function News() {
    return (
        <section className='event' style={{backgroundColor: "#0e1133", padding: "100px 0", position: "relative", zIndex: "5"}}>

        <div className='container'>
        
            <div className='head-title text-center' style={{paddingBottom: "25px"}}>
            
                <h3 style={{color: "white", fontSize: "36px", fontWeight: "800", lineHeight: "46px"}}>Wherever you need <br/> us the most</h3>
            
                <p style={{color: "white", fontSize: "15px", marginTop: "11px", lineHeight: "28px"}}>The full monty spiffing good time no biggie cack grub fantastic.</p>
            
            </div>
        
            <div className='row align-items-center'>
        
                <div className='col-lg-6'>
                
                    <div className='boxes'>
                    
                        <div className='box-1' style={{margin: "0", marginBottom: "20px", border: "1px solid #202234", padding: "25px 30px 20px 70px", borderRadius: "6px", position: "relative"}}>
                        
                            <span style={{position: "absolute", left: "30px", top: "30px", width: "30px", height: "30px", backgroundColor: "#ff3e66", border: "6px solid #2a182d", borderRadius: "50%"}}></span>
                        
                            <h4 style={{color: "#fff", fontSize: "20px", fontWeight: "700"}}>Well Integrated</h4>
                        
                            <p style={{color: "#fff", opacity: "0.6", fontSize: "14px", marginTop: "3px", fontWeight: "400"}}>The bee's knees chancer car boot absolutely.</p>
                        
                        </div>
                    
                        <div className='box-2' style={{margin: "0", marginBottom: "20px", border: "1px solid #202234", padding: "25px 30px 20px 70px", borderRadius: "6px", position: "relative"}}>
                        
                            <span style={{position: "absolute", left: "30px", top: "30px", width: "30px", height: "30px", backgroundColor: "#2eacfc", border: "6px solid #15233d", borderRadius: "50%"}}></span>
                        
                            <h4 style={{color: "#fff", fontSize: "20px", fontWeight: "700"}}>Clean and modern Design</h4>
                        
                            <p style={{color: "#fff", opacity: "0.6", fontSize: "14px", marginTop: "3px", fontWeight: "400"}}>The bee's knees chancer car boot absolutely.</p>
                        
                        </div>
                    
                        <div className='box-3' style={{margin: "0", marginBottom: "20px", border: "1px solid #202234", padding: "25px 30px 20px 70px", borderRadius: "6px", position: "relative"}}>
                        
                            <span style={{position: "absolute", left: "30px", top: "30px", width: "30px", height: "30px", backgroundColor: "#33c956", border: "6px solid #15262c", borderRadius: "50%"}}></span>
                        
                            <h4 style={{color: "#fff", fontSize: "20px", fontWeight: "700"}}>Light and dark mode</h4>
                        
                            <p style={{color: "#fff", opacity: "0.6", fontSize: "14px", marginTop: "3px", fontWeight: "400"}}>The bee's knees chancer car boot absolutely.</p>
                    
                        </div>
                    
                    </div>
                
                </div>

                <div className='col-lg-6'>
                
                    <img src='https://quomodosoft.com/html/appie/assets/appie-demo/assets/images/features-thumb-2.png' style={{width: "100%"}}/>
                
                </div>

            </div>
        
            <div className='shape-1' style={{position: "absolute", top: "150px", right: "200px", zIndex: "-1"}}>
                
                <img src='https://quomodosoft.com/html/appie/assets/appie-demo/assets/images/shape/shape-15.png'/>
            
            </div>
        
            <div className='shape-2' style={{position: "absolute", bottom: "100px", left: "230px", zIndex: "-1"}}>
            
                <img src='https://quomodosoft.com/html/appie/assets/appie-demo/assets/images/shape/shape-14.png'/>
            
            </div>
        
            <div className='shape-3' style={{position: "absolute", top: "220px", left: "100px", zIndex: "-1"}}>
            
                <img src='https://quomodosoft.com/html/appie/assets/appie-demo/assets/images/shape/shape-13.png'/>
            
            </div>
        
        </div>

        </section>
    )
}
