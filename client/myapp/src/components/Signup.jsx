import React from 'react'
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate()
  const { register, watch, handleSubmit, formState: { errors } } = useForm();
  const handleRegistration = async (data) => {
    console.log(data)
    try {
      await axios.post('http://localhost:5000/users/add', {
        username: data.username,
        password: data.password,
        email: data.email
      });
      // Assuming successful login, navigate to home or dashboard
      navigate('/');
    } catch (error) {
      // Handle errors here (e.g., display error message to user)
      console.error('Register failed:', error);
    }
  }
  const handleLogInClick = () => {
    navigate('/'); // Navigate to the sign-up page
  };


  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Create an Account</h2>
        <form onSubmit={handleSubmit(handleRegistration)} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            {...register('username', { required: true })}
            className="block w-full p-2 border rounded focus:outline-none focus:border-blue-400"
            required
          />
          {errors.name ? (
            <span className='text-red-500'>user name already taken</span>
          ) : (
            <div>

            </div>
          )}
          <input
            type="email"
            placeholder="Email"
            {...register('email', { required: true })}
            className="block w-full p-2 border rounded focus:outline-none focus:border-blue-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            {...register('password', { required: true })}
            className="block w-full p-2 border rounded focus:outline-none focus:border-blue-400"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            {...register('confirmpassword', {
              required: true,
              validate: (val) => {
                if (watch('password') != val) {
                  return "Your passwords do no match";
                }
              },

            })}
            className="block w-full p-2 border rounded focus:outline-none focus:border-blue-400"
            required
          />
          {errors.confirmpassword && <span className='text-red-500'>{errors.confirmpassword.message}</span>}
          <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Register</button>
          <div className="mt-4 text-center">
            <span className="text-gray-600">Already have an account?</span>
            <button onClick={handleLogInClick} className="text-blue-500 hover:text-blue-700 ml-1" type="button">
              Login here
            </button>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded mt-4 w-full focus:outline-none focus:shadow-outline">Sign up with Google</button>
        </form>
      </div>
    </div>
  );
}

export default Signup
