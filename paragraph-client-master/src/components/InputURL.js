import React, { Component } from 'react';
import ArticleRawData from '../stores/ArticleRawData';

import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';

import ReactGA from "react-ga";
import { Event } from '../components/Tracking';


import { Input } from 'antd';
import 'antd/dist/antd.css';
import './CSS/ArticleAuthor.css';


@inject('processedData')
@observer
class InputURL extends Component {
    
    inputUrlHandler = (e) => {
        Event('Input URL', 'User clicked on the search button on the homepage', e, null)
        console.log(`The event from the click: ${e}`)
        this.props.processedData.inputUrl = e ;
        this.props.processedData.getInputUrlFromClient(e)    
        this.props.processedData.isArticleReadyToLoadHandler() ;
    }

  render() {
    const { Search } = Input;


    return (

      <div id='article-author-box'>
          <div id='article-title'>
              <h1>Please Add an Article Link</h1>
          </div>
        <Search placeholder="Input article link" onSearch={this.inputUrlHandler} enterButton />
        {/* <Search placeholder="Input article link" onSearch={value => console.log(value)} enterButton /> */}
        <br />

      </div>

    );
  }
}

export default InputURL;
