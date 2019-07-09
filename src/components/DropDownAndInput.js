import React, { Component } from 'react'

export default class DropDownAndInput extends Component {
  render() {
    let {dropDownOptions, updateTable, updateDropDown} = this.props;
    return (
      <div>
        <div>
          <span>Search for </span>
          <select
            name="options"
            id="options"
            onChange={e => updateDropDown(e.target.value)}
          >
            <option>Select Type</option>
            {dropDownOptions.map(option => (
              <option key={dropDownOptions.indexOf(option)}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <span> containing </span>
          <input
            type="search"
            name="searchbar"
            id="searchbar"
            onChange={e => updateTable(e.target.value)}
          />
        </div>
        <div> 
          (Please note that search input may be case sensitive)
        </div>
        <hr />
      </div>
    )
  }
}
