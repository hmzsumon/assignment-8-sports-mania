import { Card, Grid, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
// import logo from '../images/logo/image 1.png';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from './Button';

const League = ({ league }) => {
	const { _id, name, logo, sportsType } = league;

	// const { id } = useParams();

	return (
		<Grid item md={4} sm={6} xs={12}>
			<LeagueWrapper>
				<Card>
					<Container>
						<ImgWrapper>
							<img src={logo} alt='' />
						</ImgWrapper>
						<Typography variant='h3'>{name}</Typography>
						<Typography variant='h5'>
							<p>Sports type: {sportsType}</p>
						</Typography>
						<Link to={`/details/${_id}`}>
							<Button btnText='Explore' iconRight={<FaLongArrowAltRight />} />
						</Link>
					</Container>
				</Card>
			</LeagueWrapper>
		</Grid>
	);
};

export default League;

const LeagueWrapper = styled.div`
	margin-top: 1rem;
`;

const Container = styled.div`
	display: grid;
	justify-content: center;
	text-align: center;
	padding: 1rem 0;

	p {
		margin: 1rem 0;
	}
`;

const ImgWrapper = styled.div`
	display: grid;
	margin-bottom: 2rem;

	justify-content: center;
	img {
		max-width: 20rem;
		height: 15rem;
	}
`;
