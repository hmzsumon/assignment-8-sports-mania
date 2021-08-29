import { Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import BgImg from '../images/banner.png';

const Banner = ({ title, logo }) => {
	return (
		<BannerWrapper>
			{logo ? (
				<img src={logo} alt='name' />
			) : (
				<Typography variant='h1'>{title}</Typography>
			)}
		</BannerWrapper>
	);
};

export default Banner;

const BannerWrapper = styled.div`
	background: linear-gradient(
			rgba(163, 119, 250, 0.3),
			hsla(276, 56%, 59%, 0.3)
		),
		url(${BgImg});
	background-repeat: no-repeat;
	background-size: cover;
	height: 35vh;
	background-position: center center;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	opacity: 0.9;

	img {
		max-width: 20rem;
		height: 12rem;
	}
`;
