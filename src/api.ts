import axios from 'axios';
import type { z } from 'zod';
import {
	codeInputSchema,
	resultsSchema,
	urlInputSchema,
	type CodeInput,
	type Results,
	type UrlInput,
} from './schemas';

export enum HTTPMethod {
	GET = 'GET',
	POST = 'POST',
	PATCH = 'PATCH',
	DELETE = 'DELETE',
}

export enum HTTPStatusCode {
	OK = 200,
}

let BASE_URL;

if (import.meta.env.PROD) {
	BASE_URL = import.meta.env.VITE_SERVER_URL;
} else {
	BASE_URL = '/api';
}

const apiInstance = axios.create({
	baseURL: BASE_URL,
});

apiInstance.defaults.headers.common['Content-Type'] = 'application/json';

export default function api<Request, Response>({
	method,
	path,
	requestSchema,
	responseSchema,
}: {
	method: HTTPMethod;
	path: string;
	requestSchema: z.ZodType<Request>;
	responseSchema: z.ZodType<Response>;
}): (data: Request) => Promise<Response> {
	return function (requestData: Request) {
		requestSchema.parse(requestData);

		async function apiCall() {
			const response = await apiInstance({
				method,
				url: path,
				[method === HTTPMethod.GET ? 'params' : 'data']: requestData,
			});

			return responseSchema.parse(response.data);
		}

		return apiCall();
	};
}

export const evaluateByCode = api<CodeInput, Results>({
	method: HTTPMethod.POST,
	path: '/evaluation/code',
	requestSchema: codeInputSchema,
	responseSchema: resultsSchema,
});

export const evaluateByUrl = api<UrlInput, Results>({
	method: HTTPMethod.POST,
	path: '/evaluation/url',
	requestSchema: urlInputSchema,
	responseSchema: resultsSchema,
});
