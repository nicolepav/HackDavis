import {createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Login from './Login';
import SecondScreen from './SecondScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={SecondScreen} />
          <Tab.Screen name="About" component={SecondScreen} />
          <Tab.Screen name="Cart" component={SecondScreen} />
          <Tab.Screen name="Orders" component={SecondScreen} />
          <Tab.Screen name="Profile" component={SecondScreen} />
        </Tab.Navigator>
      );
    }

export default Tabs;
