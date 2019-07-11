import React, { Component } from "react";
// import { jsonFeed } from "../requests";
import Table from "react-bootstrap/Table";

export default class TableDisplay extends Component {
  
  render() {
    const { matches, feed, dropdownoptions } = this.props;
    if (feed === []) {
      return (
        <main>
          <h1>Loading Entries...</h1>
        </main>
      );
    }

    return (
      <div>
        {matches === null || matches === [] ? (
          <Table striped bordered hover responsive variant="dark">
            <thead>
              <tr>
                {dropdownoptions.map(option => (
                  <th key={dropdownoptions.indexOf(option)}>
                    <strong>{option}</strong>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {feed.map(entry => (
                <tr key={entry.id}>
                  {dropdownoptions.map(option =>
                    entry[option] === null ? (
                      <td key={dropdownoptions.indexOf(option)}>null</td>
                    ) : (
                      <td key={dropdownoptions.indexOf(option)}>
                        {entry[option]}
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <>
            <p>{matches.length} matches found</p>
            <Table striped bordered hover responsive variant="dark">
              <thead>
                <tr>
                  {dropdownoptions.map(option => (
                    <td key={dropdownoptions.indexOf(option)}>
                      <strong>{option}</strong>
                    </td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {this.props.matches.map(entry => (
                  <tr key={entry.id}>
                    {dropdownoptions.map(option =>
                      entry[option] === null ? (
                        <td key={dropdownoptions.indexOf(option)}>null</td>
                      ) : (
                        <td key={dropdownoptions.indexOf(option)}>
                          {entry[option]}
                        </td>
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
