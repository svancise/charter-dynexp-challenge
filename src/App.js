import ApolloClient, { createNetworkInterface } from 'apollo-client';
import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { Container, Row, Col } from 'reactstrap';
import FilterMenu from './components/FilterMenu';
import GitHubRepos from './components/GitHubRepos';

import './App.css';

const networkInterface = createNetworkInterface({
  uri: 'https://api.github.com/graphql',
  opts: {
    headers: {
      // https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/
      'Authorization': `Bearer ACCESS TOKEN`
    }
  }
});
const client = new ApolloClient({
  networkInterface
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      'user': 'gaearon',
      'sortField': 'NAME',
      'sortDirection': 'ASC',
      'lastId': null
    };

    this.changeUser = this.changeUser.bind(this);
    this.changeSortField = this.changeSortField.bind(this);
    this.changeSortDirection = this.changeSortDirection.bind(this);
  }

  changeUser(user) {
    this.setState({
      user
    });
  }

  changeSortField(sortField) {
    this.setState({
      sortField
    });
  }

  changeSortDirection(sortDirection) {
    this.setState({
      sortDirection
    });
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <div className='App'>
          <Container>
            <Row>
              <Col md={{'size': 2, 'offset': 1}}>
                <FilterMenu 
                  {...this.state}
                  changeUser={this.changeUser}
                  changeSortField={this.changeSortField}
                  changeSortDirection={this.changeSortDirection}
                />
              </Col>
              <Col md='8'>
                <GitHubRepos {...this.state} />
              </Col>
            </Row>
          </Container>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;