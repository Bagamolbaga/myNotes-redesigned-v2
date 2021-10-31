import React, { FC } from 'react';
import s from './NoteListItem.module.scss';

interface NoteListItemProps {
	color: string;
	selected: boolean;
}

const NoteListItem: FC<NoteListItemProps> = ({ color = 'white', selected }) => {
	const circleColor = {
		background: color
	};

	return (
		<div className={`${s.container} + ${selected && s.selected}`}>
			<div className={s.typeContainer}>
				<div className={s.typeCircle} style={circleColor}></div>
			</div>
			<div className={s.contentContainer}>
				<h4 className={s.title}>Title</h4>
				<p className={s.text}>sfsdfsfsfsf</p>
				<p className={s.tags}>#tags #300$</p>
			</div>
		</div>
	);
};

export default NoteListItem;
