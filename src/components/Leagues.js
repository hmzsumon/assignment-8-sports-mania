/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Grid } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Layout from './Layout';
import League from './League';
import Loader from './Loader';

const Leagues = () => {
	const [leagues, setLeagues] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(async () => {
		const result = await axios.get(
			'https://sports-mania-backend.herokuapp.com/leagues'
		);

		setLeagues(result.data);
		setLoading(false);
	}, []);

	return (
		<Layout title='Sports Mania'>
			<Container>
				<Grid container spacing={2}>
					{loading ? (
						<LoadingWrapper>
							<Loader />
						</LoadingWrapper>
					) : (
						leagues.map((league) => {
							return <League key={league._id} league={league} />;
						})
					)}
				</Grid>
			</Container>
		</Layout>
	);
};

export default Leagues;

const LoadingWrapper = styled.div`
	width: 100%;
	height: 70vh;
	display: grid;
	justify-content: center;
	align-items: center;
`;
