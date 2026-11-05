import { get, route } from "remix/routes";

export const routes = route({
	home: get("/"),
	colour: get("/colour"),
	bitterness: get("/bitterness"),
	style: get("/styles/:slug"),
	notFound: get("/*path"),
});
