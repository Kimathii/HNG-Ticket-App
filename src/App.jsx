import React, { createContext, useContext, useState, useEffect } from 'react';

// ==================== TOAST NOTIFICATION SYSTEM ====================
const ToastContext = createContext(null);

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };

  const toast = {
    success: (msg) => addToast(msg, 'success'),
    error: (msg) => addToast(msg, 'error'),
    info: (msg) => addToast(msg, 'info'),
  };

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      }}>
        {toasts.map(({ id, message, type }) => (
          <div
            key={id}
            style={{
              padding: '1rem 1.5rem',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              backgroundColor: type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6',
              color: '#ffffff',
              fontWeight: '500',
              maxWidth: '300px',
              animation: 'slideIn 0.3s ease-out',
            }}
          >
            {message}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </ToastContext.Provider>
  );
};

const useToast = () => useContext(ToastContext);

// ==================== STYLES ====================
const styles = {
  // Layout
  container: {
    maxWidth: '1440px',
    margin: '0 auto',
    padding: '0 1rem',
  },
  page: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f9fafb',
  },
  
  // Navbar
  navbar: {
    backgroundColor: '#ffffff',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 50,
  },
  navbarContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#2563eb',
    cursor: 'pointer',
  },
  navLinks: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
  },
  navLink: {
    color: '#374151',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
  
  // Buttons
  buttonPrimary: {
    backgroundColor: '#2563eb',
    color: '#ffffff',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    border: 'none',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  buttonSecondary: {
    backgroundColor: '#10b981',
    color: '#ffffff',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    border: 'none',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  buttonDanger: {
    backgroundColor: '#ef4444',
    color: '#ffffff',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    border: 'none',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    flex: 1,
  },
  buttonEdit: {
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    border: 'none',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    flex: 1,
  },
  
  // Hero
  hero: {
    background: 'linear-gradient(to bottom right, #3b82f6, #9333ea)',
    color: '#ffffff',
    position: 'relative',
    overflow: 'hidden',
  },
  heroContent: {
    textAlign: 'center',
    padding: '6rem 1rem',
    position: 'relative',
    zIndex: 10,
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
  },
  heroSubtitle: {
    fontSize: '1.25rem',
    marginBottom: '2rem',
    maxWidth: '42rem',
    margin: '0 auto 2rem',
  },
  heroButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  
  // Decorative circles
  circle: {
    position: 'absolute',
    borderRadius: '50%',
    opacity: 0.2,
    pointerEvents: 'none',
  },
  circleLarge: {
    width: '24rem',
    height: '24rem',
    backgroundColor: '#fbbf24',
    top: '-5rem',
    right: '-5rem',
  },
  circleSmall: {
    width: '16rem',
    height: '16rem',
    backgroundColor: '#ec4899',
    bottom: '2.5rem',
    left: '2.5rem',
  },
  
  // Cards
  card: {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '0.75rem',
    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
  },
  cardHover: {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '0.75rem',
    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
    transition: 'box-shadow 0.2s',
    cursor: 'pointer',
  },
  
  // Forms
  formGroup: {
    marginBottom: '1rem',
  },
  label: {
    display: 'block',
    color: '#374151',
    fontWeight: '600',
    marginBottom: '0.5rem',
  },
  input: {
    width: '100%',
    padding: '0.5rem 1rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    outline: 'none',
  },
  textarea: {
    width: '100%',
    padding: '0.5rem 1rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    outline: 'none',
    resize: 'vertical',
  },
  select: {
    width: '100%',
    padding: '0.5rem 1rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    outline: 'none',
    backgroundColor: '#ffffff',
  },
  error: {
    color: '#ef4444',
    fontSize: '0.875rem',
    marginTop: '0.25rem',
  },
  
  // Grid
  grid3: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  
  // Footer
  footer: {
    backgroundColor: '#1f2937',
    color: '#ffffff',
    padding: '2rem 0',
    marginTop: 'auto',
    textAlign: 'center',
  },
  
  // Status badges
  statusOpen: {
    backgroundColor: '#d1fae5',
    color: '#065f46',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: '600',
  },
  statusInProgress: {
    backgroundColor: '#fef3c7',
    color: '#92400e',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: '600',
  },
  statusClosed: {
    backgroundColor: '#f3f4f6',
    color: '#374151',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: '600',
  },
  
  // Ticket card
  ticketCard: {
    backgroundColor: '#ffffff',
    padding: '1rem',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    transition: 'box-shadow 0.2s',
  },
  ticketHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
    marginBottom: '0.75rem',
  },
  ticketTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#1f2937',
    margin: 0,
  },
  ticketButtons: {
    display: 'flex',
    gap: '0.5rem',
    marginTop: '1rem',
  },
};

