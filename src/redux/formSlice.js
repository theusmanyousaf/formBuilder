// src/reducers/formSlice.ts

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: 'Untitled Form',
  desc: '',
  questions: [],
  activeQuestionIndex: null,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setTitle(state, action) {
      state.title = action.payload;
    },
    setDesc(state, action) {
      state.desc = action.payload;
    },
    addQuestion(state) {
      const newQuestion = {
        title: '',
        type: 'Short Answer', // Default type
      };
    
      return {
        ...state,
        questions: [...state.questions, newQuestion],
        activeQuestionIndex: state.questions.length, // Update activeQuestionIndex
      };
    },
    updateQuestionTitle(state, action) {
      const { index, title } = action.payload;
      state.questions[index].title = title;
    },
    updateQuestionType(state, action) {
      const { index, type } = action.payload;
      state.questions[index].type = type;
    },
    updateQuestionValue(state, action) {
        const { index, value } = action.payload;
        if (index !== null) {
            state.questions[index].choices = value;
        }
    },
    deleteQuestion(state, action) {
      const index = action.payload;
      state.questions.splice(index, 1);
      if (state.activeQuestionIndex !== null) {
        state.activeQuestionIndex = index === state.questions.length ? index - 1 : null;
      }
    },
    setActiveQuestionIndex(state, action) {
      state.activeQuestionIndex = action.payload;
    },
  },
});

export const {
  setTitle,
  setDesc,
  addQuestion,
  updateQuestionTitle,
  updateQuestionType,
  updateQuestionValue,
  deleteQuestion,
  setActiveQuestionIndex,
} = formSlice.actions;

export default formSlice.reducer;