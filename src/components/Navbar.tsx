
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X, MessageSquare } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(`${path}/`);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Reports', path: '/compliance-resources' },
    { name: 'Assessments', path: '/assessment' },
    { name: 'No Code UI', path: '/no-code-ui' },
    { name: 'Forms', path: '/forms' },
    { name: 'Rules Catalog', path: '/rules-catalog' },
    { name: 'Integrations', path: '/integrations' },
    { name: 'Chat', path: '/chat', icon: <MessageSquare className="h-4 w-4 mr-1" /> },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-8',
        scrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-xl">SF</span>
          </div>
          <span className="font-semibold text-xl">SecureFlow</span>
        </Link>

        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'px-4 py-2 rounded-md font-medium transition-colors duration-200 flex items-center',
                isActive(item.path)
                  ? 'text-primary'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              )}
            >
              {item.icon && item.icon}
              {item.name}
              {item.path === '/chat' && (
                <span className="ml-1 px-1.5 py-0.5 text-xs rounded-full bg-primary text-white">New</span>
              )}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="font-medium">
            Log in
          </Button>
          <Button className="font-medium">Get Started</Button>
        </div>

        <button
          className="md:hidden flex items-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg py-4 px-6 z-40 slide-in-right">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'px-4 py-3 rounded-md font-medium transition-colors duration-200 flex items-center',
                  isActive(item.path)
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                )}
                onClick={closeMobileMenu}
              >
                {item.icon && item.icon}
                {item.name}
                {item.path === '/chat' && (
                  <span className="ml-1 px-1.5 py-0.5 text-xs rounded-full bg-primary text-white">New</span>
                )}
              </Link>
            ))}
            <div className="pt-2 flex flex-col space-y-3">
              <Button variant="outline" className="w-full justify-center">
                Log in
              </Button>
              <Button className="w-full justify-center">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
