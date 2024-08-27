//import data from "./parse";

const isPrimitive = (value) => typeof value !== 'object';
const isObject = (value) => value && typeof value === 'object' && !Array.isArray(value);


const stringify = (data, lvl = 1, sign = '', substr = ' ', count = 4) => {
	let signes = sign.length === 0 ? substr.repeat(count * lvl) : `${substr.repeat(count * lvl - 2)}${sign}`
	let result = "";

	if (isPrimitive(data)) return (result += `${signes}${data.toString()}`);

	[...Object.entries(data)].map(el => {
		const [key, value] = el;
		if (isObject(value)) {			
			return result += `${signes}${key}: {\n${stringify(value, lvl + 1, '', substr, count)}${substr.repeat(signes.length)}}\n`
		}

		if (Array.isArray(value)) {
			result += `${signes}${key}: ${value[0]}\n`;
			result += `${signes}${key}: ${value[1]}\n`;
		} else {
			return result += `${signes}${key}: ${value}\n`;
		}

	});

	return result;
};

const types = {
	added: '+ ',
	deleted: '- ',
	unchanged: '  '
}

const stylish = (data, depth, substr = ' ', counter = 4) => {

	const arr = data.map(item => {
		let type = types[item.type];
		const key = item.key;
		let result = '';

		if (Object.hasOwn(item, 'children')) {
			return result += `${stringify(`${key}`, depth, `${type}`)}: {\n${stylish(item.children, depth + 1)}${substr.repeat(counter * depth)}}\n`;
		};

		if (item.type === 'changed') {
			const strDeleted = `${stringify({ [key]: item.value[0] }, depth, `${types.deleted}`)}`;
			const strAdded = `${stringify({ [key]: item.value[1] }, depth, `${types.added}`)}`;

			return result += strDeleted + strAdded;
		}

		return result += `${stringify({ [key]: item.value }, depth, `${type}`)}`;
	});

	return arr.join('');
}

const tempt = (data, depth, substr, counter) => `{\n${stylish(data, depth = 1, substr, counter)}}`;

const nestedData = [
	{
		key: 'common',
		type: 'unchanged',
		children: [
			{ key: 'follow', value: false, type: 'added' },
			{ key: 'setting1', value: 'Value 1', type: 'unchanged' },
			{ key: 'setting2', value: 200, type: 'deleted' },
			{ key: 'setting3', value: [true, null], type: 'changed' },
			{ key: 'setting4', value: 'blah blah', type: 'added' },
			{ key: 'setting5', value: { key5: 'value5' }, type: 'added' },
			{
				key: 'setting6',
				type: 'unchanged',
				children: [
					{ key: 'key', value: 'value', type: 'unchanged' },
					{
						key: 'doge',
						type: 'unchanged',
						children: [
							{ key: 'wow', value: ['', 'so much'], type: 'changed' }
						]
					},
					{ key: 'ops', value: 'vops', type: 'added' }
				]
			},
		]
	},
	{
		key: 'group1',
		type: 'unchanged',
		children: [
			{ key: 'baz', value: ['bas', 'bars'], type: 'changed' },
			{ key: 'foo', value: 'bar', type: 'unchanged' },
			{
				key: 'nest',
				value: [{ key: 'value' }, 'str'],
				type: 'changed'
			}
		]
	},
	{
		key: 'group2',
		value: { abc: 12345, deep: { id: 45 } },
		type: 'deleted'
	},
	{
		key: 'group3',
		value: { deep: { id: { number: 45 } }, fee: 100500 },
		type: 'added'
	}
];

//console.log(tempt(nestedData, 1));

export default tempt;

