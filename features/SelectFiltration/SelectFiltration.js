export default function SelectFiltration({
	options,
	defaultValue,
	value,
	onChange,
}) {
	return (
		<select
			className='select-profession'
			value={value}
			onChange={event => onChange(event.target.value)}
		>
			<option disabled value={''}>
				{defaultValue}
			</option>
			{options.map(o => (
				<option key={o.value} value={o.value}>
					{o.name}
				</option>
			))}
		</select>
	)
}
