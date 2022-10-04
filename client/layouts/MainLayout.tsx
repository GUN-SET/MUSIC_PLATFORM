import React from 'react';
import Navbar from '../componetns/Navbar';
import { Container } from '@mui/material';
import Player from '../componetns/Player';
import Head from 'next/head';

interface MainLayoutProps {
	title?: string;
	children: React.ReactNode;
	description?: string;
	keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
	children,
	title,
	description,
	keywords,
}) => {
	return (
		<>
			<Head>
				<title>{title || 'Музыкальная площадка'}</title>
				<meta
					name='description'
					content={
						`Музыкальная площадка. Здесь каждый может оставить свой трек и стать знаменитым.` +
						description
					}
				/>
				<meta name='robots' content='index, follow' />
				<meta
					name='keywords'
					content={keywords || 'Музыка, треки, артисты'}
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
			</Head>
			<Navbar />
			<Container>{children}</Container>
			<Player />
		</>
	);
};

export default MainLayout;
