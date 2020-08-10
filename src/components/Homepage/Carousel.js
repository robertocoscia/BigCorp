import React, { Fragment } from 'react';
import carouselStyles from './carousel.module.scss';

const CarouselPage = (props) => {
  return (
    <Fragment>
      <div style={{ marginTop: '50px' }} className={carouselStyles.container}>
        <div className={carouselStyles.containerImages}>
          <div className={carouselStyles.arrow}>
            <a href='/'>{'<'}</a>
          </div>

          <div className={carouselStyles.imageDiv}>
            <img
              className={carouselStyles.images}
              height='190px auto'
              width='280px auto'
              src='images/coffeephone.jpg'
              alt='Big Corp Studio'
            />
          </div>
          <div className={carouselStyles.imageDiv}>
            <img
              className={carouselStyles.images}
              height='190px auto'
              width='280px auto'
              src='images/phoneImg.jpg'
              alt='Big Corp Studio'
            />
          </div>
          <div className={carouselStyles.imageDiv}>
            <img
              className={carouselStyles.images}
              height='190px auto'
              width='280px auto'
              src='images/studio.jpg'
              alt='Big Corp Studio'
            />
          </div>
          <div className={carouselStyles.imageDiv}>
            <img
              className={carouselStyles.images}
              height='190px auto'
              width='280px auto'
              src='images/studio2.jpg'
              alt='Big Corp Studio'
            />
          </div>

          <div className={carouselStyles.arrow}>
            <a href='/'>{'>'}</a>
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <span className={carouselStyles.dot}></span>
          <span className={carouselStyles.dot}></span>
          <span className={carouselStyles.dot}></span>
        </div>
      </div>
    </Fragment>
  );
};

export default CarouselPage;
