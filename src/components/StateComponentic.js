import { Component } from 'react';
import { StateLessComponent } from './StateLessComponent';

export class StateComponentic extends Component {
  static defaultProps = {
    title: 'hello',
  };

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  increment = () =>
    this.setState({ ...this.state, counter: this.state.counter + 1 });

  doubleCounter = () => {
    // this.setState({...this.state, counter: this.state.counter * 2})
    this.setState(prevState => {
      return { counter: prevState.counter * 2 };
    });

    console.log(this.state.counter);
  };

clearState = evnt => {
   console.log(evnt)
   this.setState({...this.state, counter:0})
}

  render() {
    const { title } = this.props;
    const { counter } = this.state;

    return (
      <div>
        <h1>{title}</h1>
        <p>{counter}</p>
        <div>
          <button
            onClick={() => {
              this.setState({
                ...this.state,
                counter: counter - 1,
              });
            }}
          >
            btn-
          </button>
          <button onClick={this.increment}>btn+</button>
          <button onClick={this.doubleCounter}>btnX2</button>
          <StateLessComponent title='cliar state' onClearClick={this.clearState} />
        </div>
      </div>
    );
  }
}

export default StateComponentic;
