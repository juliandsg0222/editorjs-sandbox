import './App.css';
import { useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import Paragraph from '@editorjs/paragraph';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Undo from 'editorjs-undo';
import DragDrop from 'editorjs-drag-drop';
import ImageTool from '@editorjs/image';
import InlineImage from 'editorjs-inline-image';

function App() {
	const initialData = {
		blocks: [
			{
				id: 'mIz7N25ijFi',
				type: 'paragraph',
				data: {
					text: 'Hello',
				},
			},
			{
				id: 'mIz7825ijF',
				type: 'paragraph',
				data: {
					text: 'world',
				},
			},
			{
				id: '5b7MCJYRaP',
				type: 'image',
				data: {
					url: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
					caption: '',
					withBorder: false,
					withBackground: false,
					stretched: false,
				},
			},
		],
	};

	const [editor] = useState(
		() =>
			new EditorJS({
				autofocus: true,
				holder: 'editorjs',
				readOnly: false,
				tools: {
					header: Header,
					list: List,
					image: {
						class: InlineImage,
						inlineToolbar: true,
						config: {
							embed: {
								display: true,
							},
						},
					},
					paragraph: {
						class: Paragraph,
						inlineToolbar: true,
						config: { preserveBlank: true },
					},
				},
				onReady: () => {
					const undo = new Undo({ editor });
					undo.initialize(initialData);
					// new DragDrop(editor)
				},
				data: initialData,
			})
	);

	const save = () => {
		editor.save().then((savedData) => {
			const output = document.getElementById('output');

			output.innerHTML = JSON.stringify(savedData, null, 4);
		});
	};

	return (
		<div className='App'>
			<div id='editorjs' />
			<hr className='ce-block' />
			<button type='button' className='btn btn-primary btn-lg' onClick={save}>
				Save
			</button>
			<hr className='ce-block' />
			<pre id='output' />
		</div>
	);
}

export default App;
