 
A Node.js module to clean HTML code by removing unwanted classes, line breaks, comments, specified tags, and attributes.

## Installation

### Install the package using npm:

npm i text_clean_and_modify


## Usage

const cleanAndModify = require('text_clean_and_modify');

const inputHtml = 'The string with html tags';

const cleanedHtml = cleanAndModify.cleanHtmlTag(inputHtml);


## API

cleanHtmlTag(input: string): string

Cleans the input text  by removing unwanted HTML tags, classes, line breaks, comments, specified tags, and attributes.

input: The input text.

## Examples
```html
const cleanHtmlCode = require('text_clean_and_modify');
const inputHtml = '<tag>This is <tag2 class="unwanted">some</tag2> HTML code.</tag>';
const cleanedHtml = cleanHtmlCode.cleanHtmlCode(inputHtml);
console.log(cleanedHtml);

Output: 'This is some HTML code.'

