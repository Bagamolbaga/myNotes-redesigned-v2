import React, { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import ReactHTMLParser from 'react-html-parser';
import 'react-quill/dist/quill.snow.css';
import s from './styles.scss';

export default function QuillEditor() {
	const [editorValue, setEditorValue] = useState('');
	const quillRef = React.useRef(null);

	const Font = Quill.import('formats/font');
	Font.whitelist = [
		'arial',
		'comic-sans',
		'courier-new',
		'georgia',
		'helvetica',
		'lucida'
	];
	Quill.register(Font, true);

	const modules = {
		toolbar: [
			[{ header: [1, 2, 3, 4, false] }],
			[{ font: [] }],
			[{ color: [] }, { background: [] }],
			['bold', 'italic', 'underline', 'strike', 'blockquote'],
			[
				{ list: 'ordered' },
				{ list: 'bullet' },
				{ indent: '-1' },
				{ indent: '+1' }
			],
			['link', 'image'],
			['clean']
		]
	};

	const formats = [
		'header',
		'bold',
		'italic',
		'underline',
		'strike',
		'blockquote',
		'list',
		'bullet',
		'indent',
		'link',
		'image',
		'color',
		'background'
	];

	const onChangeHandler = (
		value: string,
		delta: any,
		source: any,
		editor: any
	) => {
		setEditorValue(value);
	};

	return (
		<>
			<ReactQuill
				className={s.quillEditor}
				ref={quillRef}
				theme="snow"
				modules={modules}
				formats={formats}
				value={editorValue}
				onChange={onChangeHandler}
			/>
		</>
	);
}
