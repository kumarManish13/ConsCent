import React from "react"
import background2 from "../src/back2.png";

function StartDemo() {

    return (<div>

        <div style={{
            backgroundImage: `url(${background2})`, backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
            display: "flex", flexWrap: "wrap", flex: 1
        }}>
            <div style={{ display: "flex", flexWrap: "wrap", flex: 1 }}>

                <div style={{  alignItems: "center" }}>
                    <img src='../logo_light.png' alt='file  is not loading' style={{ width: '170px', height: '26px', marginBottom: "40px", marginLeft: "87px", marginTop: "97px" }} />
                    <h2 style={{ color: "white", marginLeft: "80px", fontSize: "50px", marginBlock: "0px" }}>Introduction to</h2>
                    <h1 style={{ color: "white", marginLeft: "80px", fontSize: "78px", marginBlock: "0px" }}>ConsCent</h1>
                    <p style={{ color: "white", marginLeft: "80px", fontSize: "16px", width: "400px", lineHeight: 2 }}>Creating long-term revenue opportunities for content companies through real-time visual analytics and
                        user engagement tools, along with a
                        frictionless paying experience through ConsCent’s universal login and interoperable wallet.
                    </p>

                    <img src='../demo1.png' alt='file  is not loading' style={{ width: '450px', height: '130px', marginLeft: "80px", borderRadius: "8px", marginTop: "15px" }} />

                </div>

            </div>
            <div style={{ display: "flex", flexWrap: "wrap", flex: 1 }}>
                <div style={{ height: "635px", width: "400px", backgroundColor: "white", border: "2px solid black", marginTop: "60px", marginLeft: "200px", borderRadius: "10px" }}>
                    <h2 style={{ textAlign: "center", marginBlock: "0px", marginBottom: "10px", marginTop: "10px" }}>Let’s catch up!</h2>
                    <p style={{ fontSize: "15px", textAlign: "center", marginLeft: "50px", marginRight: "50px", marginBlock: "0px" }}>Please submit your information below and we will be in touch shortly to set up a live demo.</p>

                    <input style={{ paddingLeft: "15px", margin: "13px", borderRadius: "5px", height: "45px", width: "340px", marginLeft: "20px", border: "1px solid gray", marginTop: "20px" }} name="Fname" placeholder="First Name" />
                    <input style={{ paddingLeft: "15px", margin: "13px", borderRadius: "5px", height: "45px", width: "340px", marginLeft: "20px", border: "1px solid gray" }} name="Lname" placeholder="Last Name" />
                    <input style={{ paddingLeft: "15px", margin: "13px", borderRadius: "5px", height: "45px", width: "340px", marginLeft: "20px", border: "1px solid gray" }} name="CompanyName" placeholder="Company Name" />
                    <input style={{ paddingLeft: "15px", margin: "13px", borderRadius: "5px", height: "45px", width: "340px", marginLeft: "20px", border: "1px solid gray" }} name="Email" placeholder="Email" />
                    <input style={{ paddingLeft: "15px", margin: "13px", borderRadius: "5px", height: "45px", width: "340px", marginLeft: "20px", border: "1px solid gray" }} name="PhoneNo" placeholder="Mobile Number" />

                    <button style={{ cursor: "pointer", borderRadius: "40px", border: "1px solid red", color: "white", backgroundColor: "red", height: "45px", width: "300px", marginLeft: "50px", marginTop: "10px" }}><span style={{ fontSize: "17px" }}>Submit</span></button>

                    <p style={{ marginLeft: "50px", marginRight: "40px", textAlign: "center", marginBottom: "60px" }}>By submitting this information, you agree to<span style={{ color: "blue", cursor: "pointer" }}> ConsCent’s privacy policy </span></p>

                </div>
            </div>

        </div>

        <h1 style={{ textAlign: "center", marginTop: "40px" }}>What’s in it for you?</h1>

    </div>
    );

}

export default StartDemo;