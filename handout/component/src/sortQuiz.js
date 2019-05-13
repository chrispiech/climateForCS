'use strict'
import React, { Component } from 'react'
import {
	SortableContainer, 
	SortableElement, 
	SortableHandle
} from 'react-sortable-hoc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLines } from '@fortawesome/free-solid-svg-icons'
import arrayMove from 'array-move';
import './src/sortQuiz.css'

const DragHandle = SortableHandle(() => <span>::</span>);

const SortableItem = SortableElement(({value}) => (
	<li className="climate-SortableItem">
		<FontAwesomeIcon style={{'margin-right':'10px'}} icon={faGripLines} />
          
		{value}
	</li>)
);

const SortableList = SortableContainer(({items}) => {
  return (
    <ul className="climate-SortableList">
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

export default class SortQuiz extends Component {

	constructor(props) {
    super(props);
    this.state = { 
      items: this.props.options
    };
  }

  onSortEnd(changeData) {
  	let newIndex = changeData['newIndex']
  	let oldIndex = changeData['oldIndex']
  	this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  }

	render() {
    return <SortableList 
    	items={this.state.items} 
    	onSortEnd={(d) =>this.onSortEnd(d)} 
    	helperClass="climate-SortableHelper"
    />;
  }
}