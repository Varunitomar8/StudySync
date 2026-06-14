import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="p-8 min-h-screen">
        <h1 className="text-4xl font-bold mb-4">About</h1>
        <p>
          StudySync helps students organize their studies, tasks and deadlines.
        </p>
      </main>

      <Footer />
    </>
  );
}