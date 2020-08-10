import React from 'react';
import footerStyles from './footer.module.scss';

const Footer = (props) => {
  return (
    <div className={footerStyles.container}>
      <img
        className={footerStyles.image}
        src='./images/logo.png'
        alt='logo Big Corp'
      />
      <h1 className={footerStyles.title}>Big Corp</h1>
    </div>
  );
};

export default Footer;
