import compress from "astro-compress";
import critters from "astro-critters";

export default {
	// TODO Place your site URL here
	// site: "",
	integrations: [
		critters(),
		compress({
			logger: 1,
		}),
	],
};
