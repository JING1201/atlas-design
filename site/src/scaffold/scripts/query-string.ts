/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable security/detect-possible-timing-attacks */
/* eslint-disable security/detect-object-injection */
export interface InputArgs {
	[name: string]: string | boolean | number | null | undefined | string[];
}

/**
 * Parses the query string into a map object.
 * Handles x-www-form-urlencoded query strings. See https://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
 * @param queryString Optional query string to parse. If not supplied, location.search will be used.
 */
export function parseQueryString(queryString?: string): {
	[name: string]: string;
} {
	let match: RegExpExecArray;
	const pl = /\+/g;
	const search = /([^&=]+)=?([^&]*)/g;
	const decode = (s: string) => decodeURIComponent(s.replace(pl, ' '));
	if (queryString === undefined) {
		queryString = location.search;
	}
	queryString = queryString.substring(1);
	const urlParams: { [name: string]: string } = {};
	while ((match = search.exec(queryString) as RegExpExecArray)) {
		urlParams[decode(match[1])] = decode(match[2]);
	}
	return urlParams;
}
