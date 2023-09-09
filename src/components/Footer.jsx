import React from "react";
import SosialIcons from "./SosialIcons";
export default function Footer() {
  return (
    <footer>
      <hr />
      <div className='content-footer'>
        <p className='text-footer'>
          Copyright © {new Date().getFullYear()} Arif triana
        </p>
        <SosialIcons />
      </div>
    </footer>
  );
}
