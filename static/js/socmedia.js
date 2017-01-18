(function() {
    /* Social-media sharing */
    jQuery('.share-window').click(function(event) {
        var width  = 575,
            height = 400,
            left   = (jQuery(window).width()  - width)  / 2,
            top    = (jQuery(window).height() - height) / 2,
            url    = this.href,
            opts   = 'status=1' +
                     ',width='  + width  +
                     ',height=' + height +
                     ',top='    + top    +
                     ',left='   + left;
        window.open(url, 'sharearticle', opts);
        return false;
    });
    /* Direct link sharing */
    jQuery('.direct-link a').popover({
        placement: 'bottom',
        html: 'true',
        title : '<button type="button" id="close" class="close" onclick="jQuery(&quot;.direct-link a&quot;).popover(&quot;hide&quot;)"></button>',
        content: function () {
            return jQuery('#share-url .content').html();
        }
    });
    /* Embed link sharing */
    jQuery('.direct-embed a').popover({
        placement: 'bottom',
        html: 'true',
        title : '<button type="button" id="close" class="close" onclick="jQuery(&quot;.direct-embed a&quot;).popover(&quot;hide&quot;)"></button>',
        content: function () {
            return jQuery('#embed-url .content').html();
        }
    });
})();

