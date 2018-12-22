import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'
import NotesBook from './containers/NotesBook/NotesBook'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <NotesBook />
        </Layout>
      </div>
    )
  }
}

export default App;
