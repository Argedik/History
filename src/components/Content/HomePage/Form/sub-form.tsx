'use client';

export const SubForm = () => {
	return (
		<form
			action="/api/form"
			method="post"
			className="w-full flex flex-col md:flex-row md:gap-0 gap-y-4"
		>
			<input
				type="email"
				name="name"
				placeholder="E-postanızı yazın..."
				required
				className="p-4 w-full mr-2 border-solid border-8 border-black"
			></input>
			<button
				type="submit"
				className="p-2 px-3 md:p-6 md:px-10 bg-black text-white whitespace-nowrap"
			>
				Abone ol
			</button>
		</form>
	);
};
