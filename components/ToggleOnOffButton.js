class ToggleOnOffButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOn: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => {
      isOn: !state.isOn
    })
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.isOn ? `ON` : `OFF`}</button>
    )
  }
}

export default ToggleOnOffButton