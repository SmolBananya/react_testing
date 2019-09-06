import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

/*function App() {
  return (
    <div className="App">
     <Header title="Header From Props" 
     text="Sayonara"/>
     <Main />
     <Footer />
    </div>
  );
}*/


class App extends Component{
  state = {
    counter:0
  }; 

  timesClicked = (event) => {
    this.setState({counter: this.state.counter+1})
  };

  render(){
    return(
<div>
<div>
<p>
{this.state.counter}
</p>
<button onClick={this.timesClicked}>Click me!</button>
</div>

<Header title="Header" 
text="Sayonara"/>
<Main/>
<Footer/>
</div>
    );
  }
}
/*

const App = ()=> {
  const now = new Date();
  const a = 10;
  const b = 20;
  const c = 30;
  const d = 100;
  const name = 'Ronja';




  return (
    <div className="App">
     <Header title="Header From Props" 
     text="Sayonara"/>
     <Header title={name} text={now.toString()} />
     <Main />
     <div><p>And today is {now.toString()}</p>
     <p>{a} plus {b} is {a + b }</p>
     <p>{a} plus {b} minus {c} times {d} is { a+b-c*d}</p>
     </div>
     <Footer />
    </div>
  );
}*/

export default App;
