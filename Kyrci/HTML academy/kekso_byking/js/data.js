/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { GET_RANDOM, GET_MORE_RANDOM, featuresRandom } from './util.js';
export { player, features };


const title = [
  'супер заголовок',
  'заголовок главный',
];


const type = [
  'place',
  'flat',
  'house',
  'bunglaw',
];


const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];


const photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];


const description = 'все супер, всем нравится, особенно мне';


const checkin = [
  '12:00',
  '13:00',
  '14:00',
];


const checkout = [
  '12:00',
  '13:00',
  '14:00',
];


let player;

player = () => {
  player = {
    author: { avatar: 'img/avatars/user0' + GET_RANDOM(1, 10) + '.png' },

    offer: {
      title: title[GET_RANDOM(0, title.length - 1)],
      address: [GET_MORE_RANDOM(35.65, 35.7, 5), GET_MORE_RANDOM(139.7, 139.8, 5)],
      price: GET_RANDOM(1, 10),
      type: type[GET_RANDOM(0, title.length)],
      rooms: GET_RANDOM(1, 10),
      guests: GET_RANDOM(1, 10),
      checkin: checkin[GET_RANDOM(0, title.length)],
      checkout: checkout[GET_RANDOM(0, title.length)],
      features: featuresRandom(),
      description: description,
      photos: photos[GET_RANDOM(0, title.length)],

      location: {
        x: GET_MORE_RANDOM(35.65, 35.7, 5),
        y: GET_MORE_RANDOM(139.7, 139.8, 5),
      },
    },
  }
  return player;
};



