import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Form from './components/form/CustomerForm';
import DrinksContainer from './components/drinkComponent/DrinksContainer';
import MainCourse from './components/mainCourse/MainCourse';

function App() {
  return (
    <div className="App">
      <Header />
      <Form />

      <DrinksContainer />

      <MainCourse />
     


    </div>
  );
}

export default App;
