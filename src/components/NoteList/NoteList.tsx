import React, { FC } from 'react';
import NoteListItem from './NoteListItem/NoteListItem';
import s from './NoteList.module.scss';

const NoteList: FC = () => {
	return (
		<div className={s.container}>
			<div className={s.headerContainer}>
				<div className={s.inputContainer}>
					<i className="fas fa-search"></i>
					<input placeholder="Search" type="text" name="search" id="" />
				</div>
				<button className={s.btnAdd}>
					<i className="fas fa-plus"></i>
				</button>
			</div>
			<div className={s.listAndPinnedListContainer}>
				<div>
					<div className={s.listTitle}>
						<i className="fas fa-list-ul"></i>
						<p>All notes</p>
						<i className={`fas fa-sort-down ${s.arrowRotate}`}></i>
					</div>
					<div className={s.list}>
						<NoteListItem color="#d83030" />
						<NoteListItem color="#1ed116" selected />
						<NoteListItem color="#c42bc5" />
						<NoteListItem color="#2bc5d5" />
						<NoteListItem color="#5fd5a5" />
						<NoteListItem color="#5fd5a5" />
					</div>
				</div>
				<div
					className={s.pinnedList}
					style={{ maxHeight: 3 * 125 + 61 + 'px' }}>
					<div className={s.listTitle}>
						<i className="fas fa-list-ul"></i>
						<p>Pinned notes</p>
						<i className={`fas fa-sort-down ${s.arrowRotate}`}></i>
					</div>
					<NoteListItem color="#d83030" />
					<NoteListItem color="#1ed116" selected />
					<NoteListItem color="#5fd5a5" />
				</div>
			</div>
		</div>
	);
};

export default NoteList;
