import React from "react";
export default function Footer() {
  return (
    <footer>
      <hr />
      <div className='content-footer'>
        <p className='text-footer'>
          Copyright © {new Date().getFullYear()} Arif triana
        </p>
        <div className='icons-footer'>
          <a href='https://www.instagram.com/arif.3ana/' target='_blank'>
            <i className='bi bi-instagram' />
          </a>
          <a
            href='https://linkedin.com/in/arif-triana-48bb74254'
            target='_blank'>
            <i className='bi bi-linkedin' />
          </a>
          <a href='https://github.com/arif3ana' target='_blank'>
            <i className='bi bi-github' />
          </a>
        </div>
      </div>
    </footer>
  );
}
