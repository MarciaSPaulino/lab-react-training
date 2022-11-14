/*aqui é onde coloca os dodos*/
import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';

function App() {
  return (
    <div>
      <IdCard
        firstName="John"
        lastName="Doe"
        gender="male"
        height="1.78m"
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        birth="1988-05-11"
      />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height="1.72m"
        birth="1988-05-11"
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greetings lang="de" children="Ludwig" />
      <Greetings lang="fr" children="François" />
    </div>
  );
}

export default App;
