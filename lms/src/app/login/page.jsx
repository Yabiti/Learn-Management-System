'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) router.push('/'); // ✅ redirect to home after login
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify({ email }));
    router.push('/'); // ✅ send to homepage
  };

  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.loginHeading}>🔐 Login to EduCore</h1>

      <form onSubmit={handleSubmit} className={styles.loginBox}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          className={styles.loginInput}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit" className={styles.loginSubmit}>
          Login
        </button>
      </form>
    </div>
  );
}
