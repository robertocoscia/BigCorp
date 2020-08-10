import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Homepage/Header';
import CarouselPage from './components/Homepage/Carousel';
import Accordion from './components/Homepage/Accordion';
import BlurB from './components/Homepage/BlurB';
import Footer from './components/Homepage/Footer';
import NewsFetcher from './components/News/NewsFetcher';
import Contact from './components/Contact/Contact';
import Modal from './components/Login/Modal';
import useModal from './components/Login/useModal';

function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <CarouselPage />
        <Accordion
          title='Accordion 1'
          content='<p>Eleifend mi in nulla posuere sollicitudin aliquam. Enim tortor at auctor urna nunc id cursus metus. Nibh tellus molestie nunc non blandit massa enim nec dui. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Porttitor massa id neque aliquam. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Risus sed vulputate odio ut enim blandit volutpat maecenas. Libero justo laoreet sit amet cursus sit amet dictum sit. Sed odio morbi quis commodo odio aenean sed. .</p> '
        />
        <Accordion
          title='Accordion 2'
          content='<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed. Feugiat sed lectus vestibulum mattis ullamcorper. Mattis aliquam faucibus purus in massa tempor nec feugiat. Mi bibendum neque egestas congue quisque egestas. Pellentesque adipiscing commodo elit at imperdiet dui accumsan.</p>'
        />
        <Accordion
          title='Accordion 3'
          content='<p>Eleifend mi in nulla posuere sollicitudin aliquam. Enim tortor at auctor urna nunc id cursus metus. Nibh tellus molestie nunc non blandit massa enim nec dui. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Porttitor massa id neque aliquam. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia.</p>'
        />
        <BlurB />
        <section>
          <Switch>
            <Route exact path='/news' component={NewsFetcher} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/login' component={Modal} />
          </Switch>
        </section>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
