/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { createStore } from 'redux';
import { CHANGE_USERNAME } from './constants';

// The initial state of the App
export const initialState = {
  initialallcoursesinfo: [
    {
      id: 1,
      'course-title': 'Artificial inteligence',
      'course-info':
        'Learn how to ace coding competitions and become a great programmer',
      isenrolled: false,
    },
    {
      id: 2,
      'course-title': 'Web development',
      'course-info':
        'Learn how to ace coding competitions and become a great programmer',
      isenrolled: false,
    },
    {
      id: 3,
      'course-title': 'Machine learning',
      'course-info':
        'Learn how to ace coding competitions and become a great programmer Learn how to ace coding competitions and become a great programmer',
      isenrolled: false,
    },
  ],
  initialenrolledcourseinfo: [
    {
      id: 1,
      'course-title': 'Computer Programming',
      'course-info':
        'Learn how to ace coding competitions and become a great programmer',
    },
    {
      id: 2,
      'course-title': 'Computer Programming nnnnnnnnnn',
      'course-info':
        'Learn how to ace coding competitions and become a great programmer',
    },
    {
      id: 3,
      'course-title': 'Computer Programming',
      'course-info':
        'Learn how to ace coding competitions and become a great programmer Learn how to ace coding competitions and become a great programmer',
    },
  ],

  masterclassinfo: [
    {
      'masterclass-title': 'Understanding 5G',
      'masterclass-speaker': 'Rakesh Mishra',
      'speaker-profession': 'Co-Founder Uhana',
      'speaker-college': 'IIT Madras',
    },
    {
      'masterclass-title': 'Understanding 5G',
      'masterclass-speaker': 'Rakesh Mishra',
      'speaker-profession': 'Co-Founder Uhana',
      'speaker-college': 'IIT Madras',
    },
    {
      'masterclass-title': 'Understanding 5G',
      'masterclass-speaker': 'Rakesh Mishra',
      'speaker-profession': 'Co-Founder Uhana',
      'speaker-college': 'IIT Madras',
    },
  ],
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USERNAME:
        // Delete prefixed '@' from the github username
        draft.username = action.username.replace(/@/gi, '');
        break;
    }
  });

// const selectCount = state => state
// export {selectCount, homeReducer};

const store = createStore(homeReducer);

export { store };
