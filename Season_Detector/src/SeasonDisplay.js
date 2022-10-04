import React from "react";
import './SeasonDisplay.css'

const seasonConfig = {
    Summer:{
        text:`The Summers are damn so hot!!!!`,
        iconName:'sun' 
    },
    Winter:{
        text:'Winter Season it is',
        iconName:'snowflake'
    }
};

const getSeason = (lat,month)=>{
if(month>2 && month <9){
    if(lat>0)
    return 'Summer';
    else
    return 'Winter';
}
else{
    if(lat>0){
        return 'Winter';
    }
    else
    return 'Summer';
}
}

const SeasonDisplay=(props)=>{
    const season =getSeason(props.lat, new Date().getMonth())
    // console.log(season);
    const {text,iconName} = seasonConfig[season];
    return(
        <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`}></i>
         <h1 className="text-center">{text}</h1>
        <i className={`icon-right massive ${iconName} icon`}></i>
         </div>
        );
};

export default SeasonDisplay;