import React from 'react';
import './App.css';
import {Card} from './components/card/Card'


class App extends React.Component{
  constructor(props) {
    super()
    this.state = {
  animals: [ { name: 'cat', color: 'pink'}, 
             { name: 'dog', color: 'black'}, 
             { name: 'tiger', color: 'orange'}, 
             { name: 'fox', color: 'ginger'}, 
        { name: 'lion', color: 'yellow' },
        { name: 'croco', color: 'green' }],
      
      title:"Animals"
}
 }
//При использовнии стрелояной функции не возникает проблем с потерей контекста!!!
  inputHandler = (event) => {
    console.log(event.target.value);
    this.setState({title: event.target.value})
}

  eventHandler(title) {
    console.log('work')
    this.setState({
        title
    })
  }

render(){

let animal = this.state.animals

  return (
    <div>
      <div style={{textAlign:'center'}}><h1>{this.state.title}</h1></div>
  <div className = "App">

        {animal.map((item, i) => {
          return (
            <Card name={item.name} color={item.color} click={this.eventHandler.bind(this)}key={i}/>
  )
})}
        


  {/* <Card name = {animal[0].name} color = {animal[0].color} click={this.eventHandler.bind(this)}/>
  <Card name = {animal[1].name} color = {animal[1].color} click={this.eventHandler.bind(this)}/>
  <Card name = {animal[2].name} color = {animal[2].color} click={this.eventHandler.bind(this)}/>
  <Card name = {animal[3].name} color = {animal[3].color} click={this.eventHandler.bind(this)}/>
  <Card name = {animal[4].name} color = {animal[4].color} click={this.eventHandler.bind(this)}/> */}
  </div>

      <div>
        <button onClick={this.eventHandler.bind(this)}>PUSH</button>
        <select onChange={this.inputHandler}>
          <option>{animal[0].name}</option>
          <option>{animal[1].name}</option>
          <option>{animal[2].name}</option>
          <option>{animal[3].name}</option>

        </select>
        <input type="text" onChange={this.inputHandler}/>
      </div>

  </div>
  
)

}


}


export default App;
