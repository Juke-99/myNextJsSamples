export default function BoilingVerdict(props) {
	if(props.celsius >= 100) {
		return <p>The water would boil.</p>
	} else {
		return <p>The water wouldn't boil.</p>
	}
}
