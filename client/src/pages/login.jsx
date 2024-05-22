import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, setError } = useForm();

  const handleRegistration = async (data) => {
    console.log(data)
    try {
      await axios.post('http://localhost:3000/server/auth/login', {
        password: data.password,
        email: data.email
      })
      // Assuming successful login, navigate to home or dashboard
      navigate('/');
    } catch (error) {
      console.log(error)
      if (error.response.status === 404) {
        setError('email', { message: error.response.data });
      }
      if (error.response.status === 400) {
        setError('password', { message: error.response.data });
      }
      // Handle errors here (e.g., display error message to user)
      console.error('Login failed:', error);
    }
  }

  const handleSignUpClick = () => {
    navigate('/register'); // Navigate to the sign-up page
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Log In</h2>
        <form onSubmit={handleSubmit(handleRegistration)} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="block w-full p-2 border rounded focus:outline-none focus:border-blue-400"
            {...register('email', { required: 'email is required' })}
          />
          {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
          <input
            type="password"
            placeholder="Password"
            className="block w-full p-2 border rounded focus:outline-none focus:border-blue-400"
            {...register('password', { required: 'password is required' })}
          />
          {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Log In
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-gray-600">Don't have an account?</span>
          <button onClick={handleSignUpClick} className="text-blue-500 hover:text-blue-700 ml-1" type="button">
            Sign up here
          </button>
        </div>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded mt-4 w-full focus:outline-none focus:shadow-outline"
        >
          Log in with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
