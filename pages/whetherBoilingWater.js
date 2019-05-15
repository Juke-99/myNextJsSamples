import BoilCalc from '../components/TemperatureCalculator'
import TempInput from '../components/TemperatureInput'

export default function whetherBoilingWater() {
	return (
		<div>
			<BoilCalc></BoilCalc>
			<TempInput scale="c"></TempInput>
			<TempInput scale="f"></TempInput>
		</div>
	)
}
