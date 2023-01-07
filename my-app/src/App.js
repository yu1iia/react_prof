import React from 'react';
import './App.scss';
import { Card } from './components/card/Card';
import { Expo } from './components/expo/Expo';
import Footer from './components/footer/Footer';
import { HookContext } from './context/HookContext';

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
      expoTitle: 'This is Expo Title',
    };

    this.headRef = React.createRef();
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
  componentDidMount() {
    console.log(this.headRef.current);
  }
  render() {
    // console.log('App render');

    let animal = this.state.animals;

    return (
      <HookContext.Provider value={{ state: this.state }}>
        <div>
          <div style={{ textAlign: 'center' }}>
            <Expo />
            <h1 ref={this.headRef}>{this.state.title}</h1>
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

          <Footer />
        </div>
      </HookContext.Provider>
    );
  }
}

export default App;
