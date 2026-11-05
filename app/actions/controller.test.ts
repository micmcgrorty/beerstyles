import * as assert from "remix/assert";
import { describe, it } from "remix/test";

import { router } from "../router.ts";

async function get(path: string) {
	let response = await router.fetch(new Request(`http://localhost${path}`));
	return { status: response.status, html: await response.text() };
}

describe("routes", () => {
	it("renders the style list", async () => {
		let { status, html } = await get("/");
		assert.equal(status, 200);
		assert.ok(html.includes("<h1"));
		assert.ok(html.includes("American Light Lager"));
		assert.ok(html.includes('aria-current="page"'));
	});

	it("filters the style list from the URL", async () => {
		let { html } = await get("/?q=oatmeal");
		assert.ok(html.includes("Oatmeal Stout"));
		assert.ok(!html.includes("American Light Lager"));
	});

	it("renders the colour and bitterness charts", async () => {
		for (let path of ["/colour", "/bitterness"]) {
			let { status, html } = await get(path);
			assert.equal(status, 200, path);
			assert.ok(html.includes("Cream Ale"), path);
		}
	});

	it("renders a style page", async () => {
		let { status, html } = await get("/styles/saison");
		assert.equal(status, 200);
		assert.ok(html.includes("Saison"));
		assert.ok(html.includes("Commercial examples"));
	});

	it("returns 404 for unknown styles and pages", async () => {
		assert.equal((await get("/styles/not-a-beer")).status, 404);
		assert.equal((await get("/no/such/page")).status, 404);
	});
});
