import React, { Component} from 'react'
import axios from 'axios'

class ClimaForm extends Component {
	constructor(props){
		super(props)
		this.state = {
			city: this.props.clima.city,
			temperature: this.props.clima.temperature,
			status: this.props.clima.status
		}
	}
	handleInput = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}
	handleBlur = () => {
		const clima = {city: this.state.city, temperature: this.state.temperature, status: this.state.status}
		axios.put(
			  `http://localhost:3001/api/v1/climas/${this.props.clima.id}`,
			  {clima: clima}
			)
		.then(response => {
			console.log(response)
			this.props.updateClima(response.data)
		})
		.catch(error => console.log(error))
	}
	render() {
		return (
			<div className="tile">
				<form onBlur={this.handleBlur}>
					<input className='input' type="text" name="title" placeholder="nombre de la ciudad" value={this.state.ciudad} onChange={this.handleInput} />
					<input className='input' type="text" name="Temperatura" placeholder="°C" value={this.state.temperature} onChange={this.handleInput}/>
					<input className='input' type="text" name="status" placeholder="nombre de la ciudad" value={this.state.status} onChange={this.handleInput}/>
				</form>
			</div>
		);
	}
}

export default ClimaForm
