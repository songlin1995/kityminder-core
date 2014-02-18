( function () {
    var utils = KM.utils;
    KM.registerWidget( 'markers', {
        tpl: "<ul class='icon-list'>" +
            "<li value='1' type='setpriority'><span class='icon' style='background:url(../dialogs/icons/iconpriority.png) 0 0'></span><span><%= priority %>1</span></li>" +
            "<li value='2' type='setpriority'><span class='icon' style='background:url(../dialogs/icons/iconpriority.png) -20px 0'></span><span><%= priority %>2</span></li>" +
            "<li value='3' type='setpriority'><span class='icon' style='background:url(../dialogs/icons/iconpriority.png) -40px 0'></span><span><%= priority %>3</span></li>" +
            "<li value='4' type='setpriority'><span class='icon' style='background:url(../dialogs/icons/iconpriority.png) -60px 0'></span><span><%= priority %>4</span></li>" +
            "<li value='5' type='setpriority'><span class='icon' style='background:url(../dialogs/icons/iconpriority.png) -80px 0'></span><span><%= priority %>5</span></li>" +
            "</ul>" +
            "<ul class='icon-list'>" +
            "<li value='1' type='setprogress'><span class='icon' style='background:url(../dialogs/icons/iconprogress.png) 0 0'></span><span><%= progress.notdone %></span></li>" +
            "<li value='2' type='setprogress'><span class='icon' style='background:url(../dialogs/icons/iconprogress.png) -20px 0'></span><span><%= progress.quarterdone %></span></li>" +
            "<li value='3' type='setprogress'><span class='icon' style='background:url(../dialogs/icons/iconprogress.png) -40px 0'></span><span><%= progress.halfdone %></span></li>" +
            "<li value='4' type='setprogress'><span class='icon' style='background:url(../dialogs/icons/iconprogress.png) -60px 0'></span><span><%= progress.threequartersdone %></span></li>" +
            "<li value='5' type='setprogress'><span class='icon' style='background:url(../dialogs/icons/iconprogress.png) -80px 0'></span><span><%= progress.done %></span></li>" +
            "</ul>",
        initContent: function ( km ) {
            var lang = km.getLang( 'dialogs.markers' );
            if ( lang ) {
                var html = $.parseTmpl( this.tpl, lang );
            }
            this.root().html( html );
        },
        initEvent: function ( km, $w ) {
            $w.on( "click", "li", function () {
                var $this = $( this );
                var val = $this.val();
                var type = $this.attr( "type" );
                km.execCommand( type, val );
            } );
        },
        buttons: {
            'ok': {
                exec: function ( km, $w ) {
                    var href = $( '#kmui-link-Jhref' ).val().replace( /^\s+|\s+$/g, '' );

                    if ( href ) {
                        km.execCommand( 'link', {
                            'href': href,
                            'target': $( "#kmui-link-Jtarget:checked" ).length ? "_blank" : '_self',
                            'title': $( "#kmui-link-Jtitle" ).val().replace( /^\s+|\s+$/g, '' ),
                            '_href': href
                        } );
                    }
                }
            },
            'cancel': {}
        },
        width: 200,

    } )
} )();