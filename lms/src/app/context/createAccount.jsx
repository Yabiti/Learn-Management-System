import { useAuth } from '../context/AuthContext'; // adjust the path as needed

export default function Home() {
  const { setAccountCreated } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setAccountCreated(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* your form here */}
    </form>
  );
}
