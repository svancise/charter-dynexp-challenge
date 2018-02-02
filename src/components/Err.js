import React from 'react';

const Err = ({error}) => {
	return (
	<div style={{'textAlign': 'center'}}>
		<b>{error.graphQLErrors[0] ? error.graphQLErrors[0].message : 'An error occured, did you add an access token?'}</b>
	</div>
)};


export default Err;
