'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export const HomePage = () => {
	const itemsPerPage = 6;
	const [currentPage, setCurrentPage] = useState(1);
	const [pagedItems, setPagedItems] = useState<JSX.Element[]>([]);

	useEffect(() => {
		const items = [...Array(20)].map((_, index) => (
			<div key={index} className="w-full md:w-1/2 px-4 pb-4">
				<Image
					src={`https://picsum.photos/seed/${index + 1}/1200/800`}
					alt="test"
					width={500}
					height={300}
				/>
				<h2 className="font-bold text-xl pb-4">
					{index + 1}) Sosyal Medya Toplumu Nasıl Etkiliyor?
				</h2>
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nobis
					accusamus impedit soluta corrupti voluptatibus mollitia, ut voluptatum
					aliquam magni nihil eos minima perferendis, ab quasi suscipit itaque
					magnam iusto! Ipsa dolore voluptas praesentium provident! Ratione
					doloremque velit, doloribus cumque voluptates facere sit
					necessitatibus omnis repellat ex deserunt dolor distinctio accusantium
					itaque? Voluptatem, molestiae doloribus. Vero sint in harum quae!
					Earum officiis sequi asperiores aspernatur odio atque cumque doloribus
					porro, soluta dolor veritatis eveniet quaerat nihil amet molestias
					esse et fuga illo dolore vero debitis nisi necessitatibus. Aliquam,
					incidunt laboriosam. Iusto eveniet, tenetur est quasi fuga cum. Qui
					quasi harum aut, reprehenderit repudiandae provident animi asperiores.
					Nam, repudiandae odio. Nesciunt, nulla dolores neque nisi possimus
					reprehenderit sit molestiae enim eos.
				</div>
				<div className="mt-4 mb-8">22 Haziran 2023</div>
			</div>
		));

		const start = (currentPage - 1) * itemsPerPage;
		const end = start + itemsPerPage;
		setPagedItems(items.slice(start, end));
	}, [currentPage]);

	const totalPages = Math.ceil(20 / itemsPerPage);
	return (
		<>
			<section id="main-category-container">
				<video
					className="wp-block-cover__video-background intrinsic-ignore w-full h-[50vh] object-cover relative top-0 left-0 z-0 mb-16"
					src="https://dotcompatterns.files.wordpress.com/2022/12/pexels-videos-2334654.mp4"
					data-object-fit="cover"
					autoPlay
					loop
					muted
					playsInline
				></video>
			</section>
			<main className="flex min-h-screen flex-col items-center justify-between p-24 overflow-hidden container m-auto">
				<section id="slider-video-section">
					{' '}
					<div className="flex flex-wrap">{pagedItems}</div>
					<div className="text-end">
						{[...Array(totalPages)].map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentPage(index + 1)}
								className={`px-4 ${
									index + 1 === currentPage ? 'font-bold' : ''
								}`}
							>
								{index + 1}
							</button>
						))}
					</div>
				</section>
				<section id="about-me" className="w-full">
					<div className="font-bold text-5xl my-8">PODCAST OLMALIYMIŞ</div>
					<div className="flex gap-x-8">
						<div>
							<Image
								src={
									'https://dunyadandotblog.files.wordpress.com/2023/03/photo_2021-11-29_22-06-41-edited.jpg'
								}
								alt="Profile photo"
								width={300}
								height={300}
								className="rounded-full"
							/>
						</div>
						<div className="flex flex-col gap-4">
							<div className="text-xl font-bold">Ali Aktaş</div>
							<div>Okuyamıyorum bari dinleyim diyenler için</div>
						</div>
					</div>
				</section>
				<section id="protein-mailbox-section"></section>
				<section id="ornek-sunumlar"></section>
				<section id="ornek-sunumlar-ofis"></section>
				<section id="category-sample-menu"></section>
				<section id="whatfor-mealbox"></section>
				<section id="referanslarimiz"></section>
				<section id="tedarikciler"></section>
				<section id="container"></section>
				<section id="mutfagimiz"></section>
				<section id="call-to-mealbox"></section>
				<section id="mealbox-references"></section>
			</main>
		</>
	);
};
