import React from "react";
import file from "../src/girl.gif";


function Info4() {

    return (
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", height: "500px", marginTop: "200px" ,marginBottom:"100px"}}>
            <div style={{ display: "flex", flexwrap: "wrap", height: "500px", width: "500px", flexDirection: "column" ,marginLeft:"200px"}}>
                <h2 style={{marginTop:"250px"}}>Analytics & Segmentation</h2>
                <p style={{ fontSize: "25px", marginBlock: "0px", color: "black" }}>Customised User Journeys</p>
                <h1 style={{ marginBlock: "0px", color: "black", fontSize: "25px" }}>with actionable insights</h1>
                <p style={{ marginTop: "16px" }}>Understand website and app traffic across anonymous and logged-in users, evaluate their behaviour, what and how they consume content. Even map and analyse your campaigns run through ConsCent’s marketing APIs
</p>
                <button style={{ cursor: "pointer", borderRadius: "40px", color: "white", backgroundColor: "red", height: "30px", width: "100px", marginTop: "10px" }}><span style={{ fontSize: "15px" }}>Read more</span></button>
            </div>
            <div style={{ display: "flex", flexwrap: "wrap", }}>
            <img src={file} alt="loading" style={{marginLeft:"100px",}}/>
            </div>

        </div>
    );
}


export default Info4;