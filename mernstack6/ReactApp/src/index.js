import React from "react";//default import
import {render} from "react-dom";//normal import

import {App} from "./App/App";

import {Provider} from "react-redux";
import store from "./store";

//we are using store as a single source of truth and 
//this is the one time process we are setting store here
//we are using provider from react-redux to hook up our application
render(<Provider store={store}>
                <App />
        </Provider>, //pulling out react application newly created
            document.getElementById("root")//hooking up react application to root element of index.html
    )