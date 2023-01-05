import React from "react";
import file from "../src/computer.gif";



function Info3() {

    return (
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", height: "500px", marginTop: "300px",backgroundImage:"linear-gradient(to bottom, Transparente 0%,Transparente 50%,skyblue 50%,skyblue 100%)"}}>
            <div style={{ display: "flex", flexwrap: "wrap", height: "500px", width: "920px" }}>
          <img src={file} alt="loading" style={{marginLeft:"100px",}}/>

            </div>
            <div style={{ display: "flex", flexwrap: "wrap", flexDirection: "column", width: "500px" }}>
                <h2 style={{marginTop:"100px"}}>Targeting & Recommendation</h2>
                <p style={{ fontSize: "25px", marginBlock: "0px", color: "black" }}>Supercharge Conversion Funnel</p>
                <h1 style={{ marginBlock: "0px", color: "black", fontSize: "25px" }}>personalise campaigns | recommend
                    content</h1>
                <p style={{ marginTop: "16px" }}>Use ConsCent’s analytics to create targeted user segments and cohorts based on interests, location, online behaviour, and purchase habits. Create customised user journeys to personalise campaigns and make better content recommendations.</p>
                <button style={{ cursor: "pointer", borderRadius: "40px", color: "white", backgroundColor: "red", height: "30px", width: "100px", marginTop: "10px" }}><span style={{ fontSize: "15px" }}>Read more</span></button>
            </div>

        </div>
    );
}


export default Info3;