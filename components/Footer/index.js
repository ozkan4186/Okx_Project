"use client"
// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        fontSize: "14px",
        lineHeight: "14px",
        height: "850px",
        padding: "67px 51px 47px 51px",
        backgroundColor: "#121212",
      }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Main Heading 1</h2>
            <ul className="list-disc list-inside">
              <li>Subheading 1</li>
              <li>Subheading 2</li>
              <li>Subheading 3</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Main Heading 2</h2>
            <ul className="list-disc list-inside">
              <li>Subheading 4</li>
              <li>Subheading 5</li>
              <li>Subheading 6</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Main Heading 3</h2>
            <ul className="list-disc list-inside">
              <li>Subheading 7</li>
              <li>Subheading 8</li>
              <li>Subheading 9</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
