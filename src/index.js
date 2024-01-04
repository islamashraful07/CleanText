function cleanHtmlTag(input) {
        // Remove unwanted classes and line breaks
    var stringStripper = /(\n|\r| class=(")?Mso[a-zA-Z]+(")?)/g;
    var output = input.replace(stringStripper, ' ');

    // Remove HTML comments
    var commentStripper = /<!--[\s\S]*?-->/g;
    output = output.replace(commentStripper, '');

    // Remove specified tags
    var tagStripper = /<(style|script|applet|embed|noframes|noscript)[^>]*>[\s\S]*?<\/\1>/gi;
    output = output.replace(tagStripper, '');

    // Remove specified attributes
    var badAttributes = ['style', 'start'];
    for (var i = 0; i < badAttributes.length; i++) {
        var attributeStripper = new RegExp(' ' + badAttributes[i] + '="(.*?)"', 'gi');
        output = output.replace(attributeStripper, '');
    }

    // Remove any remaining HTML tags
    output = output.replace(/<\/?[^>]+(>|$)/g, '');

    return output.trim();
}

module.exports = {
    cleanHtmlTag: cleanHtmlTag
};