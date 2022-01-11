import './index.css';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Course from 'components/Course';
import Masterclass from 'components/Masterclass/';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import React from 'react';
import { useSelector } from 'react-redux';

function HomepageMentor() {
  const courses = useSelector(state => state);
  const { global } = courses;
  const isHome = false;

  const searchedallcoursesinfo = global.searchResultsallcourses;
  const searchedmastercoursesinfo = global.searchResultsMasterClasses;
  let noallresults = null;
  let nomasterclassresults = null;
  if (searchedallcoursesinfo.length === 0) {
    noallresults = <h1 className="no-search-results">No results found</h1>;
  }
  if (searchedmastercoursesinfo.length === 0) {
    nomasterclassresults = (
      <h1 className="no-search-results">No results found</h1>
    );
  }

  return (
    <div className="page">
      <Header isHome={isHome} />
      <div className="body">
        <div className="content">
          <h3 className="displayname">Hi Hari Chandana Sapare,</h3>
          <div className="courses-container">
            <div className="courses-box">
              <h1 className="courses">Courses</h1>
              <button id="enroll-btn" type="button" className="enroll">
                Add Course
              </button>
            </div>
          </div>
          {noallresults}
          <div className="courses-display">
            <div className="courses-cards">
              {searchedallcoursesinfo.map(eachItem => (
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
          {nomasterclassresults}
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
export default HomepageMentor;
