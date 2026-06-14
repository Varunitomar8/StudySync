export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <h1 className="text-2xl font-bold">StudySync</h1>

      <ul className="flex gap-6">
        <li>Home</li>
        <li>About</li>
        <li>Dashboard</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}