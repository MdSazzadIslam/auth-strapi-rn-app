import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../components/Header';
import Input from '../components/Input';
import LoginButton from '../components/LoginButton';
import TextButton from '../components/TextButton';
import Error from '../components/Error';
import Loading from '../components/Loading';
import authService from '../services/authService';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const submitLogin = async (email, password) => {
    if (email == '') {
      alert('Please enter email');
      return;
    } else if (password == '') {
      alert('Please enter password');
      return;
    } else {
      try {
        setLoading(true);
        console.log(email, password);
        await authService.login(email, password);
        navigation.pop();
      } catch (err) {
        console.log(err);
        setError(err.message);
        setLoading(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Header style={styles.title}>Login</Header>
      <Error error={''} />
      <Input
        style={styles.input}
        placeholder={'Email'}
        keyboradType={'email-address'}
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <Input
        style={styles.input}
        placeholder={'Password'}
        keyboradType={'password'}
        secureTextEntry
        value={password}
        onChangeText={(password) => setPassword(password)}
      />

      <LoginButton
        title={'Login'}
        style={styles.loginButton}
        onPress={() => {
          submitLogin(email, password);
        }}
      />
      <Loading loading={loading} />

      <TextButton
        title={'Have you an account? Create one'}
        onPress={() => {
          navigation.navigate('Registration');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 120,
    padding: 16,
  },
  title: {
    marginBottom: 50,
  },
  input: {
    marginVertical: 8,
  },
  loginButton: {
    marginVertical: 8,
  },
});

export default Login;
