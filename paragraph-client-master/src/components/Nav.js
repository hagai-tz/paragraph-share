import React, { Component } from 'react';
import { Slider } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

import "antd/dist/antd.css";

import './CSS/Nav.css'
import mainLogo from'../img/Trial Logo Design1.png';

import { observer, action, inject } from 'mobx-react'
import ArticleRawData from '../stores/ArticleRawData'

import ReactGA from "react-ga";
import { Event } from '../components/Tracking';

@inject("processedData")

@observer
class Nav extends Component {

    languageHandler = (e) => {
        Event('Lang handler', `User changed article lang to ${e.target.value}`, e.target.value, null )
        this.props.processedData.changeTranslationLanguage(e.target.value)
    }
    
    sliderHandler = (e) => {
        Event('Slider', `slider current level`, null, e )
        console.log("sliderHandler: ", e)
        this.props.processedData.translationSlider(e)
    }
    render() {
        const langs = ["HE", "FR", "AR", "ES", "DE", "SE"]
        const logo = "<p>"
        return (
            <div id='nav-bar'>
                <img id='logo' src={mainLogo} />
                {/* <span id='nav-log-top-left'>{logo}</span> */}
                {/* <button lang='ar' onClick={this.languageHandler} >ar</button> */}
                {/* <Slider vertical defaultValue={60} onChange={this.props.processedData.translationSlider} className='slider'/> */}
                <Slider vertical defaultValue={60} onChange={this.sliderHandler} className='slider'/>
                <span className='easy'>More</span>
                <span className='hard'>Less</span>
                <SmileOutlined className='line' type="line" style={{ fontSize: '15px', alignItems: 'center', color:"purple" }} />

                <select onChange={this.languageHandler} className='menu-flags'>
                        {langs.map(lang => <option value={lang}>{lang}</option>)}
                </select>

                
            </div>
        );
    }
}

export default Nav;





