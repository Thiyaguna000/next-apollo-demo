import React from "react";
import Styles from "./card.module.css";
import { useState } from "react";

const Card = ({ data, className }) => (
        <div className={`${Styles.dataContainer} ${className}`}>
            <h2 className={Styles.header} title={data.name}>{data.name}</h2>
            <p className={Styles.subHeader}>Location:<span className={Styles.location}>{data.location}</span></p>
            <p>Website: <a href={data.webPages} target="_blank">{data.webPages}</a></p>
        </div>     
    )

export default Card;