import React from "react";
import './home.css'

export default function Management()
{
    return(
        <>

            <div className="container-md mt-5">
                <div className="row managementBox">
                    <div className="col-12 col-md-6 p-md-4 left">
                        <h1 className="fw-bolder">The career <br /> management <br /> tool of a new era</h1>
                        <p>Atlas is revolutionizing the way professionals <br /> identify, develop, and apply their talents by <br /> engaging them from a young age and supporting <br /> their growth throughout their lives</p>
                    </div>
                    <div className="col-12 col-md-6 right">
                        <img src="management.avif" height={'100%'} width={'100%'} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}