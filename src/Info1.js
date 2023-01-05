import React from "react";
import background4 from "../src/payments.png";


function Info1() {

    return (

        <div style={{
            display: "flex", flexWrap: "wrap", flexDirection: "row", backgroundImage: `url(${background4})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat', height: "700px", marginBottom: "100px", marginRight: "170px", marginTop: "200px", marginLeft: "130px"
        }}>

            <div style={{ height: "435px", width: "550px", marginTop: "90px", marginLeft: "40px" }}>
                <p style={{ color: "blue", fontSize: "25px", marginTop: "80px" }}>Payments</p>
                <p style={{ fontSize: "28px", marginBlock: "0px" }}>Monetise Your Website Content</p>
                <h1 style={{ fontSize: "28px", marginBlock: "0px" }}>with ConsCent’s intelligent paywall</h1>
                <p style={{ fontSize: "15px", marginTop: "20px" }}>Reduce friction to log-in and payments with ConsCent’s universal login, maximise revenue opportunities with an
                    interoperable wallet. One paywall to unify all kinds of transactions - Pay-per-use to subscriptions. Integrate within 30
                    minutes and begin getting money immediately.</p>

                <button style={{ cursor: "pointer", borderRadius: "40px", border: "1px solid red", color: "white", backgroundColor: "red", height: "30px", width: "120px", marginLeft: "5px", marginTop: "15px" }}><span style={{ fontSize: "17px" }}>Read more</span></button>




            </div>
        </div>

    );

}

export default Info1;

