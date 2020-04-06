import { observable, action } from 'mobx';
import axios from 'axios';
require('dotenv').config();

export class ProcessedData {
  @observable rawData = { content: [] };
  @observable difficultyLevelValue;
  @observable websiteURL;
  @observable inputUrl;
  @observable isArticleReadyToLoad = false;

  @action createWebsiteData = async (url) => {
    let data = await axios.get(
      process.env.NODE_ENV == 'production'
        ? `https://guarded-cliffs-28525.herokuapp.com/url?url=${this.websiteURL}&lang=he`
        : `http://localhost:8000/url?url=${this.websiteURL}&lang=he`
    );
    this.rawData = data.data[0]
      ? data.data[0].translatedArticleContent
      : data.data.translatedArticleContent;
  };

  @action translationSlider = (difficultyLevel) => {
    this.difficultyLevelValue = difficultyLevel;
  };

  @action changeTranslationLanguage = async (lang) => {
    let data = await axios.get(
      process.env.NODE_ENV == 'production'
        ? `https://guarded-cliffs-28525.herokuapp.com/url?url=${this.inputUrl}&lang=${lang}`
        : `http://localhost:8000/url?url=${this.inputUrl}&lang=${lang}`
    );
    this.rawData = data.data[0]
      ? data.data[0].translatedArticleContent
      : data.data.translatedArticleContent;
  };

  @action isArticleReadyToLoadHandler = () => {
    this.isArticleReadyToLoad = true;
  };

  @action getInputUrlFromClient = async (input) => {
    let data = await axios.get(
      process.env.NODE_ENV == 'production'
        ? `https://guarded-cliffs-28525.herokuapp.com/url?url=${input}&lang=he`
        : `http://localhost:8000/url?url=${input}&lang=he`
    );

    this.rawData = data.data[0]
      ? data.data[0].translatedArticleContent
      : data.data.translatedArticleContent;
  };
}
