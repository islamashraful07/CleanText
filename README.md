 
A Node.js module to clean HTML code by removing unwanted classes, line breaks, comments, specified tags, and attributes.

## Installation

Install the package using npm:

```bash
npm i text_clean_and_modify


## Usage

const cleanAndModify = require('text_clean_and_modify');

const inputHtml = '<p>This is <span class="unwanted">some</span> HTML code.</p>';
const cleanedHtml = cleanAndModify.cleanHtmlTag(inputHtml);
console.log(cleanedHtml);

## API

cleanHtmlTag(input: string): string

Cleans the input text  by removing unwanted HTML tags, classes, line breaks, comments, specified tags, and attributes.

input: The input text.

## Examples

const cleanHtmlCode = require('clean-html-code');

const inputHtml = '<p>This is <span class="unwanted">some</span> HTML code.</p>';
const cleanedHtml = cleanHtmlCode.cleanHtmlCode(inputHtml);
console.log(cleanedHtml);
// Output: 'This is some HTML code.'

