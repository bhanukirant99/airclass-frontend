import './homepage.css';
import Header from 'components/Header/header';
import Footer from 'components/Footer/footer';
import Course from 'components/course/course';
import Masterclass from 'components/masterclass/masterclass';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import React from 'react';
import { useSelector } from 'react-redux';

function Homepage() {
  const courses = useSelector(state => state);
  const { global } = courses;
  const isHome = false;

  // const { masterclassinfo } = global;
  const searchedallcoursesinfo = global.searchResultsallcourses;
  const searchedenrolledcoursesinfo = global.searchResultsenrolledCourses;
  const searchedmastercoursesinfo = global.searchResultsMasterClasses;
  return (
    <div className="page">
      <Header isHome={isHome} />
      <div className="body">
        <div className="content">
          <h3 className="displayname">Hi Hari Chandana Sapare,</h3>
          <div className="courses-container">
            <div className="courses-box">
              <h1 className="courses">Courses</h1>
            </div>
          </div>
          <div className="courses-display">
            <div className="courses-cards">
              {searchedallcoursesinfo.map(eachItem => (
                <Course key={eachItem.id} coursedetails={eachItem} isenroll />
              ))}
            </div>
            <div className="arrow-container">
              <MdOutlineArrowForwardIos className="arrow" />
            </div>
          </div>
          <div className="courses-container">
            <div className="courses-box">
              <h1 className="courses">Enrolled Courses</h1>
            </div>
          </div>
          <div className="courses-display">
            <div className="courses-cards">
              {searchedenrolledcoursesinfo.map(eachItem => (
                <Course
                  key={eachItem.id}
                  coursedetails={eachItem}
                  isenroll={false}
                />
              ))}
            </div>
            <div className="arrow-container">
              <MdOutlineArrowForwardIos className="arrow" />
            </div>
          </div>
          <div className="courses-container">
            <div className="courses-box">
              <h1 className="courses">Masterclass Series</h1>
            </div>
          </div>
          <div className="masterclass-container">
            {searchedmastercoursesinfo.map(eachItem => (
              <Masterclass key={eachItem.id} coursedetails={eachItem} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Homepage;
