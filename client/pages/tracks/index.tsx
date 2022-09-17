import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Box, Button, Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { ITrack } from '../../types/track';
import TrackList from '../../componetns/TrackList';

const Index = () => {
	const router = useRouter();
	const tracks: ITrack[] = [
		{
			_id: '1',
			name: 'Трек 1',
			artist: 'Исполнитель 1',
			text: 'Какой-то текст',
			listens: 5,
			audio: 'http://localhost:5000/audio/c3f6fff6-d1de-4687-9072-1108818f9f95.mp3',
			picture:
				'http://localhost:5000/image/88f8c512-801e-49a2-b519-6cb47d302e9d.jpeg',
			comments: [],
		},
		{
			_id: '2',
			name: 'Трек 2',
			artist: 'Исполнитель 2',
			text: 'Какой-то текст',
			listens: 5,
			audio: 'http://localhost:5000/audio/5747676575676.mp3',
			picture: 'http://localhost:5000/image/656565.jpg',
			comments: [],
		},
		{
			_id: '3',
			name: 'Трек 3',
			artist: 'Исполнитель 3',
			text: 'Какой-то текст',
			listens: 5,
			audio: 'http://localhost:5000/audio/68456875687887.mp3',
			picture: 'http://localhost:5000/image/545465.png',
			comments: [],
		},
	];
	return (
		<MainLayout>
			<Grid container justifyContent='center'>
				<Card style={{ width: 900 }}>
					<Box p={3}>
						<Grid container justifyContent='space-between'>
							<h1>Список треков</h1>
							<Button
								onClick={() => router.push('/tracks/create')}
							>
								Загрузить
							</Button>
						</Grid>
					</Box>
					<TrackList tracks={tracks} />
				</Card>
			</Grid>
		</MainLayout>
	);
};

export default Index;
