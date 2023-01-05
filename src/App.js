import React from 'react';
import { useNavigate } from "react-router-dom"
import './App.css';
import Footer from "./Footer";
import Info from "./Info1";
import Info2 from "./Info2"
import Info3 from "./Info3"
import Info4 from "./Info4"
import Info5 from "./Info5"
import Info6 from "./Info6";

import Navbar from './Navbar';




function App() {

  const Navigate = useNavigate();



  const Started = () => {
    console.log("hi");
    Navigate("/Get_Started")
  }


  const Demo = () => {
    console.log("manish");
    Navigate("/Start_Demo")
  }

  const NewsChannel = () => {
    console.log("kumar");
    var x = document.getElementById("news");
    if (x.style.display === 'block') {
      x.style.display = 'none';
    }
    else {
      x.style.display = 'block';
    }


  }

  return (
    <div style={{ backgroundImage: "homBg.png" }}>

      <Navbar />

      <h1 style={{ textAlign: "center", fontSize: "32px", marginTop: "0px", fontFamily: "R" }}>Engage Users</h1>

      <h1 style={{ textAlign: "center", fontSize: "48px", color: "red", marginTop: "0px", paddingTop: "0px" }}>Maximise Revenue</h1>

      <p style={{ textAlign: "center", fontSize: "18px", marginTop: "2px" }}>Leading media platforms trust ConsCent to engage, retain and transact
        with millions of <br /> users and build long-term relationships <span style={{ fontWeight: 'bold' }}>— Starting with Pay-Per-Use</span></p>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <button onClick={Started} style={{ cursor: "pointer", borderRadius: "40px", border: "1px solid red", color: "white", backgroundColor: "red", height: "55px", width: "250px" }}><span style={{ fontSize: "17px" }}>Get Started</span></button>
        <button onClick={Demo} style={{ borderRadius: "40px", cursor: "pointer", border: "1px solid red", color: "red", backgroundColor: "white", marginLeft: "10px", height: "55px", width: "250px" }}><span style={{ fontSize: "17px" }}>Book a Demo</span></button>
      </div>


      <img src='banner_updated23.png' alt='file is not loading' style={{ width: '77%', height: '740px', marginLeft: "180px", marginBottom: "80px" }} />

      <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", marginBottom: "80px", marginLeft: "90px", marginTop: "60px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", flex: 1 }}>
          <img src='outlook.png' alt='loading' style={{ width: "120px", height: "20px", cursor: "pointer" }}>
            {/* <a href='https://www.outlookindia.com/magazine'/> */}
          </img>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", flex: 1 }}>
          <img src='indiatoday.png' alt='loading' style={{ width: "120px", height: "55px", cursor: "pointer" }}>
            {/* <a href='https://www.indiatoday.in/magazine'/> */}
          </img>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", flex: 1 }}>
          <img src='outlookMoney.png' alt='loading' style={{ width: "120px", height: "45px", cursor: "pointer" }}>
            {/* <a href='https://outlookmoney.com/magazine/issue/44'/> */}
          </img>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", flex: 1 }}>
          <img src='indiaTodayHindi.png' alt='loading' style={{ width: "120px", height: "45px", cursor: "pointer" }}>
            {/* <a href='https://www.aajtak.in/india-today-hindi'/> */}
          </img>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", flex: 1 }}>
          <img src='cosmopolitan.png' alt='loading' style={{ width: "120px", height: "25px", cursor: "pointer" }}>
            {/* <a href='https://user.conscent.in/overlay?clientId=619b772e3006582284e12c68&clientContentId=BTCOSMOMAG&download=true&utm_source=cosmo_website'/> */}
          </img>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", flex: 1 }}>
          <img src='middayTransparent.png' alt='loading' style={{ width: "120px", height: "35px", marginRight: "80px", cursor: "pointer" }}>
            {/* <a href='https://www.mid-day.com/midday-premium'/> */}
          </img>
        </div>
      </div>


      <div id='news' style={{ display: "none" }}>

        <div style={{ display: "flex", flexWrap: "wrap", height: "400px", flexDirection: "column" }}>

          <div style={{ display: "flex", flexWrap: "wrap", flex: 1 }}>

            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexWrap: "wrap", flex: 1 }}>
                <img src='businessToday.png' alt='loading' style={{ width: "140px", height: "40px", marginLeft: "160px", cursor: "pointer", marginTop: "30px" }} />
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", flex: 1 }}>
                <img src='outlook-business.png' alt='loading' style={{ width: "160px", height: "30px", marginLeft: "80px", cursor: "pointer", marginTop: "30px" }} />
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", flex: 1 }}>
                <img src='indiaRetailer.png' alt='loading' style={{ width: "140px", height: "40px", marginLeft: "80px", cursor: "pointer", marginTop: "30px" }} />
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", flex: 1 }}>
                <img src='Udayavani-English-New-Logo.png' alt='loading' style={{ width: "140px", height: "40px", cursor: "pointer", marginLeft: "80px", marginTop: "30px" }} />
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", flex: 1 }}>
                <img src='Udayavani.png' alt='loading' style={{ width: "140px", height: "40px", marginLeft: "80px", cursor: "pointer", marginTop: "30px" }} />
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", flex: 1 }}>
                <img src='epic-on-logo.png' alt='loading' style={{ width: "140px", height: "40px", marginLeft: "80px", cursor: "pointer", marginTop: "30px" }} />
              </div>
            </div>

          </div>
          <div style={{ display: "flex", flexWrap: "wrap", flex: 1 }}>

            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexWrap: "wrap", flex: 1 }}>
                <img src='AajTak_hd.png' alt='loading' style={{ width: "160px", height: "70px", cursor: "pointer", marginLeft: "160px" }} />
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", flex: 1 }}>
                <img src='brandlogo.png' alt='loading' style={{ width: "160px", height: "120px", cursor: "pointer", marginLeft: "80px" }} />
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", flex: 1 }}>
                <img src='earshot.png' alt='loading' style={{ width: "160px", height: "50px", marginLeft: "80px", cursor: "pointer" }} />
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", flex: 1 }}>
                <img src='nat.png' alt='loading' style={{ width: "160px", height: "50px", marginLeft: "80px", cursor: "pointer" }} />
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", flex: 1 }}>
                <img src='AU.png' alt='loading' style={{ width: "160px", height: "60px", marginLeft: "40px", cursor: "pointer" }} />
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", flex: 1 }}>
                <img src='tinkle_color.png' alt='loading' style={{ width: "160px", height: "50px", marginLeft: "40px", cursor: "pointer" }} />
              </div>
            </div>

          </div>

        </div>

      </div>


      <div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div style={{ flex: 1, height: '2px', backgroundColor: 'black', boxShadow: "0px 0px 10px 5px gray" }} />
          <div>
            <button onClick={NewsChannel} style={{ borderRadius: "5px", cursor: "pointer" }}>
              <img src='arrow.png' alt='loading' style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", height: "30px", width: "30px" }} />
            </button>
          </div>
          <div style={{ flex: 1, height: '2px', backgroundColor: 'black', boxShadow: "0px 0px 10px 5px gray" }} />
        </div>
      </div>

      <h1 style={{ textAlign: "center" }}>Impact Quantified, <span style={{ color: "red" }}>Real Time</span></h1>


      <Info6/>
      <h1 style={{textAlign:"center"}}>Understand . Engage . Transact</h1>
      <Info5/>
       <Info4/>
        <Info3/>
      <Info />
      <Info2/>

      <h1 style={{ textAlign: "center", fontFamily: "sans-serif", marginBottom: "30px" }}>  Ready to experience the future of content monetisation?</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginBottom: "70px" }}>
        <button onClick={Started} style={{ cursor: "pointer", borderRadius: "40px", border: "1px solid red", color: "white", backgroundColor: "red", height: "55px", width: "250px" }}><span style={{ fontSize: "17px" }}>Get Started</span></button>
        <button onClick={Demo} style={{ borderRadius: "40px", cursor: "pointer", border: "1px solid red", color: "red", backgroundColor: "white", marginLeft: "10px", height: "55px", width: "250px" }}><span style={{ fontSize: "17px" }}>Book a Demo</span></button>
      </div>

      <Footer />

    </div>
  );
}

export default App;

