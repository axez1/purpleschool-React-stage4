import './Button.css';

function Button({ button_title, onClick }) {

  return (

    <button className='button' onClick={onClick}>{button_title}</button>

  );
}

export default Button;
