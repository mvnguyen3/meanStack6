import React from "react";

//Functional component doesn't inherit from React.Component
export default function NotFound(props) {
    return(
        <React.Fragment>
            <h1>Requested Page Not Found</h1>
        </React.Fragment>
    )
}