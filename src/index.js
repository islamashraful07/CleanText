function cleanHtmlTag(input) {
        
    var stringStripper = /(\n|\r| class=(")?Mso[a-zA-Z]+(")?)/g;
    var output = input.replace(stringStripper, ' ');

    
    var commentStripper = /<!--[\s\S]*?-->/g;
    output = output.replace(commentStripper, '');

    
    var tagStripper = /<(style|script|applet|embed|noframes|noscript)[^>]*>[\s\S]*?<\/\1>/gi;
    output = output.replace(tagStripper, '');

   
    var badAttributes = ['style', 'start'];
    for (var i = 0; i < badAttributes.length; i++) {
        var attributeStripper = new RegExp(' ' + badAttributes[i] + '="(.*?)"', 'gi');
        output = output.replace(attributeStripper, '');
    }

    
    output = output.replace(/<\/?[^>]+(>|$)/g, '');

    return output.trim();
}

module.exports = {
    cleanHtmlTag: cleanHtmlTag
};