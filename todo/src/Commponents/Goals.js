import React, { Component } from 'react';

let goalsList = [
  {
    id: "id1",
    title: "Be succesfull",
    percent: 0,
  }
];

export default class Goals extends Component {
  constructor() {
    super();
    this.state = {
      goals: goalsList
    }
  }

  addGoal = (a) => {
    a.preventDefault();
    if(a.target[0].value !== "") {
      goalsList.unshift({
        id: "id"+a.target[0].value,
        title: a.target[0].value,
        percent: 0,
      });
      console.log(goalsList);
      this.setState({goals: goalsList}, () => { console.log(this.state.goals)});
    } else {
      alert("Nedá sa pridať prázdny Goal");
    }
  }

  updatePercentsGoals = (a, b) => {
    let updatedGoals = this.state.goals.filter((goal) => {
      if (goal.id === a) {
        goal.percent = b.target.value;
      }
      return true;
    });
    this.setState({goals: updatedGoals}, () => { console.log(this.state.goals) });
  }

  deleteGoal = (a) => {
    let updatedGoals = goalsList.filter((goal) => {
      return goal.id !== a;
    });
    goalsList = updatedGoals;
    this.setState({goals: goalsList});
  }

  updateGoal = (a, b) => {
    let updatedGoals = this.state.goals.filter((goal) => {
      if (goal.id === a) {
        goal.title = b.target.value;
      }
      return true;
    });
    this.setState({goals: updatedGoals}, () => { console.log(this.state.goals) });
  }

  renderGoals = data => data.map((goal, i) => {
    return (
      <li className={"goal"+(goal.done ? " done" : "" )} key={ goal.id }>
        <input type={"numbers"} onBlur={ this.updatePercentsGoals.bind(this, goal.id) } defaultValue={ goal.percent } focused={"true"}/>%
        <input onBlur={ this.updateGoal.bind(this, goal.id) } defaultValue={ goal.title } focused={"true"}/>
        <button type={"button"} onClick={ this.deleteGoal.bind(this, goal.id) }>X</button>
      </li>
    )
  })

  render() {

    let Goals = this.renderGoals(this.state.goals);

    return (
      <div>
        <h2>MyGoals:</h2>
        <form onSubmit={ this.addGoal }>
          <input placeholder={"Goal"}/><button type={"submit"}>Pridať</button>
        </form>
        <ol className={"goals"}>
          { Goals }
        </ol>
      </div>
    );
  }

}
