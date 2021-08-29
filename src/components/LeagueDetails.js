/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Layout from './Layout';
// import Logo from '../images/logo/image 1.png';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Container, Card, Typography } from '@material-ui/core';
import styled from 'styled-components';
import Button from './Button';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import Loader from './Loader';

import Found from '../../src/images/icon/found 1.png';
import Flag from '../../src/images/icon/flag (1) 1.png';
import Ball from '../../src/images/icon/football (1) 1.png';
import Gender from '../../src/images/icon/male-gender-sign 1.png';

import FacebookIcon from '../../src/images/icon/Facebook.png';
import TwitterIcon from '../../src/images/icon/Twitter.png';
import YouTubeIcon from '../../src/images/icon/YouTube.png';

const LeagueDetails = () => {
	const [league, setLeague] = useState({});
	const [loading, setLoading] = useState(true);
	const [socialLink, setSocialLink] = useState(null);

	const { id } = useParams();

	useEffect(async () => {
		const { data } = await axios.get(
			`https://sports-mania-backend.herokuapp.com/leagues/${id}`
		);
		setLeague(data);
		setLoading(false);
	}, [id]);

	// useEffect(async () => {
	// 	let url = await facebook;
	// 	console.log(url.length);
	// }, []);
	const {
		name,
		founded,
		country,
		logo,
		sportsType,
		gender,
		image,
		descriptionOne,
		descriptionTwo,
		facebook,
		twitter,
		youTube,
	} = league;

	return (
		<Layout logo={logo}>
			<Container>
				{loading ? (
					<LoadingWrapper>
						<Loader />
					</LoadingWrapper>
				) : (
					<Wrapper>
						<Card className='card'>
							<GridContainer container justify='center'>
								<DetailsWrapper>
									<h1>{name}</h1>
									<ul>
										<li>
											<Icon src={Found} alt='' />
											&nbsp; Founded: {founded}
										</li>
										<li>
											<Icon src={Flag} alt='' />
											&nbsp; Country: {country}
										</li>
										<li>
											<Icon src={Ball} alt='' />
											&nbsp; Sport Type: {sportsType}
										</li>
										<li>
											<Icon src={Gender} alt='' />
											&nbsp; Gender: {gender}
										</li>
									</ul>
								</DetailsWrapper>

								<ImageWrapper>
									<img src={image} alt='' />
								</ImageWrapper>
							</GridContainer>
						</Card>
						<Typography className='typography' variant='body1' gutterBottom>
							{descriptionOne}
						</Typography>
						<Typography className='typography' variant='body1' gutterBottom>
							{descriptionTwo}
						</Typography>

						<SocialLinks>
							{facebook === '' ? null : (
								<a href={facebook} target='_blank' rel='noreferrer'>
									<SocialIcon src={FacebookIcon} alt='' />
								</a>
							)}

							{twitter === '' ? null : (
								<a href={twitter} target='_blank' rel='noreferrer'>
									<SocialIcon src={TwitterIcon} alt='' />
								</a>
							)}
							{youTube === '' ? null : (
								<a href={youTube} target='_blank' rel='noreferrer'>
									<SocialIcon src={YouTubeIcon} alt='' />
								</a>
							)}
						</SocialLinks>
						<Link to='/'>
							<Button btnText='Go Back' iconLeft={<FaLongArrowAltLeft />} />
						</Link>
					</Wrapper>
				)}
			</Container>
		</Layout>
	);
};

export default LeagueDetails;

const Wrapper = styled.div`
	margin: 2rem 0;
	display: grid;
	justify-items: center;

	.card {
		background: #3a42ff;
		color: #fff;
		margin-bottom: 2rem;
		padding: 1rem;
	}

	.typography {
		font-size: 1.6rem;
		margin-bottom: 2rem;
	}
`;

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;

	@media only screen and (max-width: 600px) {
		grid-template-columns: 1fr;
	}
`;
const DetailsWrapper = styled.div`
	margin-bottom: 1rem;
	h1 {
		font-size: clamp(0.5rem, 7vw, 3.5rem);
		font-weight: 500;
	}

	ul {
		li {
			display: flex;
			align-items: center;
			justify-content: start;
			font-size: clamp(0.5rem, 10vw, 2rem);
			margin: 0.5rem 0;
			font-weight: 500;
		}
	}
`;
const ImageWrapper = styled.div`
	display: grid;
	justify-items: end;
	align-items: center;

	img {
		width: clamp(30rem, 60%, 45rem);
	}

	@media only screen and (max-width: 600px) {
		justify-items: center;
	}
`;

const Icon = styled.img`
	width: 2.2rem;
	margin-top: 0.6rem;
`;

const LoadingWrapper = styled.div`
	width: 100%;
	height: 70vh;
	display: grid;
	justify-content: center;
	align-items: center;
`;

const SocialLinks = styled.div`
	display: flex;
	column-gap: 4rem;
	justify-items: center;
	margin: 2rem 0;
`;
const SocialIcon = styled.img`
	width: 6.5rem;
`;
