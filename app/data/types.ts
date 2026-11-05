export interface VitalStatistics {
	og: string;
	fg: string;
	abv: string;
	ibu: string;
	srm: string;
}

export interface RawStyle {
	code: string;
	slug: string;
	name: string;
	overallImpression?: string;
	aroma?: string;
	appearance?: string;
	flavor?: string;
	mouthfeel?: string;
	comments?: string;
	history?: string;
	ingredients?: string;
	comparison?: string;
	entryInstructions?: string;
	vitalStatistics: VitalStatistics;
	commercialExamples: string[];
	tags: string[];
}

export interface RawCategory {
	number: number;
	name: string;
	styles: RawStyle[];
}
