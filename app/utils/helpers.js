import axios from 'axios';

function getRepos(username) {
  return axios.get(`https://api.github.com/users/${username}/repos`);
};

function getUserInfo(username) {
  return axios.get(`https://api.github.com/users/${username}`);
};

function getPublicActivity(username) {
  return axios.get(`https://api.github.com/users/${username}/events/public?per_page=10`);
};

var helpers = {
  getGithubInfo(username) {
    return axios.all([getRepos(username), getUserInfo(username), getPublicActivity(username)])
      .then((arr) => {
        return {
          repos: arr[0].data,
          bio: arr[1].data,
          events: arr[2].data
        }
      });
  }
};

export default helpers;
