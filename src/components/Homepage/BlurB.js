import React from 'react';
import blurbStyles from './blurb.module.scss';

const BlurB = (props) => {
  return (
    <div className={blurbStyles.component}>
      <div className={blurbStyles.container}>
        <div className={blurbStyles.imageBlock}>
          <img src='images/corporate.jpg' alt='BlurB component' />
        </div>
        <div className={blurbStyles.textBox}>
          <h1>Title</h1>
          <p>
            ictum sit amet justo donec enim diam vulputate. Id neque aliquam
            vestibulum morbi blandit. Erat imperdiet sed euismod nisi porta
            lorem. Turpis massa tincidunt dui ut ornare. Phasellus egestas
            tellus rutrum tellus pellentesque eu tincidunt tortor. Ipsum dolor
            sit amet consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlurB;
