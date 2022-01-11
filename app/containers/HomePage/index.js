import './index.css';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Course from 'components/Course';
import Masterclass from 'components/Masterclass';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Homepage() {
  const config = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const settings = config;
  const courses = useSelector(state => state);
  const { global } = courses;
  const isHome = false;

  const searchedallcoursesinfo = global.searchResultsAllCourses;
  const searchedenrolledcoursesinfo = global.searchResultsEnrolledCourses;
  const searchedmastercoursesinfo = global.searchResultsMasterClasses;
  let noallresults = null;
  let noenrolledresults = null;
  let nomasterclassresults = null;
  if (searchedallcoursesinfo.length === 0) {
    noallresults = <h1 className="no-search-results">No results found</h1>;
  }
  if (searchedenrolledcoursesinfo.length === 0) {
    noenrolledresults = <h1 className="no-search-results">No results found</h1>;
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
            </div>
          </div>
          {noallresults}

          <Slider {...settings}>
            {searchedallcoursesinfo.map(eachItem => (
              <Course key={eachItem.id} coursedetails={eachItem} isenroll />
            ))}
          </Slider>

          <div className="arrow-container">
            <MdOutlineArrowForwardIos className="arrow" />
          </div>

          <div className="courses-container">
            <div className="courses-box">
              <h1 className="courses">Enrolled Courses</h1>
            </div>
          </div>
          {noenrolledresults}
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
export default Homepage;
