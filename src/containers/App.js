import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>Readable</h1>
                <p>Udacity project</p>
              </div>
            </div>
          </div>
        </header>

        <main>
          <div className="container">

            <div className="row">

              <div className="col-xs-12">[categories]</div>

            </div>

            <div className="row">

              <div className="col-xs-12">[posts]</div>

              <div className="col-xs-12">
                <div className="row">
                  <div className="col-sm-4">[single post]</div>
                  <div className="col-sm-4">[single post]</div>
                  <div className="col-sm-4">[single post]</div>
                  <div className="col-sm-4">[single post]</div>
                  <div className="col-sm-4">[single post]</div>
                  <div className="col-sm-4">[single post]</div>
                </div>
              </div>

            </div>

            <div className="row">

              <div className="col-xs-12">[create/edit posts]</div>

            </div>

          </div>
        </main>

        <footer>

          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <p><strong>Readable</strong> - Udacity project</p>
              </div>
            </div>
          </div>

        </footer>

      </div>
    );
  }
}

export default App;
