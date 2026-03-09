import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const SearchBar = ({title,description})=>{
     
    return (
        <div className="flex flex-col">
            <Header/>
            <div className="flex flex-col w-full h-[20rem]">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <Footer/>
        </div>
    )
}
export default SearchBar;