import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components/macro'

const FormikComponent = () => {
    return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <StyledForm>
            <FieldContainer>
                <FieldName> Imię i Nazwisko</FieldName>
                <InputField type='name' name='name'/>
                <Divisor/>       
            </FieldContainer>

            <FieldContainer>
                <FieldName> E-mail </FieldName>
                <InputField type='email' name='email'/>
                <Divisor/>
            </FieldContainer>

            <FieldContainer>
                <FieldName>Klasa</FieldName>
                <InputField type='class' name='class'/>
                <Divisor/>
            </FieldContainer>

            <FieldContainer>
                <FieldName> Problem / Sugestia </FieldName>
                <InputField type='problem' name='problem'/>
                <Divisor/>
            </FieldContainer>
          
          <SubmitButton type="submit" disabled={isSubmitting}>
            Submit
          </SubmitButton>
        </StyledForm>
      )}

    </Formik>
    );
}

const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
`

const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;

    padding: 34px;
`;

const FieldName = styled.div`
    font-size: 1.5em;
    font-family: 'Aleo';
    font-weight: 700;

    text-align: left;
`;

const InputField = styled(Field)`

    font-size: 1.4em;

    border: none;

    padding: 0.5em;
    padding-left: 0;
    margin: 0.2em;
    margin-bottom: -0.2em;
    margin-left: 0;
`;

const Divisor = styled.div`
    width: 100%;
    height: 3px;
    background-color: red;
`;

const SubmitButton = styled.button`
    width: 80%;
    max-height: 4em;
    align-self: center;

    padding: 0.3em;
    margin: 1.3em;

    background-color: #FF0000;
    color: white;
    border-radius: 5px;
    border: none;
    
    font-family: 'Aleo, bold';
    font-size: 2em;
    font-weight: bold;
`;

export default FormikComponent;
