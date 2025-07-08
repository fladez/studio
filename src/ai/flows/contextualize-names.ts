'use server';

/**
 * @fileOverview An AI agent that identifies people in a text and provides context with prior statements.
 *
 * - contextualizeNames - A function that highlights names and provides context using past statements.
 * - ContextualizeNamesInput - The input type for the contextualizeNames function.
 * - ContextualizeNamesOutput - The return type for the contextualizeNames function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContextualizeNamesInputSchema = z.object({
  text: z
    .string()
    .describe('The input text to identify people and provide context for.'),
});
export type ContextualizeNamesInput = z.infer<typeof ContextualizeNamesInputSchema>;

const ContextualizeNamesOutputSchema = z.object({
  highlightedText: z
    .string()
    .describe('The text with names highlighted and context added.'),
});
export type ContextualizeNamesOutput = z.infer<typeof ContextualizeNamesOutputSchema>;

export async function contextualizeNames(input: ContextualizeNamesInput): Promise<ContextualizeNamesOutput> {
  return contextualizeNamesFlow(input);
}

const getPastStatements = ai.defineTool(
  {
    name: 'getPastStatements',
    description: 'Retrieves past statements of a person.',
    inputSchema: z.object({
      personName: z
        .string()
        .describe('The name of the person to retrieve past statements for.'),
    }),
    outputSchema: z.array(z.string()),
  },
  async input => {
    // Placeholder implementation to return some past statements.
    // In a real application, this would call an external API or database.
    return [
      `Previous statement 1 from ${input.personName}.`,
      `Another statement from ${input.personName} in the past.`, //In a real application, this would call an external API or database
    ];
  }
);

const contextualizeNamesPrompt = ai.definePrompt({
  name: 'contextualizeNamesPrompt',
  input: {schema: ContextualizeNamesInputSchema},
  output: {schema: ContextualizeNamesOutputSchema},
  tools: [getPastStatements],
  prompt: `You are an AI assistant that enhances text by highlighting key people and providing context from their past statements.\n  Given the following text, identify the names of people mentioned. For each person, use the getPastStatements tool to retrieve their past statements.  Then, return the original text, but highlight each person's name using <strong> tags and include a snippet of their most relevant past statement immediately after their name in parentheses.\n  If no past statements are available, just highlight the name without adding any context.\n  Text: {{{text}}}`,
});

const contextualizeNamesFlow = ai.defineFlow(
  {
    name: 'contextualizeNamesFlow',
    inputSchema: ContextualizeNamesInputSchema,
    outputSchema: ContextualizeNamesOutputSchema,
  },
  async input => {
    const {output} = await contextualizeNamesPrompt(input);
    return output!;
  }
);
