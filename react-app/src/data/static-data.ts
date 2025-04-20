import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
import img5 from '../assets/images/5.jpg';
import img6 from '../assets/images/6.jpg';
import img7 from '../assets/images/7.jpg';
import img8 from '../assets/images/8.jpg';

export const MOCKED_DATA: Array<{
  ID: number;
  NAME_POSTER: string;
  LIKES: number;
  URL: string;
}> = [
  {
    ID: 1,
    NAME_POSTER: 'Black Widow',
    LIKES: 324,
    URL: img1,
  },
  {
    ID: 2,
    NAME_POSTER: 'Shang Chi',
    LIKES: 124,
    URL: img2,
  },
  {
    ID: 3,
    NAME_POSTER: 'Loki',
    LIKES: 235,
    URL: img3,
  },
  {
    ID: 4,
    NAME_POSTER: 'How I Met Your Mother',
    LIKES: 13,
    URL: img4,
  },
  {
    ID: 5,
    NAME_POSTER: 'Money Heist',
    LIKES: 8125,
    URL: img5,
  },
  {
    ID: 6,
    NAME_POSTER: 'Friends',
    LIKES: 123,
    URL: img6,
  },
  {
    ID: 7,
    NAME_POSTER: 'The Big Bang Theory',
    LIKES: 12,
    URL: img7,
  },
  {
    ID: 8,
    NAME_POSTER: 'Two And a Half Men',
    LIKES: 456,
    URL: img8,
  },
];
