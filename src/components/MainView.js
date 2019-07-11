import React from "react";
import { jsonFeed } from "../requests";
import DropDownAndInput from "./DropDownAndInput";
import TableDisplay from "./TableDisplay";

class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feed: [], matches: null, options: "", dropDownOptions: [] };
  }

  getFeed() {
    jsonFeed.all().then(data => this.setState({ feed: data }));
  }

  setDropDown() {
    jsonFeed.all().then(data => {
      let objKeys = data[0];
      let dropDownOptions = [];
      for (let keys in objKeys) {
        dropDownOptions.push(keys);
      }
      this.setState({ dropDownOptions: dropDownOptions });
    });
  }

  updateDropDown = (selection) => {
    this.setState({options: selection})
  }

  updateTable = (searchTerm) =>{
    this.getFeed();
    let {feed, options} = this.state;
    let matches = [];

    feed.filter(entry =>
      String(entry[options]).includes(searchTerm)
        ? matches.push(entry)
        : null
    );
    
    searchTerm === "" && matches === []
      ? this.setState({ matches: feed })
      : this.setState({ matches: matches });
  }

  componentDidMount() {
    this.setDropDown();
    // this.getFeed();
  }

  render() {
    let { feed, dropDownOptions, matches } = this.state;
    

    return (
      <div className="App m-3">
        <DropDownAndInput 
          dropDownOptions = {dropDownOptions} 
          updateDropDown = {this.updateDropDown} 
          updateTable = {this.updateTable}
        />
        <TableDisplay matches={matches} feed={feed} dropdownoptions={dropDownOptions}/>
      </div>
    );
  }
}

export default MainView;
