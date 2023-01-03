import React from "react";
import background4 from "../src/footer.png";

function Footer() {

    return (
         <div style={{backgroundImage: `url(${background4})`,
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
         height:"500px"
         
         }}>
        <div style={{
            display: "flex", flexWrap: "wrap", 
        }}>



            <div style={{ display: "flex", flexWrap: "wrap", flex: 1, flexDirection: "column" ,alignItems:"center"}}>

                <div >

                    <img src='../logo_light.png' alt='file  is not loading' style={{ width: '170px', height: '26px' , marginTop: "130px" }} />

                </div>
                <div style={{marginTop:"20px" ,display:"flex",}}>
                    <img src='../facebook.png' alt='file  is not loading' style={{borderRadius:"3px",cursor: "pointer", width: '25px', margin: "3px", height: '25px'}} />
                    <img src='../insta.png' alt='file  is not loading' style={{ borderRadius:"3px",cursor: "pointer", width: '25px', margin: "3px", height: '25px' }} />
                    <img src='../Linkedin.png' alt='file  is not loading' style={{ borderRadius:"3px",cursor: "pointer", width: '25px', margin: "3px", height: '25px', }} />
                    <img src='../twitter.png' alt='file  is not loading' style={{borderRadius:"3px", cursor: "pointer", width: '25px', margin: "3px", height: '25px', }} />
                    <img src='../youtube.png' alt='file  is not loading' style={{ borderRadius:"3px",cursor: "pointer", width: '25px', margin: "3px", height: '25px', }} />
                    <img src='../Pinterest.png' alt='file  is not loading' style={{ borderRadius:"3px",cursor: "pointer", width: '25px', margin: "3px", height: '25px', }} />

                </div>

            </div>

            <div style={{ display: "flex", flexWrap: "wrap", flex: 1, flexDirection: "column" }}>

                <p style={{ color: "white", margin: "15px", marginTop: "120px", marginLeft: "140px", cursor: "pointer" }}>Developer Docs</p>
                <p style={{ color: "white", margin: "15px", marginLeft: "140px", cursor: "pointer" }}>Payments</p>
                <p style={{ color: "white", margin: "15px", marginLeft: "140px", cursor: "pointer" }}>Analytics</p>
                <p style={{ color: "white", margin: "15px", marginLeft: "140px", cursor: "pointer" }}>Targeting</p>
                <p style={{ color: "white", margin: "15px", marginLeft: "140px", cursor: "pointer" }}>Resources</p>
                

            </div>

            <div style={{ display: "flex", flexWrap: "wrap", flex: 1, flexDirection: "column" }}>

                <p style={{ color: "white", margin: "15px", marginTop: "120px", marginLeft: "100px", cursor: "pointer" }}>Contact Sales</p>
                <p style={{ color: "white", margin: "15px", marginLeft: "100px", cursor: "pointer" }}>Partners</p>
                <p style={{ color: "white", margin: "15px", marginLeft: "100px", cursor: "pointer" }}>Jobs</p>
                <p style={{ color: "white", margin: "15px", marginLeft: "100px", cursor: "pointer" }}>Investors</p>
                <p style={{ color: "white", margin: "15px", marginLeft: "100px", cursor: "pointer" }}>Support</p>
               


            </div>

            <div style={{ display: "flex", flexWrap: "wrap", flex: 1, flexDirection: "column", }}>

                <p style={{ color: "white", margin: "15px", marginTop: "120px", marginLeft: "80px", cursor: "pointer" }}>About Us</p>
                <p style={{ color: "white", margin: "15px", marginLeft: "80px", cursor: "pointer" }}>Contact Us</p>
                <p style={{ color: "white", margin: "15px", marginLeft: "80px", cursor: "pointer" }}>FAQs</p>
                <p style={{ color: "white", margin: "15px", marginLeft: "80px", cursor: "pointer" }}>Pricing</p>
                <p style={{ color: "white", margin: "15px", marginLeft: "80px", cursor: "pointer" }}>privacy</p>
                <p style={{ color: "white", margin: "15px", marginLeft: "80px", cursor: "pointer" }}>Terms and Conditions</p>


            </div>


            {/* <p style={{ fontSize: "18px", color: "white", marginTop: "150px", textAlign: "right" }}>TSB Media Venture Pvt. Ltd.  © 2022 All rights reserved.</p> */}

        </div>
        
         <p style={{ fontSize: "18px", color: "white", marginTop: "50px", textAlign: "center",marginBottom:"30px" }}>TSB Media Venture Pvt. Ltd.  © 2022 All rights reserved.</p>
         </div>

    );

}

export default Footer;