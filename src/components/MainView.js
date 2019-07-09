import React from "react";
import { jsonFeed } from "../requests";
import Table from "react-bootstrap/Table";
import DropDownAndInput from "./DropDownAndInput";

class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feed: [], matches: null, options: "", dropDownOptions: [] };
  }

  getFeed() {
    jsonFeed.all().then(data => this.setState({ feed: data }));
  }

  setDropDown() {
    jsonFeed.one().then(data => {
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
    let {feed, options} = this.state;
    let matches = [];

    feed.filter(entry =>
      entry[options].toString().includes(searchTerm)
        ? matches.push(entry)
        : null
    );
    
    searchTerm === "" && matches === []
      ? this.setState({ matches: feed })
      : this.setState({ matches: matches });
  }

  componentDidMount() {
    this.getFeed();
    this.setDropDown();
  }

  render() {
    let { feed, dropDownOptions, matches } = this.state;
    if (feed === []) {
      return (
        <main>
          <h1>Loading Entries...</h1>
        </main>
      );
    }

    return (
      <div className="App m-3">
        <DropDownAndInput 
          dropDownOptions = {dropDownOptions} 
          updateDropDown = {this.updateDropDown} 
          updateTable = {this.updateTable}
        />
        {this.state.matches === null || this.state.matches === [] ? (
          <>
            <Table striped bordered hover responsive variant="dark">
              <thead>
                <tr>
                  {dropDownOptions.map(option => (
                    <th key={dropDownOptions.indexOf(option)}>
                      <strong>{option}</strong>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {this.state.feed.map(entry => (
                  <tr key={entry.id}>
                    {dropDownOptions.map(option =>
                      entry[option] === null ? (
                        <td key={dropDownOptions.indexOf(option)}>null</td>
                      ) : (
                        <td key={dropDownOptions.indexOf(option)}>
                          {entry[option]}
                        </td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        ) : (
          <>
            <p>{matches.length} matches found</p>
            <Table striped bordered hover responsive variant="dark">
              <thead>
                <tr>
                  {dropDownOptions.map(option => (
                    <td key={dropDownOptions.indexOf(option)}>
                      <strong>{option}</strong>
                    </td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {this.state.matches.map(entry => (
                  <tr key={entry.id}>
                    {dropDownOptions.map(option =>
                      entry[option] === null ? (
                        <td key={dropDownOptions.indexOf(option)}>null</td>
                      ) : (
                        <td>{entry[option]}</td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        )}
      </div>
    );
  }
}

export default MainView;
