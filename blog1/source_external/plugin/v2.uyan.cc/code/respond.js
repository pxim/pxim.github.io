/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */

window.matchMedia = window.matchMedia || (function( doc, undefined ) {

        "use strict";

        var bool,
            docElem = doc.documentElement,
            refNode = docElem.firstElementChild || docElem.firstChild,
        // fakeBody required for <FF4 when executed in <head>
            fakeBody = doc.createElement( "body" ),
            div = doc.createElement( "div" );

        div.id = "mq-test-1";
        div.style.cssText = "position:absolute;top:-100em";
        fakeBody.style.background = "none";
        fakeBody.appendChild(div);

        return function(q){

            div.innerHTML = "&shy;<style media=\"" + q + "\"> #mq-test-1 { width: 42px; }</style>";

            docElem.insertBefore( fakeBody, refNode );
            bool = div.offsetWidth === 42;
            docElem.removeChild( fakeBody );

            return {
                matches: bool,
                media: q
            };

        };

    }( document ));





/*! Respond.js v1.3.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
(function( win ){

    "use strict";

    //exposed namespace
    var respond = {};
    win.respond = respond;

    //define update even in native-mq-supporting browsers, to avoid errors
    respond.update = function(){};

    //expose media query support flag for external use
    respond.mediaQueriesSupported	= win.matchMedia && win.matchMedia( "only all" ).matches;

    //if media queries are supported, exit here
    if( respond.mediaQueriesSupported ){
        return;
    }

    //define vars
    var doc = win.document,
        docElem = doc.documentElement,
        mediastyles = [],
        rules = [],
        appendedEls = [],
        parsedSheets = {},
        resizeThrottle = 30,
        head = doc.getElementsByTagName( "head" )[0] || docElem,
        base = doc.getElementsByTagName( "base" )[0],
        links = head.getElementsByTagName( "link" ),
        requestQueue = [],

    //loop stylesheets, send text content to translate
        ripCSS = function(){
            var styles = '@media screen and (max-width:405px){.post-list .post .children .post .children .uyanpost .Social-Login .Login,.post-list .post .children .post .children .post .children .uyanpost .Social-Login .Login{width:140px}.post-list .post .children .post .children .uyanpost .Social-Login .Login .txt,.post-list .post .children .post .children .post .children .uyanpost .Social-Login .Login .txt{width:57px}}@media screen and (max-width:343px){.post-list .post .children .post .children .uyanpost .Social-Login .Social,.post-list .post .children .post .children .post .children .uyanpost .Social-Login .Social{margin-bottom:40px;_margin-bottom:15px;*margin-bottom:15px !important}}@media screen and (max-width:543px){.post-list .post .children .post .children .uyanpost .Social-Login .Login{float:left}.post-list .post .children .post .children .post .children .uyanpost .Social-Login .Login{float:left}}@media screen and (max-width:496px){.post-list .post .children .uyanpost .Social-Login .Login{float:left}}@media screen and (max-width:447px){.post-list .uyanpost .Social-Login .Login{float:left}}@media screen and (max-width:400px){.uyanpost .Social-Login .Login{float:left}}';
            translate(styles, '');
        },

    //find media blocks in css text, convert to style blocks
        translate = function( styles, href, media ){
            var qs = styles.match(  /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi ),
                ql = qs && qs.length || 0;

            //try to get CSS path
            href = href.substring( 0, href.lastIndexOf( "/" ) );

            var repUrls	= function( css ){
                    return css.replace( /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g, "$1" + href + "$2$3" );
                },
                useMedia = !ql && media;

            //if path exists, tack on trailing slash
            if( href.length ){ href += "/"; }

            //if no internal queries exist, but media attr does, use that
            //note: this currently lacks support for situations where a media attr is specified on a link AND
            //its associated stylesheet has internal CSS media queries.
            //In those cases, the media attribute will currently be ignored.
            if( useMedia ){
                ql = 1;
            }

            for( var i = 0; i < ql; i++ ){
                var fullq, thisq, eachq, eql;

                //media attr
                if( useMedia ){
                    fullq = media;
                    rules.push( repUrls( styles ) );
                }
                //parse for styles
                else{
                    fullq = qs[ i ].match( /@media *([^\{]+)\{([\S\s]+?)$/ ) && RegExp.$1;
                    rules.push( RegExp.$2 && repUrls( RegExp.$2 ) );
                }

                eachq = fullq.split( "," );
                eql	= eachq.length;

                for( var j = 0; j < eql; j++ ){
                    thisq = eachq[ j ];
                    mediastyles.push( {
                        media : thisq.split( "(" )[ 0 ].match( /(only\s+)?([a-zA-Z]+)\s?/ ) && RegExp.$2 || "all",
                        rules : rules.length - 1,
                        hasquery : thisq.indexOf("(") > -1,
                        minw : thisq.match( /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/ ) && parseFloat( RegExp.$1 ) + ( RegExp.$2 || "" ),
                        maxw : thisq.match( /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/ ) && parseFloat( RegExp.$1 ) + ( RegExp.$2 || "" )
                    } );
                }
            }

            applyMedia();
        },

        lastCall,

        resizeDefer,

    // returns the value of 1em in pixels
        getEmValue = function() {
            var ret,
                div = doc.createElement('div'),
                body = doc.body,
                fakeUsed = false;

            div.style.cssText = "position:absolute;font-size:1em;width:1em";

            if( !body ){
                body = fakeUsed = doc.createElement( "body" );
                body.style.background = "none";
            }

            body.appendChild( div );

            docElem.insertBefore( body, docElem.firstChild );

            ret = div.offsetWidth;

            if( fakeUsed ){
                docElem.removeChild( body );
            }
            else {
                body.removeChild( div );
            }

            //also update eminpx before returning
            ret = eminpx = parseFloat(ret);

            return ret;
        },

    //cached container for 1em value, populated the first time it's needed
        eminpx,

    //enable/disable styles
        applyMedia = function( fromResize ){
            var name = "clientWidth",
                docElemProp = docElem[ name ],
                currWidth = doc.compatMode === "CSS1Compat" && docElemProp || doc.body[ name ] || docElemProp,
                styleBlocks	= {},
                lastLink = links[ links.length-1 ],
                now = (new Date()).getTime();

            //throttle resize calls
            if( fromResize && lastCall && now - lastCall < resizeThrottle ){
                win.clearTimeout( resizeDefer );
                resizeDefer = win.setTimeout( applyMedia, resizeThrottle );
                return;
            }
            else {
                lastCall = now;
            }

            for( var i in mediastyles ){
                if( mediastyles.hasOwnProperty( i ) ){
                    var thisstyle = mediastyles[ i ],
                        min = thisstyle.minw,
                        max = thisstyle.maxw,
                        minnull = min === null,
                        maxnull = max === null,
                        em = "em";

                    if( !!min ){
                        min = parseFloat( min ) * ( min.indexOf( em ) > -1 ? ( eminpx || getEmValue() ) : 1 );
                    }
                    if( !!max ){
                        max = parseFloat( max ) * ( max.indexOf( em ) > -1 ? ( eminpx || getEmValue() ) : 1 );
                    }

                    // if there's no media query at all (the () part), or min or max is not null, and if either is present, they're true
                    if( !thisstyle.hasquery || ( !minnull || !maxnull ) && ( minnull || currWidth >= min ) && ( maxnull || currWidth <= max ) ){
                        if( !styleBlocks[ thisstyle.media ] ){
                            styleBlocks[ thisstyle.media ] = [];
                        }
                        styleBlocks[ thisstyle.media ].push( rules[ thisstyle.rules ] );
                    }
                }
            }

            //remove any existing respond style element(s)
            for( var j in appendedEls ){
                if( appendedEls.hasOwnProperty( j ) ){
                    if( appendedEls[ j ] && appendedEls[ j ].parentNode === head ){
                        head.removeChild( appendedEls[ j ] );
                    }
                }
            }

            //inject active styles, grouped by media type
            for( var k in styleBlocks ){
                if( styleBlocks.hasOwnProperty( k ) ){
                    var ss = doc.createElement( "style" ),
                        css = styleBlocks[ k ].join( "\n" );

                    ss.type = "text/css";
                    ss.media = k;

                    //originally, ss was appended to a documentFragment and sheets were appended in bulk.
                    //this caused crashes in IE in a number of circumstances, such as when the HTML element had a bg image set, so appending beforehand seems best. Thanks to @dvelyk for the initial research on this one!
                    head.insertBefore( ss, lastLink.nextSibling );

                    if ( ss.styleSheet ){
                        ss.styleSheet.cssText = css;
                    }
                    else {
                        ss.appendChild( doc.createTextNode( css ) );
                    }

                    //push to appendedEls to track for later removal
                    appendedEls.push( ss );
                }
            }
        };

    //translate CSS
    ripCSS();

    //expose update for re-running respond later on
    respond.update = ripCSS;

    //adjust on resize
    function callMedia(){
        applyMedia( true );
    }
    if( win.addEventListener ){
        win.addEventListener( "resize", callMedia, false );
    }
    else if( win.attachEvent ){
        win.attachEvent( "onresize", callMedia );
    }
})(this);