import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const submit = async (event: FormEvent) => {
    event.preventDefault(); setBusy(true); setError(""); setMessage("");
    try { const result = await api<{ message: string }>("/auth/forgot-password", { method: "POST", body: JSON.stringify({ email }) }); setMessage(result.message); }
    catch (err: any) { setError(err.message || "Unable to process the request."); }
    finally { setBusy(false); }
  };
  return <main className="auth-page"><div className="auth-shell"><Link className="auth-back" to="/admin/login">← Back to sign in</Link><section className="auth-card"><img className="auth-logo" src="/etef-logo.jpg" alt="ETEF logo" /><span className="eyebrow">ACCOUNT RECOVERY</span><h1>Forgot your password?</h1><p>Enter your registered administrator email. If the account exists, we will send a secure reset link.</p><form onSubmit={submit}><label className="admin-field"><span>Registered email address</span><input type="email" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} required /></label>{error && <div className="auth-error">{error}</div>}{message && <div className="auth-success">{message}</div>}<button className="button button-dark auth-submit" disabled={busy}>{busy ? "Sending…" : "Send reset link →"}</button></form></section><p className="auth-foot">ETEF Digital Platform · Secure account recovery</p></div></main>;
}
