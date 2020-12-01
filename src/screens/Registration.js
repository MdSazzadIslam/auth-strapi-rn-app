import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../components/Header';
import Input from '../components/Input';
import LoginButton from '../components/LoginButton';
import Error from '../components/Error';
import IconButton from '../components/IconButton';
import {AuthContext} from '../contexts/AuthContext';
import Loading from '../components/Loading';
import authService from '../services/authService';

const Registration = ({navigation}) => {
  /* const {register} = React.useContext(AuthContext); */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const submitRegistration = async (email, password) => {
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
        await authService.register(email, password);
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
      <Header style={styles.title}>REGISTRATION</Header>
      <IconButton
        style={styles.closeIcon}
        name={'close-circle-outline'}
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
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
        title={'Registration'}
        style={styles.loginButton}
        onPress={async () => submitRegistration(email, password)}
      />
      <Loading loading={loading} />
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
  closeIcon: {
    position: 'absolute',
    top: 60,
    right: 16,
  },
});

export default Registration;
