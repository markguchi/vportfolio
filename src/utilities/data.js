import { db } from '../utilities/firebase_config';
import { collection, getDocs, orderBy } from "firebase/firestore";
import { faDesktop, faBriefcase, faVideoCamera } from '@fortawesome/free-solid-svg-icons';

const icons = {
  "faDesktop": faDesktop,
  "faVideoCamera": faVideoCamera,
  "faBriefcase": faBriefcase
}

const today = new Date()

export async function fetchWorks() {
  try {
    const querySnapshot = await getDocs(collection(db, "works"), orderBy("years", "desc"));
    const works = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      maxYear: Math.max(...doc.data().years),
    }));
    
    works.sort((a, b) => b.maxYear - a.maxYear);
    return works
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
    
    return workExperience.sort((a, b) => b.end_date - a.end_date)
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
    
    return certifications
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
    
    return skillsets
  } catch (error) {
    console.error("Error fetching documents: ", error);
    return [];
  }
}

export async function fetchDevBackground() {
  try {
    const querySnapshot = await getDocs(collection(db, "dev-background"));
    const devBackground = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      years: today.getFullYear() - doc.data().start_date.toDate().getFullYear(),
    }));
    
    return devBackground.sort((a, b) => b.years - a.years)
  } catch (error) {
    console.error("Error fetching documents: ", error);
    return [];
  }
}

export async function fetchDesignBackground() {
  try {
    const querySnapshot = await getDocs(collection(db, "design-background"));
    const designBackground = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      years: today.getFullYear() - doc.data().start_date.toDate().getFullYear(),
    }));
    
    return designBackground.sort((a, b) => b.years - a.years)
  } catch (error) {
    console.error("Error fetching documents: ", error);
    return [];
  }
}