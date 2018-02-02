import PropTypes from 'prop-types';
import React, { Component } from 'react';
import moment from 'moment';
import { Card, CardBody, Collapse } from 'reactstrap';
import ForkIcon from './imgs/repo-forked.svg';
import StarIcon from './imgs/star.svg';
import './RepoCard.css';

class RepoCard extends Component {
  constructor() {
    super();
    this.state = {
      'isOpen': false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      'isOpen': !this.state.isOpen
    });
  }

  render() {
    return (
      <Card className='repo-card'>
        <CardBody className='repo-header' onClick={this.toggle}>
          <div>
            {this.props.name}
          </div>
          <div className='repo-metrics'>
            <img src={ForkIcon} alt='fork icon'/> {this.props.forkCount.toLocaleString()}
            <img src={StarIcon} alt='start icon'/> {this.props.stargazers.totalCount.toLocaleString()}
          </div>
        </CardBody>
        <Collapse isOpen={this.state.isOpen}>
          <CardBody>
            <div className='repo-dates'>
              <div>Created {moment(this.props.createdAt).fromNow()}</div>
              <div>Updated {moment(this.props.updatedAt).fromNow()}</div>
            </div>
            <div className='repo-description'>
              {this.props.description ? this.props.description : 'No description'}
            </div>
            <div className='repo-language'>
              {this.props.primaryLanguage && `The primary language is ${this.props.primaryLanguage.name}`}
            </div>
            <div className='text-center'>
              <a className='btn btn-secondary' href={this.props.url} role='button'>View</a>
            </div>
          </CardBody>
        </Collapse>
      </Card>
    );
  }
}

RepoCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  primaryLanguage: PropTypes.object,
  url: PropTypes.string.isRequired,
  forkCount: PropTypes.number.isRequired,
  stargazers: PropTypes.object.isRequired
};

export default RepoCard;
