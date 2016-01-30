# React Native TimePicker For iOS

### Screenshots

![](http://milasevicius.com/github/timepicker/demo.png =300x)

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

  render() {
    return (
      <View style={styles.container}>
        <TimePicker
        style={styles.picker}
        selectedHour={4}
        selectedMinute={30}
        minuteInterval={5} />
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
| minuteInterval | 1 | `number` | The interval at which minutes can be selected |
| style | {...} | `style` | Set style for timepicker container |

### Properties - Methods

| Prop  | Params  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| onValueChange | `hour`, `minute` | `function` | onValueChange method is called when hours or minutes value was changed |
