import logo from './logo.svg';
import './App.css';


import React, { useEffect, useState } from 'react';
import Home from './componets/home';
import Login from './componets/login';
import SignUP from './componets/signup'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
 

function App() {

  const [transaction, setTransaction] = useState([]);
  useEffect(() => {
    console.log(transaction);
  }, [transaction])
  
  const addTransaction = ((_amount, _item, _transactionType) => {


    setTransaction((item) => [...item, {
      id: item.length,
      amount: _amount,
      item: _item,
      transactionType: _transactionType,
    }])
    console.log(transaction)
  })
  return (
     <>
      
      

      <Router>

     <Switch>
         <Route exact path="/" component={Login}></Route>
         <Route  path="/signup" component={SignUP}></Route>
            {/* <SignUP/> */}
         {/* </Route> */}

        <Route path="/home">
              <Home list={transaction}  add={addTransaction}/>
        </Route>
      
     </Switch>
 </Router>

     </>


  );
}

export default App;


