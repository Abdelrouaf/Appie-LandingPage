import React from 'react'

export default function Store() {
    return (
        <section className='store' style={{padding: "100px 0", backgroundImage: `url("https://quomodosoft.com/html/appie/assets/appie-demo/assets/images/download-bg.png")`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", overflow: "hidden", position: "relative", zIndex: "10"}}>
        
            <span className='d-sm-none d-lg-block' style={{position: "absolute", top: "50%", right: "0", transform: "translateY(-50%)", height: "100%", width: "550px", backgroundImage: `url("https://quomodosoft.com/html/appie/assets/appie-demo/assets/images/download-thumb.png")`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", zIndex: "-1"}}></span>
        
            <div className='container'>
            
                <div className='row'>
                
                    <div className='col-lg-5'>
                    
                        <div className='box'>
                        
                            <span style={{color: "#ff0e66", fontSize: "14px", fontWeight: "500"}}>Download Our App</span>
                        
                            <h4 style={{color: "#0e1133", fontSize: "36px", fontWeight: "800", marginTop: "9px", marginBottom: "13px", lineHeight: "1.2"}}>App is available for free on app store</h4>
                        
                            <p style={{fontSize: "16px", color: "#505056", lineHeight: "1.6"}}>Jolly good quaint james bond victoria sponge happy days cras arse over blatant.</p>
                        
                            <ul style={{margin: "30px 0 0", padding: "0", listStyle: "none"}}>
                            
                                <li style={{display: "inline-block", marginBottom: "10px"}}><a style={{backgroundColor: "#0e1133", color: "#fff", textDecoration: "none", padding: "14px 20px", marginRight: "11px", border: "2px solid #0e1133", borderRadius: "16px", display: "flex", alignItems: "center"}} href='#'><i class="fa-brands fa-apple" style={{fontSize: "36px", marginRight: "11px"}}></i> <div><div style={{fontSize: "14px", fontWeight: "500"}}>Download for </div> <div style={{fontSize: "24px", fontWeight: "500", lineHeight: "1.2"}}> iOS</div></div></a></li>
                            
                                <li style={{display: "inline-block"}}><a style={{backgroundColor: "#fff", color: "#0e1133", textDecoration: "none", padding: "14px 20px", marginRight: "11px", border: "2px solid #0e1133", borderRadius: "16px", display: "flex", alignItems: "center"}} href='#'><i class="fa-brands fa-google-play" style={{fontSize: "36px", marginRight: "11px"}}></i> <div><div style={{fontSize: "14px", fontWeight: "500"}}>Download for </div> <div style={{fontSize: "24px", fontWeight: "500", lineHeight: "1.2"}}> Android</div></div></a></li>
                            
                            </ul>
                        
                        </div>
                    
                    </div>
                
                </div>
            
            </div>
        
        </section>
    )
}
