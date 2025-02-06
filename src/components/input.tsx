import "../styles/components/input.css";

// TYPESCRIPT
interface InputProps {
	placeholder: string;
	htmlFor: string;
	label: string;
	type: string;
	name: string;
	id: string;
}

export default function Input({
	placeholder,
	htmlFor,
	label,
	type,
	name,
	id,
}: InputProps) {
	return (
		<div className="input-container">
			<label htmlFor={htmlFor} className="input-label">
				{label}
			</label>
			<input
				placeholder={placeholder}
				type={type}
				name={name}
				id={id}
				className="input-field"
			/>
		</div>
	);
}
