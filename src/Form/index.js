import React from 'react';
import styled from 'styled-components/macro'
import * as F from 'formik';

const Form = () => {
    return (
    <F.Formik
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
                <InputField 
                    type='name' 
                    name='name'
                    placeholder='Janek'
                    />
                <Divisor/>       
            </FieldContainer>

            <FieldContainer>
                <FieldName> E-mail </FieldName>
                <InputField 
                    type='email' 
                    name='email'
                    placeholder='example@gmail.com'
                    />
                <Divisor/>
            </FieldContainer>

            <FieldContainer>
                <FieldName>Klasa</FieldName>
                <InputField 
                    type='class' 
                    name='class'
                    placeholder='5TM4'
                    />
                <Divisor/>
            </FieldContainer>

            <FieldContainer>
                <FieldName> Problem / Sugestia </FieldName>
                <SuggestionInputField 
                    type='problem' 
                    name='problem'
                    component='textarea'
                    placeholder='...'
                    />
                <Divisor/>
            </FieldContainer>
          
          <SubmitButton type="submit" disabled={isSubmitting}>
            Submit
          </SubmitButton>
        </StyledForm>
      )}
    </F.Formik>
    );
}

const StyledForm = styled(F.Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;

    width: 65vw;

    padding: 24px;
`;

const FieldName = styled.div`
    font-size: 1.1em;
    font-family: 'Aleo';
    font-weight: 700;

    text-align: left;
`;

const InputField = styled(F.Field)`
    font-size: 1.4em;

    border: none;

    padding: 0.5em;
    padding-left: 0;
    margin: 0.2em;
    margin-bottom: -0.2em;
    margin-left: 0;
`;

const SuggestionInputField = styled(InputField)`
    border: solid 0.2px black;
    outline: none;
    padding: 0.5em 0.5em;
    min-height: 8em;
    margin: 1em 0;
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
    margin: 1.1em;
    margin-top: 0.5em;

    background-color: #FF0000;
    color: white;
    outline: none;
    border-radius: 5px;
    border: none;
    
    font-family: 'Aleo';  
    font-size: 2em;
    font-weight: bold;
`;


export default Form;