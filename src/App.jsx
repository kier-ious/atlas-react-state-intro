import React from 'react';
import SchoolCatalog from "./components/SchoolCatalog";
import Header from "./Header";
import ClassSchedule from "./components/ClassSchedule";
import { CourseProvider } from './context/CourseContext.jsx';


export default function App() {
  return (
    <CourseProvider>
      <div>
        <Header />
        <SchoolCatalog />
        <ClassSchedule />
      </div>
    </CourseProvider>
  );
}
