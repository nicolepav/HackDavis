import {createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Login from './Login';
import SecondScreen from './SecondScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
          <Tab.Screen name="SecondScreen" component={SecondScreen} />
        </Tab.Navigator>
      );
    }

export default Tabs;
