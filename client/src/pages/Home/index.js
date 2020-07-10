import React, { useEffect, useState } from "react";
import front from "../../assets/1-2.jpg";
// import { Link } from "react-router-dom";
// import api from "../../utils/api";
import "./style.css";

function Home() {
    // const [user, change] = useState({ name: false, email: false, admin: false });
    // useEffect(() => { api.authUser().then(res => { if (res) change(res.data) }); }, []);
    return (
        <>
            <img src={front} className="headingimg" />
            <div className="clearfix dark subtitle">MY STORY</div>
            <div className="clearfix"></div>
            <div className="desc gray">
                <p>On January 9th, 2014, I was teaching my Zumba class and suddenly went into cardiac arrest.</p>

                <p>uckily, my students acted quickly by calling 911 and administering CPR. After 20 minutes, the first responders arrived and shocked my heart 5 times. I was in serious condition for 45 days.</p>

                <p>After many procedures, doctors were able to stabilize my heart. Unfortunately, due to complications I lost circulation in my right leg which led to an above-the-knee amputation.</p>

                <p>After 45 days of being heavily sedated, I woke up. I am extremely thankful for all the doctors, nurses, and friends who were there for me and my family during this time.</p>
            </div>
        </>
    )
}

export default Home;