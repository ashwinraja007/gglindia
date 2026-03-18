import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ShieldCheck, FileText, ChevronRight } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-24 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Select a page to manage its content.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/admin/privacy-policy" className="block">
            <Card className="hover:border-brand-navy hover:shadow-md transition-all h-full">
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg"><ShieldCheck className="h-6 w-6 text-blue-600" /></div>
                  <div>
                    <CardTitle>Privacy Policy</CardTitle>
                    <CardDescription>Edit the privacy policy page content.</CardDescription>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </CardHeader>
            </Card>
          </Link>

          <Link to="/admin/terms-of-use" className="block">
            <Card className="hover:border-brand-navy hover:shadow-md transition-all h-full">
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-lg"><FileText className="h-6 w-6 text-green-600" /></div>
                  <div>
                    <CardTitle>Terms of Use</CardTitle>
                    <CardDescription>Edit the terms and conditions page.</CardDescription>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </CardHeader>
            </Card>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;