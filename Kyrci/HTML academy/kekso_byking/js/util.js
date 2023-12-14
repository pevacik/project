/* eslint-disable no-unused-vars */
import { features } from './data.js';
export { GET_RANDOM, GET_MORE_RANDOM, featuresRandom };



const GET_RANDOM = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }
  if (max < min) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const GET_MORE_RANDOM = (min, max, digits) => {
  let x;
  if (min < 0 || max < 0) {
    return -1;
  }
  if (max < min) {
    [min, max] = [max, min];
  }
  return x = (Math.random() * (max - min + 1) + min).toFixed(digits);
};

const featuresRandom = () => {
  let randomFeatures = [];
  for (let i = features.length - GET_RANDOM(0, features.length); i >= 0; i--) {
    randomFeatures.push(features[i])
  }
  return randomFeatures
};
