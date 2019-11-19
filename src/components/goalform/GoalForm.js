import React, { Component } from 'react'
import './goalform.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';




class GoalForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      isVisible: "hidden"
    }
  }
  // let input;


   openCard() {
     console.log('opened')
    const visibility = this.state.isVisible

    if(visibility){
      this.setState({isVisible: "visible"})
    }
  
  }

  closeCard(){
    console.log('closed')
    const visibility = this.state.isVisible

      //remember to remove the toggle function
    if(visibility === "visible"){
      this.setState({isVisible: "hidden"})
    }
  }


  render(){
    return (
      <div className="wrapper">

        <button className="addNewGoalBtn" onClick={() => this.openCard()}>
          <FontAwesomeIcon icon={faPlus} size="2x" />
        </button>


        <div className="card" style={{ visibility: `${this.state.isVisible}`}} >
          <div className="card-body">
      <form className="row">
          <div className="form-group col-md-12">
            <label htmlFor="">What is your goal</label>
            <input type="text"/>
          </div>
          <div className="form-group col-md-12">
            <select className="custom-select">
              <option defaultValue>pick a duration for your goal</option>
              <option value="1">First Quarter</option>
              <option value="2">Second Quarter</option>
              <option value="3">Third Quarter</option>
              <option value="4">Fourth Quarter</option>
              <option value="5">One Month</option>
              <option value="6">Two Months</option>
            </select>
          </div>

          <div className="col-md-12">
            <button className="submit-button" onClick={()=>this.closeCard()}>Create</button>
          </div>
      </form>
      </div>
      </div>



      </div>
    )
  }
}

export default GoalForm