// ==================== AUTH CONTEXT ====================
const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    const token = localStorage.getItem('ticketapp_session');
    if (token) {
      setUser(JSON.parse(token));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    if (email && password.length >= 6) {
      const userData = { email, token: Date.now().toString() };
      localStorage.setItem('ticketapp_session', JSON.stringify(userData));
      setUser(userData);
      toast.success('Welcome back!');
      return true;
    }
    toast.error('Invalid email or password.');
    return false;
  };

  const signup = (email, password, confirmPassword) => {
    if (password !== confirmPassword) {
      toast.error('Passwords do not match.');
      return false;
    }
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters.');
      return false;
    }
    const userData = { email, token: Date.now().toString() };
    localStorage.setItem('ticketapp_session', JSON.stringify(userData));
    setUser(userData);
    toast.success('Account created successfully!');
    return true;
  };

  const logout = () => {
    localStorage.removeItem('ticketapp_session');
    setUser(null);
    toast.info('Logged out successfully.');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

// ==================== TICKET CONTEXT ====================
const TicketContext = createContext(null);

const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);
  const toast = useToast();

  useEffect(() => {
    const stored = localStorage.getItem('tickets');
    if (stored) {
      setTickets(JSON.parse(stored));
    }
  }, []);

  const saveTickets = (newTickets) => {
    setTickets(newTickets);
    localStorage.setItem('tickets', JSON.stringify(newTickets));
  };

  const addTicket = (ticket) => {
    const newTicket = { ...ticket, id: Date.now().toString() };
    const updated = [...tickets, newTicket];
    saveTickets(updated);
    toast.success('Ticket created successfully!');
  };

  const updateTicket = (id, updates) => {
    const updated = tickets.map(t => t.id === id ? { ...t, ...updates } : t);
    saveTickets(updated);
    toast.success('Ticket updated successfully!');
  };

  const deleteTicket = (id) => {
    const updated = tickets.filter(t => t.id !== id);
    saveTickets(updated);
    toast.success('Ticket deleted successfully!');
  };

  return (
    <TicketContext.Provider value={{ tickets, addTicket, updateTicket, deleteTicket }}>
      {children}
    </TicketContext.Provider>
  );
};

const useTickets = () => useContext(TicketContext);

// ==================== COMPONENTS ====================

