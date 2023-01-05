import React from "react"
import background from "../src/Getstarted_bg.png";

function GetStarted() {

    return (<div >

        <div style={{ display: "flex", flexWrap: "wrap", flex: 1 }}>

            <div style={{
                display: "flex", flexWrap: "wrap", flex: 2, backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',

            }}>

                <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}>

                    <div style={{}}>
                        <img src='../logo_dark.png' alt='file  is not loading' style={{ width: '160px', height: '26px', marginLeft: "80px", marginTop: "80px" ,marginBottom:"90px"}} />
                    </div>
                    <div>
                        <h1 style={{ marginTop: "60px", marginLeft: "90px", fontSize: "45px", textAlign: "left" ,marginBlock:"0px"}}>An Intelligent Solution for a</h1>
                        <h2 style={{ fontSize: "36px", marginLeft: "85px", marginTop: "0px" ,marginBlock:"0px",backgroundColor:"skyblue"}}>Changing Content Universe</h2>
                    </div>
                    <div>
                        <ul style={{ marginLeft: "50px" ,marginTop:"30px"}}>
                            <li style={{ margin: "15px",fontSize:"18px"}}>Access insights to succeed in the user revenue industry</li>
                            <li style={{ margin: "15px" ,fontSize:"18px"}}>Improve engagement by gaining a 360-degree perspective of each user</li>
                            <li style={{ margin: "15px" ,fontSize:"18px"}}>Discover where people spend their time and money online</li>
                        </ul>
                    </div>
                </div>




            </div>

            <div style={{ display: "flex", flexWrap: "wrap", flex: 1, alignItems: "center" }}>


                <p style={{ fontSize: "25px", marginTop: "110px", marginLeft: "150px" }}>Create your Account</p>

                <form >
                    <div >
                        <input style={{ paddingLeft:"15px",margin: "12px",border:"1px solid gray", marginLeft: "68px", borderRadius: "5px", height: "40px", width: "180px" }} name="FName" placeholder="First Name" />
                        <input style={{ paddingLeft:"15px",margin: "12px",border:"1px solid gray", borderRadius: "5px", height: "40px", width: "180px" }} name="LName" placeholder="Last Name" />
                    </div>
                    <input style={{ paddingLeft:"15px",margin: "12px", borderRadius: "5px", height: "40px", width: "395px", marginLeft: "68px" ,border:"1px solid gray"}} name="Company" placeholder="Company Name" />
                    <input style={{paddingLeft:"15px", margin: "12px", borderRadius: "5px", height: "40px", width: "395px", marginLeft: "68px" ,border:"1px solid gray"}} name="Business_email" placeholder="Business email" />
                    <input style={{ paddingLeft:"15px",margin: "12px", borderRadius: "5px", height: "40px", width: "395px", marginLeft: "68px" ,border:"1px solid gray"}} name="Passwrd" placeholder="Password" />
                </form>

                <button style={{ cursor: "pointer", borderRadius: "40px", border: "1px solid red", color: "white", backgroundColor: "red", height: "45px", width: "230px", marginLeft: "150px", marginTop: "20px" }}><span style={{ fontSize: "17px" }}>Get Started</span></button>

                <p style={{ marginLeft: "150px", marginRight: "120px", marginTop: "40px", marginBottom: "10px"}}>Already have an account ? <span style={{ cursor: "pointer", color: "blue" }}> Log in</span></p>
                <p style={{ marginLeft: "70px", marginRight: "40px", marginTop: "15px", textAlign: "center", marginBottom: "80px" }}>By signing up, you agree to our <span style={{ color: "blue", cursor: "pointer" }}>Terms of Service  </span>and<span style={{ color: "blue", cursor: "pointer", alignItems: "center" }}>Privacy Policy </span></p>
            </div>
        </div>

    </div>
    );

}

export default GetStarted;