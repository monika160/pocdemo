
import React, { useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
} from 'react-native';
import { CommonSize, colors } from '../utils/utility'
import { constantStrings, urls } from '../utils/constantStrings'
import { MaterialTextInput, Button } from '.'
import API from '../utils/API'

const FormComponent = (props) => {

  const [fname, setfname] = useState('')
  const [lname, setLname] = useState('')
  const [address, setAddress] = useState('')
  const [pincode, setPincode] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')

  const onSubmit = () => {
    props.onSubmit('data')
  }

  // const onSubmit = () => {
  //   var params = {
  //     fname: fname,
  //     lname: lname,
  //     address: address,
  //     pincode: pincode,
  //     city: city,
  //     country: country
  //   }
  //   const resp = API.fetchPostRquest(urls.LOGIN, JSON.stringify(params))
  //   resp.then(response => {
  //     if (response.status == 200) {
  //       // on success move to other screen here
  //       props.onSuccess('response')
  //     }
  //   }).catch((error) => {
  //     console.log("error ==" + error)
  //   })
  // }

  return (
    <View style={styles.backgroundStyle}>
      <MaterialTextInput
        style={styles.input}
        label={constantStrings.FIRST_NAME}
        value={fname}
        onChangeText={val => { setfname(val) }}
        valid={true}
      />
      <MaterialTextInput
        style={styles.input}
        label={constantStrings.LAST_NAME}
        value={lname}
        onChangeText={val => { setLname(val) }}
        valid={true}
      />
      <MaterialTextInput
        style={styles.input}
        label={constantStrings.ADDRESS}
        value={address}
        onChangeText={val => { setAddress(val) }}
        valid={true}
      />
      <MaterialTextInput
        style={styles.input}
        label={constantStrings.PINCODE}
        value={pincode}
        onChangeText={val => { setPincode(val) }}
        valid={true}
      />
      <MaterialTextInput
        style={styles.input}
        label={constantStrings.CITY}
        value={city}
        onChangeText={val => { setCity(val) }}
        valid={true}
      />
      <MaterialTextInput
        style={styles.input}
        label={constantStrings.COUNTRY}
        value={country}
        onChangeText={val => { setCountry(val) }}
        valid={true}
      />
      <Button title={constantStrings.SUBMIT} 
      onSubmit={onSubmit} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: colors.WHITE,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: Dimensions.get('screen').width - CommonSize.width_40
  },
});

export { FormComponent };
