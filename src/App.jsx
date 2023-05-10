import './App.css'
import IdCard from './components/IdCard'
import Greetings from './components/Greetings.jsx'
import Random from './components/Random.jsx'
import BoxColor from './components/BoxColor.jsx'
import CreditCard from './components/CreditCard'

const personalInfo = [{
  lastName:'Doe',
  firstName:'John',
  gender:'male',
  height:178,
  birth:"1992-07-14",
  picture:"https://randomuser.me/api/portraits/men/44.jpg"
},
{
  lastName:'Delores',
  firstName:'Obrien',
  gender:'female',
  height:172,
  birth:"1988-05-11",
  picture:"https://randomuser.me/api/portraits/women/44.jpg"
}]
 
const cardInfo = [{
  type:"Visa",
  number:"0123456789018845",
  expirationMonth:3,
  expirationYear: 2021,
  bank: "BNP",
  owner: "Maxence Bouret",
  bgColor: "#11aa99",
  color: "white",
},{
  type:"Master Card",
  number: "0123456789010995",
  expirationMonth: 3,
  expirationYear: 2021 ,
  bank:"N26",
  owner:"Maxence Bouret",
  bgColor:"#eeeeee",
  color:"#222222",
},{
  type: "Visa",
  number: "0123456789016984",
  expirationMonth: 12,
  expirationYear: 2019,
  bank: "Name of the Bank",
  owner: "Firstname Lastname",
  bgColor: "#ddbb55",
  color: "white",
}]

function App() {
  return (
  <div className="App">
  {personalInfo.map(currentPerson => {
    return <IdCard information={currentPerson} />;
  })}
<hr/>
  <Greetings lang="de">Ludwig</Greetings>
  <Greetings lang="fr">François</Greetings>
<hr/>
  <Random min={1} max={6}/>
  <Random min={1} max={100}/>
<hr/>
  <BoxColor r={255} g={0} b={0} />
  <BoxColor r={128} g={255} b={0} />
<hr/>
{cardInfo.map(currentCard => {
    return <CreditCard card={currentCard} />;
  })}

</div>
)
}
export default App;