'use client';

export const SubForm = () => {
	return (
		<form action="/api/form" method="post" className="w-full flex">
			<input
				type="email"
				name="name"
				placeholder="E-postanızı yazın..."
				required
				className="p-4 w-full mr-2 border-solid border-8 border-black"
			></input>
			<button
				type="submit"
				className="p-6 px-10 bg-black text-white whitespace-nowrap"
			>
				Abone ol
			</button>
		</form>
	);
};
