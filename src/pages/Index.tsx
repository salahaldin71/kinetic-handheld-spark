import { useEffect } from "react";
import TechSection from "@/components/TechSection";

const Index = () => {
  useEffect(() => {
    const sendHeight = () => {
      const height = document.documentElement.scrollHeight;
      window.parent.postMessage({ type: 'resize', height }, '*');
    };

    sendHeight();
    window.addEventListener('resize', sendHeight);
    
    // Send height after animations complete
    const timeout = setTimeout(sendHeight, 2000);

    return () => {
      window.removeEventListener('resize', sendHeight);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <main className="bg-background">
      <TechSection />
    </main>
  );
};

export default Index;
