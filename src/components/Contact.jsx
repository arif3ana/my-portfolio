import React from "react";
import Button from "./Button";
export default function Contact({ emailClick, waClick }) {
  return (
    <div className='contact container'>
      <h3>CONTACT</h3>
      <div className='contact-content'>
        <div className='article-contact'>
          <p className='title-contact'>Lets talk</p>
          <p>
            If you are interested in working with us, or if you have any
            questions about the project you would like to work on, please don't
            hesitate to to contact me.
          </p>
          <p>
            I'd love to learn more about about your project and provide a
            solution that fits your needs.
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
          <form className='form-message'>
            <div className='mb-2'>
              <input
                type='text'
                className='form-input'
                id='name'
                placeholder='Name'
              />
            </div>
            <div className='mb-2'>
              <input
                type='email'
                className='form-input'
                id='email'
                placeholder='Email'
              />
            </div>
            <div>
              <textarea
                type='text'
                className='form-input area'
                placeholder='Leave a message here'
                id='message'
                rows='3'></textarea>
            </div>
            <div className='form-botton'>
              <Button
                type={"submit"}
                className={"btn-send"}
                content={<i className='bi bi-send-fill' />}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
