import React from 'react';
import ReactDOM from 'react-dom';

class ShowTodos extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  componentWillMount() {
    window.setTimeout(function() {
      this.setState({
        loading: false
      });
    }.bind(this), 500);
  }

  render() {
    if (!this.state.loading) {
      let todosItems = this.props.todos.map((t) => {
        return (
          <li>{t}</li>
        );
      });
      return (
        <ul>{todosItems}</ul>
      );
    } else {
      return (
        <p>Loading...</p>
      );
    }
  }
}

ShowTodos.propTypes = {
  todos: React.PropTypes.array.isRequired,
  number: React.PropTypes.number
};

ShowTodos.defaultProps = {
  todos: [],
  number: 42
}

class TodosContainer extends React.Component {
  render() {
    let todos = [
      "Learn React",
      "Learn more React",
      "Learn basic React again"
    ];
    return (
      <div>
        <h1> All Todos </h1>
        <ShowTodos todos={todos}/>
      </div>
    )
  }
}

class ChildComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }
  componentWillMount() {

  }
  componentWillUnmount() {

  }
  render() {
    return (
      <p> Child Compoent: {this.props.text} </p>
    );
  }
  componentWillReceiveProps(nextProps) {

  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  componentWillUpdate() {

  }
  componentDidUpdate(previousProps, previousState, nextProps, nextState) {

  }
}

ChildComponent.defaultProps = {};
ChildComponent.propTypes = {};

class ParentComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }
  componentWillMount() {

  }
  componentWillUnmount() {

  }

  onInputChange(e) {
    const letter = e.target.value;
    this.setState({
      text: letter
    });
  }
  render() {
    return (
      <div className="container">
        <input
          type="text"
          value={this.state.text}
          onChange={this.onInputChange.bind(this)} />
        <ChildComponent text={this.state.text}/>
      </div>
    );
  }
}

ReactDOM.render(
  <ParentComponent />,
  document.getElementById('app')
)

ReactDOM.render(
  <TodosContainer />,
  document.getElementById('app')
);
