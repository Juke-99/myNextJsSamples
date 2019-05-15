class EssayForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			value: 'Pleace write a your text.'
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event) {
		this.setState({
			value: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault()
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Essay: <textarea value={this.state.value} onChange={this.handleChange}></textarea>
				</label>

				<input type="submit" value="Submit"></input>
			</form>
		)
	}
}

export default EssayForm
