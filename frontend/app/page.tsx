'use client';
import React, { useState, useEffect } from 'react';
import { FileText, Zap, Shield, TrendingUp, Check, Menu, X } from 'lucide-react';

export default function BillBuilderLanding() {
  const [scrolled, setScrolled] = useState(false);

  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Create professional invoices in seconds with our intuitive interface"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Reliable",
      description: "Bank-level encryption keeps your financial data safe and secure"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Track Everything",
      description: "Monitor payments, manage clients, and grow your business effortlessly"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Professional Templates",
      description: "Beautiful, customizable invoice templates that reflect your brand"
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "Free",
      features: ["5 invoices/month", "Basic templates", "Email support", "Mobile app access"]
    },
    {
      name: "Professional",
      price: "$19",
      popular: true,
      features: ["Unlimited invoices", "Custom branding", "Priority support", "Advanced analytics", "Recurring invoices"]
    },
    {
      name: "Business",
      price: "$49",
      features: ["Everything in Pro", "Team collaboration", "API access", "White-label option", "Dedicated account manager"]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
     

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundColor: '#06402B'}}>
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #06402B 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight" style={{color: '#06402B'}}>
                Invoicing Made
                <span className="block mt-2 bg-gradient-to-r from-[#06402B] to-[#0a5c3d] bg-clip-text text-transparent">
                  Simple & Beautiful
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Create, send, and track professional invoices in minutes. Get paid faster with Bill Builder's intuitive platform designed for modern businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 rounded-lg text-white font-semibold text-lg transition-all hover:scale-105 hover:shadow-2xl" style={{backgroundColor: '#06402B'}}>
                  Start Free Trial
                </button>
                <button className="px-8 py-4 rounded-lg font-semibold text-lg border-2 transition-all hover:bg-gray-50" style={{borderColor: '#06402B', color: '#06402B'}}>
                  Watch Demo
                </button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5" style={{color: '#06402B'}} />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5" style={{color: '#06402B'}} />
                  <span>14-day free trial</span>
                </div>
              </div>
            </div>

            <div className="relative animate-float">
              <div className="absolute inset-0 blur-3xl opacity-20 rounded-full" style={{backgroundColor: '#06402B'}} />
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-500">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b-2" style={{borderColor: '#06402B'}}>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded flex items-center justify-center" style={{backgroundColor: '#06402B'}}>
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-bold" style={{color: '#06402B'}}>INVOICE</span>
                    </div>
                    <span className="text-sm text-gray-500">#INV-2024-001</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Web Design Services</span>
                      <span className="font-semibold">$2,500</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">SEO Optimization</span>
                      <span className="font-semibold">$1,200</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Content Creation</span>
                      <span className="font-semibold">$800</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t-2 flex justify-between items-center">
                    <span className="font-bold text-lg">Total</span>
                    <span className="font-bold text-2xl" style={{color: '#06402B'}}>$4,500</span>
                  </div>
                  <button className="w-full py-3 rounded-lg text-white font-semibold transition-all hover:shadow-lg" style={{backgroundColor: '#06402B'}}>
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div data-animate id="features-header" className={`text-center mb-16 transition-all duration-1000 ${visibleSections['features-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#06402B'}}>
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features to streamline your invoicing and get paid faster
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                data-animate
                id={`feature-${idx}`}
                className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${visibleSections[`feature-${idx}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{transitionDelay: `${idx * 100}ms`}}
              >
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4" style={{backgroundColor: '#06402B'}}>
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{color: '#06402B'}}>{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div data-animate id="pricing-header" className={`text-center mb-16 transition-all duration-1000 ${visibleSections['pricing-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#06402B'}}>
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your business. Upgrade or downgrade anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                data-animate
                id={`plan-${idx}`}
                className={`bg-white rounded-2xl shadow-xl p-8 relative transition-all duration-500 hover:scale-105 ${plan.popular ? 'ring-4 ring-[#06402B] transform scale-105' : ''} ${visibleSections[`plan-${idx}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{transitionDelay: `${idx * 100}ms`}}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-white text-sm font-semibold" style={{backgroundColor: '#06402B'}}>
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2" style={{color: '#06402B'}}>{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold" style={{color: '#06402B'}}>{plan.price}</span>
                    {plan.price !== 'Free' && <span className="text-gray-600 ml-2">/month</span>}
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 flex-shrink-0" style={{color: '#06402B'}} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all hover:shadow-lg ${plan.popular ? 'text-white' : 'border-2 hover:bg-gray-50'}`} style={plan.popular ? {backgroundColor: '#06402B'} : {borderColor: '#06402B', color: '#06402B'}}>
                  {plan.price === 'Free' ? 'Get Started' : 'Start Free Trial'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{backgroundColor: '#06402B'}}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Simplify Your Invoicing?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of businesses already using Bill Builder to get paid faster
          </p>
          <button className="px-10 py-4 bg-white rounded-lg font-semibold text-lg transition-all hover:scale-105 hover:shadow-2xl" style={{color: '#06402B'}}>
            Start Your Free Trial
          </button>
          <p className="mt-4 text-sm opacity-75">No credit card required • 14-day free trial</p>
        </div>
      </section>

      {/* Footer */}
     

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}