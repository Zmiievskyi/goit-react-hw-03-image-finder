import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  FormStyled,
  FormWrapper,
  InputStyled,
  ButtonStyled,
} from '../Searchbar/Searchbar.styled';

let schema = yup.object().shape({
  Search: yup.string().min(3).max(12),
});

const initialValues = {
  Search: '',
};

export const Searchbar = prop => {

  const handleSubmit = (values, actions) => {
    prop.onSubmit(values.Search);
    actions.setSubmitting(false);
    actions.reset()
  };

  const handleValidate = e => {
    prop.onValidate(e)
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
              <ButtonStyled
                type="submit"
                disabled={props.isSubmitting}
              ></ButtonStyled>
              <InputStyled type="text" name="Search" />
              <ErrorMessage
                name="Search"
                render={error => handleValidate(error)}
              />
            </FormStyled>
          );
        }}
      </Formik>
    </FormWrapper>
  );
};
