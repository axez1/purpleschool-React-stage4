import { MOCKED_DATA } from './static-data.js';

const createPoster = (_, index) => {

  const posterData = MOCKED_DATA[index];

  return {
    id: posterData.ID,
    url: posterData.URL,
    namePoster: posterData.NAME_POSTER,
    likes: posterData.LIKES,
  };
};

const mockedData = () => Array.from({ length: MOCKED_DATA.length }, createPoster);

export default mockedData
