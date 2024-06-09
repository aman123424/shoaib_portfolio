import React, { useEffect, useState } from 'react';
import "./stats.scss";
type StatsProps = {
    
};
const Stats:React.FC<StatsProps> = () => {
    const [totinv, setTotinv] = useState<number>(0)
    useEffect(
        () => {
        if(totinv < 250) {
            setTimeout(
                () => {
                setTotinv(val => val+5)
            }, 
            15);
        }
    }, 
    [totinv])
    const [repinv, setRepinv] = useState<number>(0)
    useEffect(
        () => {
        if(repinv < 75) {
            setTimeout(
                () => {
                setRepinv(val => val+1)
            }, 
            10);
        }
    }, 
    [repinv])

    const [avginv, setAvginv] = useState<number>(0)
    useEffect(
        () => {
        if(avginv < 20) {
            setTimeout(
                () => {
                setAvginv(val => val+1)
            }, 
            38);
        }
    }, 
    [avginv])

    const [avgret, setAvgret] = useState<number>(0)
    useEffect(
        () => {
        if(avgret < 350) {
            setTimeout(
                () => {
                setAvgret(val => val+5)
            }, 
            10);
        }
    }, 
    [avgret])

    return <div className='wrapper'>
        <div className={`container`}>
            <div className={`content1`}>
                <div className={`num`} data-val ='250'>{totinv}</div>
                <div className={`text`}>Startups</div>
            </div>
            <div className={`content2`}>
                <div className={`num`} data-val ='75'>{repinv}</div>
                <div className={`text`}>Companies incubated in research park</div>
            </div>
            <div className={`content3`}>
                <div className={`num`} data-val ='20'>{avginv}</div>
                <div className={`text`}>Project domains</div>
            </div>
            <div className={`content4`}>
               
                <div className={`num`} data-val ='350'>{avgret}K</div>
                <div className={`text`}> Online reach</div>
            </div>
        </div>
        </div>
  
}

export default Stats
