import './App.css';
import Button from './components/Button/Button';
import CartButton from './components/CartButton/CartButton';
import JournalItem from './components/JournalItem/JournalItem';

function App() {

  const data = [
    {
      title: 'Подготовка к обновлению курсов',
      text: 'Горные походы открывают удивительные природные ландшафт',
      date: new Date()
    },
    {
      title: 'Подготовка',
      text: 'Горные походы открывают',
      date: new Date()
    }
  ];

  return (
    <>
      <div>
        <div>Project</div>
        <Button />
        <CartButton>+ Новое воспоминание</CartButton>
        <CartButton>
          <JournalItem title={data[0].title} date={data[0].date} text={data[0].text} />
        </CartButton>
        <CartButton>
          <JournalItem title={data[1].title} date={data[1].date} text={data[1].text} />
        </CartButton>
      </div>
    </>
  );
}

export default App;
