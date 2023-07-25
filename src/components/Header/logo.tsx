import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
	className?: string;
}

export const Logo = ({ className }: Props) => {
	return (
		<div>
			<Link href="/" className="flex items-center">
				<Image
					src="/assets/images/logo.webp"
					alt="Dünyadan Logo"
					width={50}
					height={50}
					className="mr-3"
				/>
				<h1
					className={`${className}font-bold text-black md:text-white text-2xl self-center whitespace-nowrap`}
				>
					Dünyadan
				</h1>
			</Link>
		</div>
	);
};
