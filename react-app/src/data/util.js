const getUniqIdNumber = () => {
  let id = 1;
  return () => id++;
};

const isEscapeKey = (evt) => evt.key === 'Escape';

export { getUniqIdNumber, isEscapeKey };
