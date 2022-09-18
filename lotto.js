import * as React from 'react';
import { Button, SafeAreaView, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import _ from 'lodash';
import styled from "styled-components";

let numbers = [];
// 1부터 45까지의 숫자를 생성 
_.times(45, n => numbers.push(n+1));
// 섞는다
// numbers = _.shuffle(numbers);

const Container = styled.SafeAreaView`
  flex : 1;
  justify-content : center;
  align-items : center;
`;

const Row = styled.View`
  flex-direction: row;
  margin-bottom: 24px;
`;

const Ball = styled.View`
  width : 50px;
  height :  50px;
  border-radius : 25px;
  background : ${props => {
    if ( props.value < 11 ) {
      return '#e5e251';
    } 
    else if (props.value < 21) {
      return '#517fe5';
    }
    else if (props.value < 31) {
      return '#e54036';
    }
     else if (props.value < 41) {
      return '#e5e5e5';
    } else {
      return '#43bf74';
    }
  }};
  justify-content : center;
  align-items : center;
`;

const Label = styled.Text`
  font-size : 20,
  color : #000000,
  font-weight : bold,
`;

export default function App() {
  //state 상태변화
  const [displayNumbers, setNumbers] = React.useState(_.shuffle(numbers)); //Hook
  //displayNumbers = 상태를 읽기전용 값
  //setNumbers = 상태를 변경하기위한 업데이트 함수  
  //React.Fragment 실제 렌더링에 반영되지 않는 추상 컨테이너 
  return (
   <Container>
    <Row>
      <Ball value={displayNumbers[0]}>
        <Label>{displayNumbers[0]}</Label>
      </Ball>
      <Ball value={displayNumbers[1]}>
        <Label>{displayNumbers[1]}</Label>
      </Ball>
      <Ball value={displayNumbers[2]}>
        <Label>{displayNumbers[2]}</Label>
      </Ball>
      <Ball value={displayNumbers[3]}>
        <Label>{displayNumbers[3]}</Label>
      </Ball>
      <Ball value={displayNumbers[4]}>
        <Label>{displayNumbers[4]}</Label>
      </Ball>
      <Ball value={displayNumbers[5]}>
        <Label>{displayNumbers[5]}</Label>
      </Ball>
    </Row>
    <Button title="다시뽑기"onPress={()=> setNumbers(_.shuffle(numbers))}/>
    </Container>
  );
}

// const styles = StyleSheet.create({
//   container : {
//     flex : 1,
//     justifyContent : 'center',
//     alignItems : 'center'
//   },
//   // row : {
//   //   flexDirection : 'row',
//   //   marginBottom : 20,
//   // },
//   // ball : {
//   //  width : 50,
//   //  height : 50,
//   //  backgroundColor : "salmon", 
//   //  borderRadius : 25,
//   //  justifyContent : 'center',
//   //  alignItems : 'center',
//   // },
//   // text : {
//   //   fontSize : 20,
//   //   color : "#000000",
//   //   fontWeight : 'bold',

//   // }
// });
