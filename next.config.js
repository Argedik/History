// module.exports = {
// 	webpack: (config, { isServer }) => {
// 		if (!isServer) {
// 			config.resolve.fallback = {
// 				fs: false,
// 				module: false,
// 			};
// 		}

// 		return config;
// 	},
// };
module.exports = {
	images: {
		domains: [
			'fastly.picsum.photos',
			'picsum.photos',
			'dunyadandotblog.files.wordpress.com',
			'dotcompatterns.files.wordpress.com',
		],
	},
};
