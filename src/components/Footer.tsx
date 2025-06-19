
import React from 'react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                BeautyGlow
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner in beauty and skincare. Discover premium products 
              that enhance your natural glow and boost your confidence.
            </p>
            <div className="flex space-x-4">
              {['Facebook', 'Instagram', 'Twitter', 'YouTube'].map((social) => (
                <Button
                  key={social}
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-pink-400 hover:bg-gray-800"
                >
                  {social}
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-pink-400">Quick Links</h3>
            <div className="space-y-2">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Products', id: 'products' },
                { label: 'About Us', id: 'about' },
                { label: 'Blog', id: 'blog' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-pink-400">Customer Service</h3>
            <div className="space-y-2">
              {[
                { label: 'Contact Us', id: 'contact' },
                { label: 'Support & Help', id: 'support' },
                { label: 'Shipping Info', id: 'shipping' },
                { label: 'Returns', id: 'returns' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-pink-400">Legal</h3>
            <div className="space-y-2">
              {[
                { label: 'Privacy Policy', id: 'privacy' },
                { label: 'Terms of Service', id: 'terms' },
                { label: 'Cookie Policy', id: 'cookies' },
                { label: 'Refund Policy', id: 'refunds' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold text-pink-400 mb-4">Stay Beautiful</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for beauty tips, exclusive offers, and new product launches.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500"
              />
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; 2024 BeautyGlow. All rights reserved. Made with ❤️ for beauty enthusiasts.</p>
        </div>
      </div>

      {/* Hidden sections for footer links */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Contact Us</h2>
          <div className="max-w-2xl mx-auto space-y-4 text-muted-foreground">
            <p>📧 Email: hello@beautyglow.com</p>
            <p>📞 Phone: +91 98765 43210</p>
            <p>📍 Address: 123 Beauty Street, Mumbai, India 400001</p>
            <p>🕒 Hours: Monday - Saturday, 9 AM - 6 PM</p>
          </div>
        </div>
      </section>

      <section id="support" className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Support & Help</h2>
          <div className="max-w-2xl mx-auto space-y-4 text-muted-foreground">
            <p>Need help? Our customer support team is here to assist you!</p>
            <p>• Live chat available 24/7</p>
            <p>• Email support within 2 hours</p>
            <p>• Video consultations for product recommendations</p>
            <p>• Beauty tutorials and guides</p>
          </div>
        </div>
      </section>

      <section id="privacy" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Privacy Policy</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground">
            <p>At BeautyGlow, we value your privacy and are committed to protecting your personal information.</p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Information We Collect</h3>
              <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us.</p>
              
              <h3 className="text-xl font-semibold text-foreground">How We Use Your Information</h3>
              <p>We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.</p>
              
              <h3 className="text-xl font-semibold text-foreground">Information Sharing</h3>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
              
              <h3 className="text-xl font-semibold text-foreground">Data Security</h3>
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
