import React,{Component} from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
  'id': 1,
  'image': 'https://img.animalplanet.co.kr/news/2019/09/30/700/2kib2lrqm0nqxw76il2d.jpg',
  'name': '박선빈',
  'birthday': '961222',
  'gender':'남자',
  'job':'대학생'
 },
 {
  'id': 2,
  'image': 'https://img.animalplanet.co.kr/news/2019/09/30/700/2kib2lrqm0nqxw76il2d.jpg',
  'name': '홍길동',
  'birthday': '010111',
  'gender':'남자',
  'job':'백수'
 },
 {
  'id': 3,
  'image': 'https://img.animalplanet.co.kr/news/2019/09/30/700/2kib2lrqm0nqxw76il2d.jpg',
  'name': '박선방',
  'birthday': '900111',
  'gender':'여자',
  'job':'대학생'
 }
]
class App extends Component {
  render(){
    return (
      <div>
      {customers.map(c=>{return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />);})}
      </div>
    );
  }
}

export default App;
