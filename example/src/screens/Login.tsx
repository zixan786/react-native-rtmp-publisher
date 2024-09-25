/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define a type for your stack navigator parameters
type RootStackParamList = {
  Login: undefined; // Add Login screen
  Stream: undefined; // Define other screens with their parameters as needed
};

// Define the props for the Login screen
type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>; // Specify the current screen as 'Login'
  route: any; // You can further specify the route type if needed
};

const Login: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Screen</Text>
      <Button
        title="Go to Stream Screen"
        onPress={() => navigation.navigate('Stream')}
      />
    </View>
  );
};

export default Login;
