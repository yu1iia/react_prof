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
        { name: 'lion', color: 'yellow' }],
      title:"Animals"
}
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
  <Card name = {animal[0].name} color = {animal[0].color} click={this.eventHandler.bind(this)}/>
  <Card name = {animal[1].name} color = {animal[1].color} click={this.eventHandler.bind(this)}/>
  <Card name = {animal[2].name} color = {animal[2].color} click={this.eventHandler.bind(this)}/>
  <Card name = {animal[3].name} color = {animal[3].color} click={this.eventHandler.bind(this)}/>
  <Card name = {animal[4].name} color = {animal[4].color} click={this.eventHandler.bind(this)}/>
  </div>

      <div>
        <button onClick={this.eventHandler.bind(this)}>PUSH</button>
        <select onChange={this.eventHandler.bind(this)}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>

  </div>
  
)

}


}


export default App;
