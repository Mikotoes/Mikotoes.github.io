import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { BlogContact } from './pages/BlogContact'
import { EducationExperience } from './pages/EducationExperience'
import { Home } from './pages/Home'
import { ProjectsInterests } from './pages/ProjectsInterests'
import { SkillsLanguages } from './pages/SkillsLanguages'

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/SkillsLanguages" element={<SkillsLanguages/>}/>
          <Route path="/EducationExperience" element={<EducationExperience/>}/>
          <Route path="/ProjectsInterests" element={<ProjectsInterests/>}/>
          <Route path="/BlogContact" element={<BlogContact/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
