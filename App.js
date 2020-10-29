import * as React from 'react';
import ListScreen from  './src/components/ListScreen'
import QuestionScreen from './src/components/QuestionScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import './src/styles/style.css'


const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="List">
                <Stack.Screen name="List" component={ListScreen} />
                <Stack.Screen name="Question" component={QuestionScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
