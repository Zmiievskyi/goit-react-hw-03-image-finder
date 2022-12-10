import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  FormStyled,
  FormWrapper,
  InputStyled,
  ButtonStyled,
  SpanStyled,
} from '../Searchbar/Searchbar.styled';

let schema = yup.object().shape({
  searchQuery: yup.string().min(4).max(12),
});

const initialValues = {
  searchQuery: '',
};

export const Searchbar = (props) => {
  const handleSubmit = (values) => {
    props.onSubmit(values.searchQuery);
  };
  return (
    <FormWrapper>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {props => {
          return (
            <FormStyled autoComplete="off">
              <ButtonStyled type="submit" className="button">
                <SpanStyled className="button-label">Search</SpanStyled>
              </ButtonStyled>

              <InputStyled type="text" name="searchQuery" />
              <ErrorMessage name="searchQuery" />
            </FormStyled>
          );
        }}
      </Formik>
    </FormWrapper>
  );
};
