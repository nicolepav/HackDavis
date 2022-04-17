import {createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Login from './Login';
import SecondScreen from './SecondScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={SecondScreen} options={{headerShown: false}}/>
          <Tab.Screen name="About" component={SecondScreen} options={{headerShown: false}}/>
          <Tab.Screen name="Cart" component={SecondScreen} options={{headerShown: false}}/>
          <Tab.Screen name="Orders" component={SecondScreen} options={{headerShown: false}} />
          <Tab.Screen name="Profile" component={SecondScreen} options={{headerShown: false}}/>
        </Tab.Navigator>
      );
    }

export default Tabs;
