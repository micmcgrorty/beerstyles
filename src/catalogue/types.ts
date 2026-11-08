export interface VitalStatistics {
	og: string;
	fg: string;
	abv: string;
	ibu: string;
	srm: string;
}

/** A style's summary, as stored in the catalogue: everything the list, search and charts need. */
export interface RawStyle {
	code: string;
	slug: string;
	name: string;
	overallImpression?: string;
	vitalStatistics: VitalStatistics;
	commercialExamples: string[];
	tags: string[];
}

export interface RawCategory {
	number: number;
	name: string;
	styles: RawStyle[];
}

/** A style's long-form guideline text, loaded on demand for its page. */
export interface Guideline {
	aroma?: string;
	appearance?: string;
	flavor?: string;
	mouthfeel?: string;
	comments?: string;
	history?: string;
	ingredients?: string;
	comparison?: string;
	entryInstructions?: string;
	/** Named sub-types a style covers, e.g. the kinds of Specialty IPA. */
	currentlyDefinedTypes?: string;
	/** How a style is split by strength, e.g. table, standard and super Saisons. */
	strengthClassifications?: string;
}
