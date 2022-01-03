import React from 'react';
import { Input, Icon, Stack, Center, Button } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { PasswordInput } from '../components/PasswordInput';
import Colors from '../constants/Colors';

export const Login = () => {
   const [inputsValue, setInputsValue] = React.useState({
      username: '',
      password: '',
   });

   const handleLogin = async () => {
      try {
         const res = await fetch('https://fakestoreapi.com/auth/login/', {
            method: 'POST',
            body: JSON.stringify({
               username: 'mor_2314',
               password: '83r5^_',
            }),
         });
         // const result = await res.json();
         console.log(res.json());
      } catch (error) {
         console.log("xx");
         console.log(error);
      }
   };

   return (
      <Center flex={1} px='3'>
         <Stack space={4} w='100%' alignItems='center'>
            <Input
               w={{
                  base: '75%',
                  md: '25%',
               }}
               defaultValue='mor_2314'
               value={inputsValue.username}
               InputLeftElement={
                  <Icon
                     as={<MaterialIcons name='person' />}
                     size={5}
                     ml='2'
                     color='muted.400'
                  />
               }
               placeholder='Name'
            />
            <PasswordInput defaultValue='83r5^_' value={inputsValue.password} />
            <Button onPress={handleLogin} style={{ width: '75%' }}>
               Login
            </Button>
         </Stack>
      </Center>
   );
};
