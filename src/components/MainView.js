import React from "react";
import { jsonFeed } from "../requests";
import Table from "react-bootstrap/Table";

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
      let options = data[0];
      let dropDownOptions = [];
      for (let keys in options) {
        dropDownOptions.push(keys);
      }
      this.setState({ dropDownOptions: dropDownOptions });
    });
  }

  componentDidMount() {
    this.getFeed();
    this.setDropDown();
  }

  render() {
    let { feed, options, dropDownOptions, matches } = this.state;
    if (feed === []) {
      return (
        <main>
          <h1>Loading Entries...</h1>
        </main>
      );
    }

    const updateSearch = event => {
      event.preventDefault();

      let searchTerm = event.target.value;

      let matches = [];
      // console.log(options);
      feed.filter(entry =>
        entry[options].toString().includes(searchTerm)
          ? matches.push(entry)
          : null
      );
      // console.log(matches.length);
      searchTerm === "" && matches === []
        ? this.getFeed()
        : this.setState({ matches: matches });
    };

    return (
      <div className="App m-3">
        <div>
          <span>Search for </span>
          <select
            name="options"
            id="options"
            onChange={e => this.setState({ options: e.target.value })}
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
            onChange={updateSearch}
          />
        </div>
        <div> 
          (Please note that search input may be case sensitive)
        </div>
        <hr />
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
                    <td>
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
