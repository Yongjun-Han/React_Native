import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import styled from 'styled-components/native';
import Container from "./components/container";
import Row from "./components/row";
import moment from 'moment';

const Label = styled.Text`
  font-size : 24px;
  font-weight : bold;
`;

export default function App() {

  const [now, setNow] = React.useState(moment());

  React.useEffect( ()=> {
    setInterval( ()=> {
      setNow( moment() );
    },1000);
  },[]);

  return (
    <Container>
      <Row><Text>{now.format('ddd / MMM Do / YYYY')}</Text></Row>
      <Row>
        <Label>{now.format('HH')}</Label>
        <Label>{parseInt(now.format('s'),10)%2 === 1 ? ':' : " "}</Label>
        <Label>{now.format('mm')}</Label>
        <Label>{parseInt(now.format('s'),10)%2 === 1 ? ':' : " "}</Label>
        <Label>{now.format('ss')}</Label>                  
      </Row>
      
    </Container>
  );
}