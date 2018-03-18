const map = {
  notifications: 'Recommendations',
  profile: 'Profile',
  interests: 'Interests',
};

/* eslint-disable-next-line import/prefer-default-export */
export const getTitleByUrl = url => map[url.split('/')[1]];
