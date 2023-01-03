import React, { useState } from "react";

function Navbar() {

    const [A, setA] = useState(false);
    const [Dev, setDev] = useState(false);

    return (
        <div >
            <nav style={{ display: "flex", flexWrap: "wrap" }}>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "left", alignItems: "center", flex: 1 }}><img src='../logo_dark.png' alt='file  is not loading' style={{ width: '160px', height: '26px', marginLeft: "105px" }} /></div>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "right", flex: 2, alignItems: "center" }} >
                    <div onMouseEnter={() => setA(true)} onMouseLeave={() => setA(false)} style={{ margin: "25px", cursor: "pointer", }}> <p>Solutions</p>
                        {
                            A && (<div style={{ height: "116px", width: "700px", position: "absolute", backgroundColor: "crimson", marginLeft: "-16%" ,borderRadius:"20px",border:"2px solid black"}}>
                                <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
                                    <div style={{ display: "flex", flexWrap: "wrap", flex: 1, justifyContent: "center", borderRight: "2px solid black" }}>
                                        <h1 style={{ fontSize: "16px", marginBottom: "0px" }}>Understand</h1>
                                        <p style={{ color: "black", textAlign: "center", marginTop: "0px" }}> Analyse user behavior and create segments</p>
                                    </div >
                                    <div style={{ display: "flex", flexWrap: "wrap", flex: 1, justifyContent: "center", borderRight: "2px solid black" }}>
                                        <h1 style={{ fontSize: "16px", marginBottom: "0px" }}>Engage</h1>
                                        <p style={{ color: "black", textAlign: "center", marginTop: "5px" }}> Personalise content recommodation and boost conversions</p>
                                    </div >
                                    <div style={{ display: "flex", flexWrap: "wrap", flex: 1, justifyContent: "center"}}>
                                        <h1 style={{ fontSize: "16px", marginBottom: "0px" }}>Transact</h1>
                                        <p style={{ color: "black", textAlign: "center", marginTop: "0px" }}> paywalling solutions for all kind of content platforms</p>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                    <div style={{ margin: "25px", cursor: "pointer" }}> <p>Partner</p></div>
                    <div style={{ margin: "25px", cursor: "pointer" }}><p>Why ConsCent ?</p></div>
                    <div style={{ margin: "25px", cursor: "pointer" }}><p>Resources</p></div>

                    <div onMouseEnter={() => setDev(true)} onMouseLeave={() => setDev(false)} style={{ margin: "25px", cursor: "pointer" }}><p>Developers</p>

                        {
                            Dev && (<div style={{ height: "480px", width: "600px", position: "absolute", backgroundColor: "white", marginLeft: "-31%",borderRadius:"20px"  }}>
                                <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "column" ,borderRadius:"20px" }}>
                                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", height: "100px" ,border:"2px solid black",borderRadius:"20px" ,backgroundColor:"crimson"}}>
                                        <h1 style={{ fontSize: "25px",marginBottom:"0px",marginTop:"5px"}}>Developers Docs</h1>
                                        <p style={{ color: "black", textAlign: "center", marginLeft:"10px",marginRight:"10px"}}>Welcome to ConsCent! this documentation covers all the steps for to get set up</p>
                                    </div >
                                    <div style={{ display: "flex", flexWrap: "wrap" ,height: "370px" ,borderRadius:"7px"}}>
                                        <div style={{display: "flex", flexWrap: "wrap", flexDirection: "row", }}>
                                            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "left" ,width:"250px", border:"2px solid black",borderRadius:"20px" ,backgroundColor:"crimson"}}>
                                                <ul >
                                                    <li style={{marginLeft:"10px",marginTop:"20px",fontSize:"18px",fontWeight:"bold"}}>
                                                        Get Started
                                                    </li>
                                                    <li style={{marginLeft:"10px",marginTop:"20px",fontSize:"18px",fontWeight:"bold"}}>
                                                        Registration
                                                    </li>
                                                    <li style={{marginLeft:"10px",marginTop:"20px",fontSize:"18px",fontWeight:"bold"}}>
                                                        Using ConsCent
                                                    </li>
                                                    <li style={{marginLeft:"10px",marginTop:"20px",fontSize:"18px",fontWeight:"bold"}}>
                                                        Web Integration
                                                    </li>
                                                    <li style={{marginLeft:"10px",marginTop:"20px",fontSize:"18px",fontWeight:"bold"}}>
                                                        API Introduction
                                                    </li>
                                                    <li style={{marginLeft:"10px",marginTop:"20px",fontSize:"18px",fontWeight:"bold"}}>
                                                        Authentication
                                                    </li>
                                                    <li style={{marginLeft:"10px",marginTop:"20px",fontSize:"18px",fontWeight:"bold"}}>
                                                        Client Content
                                                    </li>
                                                </ul>
                                            </div>
                                            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "right" ,width:"338px",border:"2px solid black",borderRadius:"20px" ,backgroundColor:"crimson"}}>
                                            <ul>
                                                    <li style={{marginTop:"20px",fontSize:"18px",marginRight:"20px",fontWeight:"bold"}}>
                                                        Validate content consumption
                                                    </li>
                                                    <li style={{marginTop:"20px",fontSize:"18px",fontWeight:"bold"}}>
                                                        Client stats
                                                    </li>
                                                    <li style={{marginTop:"20px",fontSize:"18px",fontWeight:"bold"}}>
                                                        Deprecated Integration
                                                    </li>
                                                    <li style={{marginTop:"20px",fontSize:"18px",fontWeight:"bold"}}>
                                                        Country Code List
                                                    </li>
                                                    <li style={{marginTop:"20px",fontSize:"18px",fontWeight:"bold"}}>
                                                        Errors
                                                    </li>
                                                    <li style={{marginTop:"20px",fontSize:"18px",fontWeight:"bold"}}>
                                                        Client content bundles
                                                    </li>
                                                    <li style={{marginTop:"20px",fontSize:"18px",fontWeight:"bold"}}>
                                                        Client Content
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div >

                                </div>
                            </div>)
                        }
                    </div>


                    <div style={{ margin: "25px" }}><button style={{ borderRadius: "40px", cursor: "pointer", marginRight: "105px", backgroundColor: "gray", border: "1px solid gray", color: "white", height: "35px", width: "90px" }}>Login in</button></div>
                </div>
            </nav>
        </div>
    );

}

export default Navbar;