import React, { Component } from 'react'
import axios from 'axios'
import Clima from './Clima'
import ClimaForm from './ClimaForm'
import update from 'immutability-helper'

class WeathersContainer extends Component {
  constructor(props){
    super(props)
      this.state = {
        climas: [],
        editingClimaId: null
      }
    }
    componentDidMount(){
      axios.get('https://weatherboard-api.herokuapp.com/api/v1/climas.json')
      .then(response => {
        this.setState({climas: response.data})
      })
      .catch(error => console.log(error))
    }

    addNewClima = () => {
      axios.post('https://weatherboard-api.herokuapp.com/api/v1/climas', {clima: {city:'', temperature:0, status:''}})
      .then(response => {
        console.log(response)
        const climas = update(this.state.climas, { $splice: [[0, 0, response.data]]})
        this.setState({climas: climas, editingClimaId: response.data.id})
      })
      .catch(error => console.log(error))
    }
    updateClima = (clima) => {
      const climaIndex = this.state.climas.findIndex(x => x.id === clima.id)
      const climas = update(this.state.climas, {[climaIndex]: {$set: clima}})
      this.setState({climas:climas})
    }

    render() {
      return (
        <div>
          <div>
            <button className="newIdeaButton" onClick={this.addNewClima} >
              Nuevo Clima
            </button>
          </div>
        {this.state.climas.map((clima) => {
          if(this.state.editingClimaId === clima.id) {
              return(<ClimaForm clima={clima} key={clima.id} updateClima={this.updateClima}/>)
            } else {
              return (<Clima clima={clima} key={clima.id}/>)
            }
        })}
        </div>
      );
    }
  }











export default WeathersContainer
