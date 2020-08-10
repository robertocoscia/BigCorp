import React, { useState, useRef } from 'react';
import accordionStyles from './accordion.module.scss';
import Chevron from './Chevron';

const Accordion = (props) => {
  //This will add the active to the class we will click
  const [setActive, setActiveState] = useState('');

  //This state will allow to set the appropriate height to the accordion based on the amount of text present
  const [setHeight, setHeightState] = useState('0px');

  const content = useRef(null);

  //on hover will set active to the class
  function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '');
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    );
  }

  return (
    <div className={accordionStyles.accordion__section}>
      <button
        className={`${accordionStyles.accordion} ${setActive}`}
        onClick={toggleAccordion}
      >
        <p className={accordionStyles.accordion__title}>{props.title}</p>
        <Chevron className={accordionStyles.chevron} width={10} fill={'#777'} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className={accordionStyles.accordion__content}
      >
        <div
          className={accordionStyles.accordion__text}
          dangerouslySetInnerHTML={{ __html: props.content }}
        ></div>
      </div>
    </div>
  );
};

export default Accordion;
