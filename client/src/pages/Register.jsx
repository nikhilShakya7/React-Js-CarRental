import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const { register } = useAuth();
  const nav = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await register(form.name, form.email, form.password);
      nav("/");
    } catch (e) {
      alert(e?.response?.data?.message || "Registration failed");
    }
  };

  return (
    <form onSubmit={submit} className="max-w-sm mx-auto p-6 space-y-3">
      <h1 className="text-2xl font-bold">Create account</h1>
      <input
        className="w-full border p-2 rounded"
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <input
        className="w-full border p-2 rounded"
        type="email"
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />
      <input
        className="w-full border p-2 rounded"
        type="password"
        placeholder="Password (min 6)"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        required
      />
      <button className="w-full bg-blue-600 text-white p-2 rounded">
        Register
      </button>
      <p className="text-sm">
        Have an account?{" "}
        <Link to="/login" className="text-blue-600">
          Sign in
        </Link>
      </p>
    </form>
  );
}
