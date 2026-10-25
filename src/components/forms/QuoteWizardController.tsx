"use client";

import { useState, useEffect } from "react";
import { QuoteWizard } from "@/components/forms/QuoteWizard";

export function QuoteWizardController() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#quote") {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    
    // Check on mount
    checkHash();
    
    // Listen for changes
    window.addEventListener("hashchange", checkHash);
    
    // Listen for custom event just in case
    const handleCustomEvent = () => setIsOpen(true);
    window.addEventListener("open-quote", handleCustomEvent);
    
    return () => {
      window.removeEventListener("hashchange", checkHash);
      window.removeEventListener("open-quote", handleCustomEvent);
    };
  }, []);

  const onClose = () => {
    setIsOpen(false);
    // Remove the hash without triggering a jump
    window.history.pushState(
      null, 
      "", 
      window.location.pathname + window.location.search
    );
  };

  return <QuoteWizard isOpen={isOpen} onClose={onClose} />;
}
