import { useState } from 'react';
import { BiSolidHide } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    password: '',
    remember: false,
  });

  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    const newErrors: any = {};

    if (!form.username) {
      newErrors.username = 'Email or Mobile is required';
    }
    if (!form.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    // fake login
    setTimeout(() => {
      console.log('Login data:', form);
      setLoading(false);
      navigate('/');
    }, 1000);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ maxWidth: 390, width: '100%' }}>
        <h4 className="text-center mb-3">Sign In</h4>
        <p className="text-center text-muted small mb-4">
          Fill the required details to sign in
        </p>

        <form onSubmit={handleSubmit} noValidate>
          {/* USERNAME */}
          <div className="mb-3">
            <label className="form-label">Email / Mobile</label>
            <input
              className={`form-control ${
                errors.username ? 'is-invalid' : ''
              }`}
              name="username"
              placeholder="Enter email or mobile number"
              value={form.username}
              onChange={handleChange}
            />
            {errors.username && (
              <div className="invalid-feedback">{errors.username}</div>
            )}
          </div>

          {/* PASSWORD */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <div className="input-group">
              <input
                className={`form-control ${
                  errors.password ? 'is-invalid' : ''
                }`}
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password"
                value={form.password}
                onChange={handleChange}
              />
              {/* <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowPassword(!showPassword)}
              >
                <BiSolidHide />
              </button> */}
            </div>
            {errors.password && (
              <div className="text-danger small mt-1">
                {errors.password}
              </div>
            )}
          </div>

          {/* REMEMBER */}
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="remember"
              checked={form.remember}
              onChange={handleChange}
            />
            <label className="form-check-label">Remember me</label>
          </div>

          <button
            type="submit"
            className="btn btn-warning w-100"
            disabled={loading}
          >
            {loading ? 'Please wait...' : 'Sign In'}
          </button>

          <div className="text-center mt-3">
            Need an account?{' '}
            <Link to="/sign-up">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export { Login };
