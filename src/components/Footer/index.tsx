import React from 'react';
import { SubForm } from '../Content/HomePage/Form/sub-form';
import Image from 'next/image';
import {
	AiFillInstagram,
	AiFillTwitterCircle,
	AiFillYoutube,
} from 'react-icons/ai';

const Footer = () => {
	return (
		<footer className="w-full bg-[#ffffb9]">
			<section id="sub-form" className="h-[90vh] p-24 m-auto container">
				<div
					id="form-content"
					className="border-solid border-8 border-black p-8 bg-white"
				>
					<div className="font-bold text-5xl">
						ŞİMDİYE DEK 60.000 KİŞİ ABONE OLMADI AMA OLACAKTIR
					</div>
					<div className="mt-8 mb-4 text-lg">
						Haftalık olarak teslim edilen en son gelen kutunuza almak için
						postanızı girin.
					</div>
					<SubForm />
				</div>
			</section>
			<section id="social-media">
				<div className="relative h-[100vh] w-[100vw] -m-5 flex">
					<Image
						src="https://dotcompatterns.files.wordpress.com/2022/08/florian-haun-nj-fumab6di-unsplash.jpg"
						alt="Social media background"
						layout="fill"
						objectFit="cover"
					/>
					<div className="m-auto relative text-[#082167]">
						<div className="flex flex-col justify-center items-center z-50 bg-white rounded-lg gap-4 p-16 px-24">
							<div className="rounded-full z-50">
								<Image
									src="https://dunyadandotblog.files.wordpress.com/2023/02/410022_61101_1601280993.webp"
									alt="Dünyadan Logo"
									width={100}
									height={66}
									className="rounded-[inherit]"
								/>
							</div>
							<div className="text-4xl font-bold">Dünyadan</div>
							<div>Cevap bekleyen sorular hep vardır</div>
							<div className="flex gap-x-4">
								<AiFillInstagram size={30} />
								<AiFillTwitterCircle size={30} />
								<AiFillYoutube size={30} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
