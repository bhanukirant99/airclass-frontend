import './course.css';
import React from 'react';
import PropTypes from 'prop-types';
import courseimg from '../../images/course-img.png';

function Course(props) {
  const { coursedetails, isenroll } = props;
  return (
    <div className="course-container">
      <img alt="course" className="course-image" src={courseimg} />
      <div className="course-details">
        <h1 className="course-title">{coursedetails['course-title']}</h1>
        <p className="course-info">{coursedetails['course-info']}</p>

        {isenroll && (
          <button type="button" className="enroll">
            enroll
          </button>
        )}
      </div>
    </div>
  );
}

Course.propTypes = {
  coursedetails: PropTypes.array.isRequired,
  isenroll: PropTypes.bool.isRequired,
};

export default Course;
