import { View, TextInput, Button, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
export default Redeem = () => {
    const { handleSubmit } = useForm();


    const onSubmit = (data) => {
        console.log(data);
        // Here you can perform further actions with the form data, like sending it to a server
    };

    return (<>
        <Text style={ {flex: 1, width: "100%", justifyContent: "center", alignItems: "center"} }>
            Enter you details to claim
        </Text>
      <TextInput
        style = {style= {flex: 1, width: "100%", justifyContent: "center", alignItems: "center"}  }
        autoCompleteType="username"
        placeholder="User name"
        onChangeText={onChangeField('username')}
      />
      <TextInput
        style = {style= {flex: 1, width: "100%", justifyContent: "center", alignItems: "center"}  }
        keyboardType="lastname"
        textContentType="lastname"
        placeholder="Last name"
        onChangeText={onChangeField('lastname')}
      />
      <TextInput
        style = {style= {flex: 1, width: "100%", justifyContent: "center", alignItems: "center"}  }
        autoCompleteType="email"
        placeholder="Email"
        onChangeText={onChangeField('email')}
      />
      <TextInput
        style = {style= {flex: 1, width: "100%", justifyContent: "center", alignItems: "center"}  }
        autoCompleteType="phone"
        placeholder="Phone Number"
        onChangeText={onChangeField('phone')}
      />
      <TextInput
        style = {style= {flex: 1, width: "100%", justifyContent: "center", alignItems: "center"}  }
        autoCompleteType="address"
        placeholder="Address"
        onChangeText={onChangeField('address')}
      />
      <TextInput
        style = {style= {flex: 1, width: "100%", justifyContent: "center", alignItems: "center"}  }
        placeholder="City"
        onChangeText={onChangeField('city')}
      />
      <TextInput
        style = {style= {flex: 1, width: "100%", justifyContent: "center", alignItems: "center"}  }
        placeholder="State"
        onChangeText={onChangeField('state')}
      />
      <TextInput
        style = {style= {flex: 1, width: "100%", justifyContent: "center", alignItems: "center"}  }
        placeholder="Zip code"
        onChangeText={onChangeField('zipCode')}
      />
      <TextInput
        style = {style= {flex: 1, width: "100%", justifyContent: "center", alignItems: "center"}  }
        placeholder="IP Address"
        onChangeText={onChangeField('ipAddress')}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} style={styles.submitButton} />
      {isRegistered && <Text style={styles.successText}>Registration successful!</Text>}
            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </>
    )
}