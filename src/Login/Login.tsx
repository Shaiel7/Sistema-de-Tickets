import Image from "next/image";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative z-10 w-full max-w-md p-8 bg-white rounded-xl shadow-2xl">
        <div className="flex flex-col items-center mb-6">
          <Image 
            src="/logo.png" 
            alt="Escudo" 
            width={120} 
            height={120} 
            className="mb-4"
          />
          <h1 className="text-3xl font-extrabold text-red-700 text-center">
            Sistema de Trámite
          </h1>
        </div>
        <form className="space-y-6">
          <div>
            <label htmlFor="usuario" className="block text-sm font-medium text-gray-700">
              Usuario
            </label>
            <input 
              type="text" 
              id="usuario" 
              placeholder="Ingresa tu usuario" 
              className="w-full px-4 py-3 mt-1 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input 
              type="password" 
              id="password" 
              placeholder="Ingresa tu contraseña" 
              className="w-full px-4 py-3 mt-1 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <button 
            type="submit" 
            className="w-full px-6 py-3 text-lg font-semibold text-white transition duration-300 bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-400"
          >
            Ingresar
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Recuperar contraseña
          </a>
        </div>
      </div>
    </div>
  );
}
