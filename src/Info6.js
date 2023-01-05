import React from "react";




function Info6() {

    return (
        <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", height: "800px",marginBottom:"200px" }}>

            <div style={{ display: "flex", flexwrap: "wrap", flex: 2, justifyContent: "center",marginBlock:"0px" }}>
                <img src="map.png" alt="loading" style={{ height: "400px", width: "900px", marginTop: "90px" }} />

            </div>
            <div style={{ display: "flex", flexwrap: "wrap" ,flex: 1,  height:"50px",marginTop:"150px"}}>

                <div style={{marginLeft:"30px"}}>
                    <img src="Info6_1.png" alt="loading" style={{marginLeft:"200px", height: "50px", width: "50px",display: "flex", flexwrap: "wrap",flex:1}} />
                    <h2 style={{marginLeft:"200px",marginBlock:"0px",color:"red"}}>Visitors</h2>
                    <h1 style={{marginLeft:"200px",marginBlock:"0px"}}><strong style={{fontSize:"50px"}}>100</strong> million+</h1>
                    <p style={{marginLeft:"200px",  }}>    Traced across ConsCent content<br/> partners each month</p>
                </div>
                <div style={{marginLeft:"30px" }}>
                <img src="Info6_2.png" alt="loading" style={{marginLeft:"150px", height: "50px", width: "50px",display: "flex", flexwrap: "wrap",flex:1}} />
                    <h2 style={{marginLeft:"150px",marginBlock:"0px",width:"200px",color:"red"}}>Engagements</h2>
                    <h1 style={{marginLeft:"150px",marginBlock:"0px",width:"300px"}}><strong style={{fontSize:"50px"}}>200</strong> million+</h1>
                    <p style={{marginLeft:"150px",}}>   Through ConsCent’s paywall, campaigns<br/> and content recommendations</p>

                </div>
                <div style={{ marginLeft:"150px"}}>
                <img src="Info6_3.jpg" alt="loading" style={{ height: "50px", width: "7x0px",display: "flex", flexwrap: "wrap",flex:1}} />
                    <h2 style={{marginBlock:"0px",color:"red"}}>Revenue</h2>
                    <h1 style={{marginBlock:"0px"}}><strong style={{fontSize:"50px"}}>100</strong> %</h1>
                    <p style={{ }}>    Growth for ConsCent <br/>partners in the first year</p>
                </div>
                

            </div>




        </div>
    );
}
export default Info6;

