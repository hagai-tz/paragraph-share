//Added build packs
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

//Components
import Nav from './components/Nav';
import ArticleTitle from './components/ArticleTitle';
import VocabularyBox from './components/VocabularyBox';
import ArticleContent from './components/ArticleContent';
import ArticleLink from './components/ArticleLink'
import ArticleAuthor from './components/ArticleAuthor'
import GetURL from './components/GetURL'
import InputURL from './components/InputURL'

import { observer, inject } from 'mobx-react'
import ReactGA from "react-ga";
import {PageView, initGA, Event} from './components/Tracking';


@inject( "processedData" )

@observer
class App extends Component {

  componentDidMount() {
    initGA('UA-159876106-1')
    PageView()
    
    this.props.processedData.translationSlider(60)
    console.log("I'm ready to load",this.props.processedData.isArticleReadyToLoad)
  }
  
  
  render ()
  {
    let isArticleReadyToLoad = this.props.processedData.isArticleReadyToLoad
    if (!isArticleReadyToLoad ) {
      return (
        <Router>
          <div id='user-interface'>
            <Nav/>
            <InputURL />
          </div>

        </Router>
      )
    } else {

      return (
        <Router>
    
            <div id='user-interface'>
              <Nav/>
              <ArticleLink />
              <ArticleTitle />
              <ArticleAuthor />
              <ArticleContent />
              <Route path='/url' exact render={({match}) => <GetURL match={match} /> } />
            </div>
            
        </Router>
      );
    }
  }
}

export default App;