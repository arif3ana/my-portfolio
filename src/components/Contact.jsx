import React from "react";
export default function Contact({ emailClick, waClick }) {
  return (
    <div className='contact'>
      <h3>CONTACT</h3>
      <div className='contact-content'>
        <div className='article-contact'>
          <h5 className='title-contact'>Lets talk</h5>
          <p>
            If you are interested in working with us, or if you have any
            questions about the project you would like to work on, please don't
            hesitate to to contact me.
          </p>
          <p>
            I'd love to learn more about about your project and provide a
            solution that fits your needs.
            {/* Thank you for visiting my portfolio, I look forward to working with
            you in creating amazing web solutions! Feel free to contact me, I'm
            here to help. */}
          </p>
          <div className='icon-contact'>
            <div className='contact-tools'>
              <a
                href='mailto:arif.3ana@gmail.com'
                target='_blank'
                onClick={emailClick}>
                <i className='bi bi-envelope-at-fill' />
              </a>
              <p>
                Email <br /> arif.3ana@gmail.com
              </p>
            </div>
            <div className='contact-tools'>
              <a
                href='https://api.whatsapp.com/send?phone=6285703020296'
                target='_blank'
                onClick={waClick}>
                <i className='bi bi-whatsapp' />
              </a>
              <p>
                Whatsapp <br /> arif.triana 085703020296
              </p>
            </div>
          </div>
        </div>
        <div className='main-contact'>
          <form action=''>
            <div class='form-floating mb-3'>
              <input
                type='name'
                class='form-control'
                id='floatingInput'
                placeholder='name@example.com'
              />
              <label for='name'>Name</label>
            </div>
            <div class='form-floating mb-3'>
              <input
                type='email'
                class='form-control'
                id='floatingInput'
                placeholder='name@example.com'
                value='test@example.com'
              />
              <label for='email'>Email</label>
            </div>
            <div class='form-floating'>
              <textarea
                class='form-control'
                placeholder='Leave a message here'
                id='message'
                rows='3'></textarea>
              <label for='message'>Your message</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
