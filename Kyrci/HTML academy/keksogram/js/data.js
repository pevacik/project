/* eslint-disable no-unused-vars */
import { GET_RANDOM, GET_FLOAT_RANDOM, GET_ARRAY_ELEMENT_RANDOM, PROVE_OF_LENTGH } from './util.js';

const PHOTO_COUNT = 25;
let photos = [];

// подписи к фото
const DESCRIPTIONS = [
  'Ха, мое лето',
  'Вот это отдых',
  'не запостить такое не мог',
  'Просто лето, просто утро',
  '',
  'вот так вот это вот тут вот да',
  'конец',
];

// количество лайков
const LIKES = {
  Min: 15,
  Max: 200,
};


// имена авторов комментариев
const NAMES = [
  'Дима',
  'Петя',
  'Вася',
  'Маша',
  'Максим',
  'Олег',
  'Зарип',
  'Замир',
  'Зашквар',
];



// колиество коментариев
const Comments = {
  min: 1,
  max: 5,
};

// текст коментария
const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];




const addComments = () => {
  const comment = [];
  for (let i = 0; i < GET_RANDOM(Comments.min, Comments.max); i++) {
    comment.push({
      id: GET_RANDOM(1, 999),
      avatar: 'img/avatar-' + GET_RANDOM(1, 6) + '.svg',
      message: GET_ARRAY_ELEMENT_RANDOM(messages),
      name: GET_ARRAY_ELEMENT_RANDOM(NAMES),
    })
  }
  return comment
};


const addPhoto = () => {
  for (let i = 1; i < PHOTO_COUNT + 1; i++) {
    photos.push({
      id: i,
      url: 'photos/' + i + '.jpg',
      description: GET_ARRAY_ELEMENT_RANDOM(DESCRIPTIONS),
      likes: GET_RANDOM(LIKES.Min, LIKES.Max),
      comments: addComments(),
    })
  }
  return photos
};
addPhoto();

export default photos;
