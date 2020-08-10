import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import contactStyles from './contact.module.scss';
//did  not manage to make functional for time constraint. Only built a simple frontend cont
const Contact = (props) => {
  return (
    <Fragment>
      <div className={contactStyles.main}>
        <div className={contactStyles.container}>
          <h2>Contact Form</h2>
          <br />
          <br />
          <div className={contactStyles.containerForm}>
            <form submit='' className={contactStyles.form}>
              <label name='' id='' className={contactStyles.labelName}>
                First name:
              </label>
              <br />
              <input
                style={{ marginBottom: '5px', width: '250px' }}
                type='text'
                id='firstname'
                name='firstname'
                value=''
              />
              <br />
              <label for='lastname'>Last name:</label>
              <br />
              <input
                style={{ marginBottom: '5px', width: '250px' }}
                type='text'
                id='lastname'
                name='lastname'
                value=''
              />
              <br />
              <label for='lastname'>Message:</label>
              <br />
              <textarea
                style={{ marginBottom: '5px', width: '250px' }}
                placeholder='Content here...'
              ></textarea>
              <br />
              <input
                style={{ marginBottom: '5px', width: '100px', height: '30px' }}
                type='submit'
                value='Submit'
              />
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
