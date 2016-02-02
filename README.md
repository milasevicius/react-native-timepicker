# React Native TimePicker For iOS
React native custom timepicker (24 hours format) for iOS

### Screenshots

![screenshot](https://cloud.githubusercontent.com/assets/1790265/12737599/9714fd66-c962-11e5-8995-544b82da6f2c.png)

### Installation

```bash
$ npm i react-native-timepicker --save
```

### Basic Usage

```jsx
import React, {
  AppRegistry,
  Component,
  View,
  StyleSheet
} from 'react-native';

import TimePicker from 'react-native-timepicker';

export default class App extends Component {
  constructor() {
    super();
  }

  _onValueChange = (hour, minute) => {
    console.log("Selected time:", hour, ':', minute);
  };

  render() {
    return (
      <View style={styles.container}>
        <TimePicker
        style={styles.picker}
        selectedHour={0}
        selectedMinute={30}
        minuteInterval={5}
        onValueChange={this._onValueChange}
        loop={true} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9'
  },

  picker: {
    backgroundColor: '#E5E5E5'
  }
});

AppRegistry.registerComponent('App', () => App);
```

### Properties - Basic

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| selectedHour | 0 | `number` | Set default hour |
| selectedMinute | 0 | `number` | Set default minute |
| minuteInterval | 1 | `number` | Set interval at which minutes can be selected |
| loop | false | `bool` | Set component wrap around property |
| style | {...} | `style` | Set style for timepicker container |

### Properties - Methods

| Prop  | Params  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| onValueChange | `hour`, `minute` | `function` | onValueChange method is called when hours or minutes value was changed |
