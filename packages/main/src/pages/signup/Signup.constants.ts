export const constants = {
  strings: {
    title: 'Please Signup',
    emailLabel: 'Enter email',
    firstnameLabel: 'Enter your firstname',
    lastnameLabel: 'Enter your lastname',
    companyLabel: 'Enter your company name',
    passwordLabel: 'Enter password',
    password2Label: 'Confirm password',
    signup: 'Signup',
    forgotPassword: 'Forgot Password?',
  },
  errors: {
    nameRequired: 'Please enter a valid name',
    companyRequired: 'Please enter your company name',
    emailRequired: 'Please enter email address',
    emailInvalid: 'Please enter valid email',
    passwordRequired: 'Please enter a valid password',
    passwordInvalid: 'Password should be min 8 character',
  },
} as const;