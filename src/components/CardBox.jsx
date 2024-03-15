import React from 'react'
import CgpaCalculator from './CgpaCalculator';
import year1courses from './Courses';
import year2courses from './CoursesOne';
import SemesterTwo from './SemesterTwo';
import SemesterThree from './SemesterThree';
import SemesterFour from './SemesterFour';
import SemesterFive from './SemesterFive';
import SemesterSix from './SemesterSix';

export default function CardBox() {
  return (
    <div className='CardBox'>
      {year1courses.map((val)=>{
        return <CgpaCalculator course1={val.course1} course2={val.course2} course3={val.course3} course4={val.course4}
        course5={val.course5} course6={val.course6} course7={val.course7} course8={val.course8} course9={val.course9}/>
      })}
      {year1courses.map((val)=>{
        return <SemesterTwo course1={val.course1} course2={val.course2} course3={val.course3} course4={val.course4}
        course5={val.course5} course6={val.course6} course7={val.course7} course8={val.course8} course9={val.course9}/>
      })}
      {year1courses.map((val)=>{
        return <SemesterThree course1={val.course1} course2={val.course2} course3={val.course3} course4={val.course4}
        course5={val.course5} course6={val.course6} course7={val.course7} course8={val.course8} course9={val.course9}/>
      })}
      {year1courses.map((val)=>{
        return <SemesterFour course1={val.course1} course2={val.course2} course3={val.course3} course4={val.course4}
        course5={val.course5} course6={val.course6} course7={val.course7} course8={val.course8} course9={val.course9}/>
      })}
      {year2courses.map((val)=>{
        return <SemesterFive course1={val.course1} course2={val.course2} course3={val.course3} course4={val.course4}
        course5={val.course5} course6={val.course6} course7={val.course7} course8={val.course8} course9={val.course9}/>
      })}
      {year2courses.map((val)=>{
        return <SemesterSix course1={val.course1} course2={val.course2} course3={val.course3} course4={val.course4}
        course5={val.course5} course6={val.course6} course7={val.course7} course8={val.course8} course9={val.course9}/>
      })}
    </div>
  )
}
