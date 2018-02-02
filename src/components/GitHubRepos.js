import _ from 'lodash';
import { gql, graphql, compose } from 'react-apollo';
import { branch, renderComponent } from 'recompose';
import Err from './Err';
import Loading from './Loading';
import RepoList from './RepoList';

// https://developer.github.com/v4/
const GET_GITHUB_REPOS = gql`
  query GetGitHubRepos($user: String!, $sortField: RepositoryOrderField!, $sortDirection: OrderDirection!) {
    user(login: $user) {
      login
      repositories(first: 50, orderBy: {field: $sortField, direction: $sortDirection }) {
        nodes {
          id
          name
          primaryLanguage {
            name
          }
          createdAt
          updatedAt
          forkCount
          description
          stargazers {
            totalCount
          }
          url
        }
      }
    }
  }
`;

export default compose(
  graphql(GET_GITHUB_REPOS, {
    options: ({user, sortField, sortDirection}) => ({ user, sortField, sortDirection }),
    props: ({ data: { loading, user, error } }) => ({
      loading,
      error: error ? error : null,
      repos: _.property('repositories.nodes')(user),
      user: _.property('login')(user)
    })
  }),
  branch(
    ({ error }) => error,
    renderComponent(Err)
  ),
  branch(
    ({ loading }) => loading,
    renderComponent(Loading)
  )
)(RepoList);
