import { Component } from 'react';

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
          <button>btn+</button>
        </div>
      </div>
    );
  }
}

export default StateComponentic;
