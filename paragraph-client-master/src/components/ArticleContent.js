import React, { Component } from 'react';
import './CSS/ArticleContent.css';

import { observer, action, inject } from 'mobx-react';

@inject('processedData')
@observer
class ArticleContent extends Component {
  render() {
    return (
      <div id='article-content'>
        {this.props.processedData.rawData.content.map((word) => {
          return (
            <span className='word-ul'>
              <span className='word'> {word.word} </span>
              <span
                className='translatedWord'
                difficultyLevel={word.difficultyLevel}
                style={
                  100 - this.props.processedData.difficultyLevelValue <
                  word.difficultyLevel
                    ? null
                    : { visibility: 'hidden', transition: 'visibility 1s' }
                }>
                {' '}
                {word.translatedWord}
              </span>
            </span>
          );
        })}
      </div>
    );
  }
}

export default ArticleContent;
