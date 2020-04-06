import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('processedData')
@observer
class GetURL extends Component {
  //Getting the url form the chrome extension and sending it to the store to innitiate the api call for the server.
  componentDidMount() {
    let search = window.location.search;
    let params = new URLSearchParams(search);

    let sendUrl = params.get('url');
    this.props.processedData.websiteURL = sendUrl;
    this.props.processedData.createWebsiteData(sendUrl);
  }
  render() {
    return <div></div>;
  }
}

export default GetURL;
