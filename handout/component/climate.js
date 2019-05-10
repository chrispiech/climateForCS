'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './src/climate.css';
import './src/bootstrapish.css';

var serverRoot = 'https://2uhq8f5ai5.execute-api.us-west-1.amazonaws.com/dev/';

var LikeButton = function (_Component) {
  _inherits(LikeButton, _Component);

  function LikeButton(props) {
    _classCallCheck(this, LikeButton);

    var _this = _possibleConstructorReturn(this, (LikeButton.__proto__ || Object.getPrototypeOf(LikeButton)).call(this, props));

    _this.state = { liked: false };
    _this.getGraderData();
    return _this;
  }

  _createClass(LikeButton, [{
    key: 'getGraderData',
    value: function getGraderData() {
      var _this2 = this;

      console.log('test');
      var url = serverRoot + 'getGrader/';
      axios.get(url, {
        params: {
          graderId: this.props.graderId
        }
      }).then(function (response) {
        return _this2.graderLoaded(response);
      });
    }
  }, {
    key: 'graderLoaded',
    value: function graderLoaded(response) {
      console.log(response);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      if (this.state.liked) {
        return 'You liked this.';
      }

      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Climate Change for CS109 Students'
        ),
        React.createElement(
          'p',
          { className: 'climate-subtleHeading' },
          React.createElement(FontAwesomeIcon, { style: { 'margin-right': '10px' }, icon: faCalendar }),
          'Apr 15th, 2019'
        ),
        React.createElement('hr', null),
        React.createElement('img', {
          style: { 'width': '100%' },
          src: 'https://metservice.gov.jm.md-84.webhostbox.net/wp-content/uploads/2017/06/climatechange2-1280x600-1.jpg'
        }),
        React.createElement(
          'p',
          null,
          'Fires in California, floods in Mozambique, ocean acidification in the Pacific... our new millennium has shown an unprecedented intensity of climate change consequences. But what do these have to do with computer science? How do the decisions we make as engineers and computationally-educated leaders affect the planet? And what kinds of opportunities exist for positive, climate-conscious computational leadership and innovation?'
        ),
        React.createElement(
          'p',
          null,
          'Surprise: bitcoin uses more energy than Chile.'
        ),
        React.createElement(
          'p',
          null,
          'We have all at least heard the word "blockchain" floating around as one example of cutting-edge computing technology that seems to have applications everywhere. We are going to dig into this a bit more and, through an exploration of computing infrastructure and energy, reframe technologies like blockchain - and computation in general - as a tool and a resource, with both enormous potential and insufficiently-examined side effects.'
        ),
        React.createElement(
          'h3',
          null,
          'What questions do you have?'
        ),
        React.createElement(
          'div',
          { 'class': 'twbs' },
          React.createElement('textarea', { 'class': 'form-control', id: 'exampleFormControlTextarea1', rows: '3' }),
          React.createElement(
            'button',
            {
              type: 'button', 'class': 'btn btn-primary',
              onClick: function onClick() {
                return _this3.setState({ liked: true });
              }
            },
            'Like me'
          )
        ),
        React.createElement('br', null)
      );
    }
  }]);

  return LikeButton;
}(Component);

var domContainer = document.querySelector('#climateHandout');
ReactDOM.render(React.createElement(LikeButton, null), domContainer);