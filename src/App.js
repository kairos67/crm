import React,{Component} from 'react';
import Customer from './components/Customer'
import './App.css';

const customer ={
  'name':'홍길동',
  'birthday':'961222',
  'gender':'male',
  'job':'Student'
}
class App extends Component {
  render() {
    return (
      <Customer
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}
      />
    )
  }
}

export default App;
