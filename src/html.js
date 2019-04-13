import React from 'react';
import PropTypes from 'prop-types';

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          {/* Add custom css or scripts here */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,700,900|Roboto+Mono:300,400,500"
          />
          <link rel="stylesheet" href="/fonts/icomoon/style.css" />
          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/css/magnific-popup.css" />
          <link rel="stylesheet" href="/css/jquery-ui.css" />
          <link rel="stylesheet" href="/css/owl.carousel.min.css" />
          <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
          <link rel="stylesheet" href="/css/bootstrap-datepicker.css" />
          <link rel="stylesheet" href="/css/mediaelementplayer.css" />
          <link rel="stylesheet" href="/css/animate.css" />
          <link rel="stylesheet" href="/fonts/flaticon/font/flaticon.css" />
          <link rel="stylesheet" href="/css/fl-bigmug-line.css" />
          <link rel="stylesheet" href="/css/aos.css" />
          <link rel="stylesheet" href="/css/style.css" />
          {/* Add custom css or scripts here */}

          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key="body"
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script src="js/jquery-3.3.1.min.js" />
  <script src="js/jquery-migrate-3.0.1.min.js" />
  <script src="js/jquery-ui.js" />
  <script src="js/popper.min.js" />
  <script src="js/bootstrap.min.js" />
  <script src="js/owl.carousel.min.js" />
  <script src="js/mediaelement-and-player.min.js" />
  <script src="js/jquery.stellar.min.js" />
  <script src="js/jquery.countdown.min.js" />
  <script src="js/jquery.magnific-popup.min.js" />
  <script src="js/bootstrap-datepicker.min.js" />
  <script src="js/aos.js" />
  <script src="js/main.js"/>

        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
