import { MOCKED_DATA } from './static-data';

interface Poster {
  id: number;
  url: string;
  namePoster: string;
  rating: number;
}

const createPoster = (_: unknown, index: number): Poster => {
  const posterData = MOCKED_DATA[index];

  return {
    id: posterData.ID,
    url: posterData.URL,
    namePoster: posterData.NAME_POSTER,
    rating: posterData.LIKES,
  };
};

const mockedData = () =>
  Array.from({ length: MOCKED_DATA.length }, createPoster);

export default mockedData;
