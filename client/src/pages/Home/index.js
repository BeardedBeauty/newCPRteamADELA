import React, { useEffect, useState, useRef } from "react";
import front from "../../assets/1-2.jpg";
import about from "../../assets/2.jpeg";
import mid from "../../assets/3.jpg";
import mid2 from "../../assets/4.jpeg";
import mid3 from "../../assets/5.jpeg";
// import { Link } from "react-router-dom";
// import api from "../../utils/api";
import "./style.css";

function Home() {
    const [fade, change] = useState(false);
    const domRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(obj => {
            obj.forEach(entry => change(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);
    return (
        <>
            <div className="titlebig titlefade">LEARN HOW TO ADMINISTER CPR AND SAVE LIVES</div>
            <p id="subsubtitle">According to 2014 data, nearly 45% of out-of-hospital cardiac arrest victims survived when bystander CPR was administered.</p>
            <div className="bfb">
                <img src={front} className="headingimg" />
            </div>
            <div className="clearfix dark subtitle">MY STORY</div>
            <div className="clearfix"></div>
            <div className="gray alternatebackground">
                <div className="desc gray left">
                    <p className="minititle">My name is Adela Alvarez and I am a cardiac arrest survivor because of the CPR that was administered.</p>
                    <p>On January 9th, 2014, I was teaching my Zumba class and suddenly went into cardiac arrest.</p>

                    <p>Luckily, my students acted quickly by calling 911 and administering CPR. After 20 minutes, the first responders arrived and shocked my heart 5 times. I was in serious condition for 45 days.</p>

                    <p>After many procedures, doctors were able to stabilize my heart. Unfortunately, due to complications I lost circulation in my right leg which led to an above-the-knee amputation.</p>

                    <p>After 45 days of being heavily sedated, I woke up. I am extremely thankful for all the doctors, nurses, and friends who were there for me and my family during this time.</p>
                </div>
                <img src={about} className="right aboutimg" />
                <div className="clearfix"></div>
            </div>
            <div className="clearfix dark subtitle">
                ZUMBA STORIES: LEG AMPUTATION SURVIVOR
                <br /><br />
                <iframe className="video" title="leg" data-ux="Embed" allowfullscreen="" type="text/html" frameborder="0" data-aid="VIDEO_IFRAME_RENDERED" src="//youtube.com/embed/uDmr-9Dwsl0?rel=0&amp;showinfo=0&amp;start=0"></iframe>
            </div>
            <div className="clearfix gray subtitle">
                A WORLD WHERE NO ONE DIES FROM CARDIAC ARREST
                <br /><br />
                <iframe className="video" title="world" data-ux="Embed" allowfullscreen="" type="text/html" frameborder="0" data-aid="VIDEO_IFRAME_RENDERED" src="https://youtube.com/embed/EC7HW7S2EzI?rel=0&showinfo=0&start=0"></iframe>
            </div>
            <div className="clearfix dark subtitle">TEAM ADELA CLASSES</div>
            <div className={`subtitle2 transition2 ${fade ? 'visible' : 'invisible'}`} ref={domRef}>
                A HANDS ON EDUCATION APPROACH
            </div>
            <img src={mid} className="headingimg" />
            <div className="classesHomepage">
                <p>We are committed to teaching CPR/AED and First Aid training and we understand the demands of everyday life, striving to make the classes convenient and easy to learn.</p>
                <p>Classes are offered at Mayer Lutheran High School.</p>
                <p className="bold">
                    If you are a group, organization or a business located in Minnesota, please contact us by phone at:
                </p>
                <p>(763) 232-1101 or <a href="mailto:cprteamadela@gmail.com">cprteamadela@gmail.com</a></p>
                <p>Sessions can take place at your desired location</p>
            </div>
            <div className="clearfix dark">
                <div className="infobox dark">
                    <img src={mid2} />
                    <p>Certified and Experienced</p>
                    <p>
                        Certified through the American Heart Association (AHA) to teach administration of Cardiopulmonary Resuscitation (CPR), Automated External Defibrillator (AED), First Aid, and Basic Life Support (BLS).
                    </p>
                </div>
                <div className="infobox gray">
                    <img src={mid3} />
                    <p>Administer CPR with Confidence</p>
                    <p>
                        The class curriculum conforms to current AHA guidelines, utilizing the current mannequins required for the AHA that provide audio and visual feedback on the rate and depth of compressions during CPR training.
                        We guarantee you will leave the class with the skills necessary to effectively administer high quality CPR/AED for adults, children, and infants.
                        As a cardiac arrest survivor, I know how important it is to know these skills!
                    </p>
                </div>
            </div>
            <div className="clearfix red subtitle">CPR/AED CLASSES</div>
            <div className="basic">
                <p className="bold">DISCRIPTION</p>
                <p>Heartsaver CPR/AED gives individuals the knowledge and skills necessary to recognize and provide basic care for breathing and cardiac emergencies until advanced medical personnel arrive. This American Heart Association course certifies individuals in CPR/AED for adults, children and infants and is valid for two years.</p>
                <br />
                <p className="bold">CERTIFICATION</p>
                <p>This course can be taken either in a traditional classroom setting, a blended learning setting (with some online coursework required prior to an in-person skill session), or on-site location. The exact same 2-year American Heart Association certification card is administered for each type of session.</p>
                <div className="clearfix"></div>
            </div>
            <div className="clearfix red subtitle">BLS-BASIC LIFE SUPPORT</div>
            <div className="basic">
                <p className="bold">DISCRIPTION</p>
                <p>
                    The American Heart Association Basic Life Support (BLS) course is designed to train healthcare professionals on recognizing and responding to life-threatening emergencies.
                    Nearly all Healthcare workers are required to have completed this BLS class.
                    Skills include: Providing 1 and 2 rescuer CPR/AED for adults, children and infants, using an Automated External Defibrillator and relieving choking.
                </p>
                <br />
                <p className="bold">CERTIFICATION</p>
                <p>
                    This course can be taken either in a traditional classroom setting, a blended learning setting (with some online course work required prior to an in-person skill session) or on-site location.
                    The exact same 2-year American Heart Association certification is administered for each type of session.
                </p>
                <div className="clearfix"></div>
            </div>
            <div className="clearfix dark subtitle">BLENDED</div>
            <div className="clearfix gray">
                <div className="basic">
                    <p className="bold">CPR/AED Heartsaver®</p>
                    <p>
                        CPR AED  blended learning training offers flexibility for employers, students, and Instructors. The online (eLearning) portion of the course is designed to teach students the cognitive information needed for first aid and/or CPR and AED training.
                        Upon completion of the online portion, students must complete hands-on session  focused on meaningful skills coaching, practice, and testing.
                    </p>
                    <div className="line"></div>
                    <p className="bold">HANDS ON SESSION</p>
                    <p>
                        Hands-on session duration for CPR/AED, First Aid or BLS is approximatly 30 minutes long.
                        If you are a group, organization or bussiness, sessions can take place at your desired location!
                    </p>
                    <div className="line"></div>
                    <p className="bold">BLS HeartCode®</p>
                    <p>
                        HeartCode BLS uses a variety of eLearning assets such as dramatizations, eSimulations, animations, self-directed learning, and interactive activities to teach students BLS knowledge and skills.
                        After completing the online portion, students attend a structured BLS Hands-On Session with an AHA Instructor. This session focuses on meaningful skills practice, debriefing, team scenarios, discussions of local protocols, and skills testing.
                        HeartCode BLS is for healthcare professionals seeking an alternative method for completing an initial or renewal BLS Course.
                    </p>
                    <div className="clearfix"></div>
                </div>
            </div>
            <div className="clearfix light subtitle">
                SUBSCRIBE
                <br /><br />
                <div className="inputbox">
                    <input class="basicInput transition" type="text" id="email" name="email" />
                    <div className="button1">
                        <div className="buttontext">SUBMIT</div>
                        <div className="hoverbutton transition"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;