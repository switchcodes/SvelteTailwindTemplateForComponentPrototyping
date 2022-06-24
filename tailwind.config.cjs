const config = {
	mode: "jit",
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			fontFamily: {
				oswald: ["Oswald", "sans-serif"],
			},
			colors: {
				base: "#ffffff",
				primary: {
					300: "#163112",
					400: "#387B2E",
					500: "#4AA43D",
					600: "#77BB6E",
					700: "#C9E4C5",
				},
			},
		},
	},

	plugins: [],
};

module.exports = config;
