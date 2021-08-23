import React from 'react';
import { css } from '@emotion/react';
import { Formik, Form, Field, useFormikContext, FieldAttributes } from 'formik';
import { submitInvitation } from '@/services';
import { Touchable } from '@/components/touchable';
import { formValidator } from '../utils';
import { hasNoErrors } from '@/utils/common-validator';
import { ButtonCss, errorBaseCss, FieldCss } from './style';

type FormValuesType = {
  fullName: string;
  email: string;
  confirmEmail: string;
};

function FieldWithError(
  props: Omit<FieldAttributes<any>, 'name'> & {
    name: keyof FormValuesType;
  }
) {
  const { touched, errors } = useFormikContext<FormValuesType>();
  const name = props.name;
  return (
    <div
      css={css`
        margin: 10px 0;
        &:first-of-type {
          margin-top: 0;
        }
      `}
    >
      <Field css={FieldCss} {...props}></Field>
      {errors[name] && touched[name] ? (
        <div
          css={css`
            ${errorBaseCss};
            margin-left: 5px;
          `}
        >
          {errors[name]}
        </div>
      ) : null}
    </div>
  );
}

type Props = {
  onSuccess: () => void;
};

export function EmailForm(props: Props) {
  const [backendErrorMessage, setBackendErrorMessage] = React.useState('');
  return (
    <Formik
      initialValues={
        {
          fullName: '',
          email: '',
          confirmEmail: '',
        } as FormValuesType
      }
      onSubmit={async function (values) {
        setBackendErrorMessage('');
        try {
          await submitInvitation({
            name: values.fullName,
            email: values.email,
          });
          props.onSuccess();
        } catch (e) {
          setBackendErrorMessage(e.errorMessage);
        }
      }}
      validate={(values) => {
        const errors: Partial<FormValuesType> = {};
        errors.fullName = formValidator.fullName(values.fullName);
        errors.email = formValidator.email(values.email);
        errors.confirmEmail = formValidator.confirmEmail(
          values.email,
          values.confirmEmail
        );

        return hasNoErrors(errors) ? undefined : errors;
      }}
    >
      {({ isSubmitting, isValid, dirty }) => {
        return (
          <Form>
            <FieldWithError
              name="fullName"
              placeholder="Full name"
            ></FieldWithError>
            <FieldWithError
              name="email"
              type="email"
              placeholder="email"
            ></FieldWithError>
            <FieldWithError
              name="confirmEmail"
              type="email"
              placeholder="Confirm email"
            ></FieldWithError>
            <div
              css={css`
                border-top: 1px solid #e9e9e9;
                margin-top: 30px;
              `}
            >
              <Touchable
                loading={isSubmitting}
                disabled={!isValid || !dirty}
                element="button"
                extraProps={{ type: 'submit' }}
                css={ButtonCss}
              >
                Submit
              </Touchable>
              {backendErrorMessage && (
                <div
                  css={css`
                    ${errorBaseCss};
                    margin-top: 10px;
                  `}
                >
                  {backendErrorMessage}
                </div>
              )}
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
