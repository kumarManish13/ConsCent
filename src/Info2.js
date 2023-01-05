import React from "react";



function Info2() {

    return (
        <div style={{ height: "500px", backgroundColor: "brown",marginBottom:"100px" }}>
            <div style={{ width: "450px", marginLeft: "180px", height: "450px", color: "white", paddingTop: "50px" }}>
                <h2 style={{ color: "white", }}>Simple-to-integrate API</h2>
                <p style={{ fontSize: "35px", marginBlock: "0px", color: "black" }}>Codeless APIs Designed</p>
                <h1 style={{ marginBlock: "0px", color: "black" ,fontSize:"35px"}}>for the content universe</h1>
                <p style={{ color: "white" ,marginTop:"30px"}}>ConsCent's codeless APIs can work seamlessly with and across all kinds of
                    content platforms. It also doesn’t matter whether it's a legacy system or a new-age content platform.</p>
                <button style={{ cursor: "pointer", borderRadius: "40px", color: "white", backgroundColor: "red", height: "30px", width: "150px", marginTop: "15px" }}><span style={{ fontSize: "15px" }}>Developers Docs></span></button>
                <div style={{ height: "100px", display: "flex", flexWrap: "wrap", flexDirection: "row",marginTop:"10px" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", flex: 1 }}>
                        <img src="Info1_2.png" alt='file  is not loading' style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", flex: 1, height: "60px", width: "50px", marginTop: "20px", marginLeft: "20px" }} />
                        <p style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", flex: 2 ,marginTop:"25px",paddingLeft:"15px"}}>Zero Intergration
                            Fee</p>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", flex: 1 }}>
                        <img src="Info1_1.png" alt='file  is not loading' style={{ height: "60px", width: "10px", marginTop: "20px", marginLeft: "20px", display: "flex", flexWrap: "wrap", flexDirection: "row", flex: 1 }} />
                        <p style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", flex: 2,marginTop:"25px",paddingLeft:"15px", }}>Zero Maintenance
                            Fee
                        </p>
                    </div>


                </div>

            </div>
        </div>
    );
}
export default Info2;