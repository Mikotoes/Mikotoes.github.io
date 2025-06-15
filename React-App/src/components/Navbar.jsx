import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <>
            <Link to="/"><button>Home</button></Link>
            <Link to="/SkillsLanguages"><button>Skills&Languages</button></Link>
            <Link to="/EducationExperience"><button>Education&Experience</button></Link>
            <Link to="/ProjectsInterests"><button>Projects&Interests</button></Link>
            <Link to="/BlogContact"><button>Blog&Contact</button></Link>
        </>
    )
}