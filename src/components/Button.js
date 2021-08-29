import React from 'react';

import styled from 'styled-components';

const Button = ({ iconRight, iconLeft, btnText }) => {
	return (
		<div>
			{iconLeft ? (
				<ButtonWrapper>
					{iconLeft} &nbsp; {btnText}
				</ButtonWrapper>
			) : (
				<ButtonWrapper>
					{btnText} &nbsp; {iconRight}
				</ButtonWrapper>
			)}
		</div>
	);
};

export default Button;
const ButtonWrapper = styled.button`
	width: 13rem;
	height: 4rem;
	font-size: 1.8rem;
	margin: 0 auto;
	background: #3a42ff;
	border: none;
	color: #fff;
	cursor: pointer;

	display: flex;
	align-items: center;
	justify-content: center;
`;
