import { Link } from "react-router-dom"
import "./Navbar.css"

export function Navbar() {
    return (
        <div className="navbar">
            <Link to="/"><button className="navbutton">Home</button></Link>
            <Link to="/SkillsLanguages"><button className="navbutton">Skills&Languages</button></Link>
            <Link to="/EducationExperience"><button className="navbutton">Education&Experience</button></Link>
            <Link to="/ProjectsInterests"><button className="navbutton">Projects&Interests</button></Link>
            <Link to="/BlogContact"><button className="navbutton">Blog&Contact</button></Link>
        </div>
    )
}