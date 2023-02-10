import { z } from 'zod';

export const resultsSchema = z.object({
	elements_evaluated_count: z.number(),
	errors_found_count: z.number(),
	results_details: z.array(
		z.object({
			test_name: z.string(),
			element_count: z.number(),
			error_count: z.number(),
		})
	),
});

export const codeInputSchema = z.object({
	code: z.string(),
});

export const urlInputSchema = z.object({
	url: z.string().url(),
});

export type Results = z.infer<typeof resultsSchema>;
export type CodeInput = z.infer<typeof codeInputSchema>;
export type UrlInput = z.infer<typeof urlInputSchema>;
