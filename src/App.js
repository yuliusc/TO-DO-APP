import React from 'react';
import Header from "./Header";
import './App.css';
import Products from "./Products";

function App() {
    return (
        <div>

            <Header></Header>

            <Products/>
            <div id="first_circle" className="circle"></div>
            <div id="second_circle" className="circle"></div>
            <div id="third_circle" className="circle"></div>
            <div id="fourth_circle" className="circle"></div>

            {/*<Header/>*/}


        </div>
    );
}

export default App;
