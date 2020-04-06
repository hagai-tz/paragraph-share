import React, { Component } from 'react';
import './CSS/ArticleTitle.css';

import { observer, inject } from 'mobx-react';

@inject('processedData')
@observer
class ArticleTitle extends Component {
  render() {
    console.log(this.props);
    return (
      <div id='article-title'>
        <h1>{this.props.processedData.rawData.title}</h1>
      </div>
    );
  }
}

export default ArticleTitle;
