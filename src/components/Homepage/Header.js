import React from 'react';
import headerStyles from './header.module.scss';
import { Link } from 'react-router-dom';
import '../Login/login.css';
import Modal from '../Login/Modal';
import useModal from '../Login/useModal';
/* Considering that the requirements focus more in the html semantics I will use buttons instead than <Link> from react-router-dom */

const Header = (props) => {
  const { isShowing, toggle } = useModal();
  return (
    <header>
      <nav className={headerStyles.container}>
        <div className={headerStyles.navbarLeft}>
          <div>
            <button>
              <Link className={headerStyles.buttonLink} to='/'>
                Home
              </Link>
            </button>
            <button>
              <Link className={headerStyles.buttonLink} to='/news'>
                News
              </Link>
            </button>
            <button>
              <Link className={headerStyles.buttonLink} to='/contact'>
                Contact
              </Link>
            </button>
          </div>
        </div>
        <div className={headerStyles.navbarRight}>
          <button>
            <Link
              onClick={toggle}
              className={headerStyles.buttonLink}
              to='/login'
            >
              Login
            </Link>
          </button>
          <Modal isShowing={isShowing} hide={toggle}>
            <h1>Login Form</h1>
            <form submit=''>
              <label name='' id=''>
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
              <br />
              <input
                style={{ marginBottom: '5px', width: '100px', height: '30px' }}
                type='submit'
                value='Submit'
              />
            </form>
          </Modal>
        </div>

        <br />
        <br />
        <div className={headerStyles.logoImage}>
          <img src='./images/logo.png' alt='logo Big Corp' />
          <h1 className={headerStyles.title}>Big Corp</h1>
        </div>
      </nav>
    </header>
  );
};

export default Header;
