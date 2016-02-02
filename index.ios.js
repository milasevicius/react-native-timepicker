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
		this._minutes = [];

		for (let j = 0; j < 24 * (this.props.loop ? 100 : 1); j++) {
			this._hours.push(j);
		}

		for (let j = 0; j < 60 * (this.props.loop ? 100 : 1); j += this._getInterval(this.props.minuteInterval || 1)) {
			this._minutes.push(j);
		}

		this.state = {
			selectedHour: this._getHourIndex(this.props.selectedHour || 0),
			selectedMinute: this._getMinuteIndex(this.props.selectedMinute || 0, this.props.minuteInterval || 1)
		}
	};

	_getInterval = (interval) => {
		let matched = false;
		for (let i of [1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30]) {
			if (i === interval) {
				return interval;
			}
		}

		if (!matched) {
			return 1;
		}
	};

	_getHourIndex = (h) => {
		return (this.props.loop ? (this._hours.length / 2) : 0) + h;
	};

	_getMinuteIndex = (m, interval) => {
		return (this.props.loop ? (this._minutes.length / 2 * this._getInterval(interval)) : 0) + (m % this._getInterval(interval) === 0 ? m : 0);
	};

	_getHourValue = (h) => {
		return h % 24;
	};

	_getMinuteValue = (m) => {
		return m % 60;
	};

	_onValueChangeCallback = () => {
		if ('onValueChange' in this.props) {
			this.props.onValueChange(this._getHourValue(this.state.selectedHour), this._getMinuteValue(this.state.selectedMinute));
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
			hours.push(<PickerIOS.Item key={hour} value={hour} label={this._getHourValue(hour).toString()}/>);
		}

		let minutes = [];
		for (let minute of this._minutes) {
			minutes.push(<PickerIOS.Item key={minute} value={minute} label={this._getMinuteValue(minute).toString()}/>);
		}

		return (
			<View style={[styles.container, this.props.style]}>
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
		flexDirection: 'row'
	},

	picker: {
		flex: 1
	}
});

AppRegistry.registerComponent('TimePicker', () => TimePicker);
