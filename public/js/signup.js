import axios from 'axios';
import { showAlert } from './alerts';

export const signup = async (name, email, password, passwordConfirm) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/signup',
      data: {
        name: String(name), // Ensure name is a string
        email: String(email), // Ensure email is a string
        password: String(password), // Ensure password is a string
        passwordConfirm: String(passwordConfirm), // Ensure passwordConfirm is a string
      },
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Successfully created account');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    console.error('Signup error:', err);

    const errorMessage =
      err.response?.data?.message ||
      'Something went wrong. Please try again later.';
    showAlert('error', errorMessage);
  }
};
