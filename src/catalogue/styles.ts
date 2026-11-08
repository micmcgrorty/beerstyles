import { BJCP_2015 } from "./bjcp-2015/edition.ts";
import { createCatalogue } from "./catalogue.ts";

/**
 * The catalogue the app shows. To change edition, build it from a different
 * Edition here; nothing else in the app names one.
 */
export const { edition, allStyles, getStyle, searchStyles, loadGuideline } =
	createCatalogue(BJCP_2015);
