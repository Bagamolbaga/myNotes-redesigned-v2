import React, { FC } from 'react';
import SideBar from './components/SideBar/SideBar';
import NoteList from './components/NoteList/NoteList';
import Note from './components/Note/Note';
import s from './App.module.scss';

const App: FC = () => {
	return (
		<div className={s.container}>
			<SideBar />
			<NoteList />
			<Note />
		</div>
	);
};

export default App;
