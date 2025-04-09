import { useState, useCallback, memo } from "react";
import { FaGithub } from "react-icons/fa";
import ThemName from "./ThemName";

// Form state interface
interface LoginFormState {
  email: string;
  password: string;
}

// Form validation
const validateForm = (form: LoginFormState) => {
  const errors: Partial<LoginFormState> = {};

  if (!form.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = "Email is invalid";
  }

  if (!form.password) {
    errors.password = "Password is required";
  } else if (form.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  return errors;
};

function LoginForm() {
  const [form, setForm] = useState<LoginFormState>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<LoginFormState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));

      // Clear error when typing
      if (errors[name as keyof LoginFormState]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [errors]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      // Validate form
      const validationErrors = validateForm(form);
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length === 0) {
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
          console.log("Form submitted:", form);
          setIsSubmitting(false);
        }, 1000);
      }
    },
    [form]
  );

  return (
    <div className="h-full flex flex-col md:flex-row">
      {/* Left side with form */}
      <div className="w-full md:w-1/2 p-4 h-full flex flex-col">
        <ThemName />
        <div className="flex-grow w-full flex items-center justify-center">
          <div className="w-full sm:w-5/6 md:w-4/5 lg:w-4/6 flex flex-col items-center justify-center">
            <div className="mb-6 md:mb-8 text-center w-full">
              <h1 className="text-2xl md:text-3xl font-bold font-serif mb-2">
                Login to your account
              </h1>
              <p className="text-xs sm:text-sm">
                Enter your email below to login to your account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 w-full">
              <div className="form-control w-full">
                <label className="label pb-1">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  value={form.email}
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                  className={`input w-full shadow-xs ${
                    errors.email ? "input-error" : ""
                  }`}
                  placeholder="matsu@example.com"
                />
                {errors.email && (
                  <label className="label">
                    <span className="label-text-alt text-error">
                      {errors.email}
                    </span>
                  </label>
                )}
              </div>

              <div className="form-control w-full">
                <div className="flex justify-between items-center">
                  <label className="label pb-1">
                    <span className="label-text">Password</span>
                  </label>
                  <a href="#" className="text-xs sm:text-sm">
                    Forgot your password?
                  </a>
                </div>
                <input
                  type="password"
                  value={form.password}
                  name="password"
                  autoComplete="current-password"
                  onChange={handleChange}
                  className={`input w-full shadow-xs ${
                    errors.password ? "input-error" : ""
                  }`}
                  placeholder="•••"
                />
                {errors.password && (
                  <label className="label">
                    <span className="label-text-alt text-error">
                      {errors.password}
                    </span>
                  </label>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-block btn-primary shadow-xs mt-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="loading loading-spinner loading-xs"></span>
                ) : (
                  "Login"
                )}
              </button>

              <div className="divider text-xs sm:text-sm">Or continue with</div>

              <button
                type="button"
                className="btn btn-outline btn-block flex items-center gap-2 shadow-xs shadow-primary border-neutral"
              >
                <FaGithub />
                Login with GitHub
              </button>

              <p className="text-center text-xs sm:text-sm mt-6">
                Don&apos;t have an account?{" "}
                <a href="#" className="link ml-1">
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Right side with image */}
      <div className="w-full md:w-1/2 relative hidden md:block rounded-2xl overflow-hidden">
        <img
          src="./assets/house.png"
          alt="House"
          className="object-cover w-full h-full absolute inset-0"
          loading="eager"
        />
      </div>
    </div>
  );
}

// Memoize the component to prevent unnecessary re-renders
const MatsuLoginForm = memo(LoginForm);
export default MatsuLoginForm;
