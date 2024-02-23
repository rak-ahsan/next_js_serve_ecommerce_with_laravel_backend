import { Facebook, Instagram, PhoneCall, Twitter, Youtube } from "lucide-react";
import React from "react";

export const TopNav = () => {
  return (
    <div className="container">
      <div className="text-base font-medium flex justify-between">
        <div className="number">
          <div className="flex gap-3">
            <PhoneCall />
            <p>01775566772</p>
          </div>
        </div>
        <div className="social  flex gap-4">
          <Facebook />
          <Twitter />
          <Instagram />
          <Youtube />
        </div>
      </div>
    </div>
  );
};
