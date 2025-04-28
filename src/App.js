import { Routes, Route } from 'react-router';
import { useState, useEffect } from 'react';
import { doc, setDoc } from "@firebase/firestore";
import { db, str } from './utilities/firebase_config';
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";
import 'bootstrap/dist/css/bootstrap.css'

import Resume from './pages/Resume';
import Works from './pages/Works';
import { Home } from './pages/Home';
import View from './pages/View';
import ListByTag from './pages/ListByTag';
import ListByYear from './pages/ListByYear';
import ListBySubtitle from './pages/ListBySubtitle';
import ListByCategory from './pages/ListByCategory';
import { fetchWorks, fetchWorkExperience, fetchCertifications, fetchSkillsets, developmentBackground, designBackground } from './utilities/data';
import NavigationBar from './layout/NavBar';

const uploadNestedImagesAndSave = async () => {
  for (const work of developmentBackground) {
    const docRef = doc(db, "skillsets", work.set);
    const { image, ...rest } = work;
    // const updatedGallery = [];
    // for (const [index, screen] of screens.entries()) {
    //   // Upload each image inside the gallery
    //   const response = await fetch(screen.img);
    //   const blob = await response.blob();
    //   const fileName = screen.img.split('/').pop();  // Extract the file name from the path
    //   const imageRef = ref(str, `works/${fileName}`);
    //   const snapshot = await uploadBytes(imageRef, blob);
    //   const imageUrl = await getDownloadURL(snapshot.ref);

    //   updatedGallery.push({
    //     ...screen,
    //     img: imageUrl,
    //   });
    // }

    // updatedGallery.push({
    //   ...screen,
    //   img: imageUrl,
    // });
    // if (image) {
    //   const response = await fetch(image);
    //   const blob = await response.blob();
    //   const fileName = image.split('/').pop();  // Extract the file name from the path
    //   const imageRef = ref(str, `skillsets/${fileName}`);
    //   const snapshot = await uploadBytes(imageRef, blob);
    //   const imageUrl = await getDownloadURL(snapshot.ref);

    //   await setDoc(docRef, {
    //     ...rest,
    //     image: imageUrl,
    //   });
    // }
    // else {

    //   await setDoc(docRef, {
    //     ...rest,
    //     image: null,
    //   });

    // }

    await setDoc(docRef, work);
  }

  console.log("All nested images uploaded and documents saved!");
};



function App() {
  const [works, setWorks] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [skillsets, setSkillsets] = useState([]);

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

    const getSkilsets = async () => {
      const skillsetsData = await fetchSkillsets()
      setSkillsets(skillsetsData)
    };

    getWorks()
    getWorkExperience()
    getCertifications()
    getSkilsets()
  }, []);
  return (
    <div className="App">
      <button  onClick={() => {uploadNestedImagesAndSave()}}>Upload data</button>
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
            skillSets={skillsets}
          />}  
        />
      {works.length > 0 && workExperience.length > 0 && certifications.length > 0 && skillsets.length > 0 &&
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
