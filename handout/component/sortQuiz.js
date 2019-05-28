'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripLines } from '@fortawesome/free-solid-svg-icons';
import arrayMove from 'array-move';
import './src/sortQuiz.css';

var DragHandle = SortableHandle(function () {
  return React.createElement(
    'span',
    null,
    '::'
  );
});

var SortableItem = SortableElement(function (_ref) {
  var value = _ref.value;
  return React.createElement(
    'li',
    { className: 'climate-SortableItem' },
    React.createElement(FontAwesomeIcon, { style: { 'margin-right': '10px' }, icon: faGripLines }),
    value
  );
});

var SortableList = SortableContainer(function (_ref2) {
  var items = _ref2.items;

  return React.createElement(
    'ul',
    { className: 'climate-SortableList' },
    items.map(function (value, index) {
      return React.createElement(SortableItem, { key: 'item-' + index, index: index, value: value });
    })
  );
});

var SortQuiz = function (_Component) {
  _inherits(SortQuiz, _Component);

  function SortQuiz(props) {
    _classCallCheck(this, SortQuiz);

    var _this = _possibleConstructorReturn(this, (SortQuiz.__proto__ || Object.getPrototypeOf(SortQuiz)).call(this, props));

    _this.state = {
      items: _this.props.options
    };
    return _this;
  }

  _createClass(SortQuiz, [{
    key: 'onSortEnd',
    value: function onSortEnd(changeData) {
      var newIndex = changeData['newIndex'];
      var oldIndex = changeData['oldIndex'];
      this.setState({
        items: arrayMove(this.state.items, oldIndex, newIndex)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(SortableList, {
        items: this.state.items,
        onSortEnd: function onSortEnd(d) {
          return _this2.onSortEnd(d);
        },
        helperClass: 'climate-SortableHelper'
      });
    }
  }]);

  return SortQuiz;
}(Component);

export default SortQuiz;