// Navbar Component
const Navbar = () => {
  const { user, logout } = useAuth();

  const navigate = (path) => {
    window.location.hash = path;
  };

  return (
    <nav style={styles.navbar}>
      <div style={{...styles.container, ...styles.navbarContent}}>
        <h1 
          style={styles.logo}
          onClick={() => navigate(user ? '/dashboard' : '/')}
        >
          TicketFlow
        </h1>
        <div style={styles.navLinks}>
          {user ? (
            <>
              <a 
                href="#/dashboard" 
                style={styles.navLink}
                onMouseOver={(e) => e.target.style.color = '#2563eb'}
                onMouseOut={(e) => e.target.style.color = '#374151'}
              >
                Dashboard
              </a>
              <a 
                href="#/tickets" 
                style={styles.navLink}
                onMouseOver={(e) => e.target.style.color = '#2563eb'}
                onMouseOut={(e) => e.target.style.color = '#374151'}
              >
                Tickets
              </a>
              <button
                onClick={() => {
                  logout();
                  navigate('/');
                }}
                style={{...styles.buttonDanger, flex: 'none'}}
                onMouseOver={(e) => e.target.style.backgroundColor = '#dc2626'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#ef4444'}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <a 
                href="#/login" 
                style={styles.navLink}
                onMouseOver={(e) => e.target.style.color = '#2563eb'}
                onMouseOut={(e) => e.target.style.color = '#374151'}
              >
                Login
              </a>
              <a 
                href="#/signup" 
                style={{...styles.buttonPrimary, textDecoration: 'none', display: 'inline-block'}}
                onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
              >
                Get Started
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

// Footer Component
const Footer = () => (
  <footer style={styles.footer}>
    <div style={styles.container}>
      <p>&copy; 2025 TicketFlow. All rights reserved.</p>
      <p style={{color: '#9ca3af', fontSize: '0.875rem', marginTop: '0.5rem'}}>
        Manage your tickets with ease
      </p>
    </div>
  </footer>
);

// ==================== PAGES ====================

// Landing Page
const Landing = () => {
  const navigate = (path) => {
    window.location.hash = path;
  };

  return (
    <div style={styles.page}>
      <Navbar />
      
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={{...styles.circle, ...styles.circleLarge}} />
        <div style={{...styles.circle, ...styles.circleSmall}} />
        
        <div style={{...styles.container, ...styles.heroContent}}>
          <h1 style={styles.heroTitle}>Streamline Your Workflow</h1>
          <p style={styles.heroSubtitle}>
            The modern ticket management system designed for teams who value simplicity and efficiency
          </p>
          <div style={styles.heroButtons}>
            <button
              onClick={() => navigate('/login')}
              style={{backgroundColor: '#ffffff', color: '#2563eb', padding: '1rem 2rem', borderRadius: '0.5rem', border: 'none', fontWeight: '600', cursor: 'pointer', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}}
              onMouseOver={(e) => e.target.style.backgroundColor = '#f3f4f6'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#ffffff'}
            >
              Login
            </button>
            <button
              onClick={() => navigate('/signup')}
              style={{backgroundColor: '#fbbf24', color: '#111827', padding: '1rem 2rem', borderRadius: '0.5rem', border: 'none', fontWeight: '600', cursor: 'pointer', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}}
              onMouseOver={(e) => e.target.style.backgroundColor = '#f59e0b'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#fbbf24'}
            >
              Get Started
            </button>
          </div>
        </div>
        
        {/* Wavy Bottom */}
        <div style={{position: 'absolute', bottom: 0, width: '100%'}}>
          <svg viewBox="0 0 1440 120" style={{width: '100%', height: 'auto', display: 'block'}}>
            <path
              fill="#ffffff"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section style={{padding: '5rem 0', backgroundColor: '#f9fafb'}}>
        <div style={styles.container}>
          <h2 style={{fontSize: '2.25rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#1f2937'}}>
            Why Choose TicketFlow?
          </h2>
          <div style={styles.grid3}>
            <div 
              style={styles.cardHover}
              onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.1)'}
              onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.1)'}
            >
              <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>🎯</div>
              <h3 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.75rem'}}>Easy to Use</h3>
              <p style={{color: '#6b7280'}}>
                Intuitive interface that gets your team up and running in minutes
              </p>
            </div>
            <div 
              style={styles.cardHover}
              onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.1)'}
              onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.1)'}
            >
              <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>⚡</div>
              <h3 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.75rem'}}>Lightning Fast</h3>
              <p style={{color: '#6b7280'}}>
                Real-time updates and instant notifications keep everyone in sync
              </p>
            </div>
            <div 
              style={styles.cardHover}
              onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.1)'}
              onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.1)'}
            >
              <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>🔒</div>
              <h3 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.75rem'}}>Secure & Reliable</h3>
              <p style={{color: '#6b7280'}}>
                Your data is protected with industry-standard security measures
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Login Page
const Login = () => {
  const { login, user } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (user) window.location.hash = '/dashboard';
  }, [user]);

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Invalid email format';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate() && login(email, password)) {
      window.location.hash = '/dashboard';
    }
  };

  return (
    <div style={styles.page}>
      <Navbar />
      <div style={{flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 1rem', position: 'relative', overflow: 'hidden'}}>
        <div style={{...styles.circle, width: '24rem', height: '24rem', backgroundColor: '#bfdbfe', top: '-10rem', left: '-10rem'}} />
        <div style={{...styles.circle, width: '16rem', height: '16rem', backgroundColor: '#ddd6fe', bottom: '-5rem', right: '-5rem'}} />
        
        <div style={{...styles.card, maxWidth: '28rem', width: '100%', position: 'relative', zIndex: 10}}>
          <h2 style={{fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center', color: '#1f2937'}}>
            Welcome Back
          </h2>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
                placeholder="demo@user.com"
              />
              {errors.email && <p style={styles.error}>{errors.email}</p>}
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
                placeholder="••••••"
              />
              {errors.password && <p style={styles.error}>{errors.password}</p>}
            </div>
            <button
              type="submit"
              style={{...styles.buttonPrimary, width: '100%', marginTop: '0.5rem'}}
              onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
            >
              Login
            </button>
          </form>
          <p style={{textAlign: 'center', marginTop: '1rem', color: '#6b7280'}}>
            Don't have an account?{' '}
            <a href="#/signup" style={{color: '#2563eb', textDecoration: 'none'}}>
              Sign up
            </a>
          </p>
          <div style={{marginTop: '1.5rem', padding: '1rem', backgroundColor: '#dbeafe', borderRadius: '0.5rem'}}>
            <p style={{fontSize: '0.875rem', color: '#374151', fontWeight: '600', margin: '0 0 0.5rem 0'}}>
              Demo Credentials:
            </p>
            <p style={{fontSize: '0.875rem', color: '#6b7280', margin: '0'}}>Email: demo@user.com</p>
            <p style={{fontSize: '0.875rem', color: '#6b7280', margin: '0'}}>Password: 123456</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// Signup Page
const Signup = () => {
  const { signup, user } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (user) window.location.hash = '/dashboard';
  }, [user]);

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Invalid email format';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate() && signup(email, password, confirmPassword)) {
      window.location.hash = '/dashboard';
    }
  };

  return (
    <div style={styles.page}>
      <Navbar />
      <div style={{flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 1rem', position: 'relative', overflow: 'hidden'}}>
        <div style={{...styles.circle, width: '24rem', height: '24rem', backgroundColor: '#bbf7d0', top: '-10rem', right: '-10rem'}} />
        <div style={{...styles.circle, width: '16rem', height: '16rem', backgroundColor: '#fef3c7', bottom: '-5rem', left: '-5rem'}} />
        
        <div style={{...styles.card, maxWidth: '28rem', width: '100%', position: 'relative', zIndex: 10}}>
          <h2 style={{fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center', color: '#1f2937'}}>
            Create Account
          </h2>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
                placeholder="you@example.com"
              />
              {errors.email && <p style={styles.error}>{errors.email}</p>}
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
                placeholder="••••••"
              />
              {errors.password && <p style={styles.error}>{errors.password}</p>}
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={styles.input}
                placeholder="••••••"
              />
              {errors.confirmPassword && <p style={styles.error}>{errors.confirmPassword}</p>}
            </div>
            <button
              type="submit"
              style={{...styles.buttonPrimary, width: '100%', marginTop: '0.5rem'}}
              onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
            >
              Sign Up
            </button>
          </form>
          <p style={{textAlign: 'center', marginTop: '1rem', color: '#6b7280'}}>
            Already have an account?{' '}
            <a href="#/login" style={{color: '#2563eb', textDecoration: 'none'}}>
              Login
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// Dashboard Page
const Dashboard = () => {
  const { user } = useAuth();
  const { tickets } = useTickets();

  useEffect(() => {
    if (!user) window.location.hash = '/login';
  }, [user]);

  const totalTickets = tickets.length;
  const openTickets = tickets.filter(t => t.status === 'open').length;
  const inProgressTickets = tickets.filter(t => t.status === 'in_progress').length;
  const closedTickets = tickets.filter(t => t.status === 'closed').length;

  return (
    <div style={styles.page}>
      <Navbar />
      <div style={{flexGrow: 1}}>
        <div style={{...styles.container, padding: '3rem 1rem'}}>
          <h1 style={{fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '2rem', color: '#1f2937'}}>
            Dashboard
          </h1>
          
          <div style={styles.grid3}>
            <div style={styles.card}>
              <h3 style={{color: '#6b7280', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem'}}>
                Total Tickets
              </h3>
              <p style={{fontSize: '2.25rem', fontWeight: 'bold', color: '#2563eb', margin: 0}}>
                {totalTickets}
              </p>
            </div>
            <div style={styles.card}>
              <h3 style={{color: '#6b7280', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem'}}>
                Open Tickets
              </h3>
              <p style={{fontSize: '2.25rem', fontWeight: 'bold', color: '#10b981', margin: 0}}>
                {openTickets}
              </p>
            </div>
            <div style={styles.card}>
              <h3 style={{color: '#6b7280', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem'}}>
                In Progress
              </h3>
              <p style={{fontSize: '2.25rem', fontWeight: 'bold', color: '#f59e0b', margin: 0}}>
                {inProgressTickets}
              </p>
            </div>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '1.5rem'}}>
            <div style={styles.card}>
              <h3 style={{color: '#6b7280', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem'}}>
                Resolved Tickets
              </h3>
              <p style={{fontSize: '2.25rem', fontWeight: 'bold', color: '#6b7280', margin: 0}}>
                {closedTickets}
              </p>
            </div>
            <div style={{background: 'linear-gradient(to bottom right, #3b82f6, #9333ea)', ...styles.card, color: '#ffffff'}}>
              <h3 style={{fontSize: '0.875rem', fontWeight: '600', marginBottom: '1rem'}}>Quick Actions</h3>
              <a
                href="#/tickets"
                style={{display: 'inline-block', backgroundColor: '#ffffff', color: '#2563eb', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: '600'}}
                onMouseOver={(e) => e.target.style.backgroundColor = '#f3f4f6'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#ffffff'}
              >
                Manage Tickets
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// Ticket Management Page
const Tickets = () => {
  const { user } = useAuth();
  const { tickets, addTicket, updateTicket, deleteTicket } = useTickets();
  const [showForm, setShowForm] = useState(false);
  const [editingTicket, setEditingTicket] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    status: 'open',
    description: '',
    priority: 'medium'
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!user) window.location.hash = '/login';
  }, [user]);

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!['open', 'in_progress', 'closed'].includes(formData.status)) {
      newErrors.status = 'Invalid status';
    }
    if (formData.description.length > 500) {
      newErrors.description = 'Description must be less than 500 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (editingTicket) {
        updateTicket(editingTicket.id, formData);
        setEditingTicket(null);
      } else {
        addTicket(formData);
      }
      setFormData({ title: '', status: 'open', description: '', priority: 'medium' });
      setShowForm(false);
      setErrors({});
    }
  };

  const handleEdit = (ticket) => {
    setEditingTicket(ticket);
    setFormData({
      title: ticket.title,
      status: ticket.status,
      description: ticket.description || '',
      priority: ticket.priority || 'medium'
    });
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this ticket?')) {
      deleteTicket(id);
    }
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'open': return styles.statusOpen;
      case 'in_progress': return styles.statusInProgress;
      case 'closed': return styles.statusClosed;
      default: return styles.statusClosed;
    }
  };

  return (
    <div style={styles.page}>
      <Navbar />
      <div style={{flexGrow: 1}}>
        <div style={{...styles.container, padding: '3rem 1rem'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem'}}>
            <h1 style={{fontSize: '2.25rem', fontWeight: 'bold', color: '#1f2937', margin: 0}}>
              Ticket Management
            </h1>
            <button
              onClick={() => {
                setShowForm(!showForm);
                setEditingTicket(null);
                setFormData({ title: '', status: 'open', description: '', priority: 'medium' });
                setErrors({});
              }}
              style={styles.buttonPrimary}
              onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
            >
              {showForm ? 'Cancel' : 'Create Ticket'}
            </button>
          </div>

          {/* Form */}
          {showForm && (
            <div style={{...styles.card, marginBottom: '2rem'}}>
              <h2 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem'}}>
                {editingTicket ? 'Edit Ticket' : 'Create New Ticket'}
              </h2>
              <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>
                    Title <span style={{color: '#ef4444'}}>*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    style={styles.input}
                    placeholder="Enter ticket title"
                  />
                  {errors.title && <p style={styles.error}>{errors.title}</p>}
                </div>

                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem'}}>
                  <div>
                    <label style={styles.label}>
                      Status <span style={{color: '#ef4444'}}>*</span>
                    </label>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                      style={styles.select}
                    >
                      <option value="open">Open</option>
                      <option value="in_progress">In Progress</option>
                      <option value="closed">Closed</option>
                    </select>
                    {errors.status && <p style={styles.error}>{errors.status}</p>}
                  </div>

                  <div>
                    <label style={styles.label}>Priority</label>
                    <select
                      value={formData.priority}
                      onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                      style={styles.select}
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    style={styles.textarea}
                    rows="4"
                    placeholder="Enter ticket description (max 500 characters)"
                    maxLength="500"
                  />
                  <p style={{color: '#6b7280', fontSize: '0.875rem', marginTop: '0.25rem'}}>
                    {formData.description.length}/500 characters
                  </p>
                  {errors.description && <p style={styles.error}>{errors.description}</p>}
                </div>

                <button
                  type="submit"
                  style={{...styles.buttonPrimary, width: '100%'}}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
                >
                  {editingTicket ? 'Update Ticket' : 'Create Ticket'}
                </button>
              </form>
            </div>
          )}

          {/* Tickets List */}
          <div style={styles.grid3}>
            {tickets.length === 0 ? (
              <div style={{gridColumn: '1 / -1', textAlign: 'center', padding: '3rem 0'}}>
                <p style={{color: '#6b7280', fontSize: '1.25rem'}}>
                  No tickets yet. Create your first ticket!
                </p>
              </div>
            ) : (
              tickets.map((ticket) => (
                <div 
                  key={ticket.id} 
                  style={styles.ticketCard}
                  onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.1)'}
                  onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)'}
                >
                  <div style={styles.ticketHeader}>
                    <h3 style={styles.ticketTitle}>{ticket.title}</h3>
                    <span style={getStatusStyle(ticket.status)}>
                      {ticket.status.replace('_', ' ')}
                    </span>
                  </div>
                  
                  {ticket.description && (
                    <p style={{color: '#6b7280', marginBottom: '0.75rem', fontSize: '0.875rem'}}>
                      {ticket.description}
                    </p>
                  )}
                  
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem'}}>
                    <span style={{fontSize: '0.75rem', color: '#9ca3af'}}>
                      Priority: <span style={{fontWeight: '600', textTransform: 'capitalize'}}>{ticket.priority || 'medium'}</span>
                    </span>
                  </div>
                  
                  <div style={styles.ticketButtons}>
                    <button
                      onClick={() => handleEdit(ticket)}
                      style={styles.buttonEdit}
                      onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'}
                      onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(ticket.id)}
                      style={styles.buttonDanger}
                      onMouseOver={(e) => e.target.style.backgroundColor = '#dc2626'}
                      onMouseOut={(e) => e.target.style.backgroundColor = '#ef4444'}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// ==================== ROUTER ====================
const Router = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');
  const { loading } = useAuth();

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || '/');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (loading) {
    return (
      <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{fontSize: '1.5rem', color: '#6b7280'}}>Loading...</div>
      </div>
    );
  }

  switch (currentPath) {
    case '/':
      return <Landing />;
    case '/login':
      return <Login />;
    case '/signup':
      return <Signup />;
    case '/dashboard':
      return <Dashboard />;
    case '/tickets':
      return <Tickets />;
    default:
      return <Landing />;
  }
};

// ==================== APP ====================
const App = () => {
  return (
    <ToastProvider>
      <AuthProvider>
        <TicketProvider>
          <Router />
        </TicketProvider>
      </AuthProvider>
    </ToastProvider>
  );
};

export default App;