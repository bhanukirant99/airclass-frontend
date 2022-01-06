import './homepage.css';
import Header from 'components/Header/header';
import Footer from 'components/Footer/footer';
import Course from 'components/course/course';
import Masterclass from 'components/masterclass/masterclass';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import React from 'react';

function Homepage() {
  const isHome = false;
  const isenroll = false;
  const courseinfo = [
    {
      'course-title': 'Computer Programming',
      'course-info':
        'Learn how to ace coding competitions and become a great programmer',
    },
    {
      'course-title': 'Computer Programming',
      'course-info':
        'Learn how to ace coding competitions and become a great programmer',
    },
    {
      'course-title': 'Computer Programming',
      'course-info':
        'Learn how to ace coding competitions and become a great programmer',
    },
  ];
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
              {courseinfo.map(eachItem => (
                <Course coursedetails={eachItem} isenroll="true" />
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
              {courseinfo.map(eachItem => (
                <Course coursedetails={eachItem} isenroll={isenroll} />
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
            {courseinfo.map(eachItem => (
              <Masterclass coursedetails={eachItem} isenroll={isenroll} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Homepage;
