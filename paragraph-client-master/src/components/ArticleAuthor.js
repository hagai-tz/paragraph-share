import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './CSS/ArticleAuthor.css';
import { observer, action, inject } from 'mobx-react';

@inject('processedData')
@observer
class ArticleAuthor extends Component {
  render() {
    return (
      <div id='article-author-box'>
        <div className='article-excerpt'>
          {' '}
          {this.props.processedData.rawData.excerpt}
        </div>

        <div id='box-wrapper'>
          <div
            className='article-author-line'
            style={
              this.props.processedData.rawData.author
                ? null
                : { display: 'none' }
            }>
            Article by: {this.props.processedData.rawData.author}
          </div>
          <div className='article-author-read-time'>
            {Date()} · {this.props.processedData.rawData.readingTime} minutes
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleAuthor;
