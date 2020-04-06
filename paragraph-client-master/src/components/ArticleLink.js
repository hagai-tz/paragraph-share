import React, { Component } from 'react';
import './CSS/ArticleLink.css'

import { observer, action, inject } from 'mobx-react'
import ArticleRawData from '../stores/ArticleRawData'

@inject("processedData")

@observer
class ArticleLink extends Component {
    render() {
        return (
            <h4 id='article-link-box'>{this.props.processedData.rawData.link} </h4>
        );
    }
}

export default ArticleLink;

