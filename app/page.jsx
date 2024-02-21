import styles from "@/styles/index.module.css";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <main>
     <Navigation/>
     <div className="flex items-center justify-center h-screen relative">
  <div className="inline-block bg-gradient-to-r from-yellow-300 to-pink-400 to-orange-500 shadow-xl rounded-lg p-8">
    <h1 className="text-4xl italic text-blue-900 relative z-10 mt-6">
            Perez Lopez Angel Yahir
          </h1>
        </div>
      </div>
    </main>
  );
}
