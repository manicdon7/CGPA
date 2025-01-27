import React, { useState } from 'react';
import { View, Text,ScrollView, Button } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { styled } from 'nativewind';
import { withExpoSnack } from 'nativewind';

const  StyledView = styled(View);
const StyledText = styled(Text);


const calculateGPA = (courses) => {
  const gradePoints = {
    'O': 10,
    'A+': 9,
    'A': 8,
    'B+': 7,
    'B': 6,
    'C': 5,
    'RA': 0,
    'SA': 0,
    'W': 0,
  };

  const numerator = courses.reduce((acc, course) => acc + (gradePoints[course.grade] * course.credits), 0);
  const denominator = courses.reduce((acc, course) => acc + course.credits, 0);

  if (denominator === 0) {
    return 0; // Avoid division by zero
  }

  const gpa = numerator / denominator;
  return gpa;
};

const IT_Sem1 = () => {
  const [courses, setCourses] = useState([
    { code: 'HS3151', name: 'PROFESSIONAL ENGLISH - I', credits: 3, grade: '' },
    { code: 'MA3151', name: 'MATRICES AND CALCULUS', credits: 4, grade: '' },
    { code: 'PH3151', name: 'ENGINEERING PHYSICS', credits: 3, grade: '' },
    { code: 'CY3151', name: 'ENGINEERING CHEMISTRY', credits: 3, grade: '' },
    { code: 'GE3151', name: 'PROBLEM SOLVING AND PYTHON PROGRAMMING', credits: 3, grade: '' },
    { code: 'GE3152', name: 'HERITAGE OF TAMILS', credits: 1, grade: '' },
    { code: 'GE3171', name: 'PROBLEM SOLVING AND PYTHON PROGRAMMING LABORATORY', credits: 2, grade: '' },
    { code: 'BS3171', name: 'PHYSICS AND CHEMISTRY LABORATORY', credits: 2, grade: '' },
    { code: 'GE3172', name: 'ENGLISH LABORATORY', credits: 2, grade: '' },
  ]);

  const [newCourse, setNewCourse] = useState({
    code: '',
    name: '',
    credits: 0,
    grade: '',
  });

  const gpa = calculateGPA(courses);

  return (
    <ScrollView>
      <StyledView className='bg-orange-200'>
      <StyledText className='text-center py-4 font-bold text-xl uppercase mx-4'>Select the Grades you Scored!</StyledText>
      {courses.map((course, index) => (
        <StyledView className='my-2 bg-blue-300 rounded-2xl mx-5' key={index}>
          <StyledText className='px-3 py-3'>{course.code} - {course.name}</StyledText>
          <StyledView className=''>
          <Picker
            selectedValue={course.grade}
            onValueChange={(itemValue) => {
              const updatedCourses = [...courses];
              updatedCourses[index].grade = itemValue;
              setCourses(updatedCourses);
            }}
          >
            <Picker.Item label="Select Grade" value="" />
            <Picker.Item label="O" value="O" />
            <Picker.Item label="A+" value="A+" />
            <Picker.Item label="A" value="A" />
            <Picker.Item label="B+" value="B+" />
            <Picker.Item label="B" value="B" />
            <Picker.Item label="C" value="C" />
            <Picker.Item label="RA" value="RA" />
            <Picker.Item label="SA" value="SA" />
            <Picker.Item label="W" value="W" />
          </Picker>
              </StyledView>
        </StyledView>
      ))}
      <StyledView className='my-3 mx-10'>
      <StyledText  className='bg-green-300 mx-5 text-center rounded-xl font-extralight text-2xl py-5'>Your GPA: {gpa.toFixed(2)}</StyledText>
      {/* Example TextInput for adding a new course */}
      </StyledView>
          </StyledView>
    </ScrollView>
  );
};

export default withExpoSnack(IT_Sem1);