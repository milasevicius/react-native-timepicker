'use strict';

import React, {
	AppRegistry,
	Component,
	View,
	PickerIOS,
	StyleSheet
} from 'react-native';

export default class TimePicker extends Component {
	constructor(props) {
		super(props);

		this._hours = [];
		for (let i = 0; i < 24; i++) {
			this._hours.push(i);
		}

		this._minutes = [];
		for (let i = 0; i < 60; i+= this.props.minuteInterval || 1) {
			this._minutes.push(i);
		}

		this.state = {
			selectedHour: this.props.selectedHour || 0,
			selectedMinute: this.props.selectedMinute || 0
		}
	};

	_onValueChangeCallback = () => {
		if ('onValueChange' in this.props) {
			this.props.onValueChange({
				hour: this.state.selectedHour,
				minute: this.state.selectedMinute
			});
		}
	};

	_setHour = (hour) => {
		this.setState({
			selectedHour: hour
		});

		this._onValueChangeCallback();
	};

	_setMinute = (minute) => {
		this.setState({
			selectedMinute: minute
		});

		this._onValueChangeCallback();
	};

	render() {
		let hours = [];
		for (let hour of this._hours) {
			hours.push(<PickerIOS.Item key={hour} value={hour} label={hour.toString()} />);
		}

		let minutes = [];
		for (let minute of this._minutes) {
			minutes.push(<PickerIOS.Item key={minute} value={minute} label={minute.toString()} />);
		}

		return (
			<View style={styles.container}>
				<PickerIOS style={styles.picker}
					selectedValue={this.state.selectedHour}
					onValueChange={this._setHour}>
					{hours}
				</PickerIOS>

				<PickerIOS style={styles.picker}
					selectedValue={this.state.selectedMinute}
					onValueChange={this._setMinute}>
					{minutes}
				</PickerIOS>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row'
	},

	picker: {
		flex: 1
	}
});

AppRegistry.registerComponent('TimePicker', () => TimePicker);
