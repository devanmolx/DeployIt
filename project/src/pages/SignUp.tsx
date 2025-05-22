import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, Zap } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleGitHubSignUp = () => {
    login();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Zap className="h-12 w-12 text-accent mx-auto" />
          <h1 className="mt-6 text-3xl font-bold">Welcome to Bolt Deploy</h1>
          <p className="mt-2 text-foreground-muted">
            Get started by signing in with your GitHub account
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          <button
            onClick={handleGitHubSignUp}
            className="w-full flex items-center justify-center gap-2 bg-[#24292F] hover:bg-[#24292F]/90 text-white px-4 py-3 rounded-lg font-medium transition-colors"
          >
            <Github className="h-5 w-5" />
            Continue with GitHub
          </button>

          <div className="mt-6 text-center text-sm text-foreground-muted">
            By signing up, you agree to our{' '}
            <a href="#" className="text-accent hover:text-accent-hover">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-accent hover:text-accent-hover">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;