import React, { PureComponent } from 'react';
import './App.css';
import SearchForm from './searchForm';
import Page from './page';
import Footer from './footer';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="App">
        <div className="github">
        <a href="https://github.com/jonathanihm/roast-a-racist">
          <img width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149" className="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1" /></a>
     
        </div>
       <header className="header">
        <h1>Roast a Racist</h1>
        <h6>Version 0.0.1b</h6>
        <p className="explain">Are you sick and tired of having to explain to the 1000th Uncle Melvin that his angry rant is racist?  Have no fear!  Type in the argument and get a quick rebuttal to copy and paste with sources!</p>
      </header>
      <SearchForm />
      <Page />
      <Footer />
    </div>);
  }
}