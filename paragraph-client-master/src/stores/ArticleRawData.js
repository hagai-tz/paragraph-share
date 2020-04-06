import { observable, action, computed } from 'mobx';
import axios from 'axios';
require('dotenv').config();

export class ProcessedData {
  @observable rawData = { content: [] };
  @observable difficultyLevelValue;
  @observable websiteURL;
  @observable inputUrl;
  @observable isArticleReadyToLoad = false;


  @action createWebsiteData = async url => {
    console.log('Im here at the extentions');
    let data = await axios.get(
      process.env.NODE_ENV == 'production'
        ? `https://guarded-cliffs-28525.herokuapp.com/url?url=${this.websiteURL}&lang=he`
        : `http://localhost:8000/url?url=${this.websiteURL}&lang=he`
    );
    this.rawData = data.data[0]
      ? data.data[0].translatedArticleContent
      : data.data.translatedArticleContent;
    console.log(this.rawData);
  };

  @action translationSlider = difficultyLevel => {
    console.log('im the slider value', difficultyLevel);
    this.difficultyLevelValue = difficultyLevel;
  };

  @action changeTranslationLanguage = async lang => {
    console.log("Selected lang changeTranslationLanguage", lang)

    let data = await axios.get(
        process.env.NODE_ENV == 'production'
          ? `https://guarded-cliffs-28525.herokuapp.com/url?url=${this.inputUrl}&lang=${lang}`
          : `http://localhost:8000/url?url=${this.inputUrl}&lang=${lang}`
      );
    console.log(lang);
    // console.log(data)
    this.rawData = data.data[0]
      ? data.data[0].translatedArticleContent
      : data.data.translatedArticleContent;
    console.log(this.rawData);
   
  };
  
  @action isArticleReadyToLoadHandler = () => {
    this.isArticleReadyToLoad = true;
  }

  @action getInputUrlFromClient = async input => {
    console.log("Is Article Ready to Load Mobex getInputUrlFromClient: ", this.isArticleReadyToLoad)
    console.log("InputUrl from Mobex getInputUrlFromClient: ", this.inputUrl)

    let data = await axios.get(
        process.env.NODE_ENV == 'production'
          ? `https://guarded-cliffs-28525.herokuapp.com/url?url=${input}&lang=he`
          : `http://localhost:8000/url?url=${input}&lang=he`
      );
    console.log(input);
    // console.log(data)
    this.rawData = data.data[0]
      ? data.data[0].translatedArticleContent
      : data.data.translatedArticleContent;
    console.log(this.rawData);
   
  };
}
