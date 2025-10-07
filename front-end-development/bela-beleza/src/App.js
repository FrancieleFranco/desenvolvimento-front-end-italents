import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {return (
     <AuthProvider>
      <BrowserRouter>
        <Header />
        <main className="min-h-[calc(100vh-8rem)]"> {/* ajusta espaço entre header e footer */}
          <AppRoutes />
        </main>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );}

export default App;