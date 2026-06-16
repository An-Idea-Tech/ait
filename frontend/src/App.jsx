import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import queryClient from './admin/utils/queryClient';
import { AuthProvider } from './admin/context/AuthContext';
import { HelmetProvider } from 'react-helmet-async';

import { lazy, Suspense } from 'react';

// Layout
const AdminLayout = lazy(() => import('./admin/components/layout/AdminLayout'));

// Public Pages
const HomePage = lazy(() => import('./public-site/pages/HomePage'));
const HowWeWorkPage = lazy(() => import('./public-site/pages/HowWeWorkPage'));
const PublicServicesPage = lazy(() => import('./public-site/pages/ServicesPage'));
const PublicServicePageDetailed = lazy(() => import('./public-site/pages/PublicServicePageDetailed'));
const InsightsPage = lazy(() => import('./public-site/pages/InsightsPage'));
const WorkPage = lazy(() => import('./public-site/pages/WorkPage'));
const AboutPage = lazy(() => import('./public-site/pages/AboutPage'));
const TheMethodPage = lazy(() => import('./public-site/pages/TheMethodPage'));
const ContactPage = lazy(() => import('./public-site/pages/ContactPage').then(module => ({ default: module.ContactPage })));

// Admin Pages
const Login = lazy(() => import('./admin/pages/Login'));
const Dashboard = lazy(() => import('./admin/pages/Dashboard'));
const ServicesPage = lazy(() => import('./admin/pages/services/ServicesPage'));
const ProjectsPage = lazy(() => import('./admin/pages/projects/ProjectsPage'));
const BlogsPage = lazy(() => import('./admin/pages/blogs/BlogsPage'));
const FeedsPage = lazy(() => import('./admin/pages/feeds/FeedsPage'));
const TestimonialsPage = lazy(() => import('./admin/pages/testimonials/TestimonialsPage'));
const ClientsPage = lazy(() => import('./admin/pages/clients/ClientsPage'));
const FAQsPage = lazy(() => import('./admin/pages/faqs/FAQsPage'));
const JobsPage = lazy(() => import('./admin/pages/jobs/JobsPage'));
const ApplicationsPage = lazy(() => import('./admin/pages/applications/ApplicationsPage'));
const ApplicationDetailPage = lazy(() => import('./admin/pages/applications/ApplicationDetailPage'));
const ContactsPage = lazy(() => import('./admin/pages/contacts/ContactsPage'));
const ContactDetailPage = lazy(() => import('./admin/pages/contacts/ContactDetailPage'));
const HomeSectionsPage = lazy(() => import('./admin/pages/home/HomeSectionsPage'));
const DiagnosisAnalyticsPage = lazy(() => import('./admin/pages/diagnosis/DiagnosisAnalyticsPage'));

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <Suspense fallback={<div style={{ display: 'flex', height: '100vh', width: '100%', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
            <Routes>

              {/* Protected admin routes */}
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="services" element={<ServicesPage />} />
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="blogs" element={<BlogsPage />} />
                <Route path="feeds" element={<FeedsPage />} />
                <Route path="testimonials" element={<TestimonialsPage />} />
                <Route path="clients" element={<ClientsPage />} />
                <Route path="faqs" element={<FAQsPage />} />
                <Route path="jobs" element={<JobsPage />} />
                <Route path="applications" element={<ApplicationsPage />} />
                <Route path="applications/:id" element={<ApplicationDetailPage />} />
                <Route path="contacts" element={<ContactsPage />} />
                <Route path="contacts/:id" element={<ContactDetailPage />} />
                <Route path="home-sections" element={<HomeSectionsPage />} />
                <Route path="diagnosis" element={<DiagnosisAnalyticsPage />} />
              </Route>



              {/* Public landing page */}
              <Route path="/admin/login" element={<Login />} />
              
              <Route path="/" element={<HomePage />} />
              <Route path="/how-we-work" element={<HowWeWorkPage />} />
              <Route path="/services" element={<PublicServicesPage />} />
              <Route path="/services/:slug" element={<PublicServicePageDetailed />} />

              <Route path="/insights" element={<InsightsPage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/the-method" element={<TheMethodPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* <Route path="*" element={<><SEO title="404 Not Found" description="The page you are looking for does not exist." /><h1 className=''>404 Not Found</h1></>} /> */}
            </Routes>
          </Suspense>
        </AuthProvider>

        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#1e293b',
              color: '#f1f5f9',
              border: '1px solid #334155',
              borderRadius: '12px',
              fontSize: '14px',
            },
            success: { iconTheme: { primary: '#6366f1', secondary: '#fff' } },
          }}
        />
      </BrowserRouter>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;