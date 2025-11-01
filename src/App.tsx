import { Component } from 'react';

interface State {
  currentKey: string | null;
}

export class App extends Component<State> {
  state: State = {
    currentKey: null,
  };

  handleKeyDown = (event: KeyboardEvent) => {
    // setCurrentKey(event.key);
    this.setState({
      currentKey: event.key,
    });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyDown);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyDown);
  }

  render() {
    const { currentKey } = this.state;

    return (
      <div className="App">
        {currentKey === null ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">{`The last pressed key is [${currentKey}]`}</p>
        )}
      </div>
    );
  }
}
