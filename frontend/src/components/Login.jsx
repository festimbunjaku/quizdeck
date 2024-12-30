import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');  

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        email,
        password
      });

      const { token } = response.data;
      login(token);
      navigate('/dashboard');
    } catch (error) {
      setError('Invalid credentials, please try again.');
    }
  };

  return (
    <div className="mt-20 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="w-20 mx-auto">
        <svg width="84px" height="84px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
          <path d="M919.579055 285.271858h-45.680644v28.668789h45.680644c7.722143 0 10.633049 8.355928 10.633049 16.078071v378.207881c0 38.616859-28.046267 67.48633-66.663125 67.486329h-280.155503c-23.172573 0-45.330475 21.402275-45.330475 44.574848v4.571648h-56.313693v-4.571648c0-23.172573-15.259987-44.574848-38.432559-44.574848H163.16227c-38.616859 0-73.561041-28.869471-73.561041-67.486329V330.018718c0-7.722143 9.808821-16.078071 17.530964-16.078071h38.782729v-28.668789H107.132193c-23.172573 0-45.175868 21.573264-45.175868 44.74686v378.207881c0 54.068312 47.138656 95.131233 101.205945 95.131233h280.154479c7.722143 0 10.787656 9.207801 10.787655 16.929944v7.003375c0 15.45043 15.784216 25.212152 31.23567 25.212153h56.0311c15.45043 0 24.337754-9.761723 24.337755-25.212153v-7.003375c0-7.722143 9.963428-16.929944 17.685571-16.929944H863.547955c54.068312 0 94.30803-41.063945 94.308029-95.131233V330.018718c0-23.172573-15.104356-44.74686-38.276929-44.74686z" fill="#FF7415"></path>
          <path d="M271.852816 285.271858h167.917194v28.668789h-167.917194zM271.852816 348.752748h167.917194v27.644903h-167.917194zM271.852816 411.209753h167.917194v28.668789h-167.917194zM580.042299 285.271858h167.917194v28.668789h-167.917194zM580.042299 348.752748h167.917194v27.644903h-167.917194zM580.042299 411.209753h167.917194v28.668789h-167.917194z" fill="#FF7415"></path>
          <path d="M842.536804 229.98205h-17.784888v-5.021134c0-30.894716-21.358248-58.459757-52.252964-58.459756H604.405651c-38.92812 0-72.900635 21.329579-91.050027 52.867295-18.149391-31.537716-52.121906-52.867295-91.050026-52.867295H254.21332c-30.894716 0-59.150879 27.564017-59.150879 58.459756v5.021134h-10.886973c-27.030573 0-52.593917 27.118627-52.593917 58.013343v378.20788c0 38.616859 33.415521 67.530357 70.10338 67.530357h255.640617c23.172573 0 42.023325 20.477706 42.023325 41.979298h28.01555c0-21.501592 18.849729-41.979298 42.023326-41.979298h255.640616c36.687859 0 63.205465-28.913498 63.205465-67.530357V287.995393c-0.002048-30.894716-18.667477-58.013343-45.697026-58.013343z m-238.131153-35.835986h168.092277c15.45043 0 24.60806 15.363399 24.60806 30.814852v399.219032c0 15.45043-9.15763 25.595085-24.60806 25.595085H604.405651c-30.453421 0-59.175452 15.523125-80.677045 36.292639V273.987617c0-42.481002 38.195018-79.841554 80.677045-79.841553zM222.706321 224.960916c0-15.45043 16.055546-30.814853 31.505975-30.814852H422.304574c42.481002 0 73.779129 37.359528 73.779129 79.841553v411.914186c-14.334395-20.717296-43.369735-36.12677-73.779129-36.12677H254.21332c-15.45043 0-31.505975-10.143632-31.505975-25.595085V224.960916z m-21.022414 481.12781c-21.237429 0-42.458477-16.71288-42.458476-39.885453V287.995393c0-15.184219 13.560337-30.368439 24.949013-30.368439h10.886973v366.552994c0 30.894716 28.256163 53.239989 59.150879 53.239989H422.304574c26.733646 0 50.311677 14.026205 64.132081 34.760907-8.879134-4.081207-18.718672-6.092118-29.113155-6.092118H201.683907z m657.879086-39.885453c0 23.172573-13.299246 39.885453-34.536676 39.885453H569.385701c-10.394484 0-20.234022 2.011935-29.114179 6.092118 13.820404-20.734702 37.399459-34.760907 64.133105-34.760907h168.092277c30.894716 0 52.252964-22.345273 52.252964-53.239989V257.626954h17.784888c11.387653 0 17.027213 15.184219 17.027213 30.368439v378.20788z" fill="#262626"></path>
        </svg>
      </div>
      <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
        Log in to your account
      </h2>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6"
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
