import { db } from '../utilities/firebase_config';
import { collection, getDocs, orderBy, Timestamp } from "firebase/firestore";
import { faDesktop, faBriefcase, faVideoCamera } from '@fortawesome/free-solid-svg-icons';

const icons = {
  "faDesktop": faDesktop,
  "faVideoCamera": faVideoCamera,
  "faBriefcase": faBriefcase
}

  export async function fetchWorks() {
    try {
      const querySnapshot = await getDocs(collection(db, "works"), orderBy("years", "desc"));
      const works = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        maxYear: Math.max(...doc.data().years),
      }));
      
      works.sort((a, b) => b.maxYear - a.maxYear);
      return works // Array of user documents from the "users" collection
    } catch (error) {
      console.error("Error fetching documents: ", error);
      return [];
    }
  }

  export async function fetchWorkExperience() {
    try {
      const querySnapshot = await getDocs(collection(db, "work-experience"), orderBy("end_date", "desc"));
      const workExperience = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        start_date: doc.data().start_date.toDate(),
        end_date: doc.data().end_date.toDate()
      }));
      
      return workExperience // Array of user documents from the "users" collection
    } catch (error) {
      console.error("Error fetching documents: ", error);
      return [];
    }
  }

  export async function fetchCertifications() {
    try {
      const querySnapshot = await getDocs(collection(db, "certifications"), orderBy("date", "desc"));
      const certifications = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        date: doc.data().date.toDate()
      }));
      
      return certifications // Array of user documents from the "users" collection
    } catch (error) {
      console.error("Error fetching documents: ", error);
      return [];
    }
  }

  export async function fetchSkillsets() {
    try {
      const querySnapshot = await getDocs(collection(db, "skillsets"), orderBy("priority", "asc"));
      const skillsets = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        icon: icons[doc.data().icon]
      }));
      
      return skillsets // Array of user documents from the "users" collection
    } catch (error) {
      console.error("Error fetching documents: ", error);
      return [];
    }
  }

  export const skillSet = [
    {
      "priority": 1,
      "set": "Development",
      "icon": "faDesktop",
      "description": "Includes scripting, programming, and database management",
      "skills": [
        {
          "skill": "C++, C#, Java",
          "category": "Programming",
          "rating": 4
        },
        {
          "skill": "Ruby, Python",
          "category": "Programming",
          "rating": 4
        },
        {
          "skill": "Dart, Flutter",
          "category": "Programming",
          "rating": 5
        },
        {
          "skill": "HTML, CSS",
          "category": "Scripting",
          "rating": 5
        },
        {
          "skill": "JavaScript, ReactJS, NodeJS",
          "category": "Scripting",
          "rating": 5
        },
        {
          "skill": "SQL",
          "category": null,
          "rating": 4
        },
        {
          "skill": "Computer assembly",
          "category": null,
          "rating": 3
        }
      ]
    },
    {
      "priority": 2,
      "set": "Multimedia",
      "icon": "faVideoCamera",
      "description": "Includes graphic art production and video editing",
      "skills": [
        {
          "skill": "Photoshop",
          "category": "Graphic art production",
          "rating": 5
        },
        {
          "skill": "LightRoom",
          "category": "Graphic art production",
          "rating": 5
        },
        {
          "skill": "AfterEffects",
          "category": "Video Editing",
          "rating": 4
        },
        {
          "skill": "Premiere",
          "category": "Video Editing",
          "rating": 3
        }
      ]
    },
    {
      "priority": 3,
      "set": "Others",
      "icon": "faBriefcase",
      "description": "",
      "skills": [
        {
          "skill": "Sales and accounting",
          "rating": 3
        },
        {
          "skill": "Classroom instruction",
          "rating": 5
        }
      ]
    }
  ]

  export const developmentBackground = [
    {
      "id": "react",
      "years": 3.0
    },
    {
      "id": "firebase",
      "years": 3.0
    },
    {
      "id": "mysql",
      "years": 2.0,
      "name": "MySql"
    },
    {
      "id": "django",
      "years": 2.0
    },
    {
      "id": "flutter",
      "years": 1.0
    },
    {
      "id": "rails",
      "years": 0.5,
      "name": "Ruby on Rails"
    },
    {
      "id": "codeigniter",
      "years": 0.5,
      "name": "Code Igniter"
    }
  ]

  export const designBackground = [
    {
      "id": "photoshop",
      "years": 9.0
    },
    {
      "id": "flash",
      "years": 4.0
    },
    {
      "id": "aftereffects",
      "years": 3.0,
      "name": "AfterEffects"
    },
    {
      "id": "camtasia",
      "years": 5.0
    },
    {
      "id": "premiere",
      "years": 1.0
    }
  ]