import React, { FC, useState } from 'react';
import GroupItem from './GroupItem/GroupItem';
import TagsItem from './TagsItem/TagsItem';
import s from './SideBar.module.scss';

const SideBar: FC = () => {
	const [showSideBar, setShowSideBar] = useState(false);
	return (
		<div className={`${s.container} + ${showSideBar ? s.hide : s.show}`}>
			<div className={s.header}>
				<div className={s.personContainer}>
					<div className={s.avatar}></div>
					<p className={s.name}>Baga</p>
				</div>
				<div
					className={`${!showSideBar && s.arrowRotate} +  ${s.arrow}`}
					onClick={() => setShowSideBar(!showSideBar)}>
					<i className="fas fa-chevron-right"></i>
				</div>
			</div>
			<p className={s.headTabTitle}>Quick links</p>
			<div
				className={`${s.TabContainer} + ${
					showSideBar ? s.reverseTabOnlyIcon : s.reverseTabAllContent
				}`}>
				<i className="far fa-sticky-note"></i>
				<p className={s.tabTitle}>All notes</p>
			</div>
			<div
				className={`${s.TabContainer} + ${
					showSideBar ? s.reverseTabOnlyIcon : s.reverseTabAllContent
				}`}>
				<i className="far fa-heart"></i>
				<p className={s.tabTitle}>Favorites</p>
			</div>
			<div
				className={`${s.TabContainer} + ${
					showSideBar ? s.reverseTabOnlyIcon : s.reverseTabAllContent
				}`}>
				<i className="fas fa-users"></i>
				<p className={s.tabTitle}>Collective</p>
			</div>
			<div className={s.groupsTitleContainer}>
				<div>
					<p className={s.headTabTitle}>Groups</p>
				</div>
				<div className={s.groupsIconsContainer}>
					<i className="fas fa-sort-alpha-down"></i>
					<i className="fas fa-plus"></i>
				</div>
			</div>
			<div className={s.groupItemsContainer}>
				<GroupItem showSideBar={showSideBar} color="#d83030" label="Game" />
				<GroupItem showSideBar={showSideBar} color="#1ed116" label="IT" />
				<GroupItem showSideBar={showSideBar} color="#2bc5d5" label="Anime" />
				<GroupItem showSideBar={showSideBar} color="#c42bc5" label="Gachi" />
				<GroupItem showSideBar={showSideBar} color="#c42bc5" label="Gachi" />
				<GroupItem showSideBar={showSideBar} color="#c42bc5" label="Gachi" />
				<GroupItem showSideBar={showSideBar} color="#c42bc5" label="Gachi" />
			</div>
			<div className={s.tagsTitleContainer}>
				<div>
					<p className={s.headTabTitle}>Groups</p>
				</div>
				<div className={s.tagsIconsContainer}>
					<i className="fas fa-plus"></i>
				</div>
			</div>
			<div className={s.tagItemsContainer}>
				<TagsItem label="searchbytag" />
				<TagsItem label="searchbytag" />
				<TagsItem label="searchbytag" />
				<TagsItem label="searchbytag" />
				<TagsItem label="searchbytag" />
				<TagsItem label="searchbytag" />
				<TagsItem label="searchbytag" />
			</div>
		</div>
	);
};

export default SideBar;
