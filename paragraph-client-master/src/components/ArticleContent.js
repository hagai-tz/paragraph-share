import React, { Component } from 'react';
import './CSS/ArticleContent.css'
import { Skeleton } from 'antd';


import { observer, action, inject } from 'mobx-react'
import ArticleRawData from '../stores/ArticleRawData'

@inject("processedData")

@observer
class ArticleContent extends Component {
    
    render() {
        console.log("I'm props", this.props.processedData.rawData)
        
        console.log("I'm content", this.props.processedData.rawData.content)


        return (
            
            <div id='article-content'>
                {this.props.processedData.rawData.content.map(word => {
                        return (
                            <span className='word-ul'>
                                <span className="word"> {word.word} </span>
                                <span className='translatedWord' difficultyLevel={ word.difficultyLevel } style={ (100-this.props.processedData.difficultyLevelValue<word.difficultyLevel ? null: { visibility: "hidden", transition:"visibility 1s"} )}> {word.translatedWord}</span>
                            </span>
                        )
                    })
                }
                
            </div>
        );
    }
}

export default ArticleContent;
