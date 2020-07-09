import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../../utils/api";
import "./style.css";

function Nav() {
    // const [user, change] = useState({ name: false, email: false, admin: false });
    // useEffect(() => { api.authUser().then(res => { if (res) change(res.data) }); }, []);
    return (
        <nav>
            <div className="linkBlock">
                <div className="innerLink">HOME</div>
                <div className="hoverLine transition"></div>
            </div>
            <div className="linkBlock">
                <div className="innerLink">EVENTS</div>
                <div className="hoverLine transition"></div>
            </div>
            <div className="linkBlock">
                <div className="innerLink">BLOG</div>
                <div className="hoverLine transition"></div>
            </div>
            <a href="https://www.facebook.com/cprteamadela/">
                <div className="linkBlock">
                    <div className="innerLink">FACEBOOK</div>
                    <div className="hoverLine transition"></div>
                </div>
            </a>
            <div className="linkBlock">
                <div className="innerLink">CONTACT</div>
                <div className="hoverLine transition"></div>
            </div>
            <div className="linkBlock">
                <div className="innerLink">LOG IN</div>
                <div className="hoverLine transition"></div>
            </div>
        </nav>
    )
}

export default Nav;