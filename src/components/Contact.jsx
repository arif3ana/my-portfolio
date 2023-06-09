import React from "react";
export default function Contact() {
  return (
    <div className='contact'>
      <h3>Contact Me</h3>
      <div className='contact-button'>
        <span>Start a conversation</span>
        <a href='mailto:arif.3ana@gmail.com'>
          <i className='bi bi-envelope-at-fill'></i>
        </a>
        <a href='https://wa.me/message/NIZBDOTB7RHP1'>
          <i className='bi bi-whatsapp'></i>
        </a>
      </div>
    </div>
  );
}
