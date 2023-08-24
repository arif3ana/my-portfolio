import React from "react";
export default function Contact({ emailClick, waClick }) {
  return (
    <div className='contact'>
      <h3>Contact Me</h3>
      <div className='contact-content'>
        <div className='article-contact'>
          <h5 className='title-page'>Lets talk</h5>
          <p>
            If you are interested in working with us, or if you have any
            questions about the project you would like to work on, please don't
            hesitate to to contact me. I'd love to learn more about about your
            project and provide a solution that fits your needs.
          </p>
          <p>
            Thank you for visiting my portfolio, I look forward to working with
            you in creating amazing web solutions! Feel free to contact me, I'm
            here to help.
          </p>
        </div>
        <div className='main-contact'>
          <a
            href='mailto:arif.3ana@gmail.com'
            target='_blank'
            onClick={emailClick}>
            <div className='contact-tools'>
              <i className='bi bi-envelope-at-fill' />
              <div>
                <p>
                  Email <br /> arif.3ana@gmail.com
                </p>
              </div>
            </div>
          </a>
          <a
            href='https://api.whatsapp.com/send?phone=6285703020296'
            target='_blank'
            onClick={waClick}>
            <div className='contact-tools'>
              <i className='bi bi-whatsapp' />
              <div>
                <p>
                  Whatsapp <br /> arif.triana 085703020296
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
