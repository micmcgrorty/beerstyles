import { BJCP_2021 } from "./bjcp-2021/edition.ts";
import { createCatalogue } from "./catalogue.ts";

/**
 * The catalogue the app shows. To change edition, build it from a different
 * Edition here; nothing else in the app names one.
 */
export const { edition, allStyles, getStyle, searchStyles, loadGuideline, loadStyle } =
	createCatalogue(BJCP_2021);
