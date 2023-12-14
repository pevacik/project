for (let i = 0; i < PHOTO_COUNT; i++) {
    Photos.push({
      id: i,
      url: 'photos/' + i + '.jpg',
      description: GET_ARRAY_ELEMENT_RANDOM(DESCRIPTIONS),
      likes: GET_RANDOM(LIKES.Min, LIKES.Max),
      comments: addComments(),