import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [showPassword] = useState(false);
  const [showConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const newErrors: any = {};

    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.password) newErrors.password = "Password is required";
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!form.acceptTerms) newErrors.acceptTerms = "You must accept terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    // fake API call
    setTimeout(() => {
      console.log("Signup data:", form);
      setLoading(false);
      navigate("/auth/login");
    }, 1000);
  };

  return (
    // <div className="container d-flex justify-content-center align-items-center md-mt-5" style={{marginTop:"10%"}}>
      <div className="container d-flex justify-content-center align-items-center mt-5 signup-mt vh-100">


      <div className="card p-3" style={{ maxWidth: 400, width: "100%" }}>
        <h4 className="text-center">Sign Up</h4>

        <form onSubmit={handleSubmit} noValidate>
          {/* NAME */}
          <div className="mb-1">
            <label className="form-label">Name</label>
            <input
              className="form-control"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && (
              <div className="text-danger small">{errors.name}</div>
            )}
          </div>

          {/* EMAIL */}
          <div className="mb-1">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="text-danger small">{errors.email}</div>
            )}
          </div>

          {/* PASSWORD */}
          <div className="mb-1">
            <label className="form-label">Password</label>
            <div className="input-group">
              <input
                className="form-control"
                name="password"
                type={showPassword ? "text" : "password"}
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
              <div className="text-danger small">{errors.password}</div>
            )}
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="mb-2">
            <label className="form-label">Confirm Password</label>
            <div className="input-group">
              <input
                className="form-control"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={form.confirmPassword}
                onChange={handleChange}
              />
              {/* <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <BiSolidHide />
              </button> */}
            </div>
            {errors.confirmPassword && (
              <div className="text-danger small">{errors.confirmPassword}</div>
            )}
          </div>

          {/* TERMS */}
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="acceptTerms"
              checked={form.acceptTerms}
              onChange={handleChange}
            />
            <label className="form-check-label">
              I accept Terms & Conditions
            </label>
            {errors.acceptTerms && (
              <div className="text-danger small">{errors.acceptTerms}</div>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-warning w-100"
            disabled={loading}
          >
            {loading ? "Please wait..." : "Sign Up"}
          </button>

          <div className="text-center mt-3">
            Already have an account? <Link to="/login">Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export { Signup };
