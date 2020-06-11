import React, {useState, useEffect} from "react";
import "./Img.css";
import axios from "axios";
import ImgContain from "./styles/ImgContain";
import CardContain from "./styles/Card";


export default function ImgContainer(props){
    const {data} = props
    return (
        <CardContain>
            <div className="head">
                <h2>By: {data.credit}</h2>
                <h3>"{data.title}"</h3>
            </div>
            <ImgContain>
                <img src={data.url}></img>
                <p>{data.explanation}</p>
            </ImgContain>
        </CardContain>
    )
};