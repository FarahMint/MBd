export default function validateAuth(values) {
    const errors = {};
    //err email
    if (!values.email) {
      errors.email = 'Required email';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    // password err
    if (!values.password) {
        errors.password = 'Required password';
      } else if (values.password.length < 6) {
        errors.email = 'password must be at least 6 characters';
      }
    return errors;
  };