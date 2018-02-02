import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Label, Input, FormGroup } from 'reactstrap';

class FilterMenu extends Component {
	constructor(props) {
		super(props);

		this.state = {
			'value': this.props.user
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	handleChange(e) {
		this.setState({
			'value': e.target.value
		});
	}

	handleKeyPress(e) {
    if (e.key === 'Enter') {
       this.props.changeUser(this.state.value)
    }
  }

	render() {
		return (
			<div id='filter-menu'>
				<FormGroup>
					<Label>
						User
					</Label>
					<Input 
						bsSize='md' 
						value={this.state.value}  
						onChange={this.handleChange}
						onKeyPress={this.handleKeyPress}
					/>
				</FormGroup>
				<FormGroup>
					<Label>
						Sort By
					</Label>
					<Input type='select' name='sort-field' onChange={(e) => this.props.changeSortField(e.target.value)} value={this.props.sortField}>
          	<option value='NAME'>Name</option>
          	<option value='CREATED_AT'>Created</option>
          	<option value='UPDATED_AT'>Last Updated</option>
          	<option value='STARGAZERS'># of Stars</option>
        	</Input>
				</FormGroup>
				<FormGroup>
					<Label>
						Sort Direction
					</Label>
					<Input type='select' name='sort-direction' onChange={(e) => this.props.changeSortDirection(e.target.value)} value={this.props.sortDirection}>
          	<option value='ASC'>Ascending</option>
          	<option value='DESC'>Descending</option>
        	</Input>
				</FormGroup>
			</div>	
		);
	}
};

FilterMenu.propTypes = {
  user: PropTypes.string.isRequired,
  sortField: PropTypes.string.isRequired,
  sortDirection: PropTypes.string.isRequired,
  changeUser: PropTypes.func.isRequired,
  changeSortField: PropTypes.func.isRequired,
  changeSortDirection: PropTypes.func.isRequired
};

export default FilterMenu;