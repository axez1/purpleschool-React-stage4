import './MainParagraph.css';

function MainParagraph({ text, customSize = 16 }) {

  return (

    <p style={{ fontSize: `${customSize}px` }} className='p'>{text}</p>

  );
}

export default MainParagraph;
