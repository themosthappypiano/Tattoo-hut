import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-center p-4">
      <div className="bg-card border border-white/10 p-12 max-w-lg w-full shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
        
        <AlertTriangle className="w-16 h-16 text-primary mx-auto mb-6" />
        
        <h1 className="text-6xl font-display font-bold text-white mb-2">404</h1>
        <h2 className="text-xl text-gray-300 uppercase tracking-widest mb-6">Page Not Found</h2>
        
        <p className="text-gray-500 mb-8 leading-relaxed">
          Looks like you've wandered too far from the studio. The page you're looking for doesn't exist or has been moved.
        </p>

        <Link href="/">
          <Button className="bg-white text-black hover:bg-gray-200 w-full py-6 font-display tracking-widest text-lg rounded-none">
            RETURN HOME
          </Button>
        </Link>
      </div>
    </div>
  );
}
