import React from 'react';
import { Input, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

export const PasswordInput = (props) => {
   const [show, setShow] = React.useState(false);

   const handleClick = () => setShow(!show);

   return (
      <Input
         w={{
            base: '75%',
            md: '25%',
         }}
         {...props}
         type={show ? 'text' : 'password'}
         InputRightElement={
            <Icon
               onPress={handleClick}
               as={<MaterialIcons name='visibility-off' />}
               size={5}
               mr='2'
               color='muted.400'
            />
         }
         placeholder='Password'
      />
   );
};
