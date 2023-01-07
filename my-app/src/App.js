import React from 'react';
import './App.scss';
import { Card } from './components/card/Card';
import { Expo } from './components/expo/Expo';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      animals: [
        { name: 'cat', color: 'pink' },
        { name: 'dog', color: 'black' },
        { name: 'tiger', color: 'orange' },
        { name: 'fox', color: 'ginger' },
        { name: 'lion', color: 'yellow' },
        { name: 'croco', color: 'green' },
      ],

      title: 'Animals',
      showCards: false,
      showDescription: false,
    };
  }
  //При использовнии стрелояной функции не возникает проблем с потерей контекста!!!
  inputHandler = event => {
    console.log(event.target.value);
    this.setState({ title: event.target.value });
  };

  eventHandler(title) {
    console.log('work');
    this.setState({
      title,
    });
  }

  showCardsHandler = () => {
    this.setState({ showCards: !this.state.showCards });
  };
  showDescrHandler = () => {
    this.setState({ showDescription: !this.state.showDescription });
  };

  //Жизненный цикл компонента

  // componentWillMount() {
  //   console.log('App componentWillMount');
  // }
  // componentDidMount() {
  //   console.log('App componentDidMount');
  // }

  render() {
    // console.log('App render');

    let animal = this.state.animals;

    return (
      <div>
        <div style={{ textAlign: 'center' }}>
          <Expo />
          <h1>{this.state.title}</h1>
        </div>

        {this.state.showCards ? (
          <div className="App">
            {animal.map((item, i) => {
              return (
                <Card
                  name={item.name}
                  color={item.color}
                  click={this.eventHandler.bind(this)}
                  key={i}
                  show={this.state.showDescription}
                />
              );
            })}
          </div>
        ) : null}

        {/* <Card name = {animal[0].name} color = {animal[0].color} click={this.eventHandler.bind(this)}/>
  <Card name = {animal[1].name} color = {animal[1].color} click={this.eventHandler.bind(this)}/>
  <Card name = {animal[2].name} color = {animal[2].color} click={this.eventHandler.bind(this)}/>
  <Card name = {animal[3].name} color = {animal[3].color} click={this.eventHandler.bind(this)}/>
  <Card name = {animal[4].name} color = {animal[4].color} click={this.eventHandler.bind(this)}/> */}

        <div>
          <button onClick={this.showCardsHandler}>SHOW/HIDE</button>
          <button onClick={this.showDescrHandler}>DESCRIPTION</button>
        </div>
      </div>
    );
  }
}

export default App;
