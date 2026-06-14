import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <main className="p-8 min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
        <p>This is the student dashboard page.</p>
      </main>

      <Footer />
    </>
  );
}