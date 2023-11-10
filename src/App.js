import { Routes, Route } from 'react-router';

import 'bootstrap/dist/css/bootstrap.css'

import Resume from './pages/Resume';
import Works from './pages/Works';
import { Home } from './pages/Home';
import View from './pages/View';
import ListByTag from './pages/ListByTag';
import ListByYear from './pages/ListByYear';
import ListBySubtitle from './pages/ListBySubtitle';
import ListByCategory from './pages/ListByCategory';


import { works, workExperience, skillSet, certifications, developmentBackground, designBackground } from './utilities/data';
import NavigationBar from './layout/NavBar';


function App() {
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
            developmentBackground={developmentBackground}
            designBackground={designBackground}
            skillSet={skillSet}
          />}  
        />
        <Route
          path="/resume"
          element={
          <Resume
            workExperience={workExperience}
            certifications={certifications}
            skillSet={skillSet}
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
      </Routes>
    </div>
  ); 
}

export default App;
