import './App.css';
import { useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import Paragraph from '@editorjs/paragraph';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Undo from 'editorjs-undo';
import DragDrop from 'editorjs-drag-drop';
import InlineImage from 'editorjs-inline-image';
import BreakLine from 'editorjs-break-line';
import ToggleBlock from 'editorjs-toggle-block';
import Quote from '@editorjs/quote';
import Table from '@editorjs/table';
import CodeTool from '@editorjs/code';
import RawTool from '@editorjs/raw';
import Warning from '@editorjs/warning';
import Delimiter from '@editorjs/delimiter';
import NestedList from '@editorjs/nested-list';
import Checklist from '@editorjs/checklist';
import SimpleImage from '@editorjs/simple-image';
import LinkTool from '@editorjs/link';
import AttachesTool from '@editorjs/attaches';
import Embed from '@editorjs/embed';
import Marker from '@editorjs/marker';
import InlineCode from '@editorjs/inline-code';
import Underline from '@editorjs/underline';
import LinkAutocomplete from '@editorjs/link-autocomplete';
import Tooltip from 'editorjs-tooltip';
import TextVariantTune from '@editorjs/text-variant-tune';

function App() {
	const initialData = {
		blocks: [
			// {
			// 	id: 'mIz7N25ijFi',
			// 	type: 'paragraph',
			// 	data: {
			// 		text: 'Hello',
			// 	},
			// },
			// {
			// 	id: 'mIz7825ijF',
			// 	type: 'paragraph',
			// 	data: {
			// 		text: 'world',
			// 	},
			// },
			// {
			// 	id: '5b7MCJYRaP',
			// 	type: 'image',
			// 	data: {
			// 		url: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
			// 		caption: '',
			// 		withBorder: false,
			// 		withBackground: false,
			// 		stretched: false,
			// 	},
			// },
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
					list: {
						class: List,
						inlineToolbar: true,
					},
					// list: {
					// 	class: NestedList,
					// 	inlineToolbar: true,
					// 	config: {
					// 		defaultStyle: 'unordered',
					// 	},
					// },
					breakLine: {
						class: BreakLine,
						inlineToolbar: true,
						shortcut: 'CMD+SHIFT+ENTER',
					},
					image: {
						class: InlineImage,
						inlineToolbar: true,
						config: {
							embed: {
								display: true,
							},
						},
					},
					// image: SimpleImage,
					paragraph: {
						class: Paragraph,
						inlineToolbar: true,
						config: { preserveBlank: true },
					},
					// toggle: {
					// 	class: ToggleBlock,
					// 	inlineToolbar: true,
					// },
					// quote: Quote,
					// table: Table,
					// code: CodeTool,
					// raw: RawTool,
					// warning: Warning,
					delimiter: Delimiter,
					// checklist: {
					// 	class: Checklist,
					// 	inlineToolbar: true,
					// },
					// linkTool: {
					// 	class: LinkTool,
					// 	config: {
					// 		endpoint: 'http://localhost:8008/fetchUrl', // Your backend endpoint for url data fetching,
					// 	},
					// },
					// attaches: {
					// 	class: AttachesTool,
					// 	config: {
					// 		endpoint: 'http://localhost:8008/uploadFile',
					// 	},
					// },
					// embed: {
					// 	class: Embed,
					// 	config: {
					// 		services: {
					// 			youtube: true,
					// 			coub: true,
					// 		},
					// 	},
					// },
					Marker: {
						class: Marker,
						shortcut: 'CMD+SHIFT+M',
					},
					inlineCode: {
						class: InlineCode,
						shortcut: 'CMD+SHIFT+M',
					},
					underline: Underline,
					// link: {
					// 	class: LinkAutocomplete,
					// 	config: {
					// 		endpoint: 'https://www.google.com/',
					// 		queryParam: 'search',
					// 	},
					// },
					// tooltip: {
					// 	class: Tooltip,
					// 	config: {
					// 		location: 'left',
					// 		underline: true,
					// 		placeholder: 'Enter a tooltip',
					// 		highlightColor: '#FFEFD5',
					// 		backgroundColor: '#154360',
					// 		textColor: '#FDFEFE',
					// 		holder: 'editorjs',
					// 	},
					// },
					// textVariant: TextVariantTune
				},
				// tunes: ['textVariant'],
				onReady: () => {
					const undo = new Undo({ editor });
					undo.initialize(initialData);
					new DragDrop(editor);
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
