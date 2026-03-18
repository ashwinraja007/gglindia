import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AlertCircle } from 'lucide-react';

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok && data.token) {
        localStorage.setItem('adminToken', data.token);
        navigate('/admin/privacy-policy');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError('Could not connect to the server');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 py-24">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-100">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Admin Login</h1>
            <p className="text-gray-600 mt-2">Enter your credentials to manage content.</p>
          </div>
          {error && <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg flex items-center gap-2 text-sm font-medium"><AlertCircle size={16} /> {error}</div>}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Input type="email" placeholder="Admin Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full" />
            </div>
            <div>
              <Input type="password" placeholder="Admin Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full" />
            </div>
            <Button type="submit" disabled={isLoading} className="w-full bg-brand-navy hover:bg-brand-navy/90">{isLoading ? 'Authenticating...' : 'Login'}</Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminLogin;