export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center">
        {/* Círculo animado rosa */}
        <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
        {/* Texto rosa */}
        <p className="mt-4 text-pink-500 text-lg font-medium">Carregando...</p>
      </div>
    </div>
  );
}

