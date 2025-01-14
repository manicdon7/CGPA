import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

const ECE = ({ navigation }) => {
  return (
    <StyledView className='bg-blue-100 h-screen'>
      <StyledText className='text-center my-5'>Calculate Your GPA</StyledText>
      <StyledTouchableOpacity className='mx-5'
        style={{
          backgroundColor: '#3498db',
          padding: 15,
          borderRadius: 25,
          alignItems: 'center',
          margin: 10,
        }}
        onPress={() => navigation.navigate('ECE_Sem1')} 
      >
        <StyledText style={{ color: 'white', fontSize: 18 }}>
          Semester 1
        </StyledText>
      </StyledTouchableOpacity>
      <StyledTouchableOpacity className='mx-5'
        style={{
          backgroundColor: '#3498db',
          padding: 15,
          borderRadius: 25,
          alignItems: 'center',
          margin: 10,
        }}
        onPress={() => navigation.navigate('ECE_Sem2')}
      >
        <StyledText style={{ color: 'white', fontSize: 18 }}>
          Semester 2
        </StyledText>
      </StyledTouchableOpacity>
      <StyledTouchableOpacity className='mx-5'
        style={{
          backgroundColor: '#3498db',
          padding: 15,
          borderRadius: 25,
          alignItems: 'center',
          margin: 10,
        }}
        onPress={() => navigation.navigate('ECE_Sem2')}
      >
        <StyledText style={{ color: 'white', fontSize: 18 }}>
          Semester 3
        </StyledText>
      </StyledTouchableOpacity>
      
      <StyledTouchableOpacity className='mx-5'
        style={{
          backgroundColor: '#3498db',
          padding: 15,
          borderRadius: 25,
          alignItems: 'center',
          margin: 10,
        }}
        onPress={() => navigation.navigate('ECE_Sem4')}
      >
        <StyledText style={{ color: 'white', fontSize: 18 }}>
          Semester 4
        </StyledText>
      </StyledTouchableOpacity>
      <StyledTouchableOpacity className='mx-5'
        style={{
          backgroundColor: '#3498db',
          padding: 15,
          borderRadius: 25,
          alignItems: 'center',
          margin: 10,
        }}
        onPress={() => navigation.navigate('ECE_Sem5')}
      >
        <StyledText style={{ color: 'white', fontSize: 18 }}>
          Semester 5
        </StyledText>
      </StyledTouchableOpacity>
      <StyledTouchableOpacity className='mx-5'
        style={{
          backgroundColor: '#3498db',
          padding: 15,
          borderRadius: 25,
          alignItems: 'center',
          margin: 10,
        }}
        onPress={() => navigation.navigate('ECE_Sem6')}
      >
        <StyledText style={{ color: 'white', fontSize: 18 }}>
          Semester 6
        </StyledText>
      </StyledTouchableOpacity>
      <StyledTouchableOpacity className='mx-5'
        style={{
          backgroundColor: '#3498db',
          padding: 15,
          borderRadius: 25,
          alignItems: 'center',
          margin: 10,
        }}
        onPress={() => navigation.navigate('ECE_Sem7')}
      >
        <StyledText style={{ color: 'white', fontSize: 18 }}>
          Semester 7
        </StyledText>
      </StyledTouchableOpacity>
      <StyledTouchableOpacity className='mx-5'
        style={{
          backgroundColor: '#3498db',
          padding: 15,
          borderRadius: 25,
          alignItems: 'center',
          margin: 10,
        }}
        onPress={() => navigation.navigate('ECE_Sem8')}
      >
        <StyledText style={{ color: 'white', fontSize: 18 }}>
          Semester 8
        </StyledText>
      </StyledTouchableOpacity>
    </StyledView>
    
  );
};

export default ECE;
