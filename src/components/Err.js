import React from 'react';

const Err = ({error}) => (
	<div style={{'textAlign': 'center'}}>
		<b>{error.graphQLErrors[0].message}</b>
	</div>
);


export default Err;
