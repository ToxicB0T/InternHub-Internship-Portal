
import { NavLink } from "react-router-dom"
import Logo from "../../component/logo/Logo"
import "./welcomepage.css"

export default function Welcomepage() {
    const currentyear=new Date().getFullYear();
  return (
    <div>
        <div className="nav">
    <div className="logo"><Logo></Logo></div>
    <div className="list">
        <ul className="listNav">
            <li><a href="#home" className="hm">HOME</a></li>
            <li><a href="#aboutUs">ABOUT US</a></li>
            <li><a href="#services">SERVICES</a></li>
            {/* <li><a href="#signIn" className="signIn">SIGN IN</a></li>
            <li><a href="#signUp" className="signUp">SIGN UP</a></li> */}
            <li><NavLink to="/signin" className="signIn">SIGN IN</NavLink></li>
            <li><NavLink to="/signup" className="signUp">SIGN UP</NavLink></li>
        </ul>
    </div>
</div>
<div className="firstBackground" id="home">
    <h3>Welcome to <span className="name">InternHub</span> !</h3>
    <p className="projectDescription">
        Your gateway to the future,Intern Hub is the premier destination for students to find great internships and for companies to meet new talent. We make it easy to go from classroom to career, connecting you to endless opportunities.
    </p>
    <div className="find">
        <a href="#findStudent" className="findStudent">Find an Internship</a>
        <a href="#findCompany" className="findCompany">Find an Intern</a>
    </div>
</div>
<div className="secondBackground" id="aboutUs">
    <h3>About InternHub</h3>
    <p className="aboutUsDescription">Intern Hub is all about making internships easy to find and apply for. It s a place where students can quickly find internships that help them grow, and companies can find eager interns.</p>
    <div className="missions">
        <div className="purpose">To simplify the search for quality internships and streamline the hiring process for companies, all within a single, user-friendly portal,ensuring a perfect match.</div>
        <div className="commitment">To provide a service that values the time and aspirations of students and the business goals of companies, ensuring a match that benefits both parties.</div>
    </div>
</div>
<div className="thirdBackground" id="services">
    <h3>Services</h3>
    <div className="serv">
        <div className="forStudent">Dive into our diverse pool of internships and find the perfect stage to kickstart your career. With personalized search options and a user-friendly interface, your next big opportunity is just a few clicks away.</div>
        <div className="forCompany">Expand your team with the brightest minds from across the globe. Post your stages, manage applications, and find the ideal candidate who can bring new perspectives to your business.</div>
    </div>
</div>
<div className="fourthBackground">
    <div className="des">
        <h3 className="logo"><Logo></Logo></h3>
        <p>Connecting talent and opportunity through a streamlined portal for internship discovery and recruitment.</p>
    </div>
    <div className="links">
        <h3>Links</h3>
        <ul>
            <li><a href="#home" >HOME</a></li>
            <li><a href="#aboutUs">ABOUT US</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><NavLink to="/signin" className="navSignin">SIGN IN</NavLink></li>
            <li><NavLink to="/signup" className="navSignup">SIGN UP</NavLink></li>
        </ul>
    </div>
    <div className="social">
        <h3>Follow US</h3>
        <ul>
            <li><a href="#" ><i className="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-square-instagram"></i></a></li>
        </ul>
    </div>
</div>
<div className="footer">
    <p>&copy; {currentyear} InternHub. All rights reserved.</p>
</div>
    </div>
  )
}
