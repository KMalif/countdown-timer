import { useEffect, useState } from "react";

import Counter from "../../components/Counter";
import Socials from "../../components/Socials";
import hills from '../../assets/images/pattern-hills.svg';
import stars from '../../assets/images/bg-stars.svg';

// import classes from './style.module.scss';

const Home = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    let defaultDate = new Date("2024-01-24 17:00:00").getTime();
    let now = new Date().getTime();
    let diff = defaultDate - now;

    useEffect(() => {
        if(seconds < 0){
            return;
        }
        const timer = setInterval(()=>{
            setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMinutes(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((diff % (1000 * 60)) / 1000));
            
        }, 1000);
        return () => clearInterval(timer);
    },[seconds]);

    return(
        <div className="main">
            <div className="container">
                <div className="count-items">
                <h1 className="count-title">WE`RE LAUNCHING SOON</h1>
                <Counter time={{days, hours, minutes, seconds}}/>
                </div>
            </div>
            <Socials/>
            <img src={stars}
                alt="stars-overlay" 
                className="stars overlay-img"
            />
            <img
                src={hills}
                alt="hills overlay"
                className="hills overlay-img"
            />
        </div>
    )
};

export default Home;

