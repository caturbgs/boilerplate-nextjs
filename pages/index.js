import { debounce } from 'lodash';
import { useState } from 'react';
import { homeRepository } from '../stores/home';
import styles from '../styles/Home.module.css';
import Error from './error';
import Loading from './loading';

export default function Home() {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');
	// const titleDisp = useRef('');
	// const descriptionDisp = useRef('');
	// const categoryDisp = useRef('');
	const { home, error, isLoading } = homeRepository.useHome({
		title,
		description,
		category,
	});

	const handleChange = debounce((value, type) => {
		console.log({ type, e: value });
		switch (type) {
			case 'title':
				// titleDisp.current = value;
				setTitle(value);
				break;
			case 'description':
				// descriptionDisp.current = value;
				setDescription(value);
				break;
			case 'category':
				// categoryDisp.current = value;
				setCategory(value);
				break;
			default:
				// titleDisp.current = '';
				// descriptionDisp.current = '';
				// categoryDisp.current = '';
				setTitle('');
				setDescription('');
				setCategory('');
				break;
		}
	}, 500);

	if (isLoading) return <Loading />;
	if (error) return <Error />;

	return (
		<div>
			<h1 className="text-6xl leading-3 m-0">
				Welcome to{' '}
				<a
					className="no-underline text-[#0070f3] hover:underline active:underline focus:underline"
					href="https://nextjs.org">
					Next.js!
				</a>
			</h1>

			<p className={styles.description}>
				Get started by editing <code className={styles.code}>pages/index.js</code>
			</p>

			<div className="my-10 flex flex-col">
				<div className="my-2">
					<label>Name: </label>
					<input
						className="border-1 px-2 py-1 bg-slate-100"
						onChange={(e) => handleChange(e.target.value, 'title')}
						value={title}
					/>
				</div>
				<div className="my-2">
					<label>Description: </label>
					<input
						className="border-1 px-2 py-1 bg-slate-100"
						onChange={(e) => handleChange(e.target.value, 'description')}
						value={description}
					/>
				</div>
				<div className="my-2">
					<label>Category: </label>
					<input
						className="border-1 px-2 py-1 bg-slate-100"
						onChange={(e) => handleChange(e.target.value, 'category')}
						value={category}
					/>
				</div>
			</div>

			{/* <table>
				{home?.entries?.map((data, index) => (
					<tbody key={index}>
						<tr>
							<td>{data.API}</td>
							<td>{data.Description}</td>
							<td>{data.Auth}</td>
							<td>{data.HTTPS}</td>
							<td>{data.Cors}</td>
							<td>{data.Category}</td>
						</tr>
					</tbody>
				))}
			</table> */}
		</div>
	);
}
