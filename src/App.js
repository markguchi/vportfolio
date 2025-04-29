import { Routes, Route } from 'react-router';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

import Resume from './pages/Resume';
import Works from './pages/Works';
import { Home } from './pages/Home';
import View from './pages/View';
import ListByTag from './pages/ListByTag';
import ListByYear from './pages/ListByYear';
import ListBySubtitle from './pages/ListBySubtitle';
import ListByCategory from './pages/ListByCategory';
import { fetchWorks, fetchWorkExperience, fetchCertifications, fetchSkillsets, fetchDevBackground, fetchDesignBackground } from './utilities/data';
import NavigationBar from './layout/NavBar';

function App() {
  const [works, setWorks] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [skillsets, setSkillsets] = useState([]);
  const [devBackground, setDevBackground] = useState([]);
  const [designBackground, setDesignBackground] = useState([]);

  useEffect(() => {
    const getWorks = async () => {
      const worksData = await fetchWorks()
      setWorks(worksData)
    };

    const getWorkExperience = async () => {
      const workExperienceData = await fetchWorkExperience()
      setWorkExperience(workExperienceData)
    };

    const getCertifications = async () => {
      const certificationsData = await fetchCertifications()
      setCertifications(certificationsData)
    };

    const getSkillsets = async () => {
      const skillsetsData = await fetchSkillsets()
      setSkillsets(skillsetsData)
    };

    const getDevBackground = async () => {
      const devBackgroundData = await fetchDevBackground()
      setDevBackground(devBackgroundData)
    };

    const getDesignBackground = async () => {
      const designBackgroundData = await fetchDesignBackground()
      setDesignBackground(designBackgroundData)
    };

    getWorks()
    getWorkExperience()
    getCertifications()
    getSkillsets()
    getDevBackground()
    getDesignBackground()
    console.log(works)
    console.log(workExperience)
    console.log(certifications)
    console.log(skillsets)
    console.log(devBackground)
    console.log(designBackground)
  }, []);
  return (
    <div className="App">
      <NavigationBar/>
      <Routes>
        <Route
          path="/"
          element={
          <Home
            recentWorks={
              works.filter(function isBigEnough(work) {
                return work.category === "development";
              }).slice(0, 2)
            }
            developmentBackground={devBackground}
            designBackground={designBackground}
            skillSets={skillsets}
          />}  
        />
      {works.length > 0 && workExperience.length > 0 && certifications.length > 0 && skillsets.length > 0 && devBackground.length > 0 && designBackground.length > 0&&
        <>
          <Route
            path="/resume"
            element={
            <Resume
              workExperience={workExperience}
              certifications={certifications}
              skillSets={skillsets}
            />}  
          />
          <Route
            path="/works"
            element={
            <Works
              works={works}
              isCategoryVisible={true}
            />}
          />
          <Route 
            path="/view"
            element={
              <View
              />}
          />
          <Route 
            path="/listbyyear"
            element={
              <ListByYear
                data={works}
              />}
          />
          <Route 
            path="/listbytag"
            element={
              <ListByTag
                data={works}
              />}
          />
          <Route 
            path="/listbytype"
            element={
              <ListBySubtitle
                data={works}
          />}
          />
          <Route 
            path="/listbycategory"
            element={
              <ListByCategory
                data={works}
          />}
          />
          {works.map((work) => {
            return(
              <Route
              key={work.id}
                path={"/works/" + work.id}
                element={
                  <View
                  data={work}
                  />
                }
              />
            )
          })}
        </>
      }
      
      </Routes>
    </div>
  );
}

export default App;
