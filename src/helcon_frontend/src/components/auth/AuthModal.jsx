import React, { useState } from 'react';
import { FaTimes, FaGoogle, FaEnvelope, FaShieldAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPrincipal, addIdentity, getUserData, loginWithGoogle, loginWithEmail, registerWithEmail } from '../../features/auth/account';

const AuthModal = ({ isOpen, onClose }) => {
  const [selectedAuth, setSelectedAuth] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleInternetIdentity = async () => {
    setLoading(true);
    setError('');
    try {
      const result = await dispatch(getPrincipal());
      
      if (getPrincipal.fulfilled.match(result)) {
        const identifier = localStorage.getItem('identifier');
        
        if (identifier) {
          const queryId = JSON.parse(identifier);
          await dispatch(getUserData({ id: queryId.toNum }));
          navigate('/home');
        } else {
          const identityResult = await dispatch(addIdentity({ principal: result.payload }));
          
          if (addIdentity.fulfilled.match(identityResult)) {
            navigate('/new-account');
          } else {
            setError('Failed to create identity');
          }
        }
        onClose();
      } else {
        setError('Failed to authenticate with Internet Identity');
      }
    } catch (err) {
      setError('Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setLoading(true);
    setError('');
    try {
      const result = await dispatch(loginWithGoogle());
      if (loginWithGoogle.fulfilled.match(result)) {
        navigate('/home');
        onClose();
      } else {
        setError('Google authentication failed');
      }
    } catch (err) {
      setError('Google authentication failed');
    } finally {
      setLoading(false);
    }
  };

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!isLogin && password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const authData = { email, password };
      const result = isLogin 
        ? await dispatch(loginWithEmail(authData))
        : await dispatch(registerWithEmail(authData));

      if ((isLogin ? loginWithEmail : registerWithEmail).fulfilled.match(result)) {
        if (isLogin) {
          navigate('/home');
        } else {
          navigate('/new-account');
        }
        onClose();
      } else {
        setError(isLogin ? 'Login failed' : 'Registration failed');
      }
    } catch (err) {
      setError(isLogin ? 'Login failed' : 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSelectedAuth(null);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
    setIsLogin(true);
  };

  const authMethods = [
    {
      id: 'internet-identity',
      name: 'Internet Identity',
      description: 'Secure blockchain authentication',
      icon: <FaShieldAlt className="text-3xl text-blue-600" />,
      action: handleInternetIdentity
    },
    {
      id: 'google',
      name: 'Google Account',
      description: 'Sign in with your Google account',
      icon: <FaGoogle className="text-3xl text-red-500" />,
      action: handleGoogleAuth
    },
    {
      id: 'email',
      name: 'Email & Password',
      description: 'Traditional email authentication',
      icon: <FaEnvelope className="text-3xl text-green-600" />,
      action: () => setSelectedAuth('email')
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Welcome to HelCon</h2>
            <p className="text-gray-600">Choose your preferred authentication method</p>
          </div>
          <button 
            onClick={() => {
              resetForm();
              onClose();
            }}
            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
          >
            <FaTimes className="text-gray-600" />
          </button>
        </div>

        <div className="p-6">
          {!selectedAuth ? (
            /* Authentication Method Selection */
            <div className="space-y-4">
              {authMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={method.action}
                  disabled={loading}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 flex items-center space-x-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="flex-shrink-0">
                    {method.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-semibold text-gray-900">{method.name}</h3>
                    <p className="text-sm text-gray-600">{method.description}</p>
                  </div>
                </button>
              ))}

              {loading && (
                <div className="flex items-center justify-center py-4">
                  <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  <span className="ml-2 text-gray-600">Authenticating...</span>
                </div>
              )}

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}
            </div>
          ) : (
            /* Email Authentication Form */
            <div>
              <button
                onClick={resetForm}
                className="mb-4 text-blue-600 hover:text-blue-800 transition-colors flex items-center"
              >
                ← Back to authentication methods
              </button>

              <div className="text-center mb-6">
                <FaEnvelope className="text-4xl text-green-600 mx-auto mb-2" />
                <h3 className="text-xl font-bold text-gray-900">
                  {isLogin ? 'Sign In' : 'Create Account'}
                </h3>
                <p className="text-gray-600">
                  {isLogin ? 'Enter your credentials to continue' : 'Create a new account to get started'}
                </p>
              </div>

              <form onSubmit={handleEmailAuth} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your password"
                  />
                </div>

                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Confirm your password"
                    />
                  </div>
                )}

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-red-700 text-sm">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      {isLogin ? 'Signing In...' : 'Creating Account...'}
                    </>
                  ) : (
                    isLogin ? 'Sign In' : 'Create Account'
                  )}
                </button>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;