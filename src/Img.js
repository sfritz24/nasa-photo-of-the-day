import React, {useState, useEffect} from "react";
import "./Img.css";
import axios from "axios";

export default function ImgContainer(){
    const [url, setUrl] = useState()
    const [details, setDetails] = useState()
    const [credit, setCredit] = useState()
    const [title, setTitle] =  useState()

    useEffect(() =>{
        axios.get("https://api.nasa.gov/planetary/apod?api_key=HoDqptrUUu8FEzoE0Es98M7Oheu9etuggLudxiBG")
        .then(response =>{
            setUrl(response.data.url)
            setDetails(response.data.explanation)
            setCredit(response.data.copyright)
            setTitle(response.data.title)
            console.log(response.data)
        })
        .catch(error =>{
        console.log('this is the error', error)
        })
    }, [])
    return (
        <div className="card">
            <div className="head">
                <h2>By: {credit}</h2>
                <h3>"{title}"</h3>
            </div>
            <div className="img-container">
                <img src={url}></img>
                <p>{details}</p>
            </div>
        </div>
    )
};