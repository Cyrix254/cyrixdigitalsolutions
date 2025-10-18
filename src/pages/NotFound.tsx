import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary to-accent pt-20">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <Search className="w-24 h-24 mx-auto text-white/50" />
          </div>
          <h1 className="mb-4 text-8xl font-display font-bold text-white">404</h1>
          <p className="mb-8 text-2xl text-white/90">Oops! Page not found</p>
          <p className="mb-8 text-lg text-white/80 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-all hover:scale-105 font-semibold text-lg shadow-xl"
          >
            <Home className="w-5 h-5" />
            <span>Return to Home</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
