import styles from "@/styles/index.module.css";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen mb-auto">
      {/* Mover el navbar fuera del contenedor principal y alinear a la derecha */}
      <Navigation className="ml-auto" />

      <div className="inline-block bg-gradient-to-r from-yellow-300 to-pink-400 to-orange-500 shadow-xl rounded-lg p-8 mt-6">
        <h1 className="text-4xl italic text-blue-900 relative z-10">
          Perez Lopez Angel Yahir
        </h1>
        {/* Agregar la imagen debajo del título */}
        <img
  src="https://raulperez.tieneblog.net/wp-content/uploads/2015/09/tux.jpg"
  alt="Ola"
  className="mt-4 mx-auto rounded-lg"
/>


        {/* Agregar texto debajo de la imagen */}
        <p className="text-lg text-gray-800 mt-4">Les doy la bienvenida por parte del grupo TI03</p>
      </div>
      {/* Agregar el pie de página con margen automático en la parte superior */}
      <footer className="py-4 bg-gray-200 text-center w-full mt-auto">
        <p className="text-sm text-gray-600">
          © 2024 Tu Empresa. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
}
