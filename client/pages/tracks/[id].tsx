import React from 'react';
import { ITrack } from '../../types/track';
import MainLayout from '../../layouts/MainLayout';
import { Button, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';

const TrackPage = () => {
	const router = useRouter();

	const track: ITrack = {
		_id: '1',
		name: 'Трек 1',
		artist: 'Исполнитель 1',
		text: 'Какой-то текст',
		listens: 5,
		audio: 'http://localhost:5000/audio/c3f6fff6-d1de-4687-9072-1108818f9f95.mp3',
		picture:
			'http://localhost:5000/image/88f8c512-801e-49a2-b519-6cb47d302e9d.jpeg',
		comments: [],
	};

	return (
		<MainLayout>
			<Button
				variant={'outlined'}
				style={{ fontSize: 32 }}
				onClick={() => router.push('/tracks/')}
			>
				К списку
			</Button>
			<Grid container style={{ margin: '20px 0' }}>
				<img src={track.picture} width={200} height={200} alt='' />
				<div style={{ marginLeft: 30 }}>
					<h1>Название - {track.name}</h1>
					<h1>Исполнитель - {track.artist}</h1>
					<h1>Прослушиваний - {track.listens}</h1>
				</div>
			</Grid>
			<h1>Слова в треке</h1>
			<p>{track.text}</p>
			<h1>Комментарии</h1>
			<Grid container>
				<TextField label='Ваше имя ' fullWidth />
				<TextField label='Комментарий ' fullWidth multiline rows={4} />
				<Button>Отправить</Button>
			</Grid>
			<div>
				{track.comments.map((comment) => (
					<div>
						<div>Автор - {comment.username}</div>
						<div> Комментарий - {comment.text}</div>
					</div>
				))}
			</div>
		</MainLayout>
	);
};

export default TrackPage;
