!function(a,b){"use strict";function c(a){return a=null===a||a===b?"":a.toString(),a=a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),a=a.replace(/ /g,'<span class="ccm-translator-original-space"> </span>'),a=a.replace(/\t/g,'<span class="ccm-translator-original-tab"> </span>'),a=a.replace(/\n/g,'<span class="ccm-translator-original-lf"></span><br />'),a=a.replace(/(%(\d+\$)?[a-z])/g,'<span class="ccm-translator-original-copy">$1</span>'),a=a.replace(/(&lt;\/?[a-zA-Z].*?&gt;)/g,'<span class="ccm-translator-original-copy">$1</span>')}function d(a,b){var c;return c=/^(\s+)\S/.exec(a),c&&(b=c[1]+b),c=/\S(\s+)$/.exec(a),c&&(b+=c[1]),b}function e(b,c){return a('<textarea rows="5" class="form-control" />').val("string"==typeof c?c:"").on("keydown",function(a){switch(a.keyCode||a.which){case i:if(b.translation.originalContains("\t"))if(a.preventDefault(),"selectionStart"in this&&"selectionEnd"in this){var c=this.selectionStart,d=this.selectionEnd;this.value=this.value.substring(0,c)+"\t"+this.value.substring(d),this.selectionEnd=this.selectionStart=c+1}else window.document.selection&&window.document.selection.createRange&&(this.focus(),document.selection.createRange().text="\t")}})}function f(b,c){a.extend(this,b),this.hasContext="context"in b,this.isPlural="originalPlural"in b,this.isTranslated="translations"in b,this.translator=c,!this.translator.approvalSupport||"isApproved"in b||(this.isApproved=!1),this.translator.translations.push(this)}function g(b){this.containerID=b.container,this.height=b.height,this.saveAction=b.saveAction,this.plurals=a.extend(!0,{},b.plurals),this.translations=[],this.approvalSupport=b.approvalSupport!==!1,this.referencePatterns=a.extend(!0,{file:null,file_line:null},b.referencePatterns),this.on={uiLaunched:"onUILaunched"in b?b.onUILaunched:null,beforeActivatingTranslation:"onBeforeActivatingTranslation"in b?b.onBeforeActivatingTranslation:null,currentTranslationChanged:"onCurrentTranslationChanged"in b?b.onCurrentTranslationChanged:null},this.approvalSupport&&(this.canModifyApproved=b.canModifyApproved===!0);for(var c=0,d=b.translations.length;c<d;c++)new f(b.translations[c],this);this.busy=!1,this.getInitialTranslationIndex=b.getInitialTranslationIndex?b.getInitialTranslationIndex:null}if(!window.ccmTranslator){var h=500,i=9,j=13,k={AskDiscardDirtyTranslation:"The current item has changed.\nIf you proceed you will lose your changes.\n\nDo you want to proceed anyway?",Approve_and_Continue:"Approve & Continue",Approved:"Approved",Comments:"Comments",Context:"Context",ExamplePH:"Example: %s",Filter:"Filter",Keystroke_ctrl_return:"[CTRL]+[RETURN]",Keystroke_ctrl_shift_return:"[CTRL]+[SHIFT]+[RETURN]",No_newlines_in_translations_please:"Please don't use new lines in translations (there's no new line in the source string)",Original_String:"Original String",Please_fill_in_all_plurals:"Please fill-in all plural forms",Plural_Original_String:"Plural Original String",References:"References",Save_and_Continue:"Save & Continue",Search_for_:"Search for...",Search_in_contexts:"Search in contexts",Search_in_originals:"Search in originals",Search_in_translations:"Search in translations",Show_approved:"Show approved",Show_translated:"Show translated",Show_unapproved:"Show unapproved",Show_untranslated:"Show untranslated",Singular_Original_String:"Singular Original String",Toggle_Dropdown:"Toggle Dropdown",Translate:"Translate",Translation:"Translation",TranslationIsApproved_WillNeedApproval:"This translation is approved: your changes will need approval.",TranslationIsNotApproved:"This translation is not approved.",PluralNames:{zero:"Zero",one:"One",two:"Two",few:"Few",many:"Many",other:"Other"}},l={colFilter:"col-md-12",colOriginal:"col-md-6",colTranslations:"col-md-6"};f.prototype={buildListItem:function(){var a=this;this.li=document.createElement("li"),this.li.ccmTranslation=this,this.li.className="list-group-item clearfix"+(this.isTranslated?" list-group-item-success":"");var b=document.createElement("span");b.textContent=b.innerText=this.original,this.li.appendChild(b),this.liTranslated=document.createElement("span"),this.translationUpdated(!0),this.li.appendChild(this.liTranslated),this.translator.UI.$list[0].appendChild(this.li),this.li.onclick=function(){a.translator.setCurrentTranslation(a)}},translationUpdated:function(b){this.liTranslated.textContent=this.liTranslated.innerText=this.isTranslated?this.translations[0]:"",b!==!0&&(this.isTranslated?a(this.li).addClass("list-group-item-success"):a(this.li).removeClass("list-group-item-success"))},translatedSaved:function(a,b){null===a?(delete this.translations,this.isTranslated=!1,this.translator.approvalSupport&&(this.isApproved=!1)):(this.translations=a,this.isTranslated=!0,!this.translator.approvalSupport||b!==!0&&b!==!1||(this.isApproved=b)),this.translationUpdated()},contextContains:function(a){return this.hasContext!==!1&&this.context.toLowerCase().indexOf(a)>=0},originalContains:function(a){return this.original.toLowerCase().indexOf(a)>=0||this.isPlural===!0&&this.originalPlural.toLowerCase().indexOf(a)>=0},translationContains:function(a){if(this.isTranslated===!1)return!1;for(var b=this.translations.length,c=0;c<b;c++)if(this.translations[c].toLowerCase().indexOf(a)>=0)return!0;return!1},satisfyFilter:function(a){if(a.showTranslated===!1&&this.isTranslated===!0)return!1;if(a.showUntranslated===!1&&this.isTranslated===!1)return!1;if(a.showApproved===!1&&this.isApproved===!0)return!1;if(a.showUnapproved===!1&&this.isApproved===!1)return!1;if(a.text.length>0){var b=!1;if(b=b||a.searchInContexts&&this.contextContains(a.lowerCaseText),b=b||a.searchInOriginals&&this.originalContains(a.lowerCaseText),b=b||a.searchInTranslations&&this.translationContains(a.lowerCaseText),b===!1)return!1}return!0},applyFilter:function(){this.li.style.display=this.satisfyFilter(this.translator.appliedFilter)?"":"none"}};var m=function(){function b(b){if(this.UI={},this.translation=b,this.UI.$container=this.translation.translator.UI.$translation,this.UI.$container.empty(),this.UI.$container.closest(".panel").css("visibility","visible"),this.buildOriginalUI(),this.buildTranslationUI(),this.translation.translator.approvalSupport&&(this.translation.translator.canModifyApproved?this.UI.$container.append(a('<label class="control-label inline" />').text(k.Approved).prepend(this.UI.$approved=a('<input type="checkbox" '+(this.translation.isApproved?' checked="checked"':"")+" />"))):this.UI.$container.append(a("<p />").text(this.translation.isApproved?k.TranslationIsApproved_WillNeedApproval:k.TranslationIsNotApproved))),"comments"in this.translation||"context"in this.translation||"references"in this.translation){var c;if(this.UI.$container.append(c=a("<dl />")),"comments"in this.translation&&c.append(a("<dt />").text(k.Comments)).append(a("<dd />").text(this.translation.comments)),"context"in this.translation&&c.append(a("<dt />").text(k.Context)).append(a("<dd />").text(this.translation.context)),"references"in this.translation){var d,e=this.translation.translator.referencePatterns;c.append(a("<dt />").text(k.References)).append(d=a('<dd style="overflow: hidden; white-space: pre" />')),a.each(this.translation.references,function(b,c){b>0&&d.append("<br />");var f,g;c.length>1&&null!==c[1]?(f=c.join(":"),g=e.file_line):(f=c[0],g=e.file),g?d.append(a('<a target="_blank" />').text(f).attr("href",g.replace(/\[\[FILE\]\]/g,c[0]).replace(/\[\[LINE\]\]/g,c[1]))):d.append(a("<span />").text(f))}),d.attr("title",d.text())}}var f=a(this.translation.li);f.addClass("list-group-item-info");var g=null,h=f.closest("ul"),i=f.position().top-h.position().top,j=h.scrollTop();if(i<0)g=j+i;else{var l=i+f.outerHeight(),m=h.height();l>m&&(g=j+(l-m))}null!==g&&h.animate({scrollTop:g},50)}function f(a){b.call(this,a)}function g(a){b.call(this,a)}return b.prototype={getTranslatedState:function(a){var b=this.getTranslatedStrings(a);if(null===b||b===!1)return b;var c={strings:b};return"$approved"in this.UI&&(c.approved=!!this.UI.$approved.is(":checked")),c},isDirty:function(){var a=this.getTranslatedState();if(null===a)return!!this.translation.isTranslated;if(this.translation.isTranslated===!1)return!0;for(var b=!1,c=a.strings.length,d=0;d<c;d++)if(a.strings[d]!==this.translation.translations[d]){b=!0;break}return"approved"in a&&a.approved!==this.translation.isApproved&&(b=!0),b},buildOriginalUI:function(){var b=this;b._buildOriginalUI(),b.UI.$container.find("div.ccm-translator-original span.ccm-translator-original-copy").on("click",function(){b.translation.translator.setTranslationText(a(this).text(),!1)})},dispose:function(){a(this.translation.li).removeClass("list-group-item-info"),this.UI.$container.empty().closest(".panel").css("visibility","hidden")}},a.extend(!0,f.prototype,b.prototype,{_buildOriginalUI:function(){this.UI.$container.append(a('<div class="form-group" />').append(a('<label class="control-label" />').text(k.Original_String)).append(a('<div class="form-control ccm-translator-original" />').html(c(this.translation.original))))},buildTranslationUI:function(){this.UI.$container.append(a('<div class="form-group" />').append(a('<label class="control-label" />').text(k.Translation)).append(this.UI.$translated=e(this,this.translation.isTranslated?this.translation.translations[0]:""))),this.UI.$translated.focus()},getCurrentTextInput:function(){return this.UI.$translated},getTranslatedStrings:function(b){var c=a.trim(this.UI.$translated.val());return""===c?null:(c=d(this.translation.original,c),b&&c.indexOf("\n")>=0&&this.translation.original.indexOf("\n")<0?(window.alert(k.No_newlines_in_translations_please),!1):[c])}}),a.extend(!0,g.prototype,b.prototype,{_buildOriginalUI:function(){this.UI.$container.append(a('<div class="form-group" />').append(a('<label class="control-label" />').text(k.Singular_Original_String)).append(a('<div class="form-control ccm-translator-original" />').html(c(this.translation.original)))).append(a('<div class="form-group" />').append(a('<label class="control-label" />').text(k.Plural_Original_String)).append(a('<div class="form-control ccm-translator-original" />').html(c(this.translation.originalPlural))))},showTranslationTab:function(a,b){this.UI.$tabHeaders.find("li.active").removeClass("active"),this.UI.$tabBodies.find(".tab-pane.active").removeClass("active"),this.UI.$tabHeaders.find('li[data-key="'+a+'"]').addClass("active");var c=this.UI.$tabBodies.find('.tab-pane[data-key="'+a+'"]').addClass("active");b&&c.find("textarea,input").focus()},buildTranslationUI:function(){var b=this;this.UI.$container.append(a('<div class="form-group" />').append(a('<label class="control-label" />').text(k.Translation)).append(this.UI.$tabHeaders=a('<ul class="nav nav-tabs" />')).append(this.UI.$tabBodies=a('<div class="tab-content" />')));var c=0;this.UI.$translated={};var d=null;a.each(this.translation.translator.plurals,function(f,g){null===d&&(d=f),b.UI.$tabHeaders.append(a('<li data-key="'+f+'"'+(0===c?' class="active"':"")+" />").append(a('<a href="#" />').text(k.PluralNames[f]))),b.UI.$tabBodies.append(a('<div class="tab-pane'+(0===c?" active":"")+'" data-key="'+f+'" />').append(a("<p />").text(k.ExamplePH.replace(/%s/,g))).append(b.UI.$translated[f]=e(this,b.translation.isTranslated?b.translation.translations[c]:""))),c++}),this.UI.$tabHeaders.find("a").on("click",function(c){c.preventDefault(),b.showTranslationTab(a(this).closest("li").attr("data-key"))}),this.UI.$translated[d].focus()},getCurrentTextInput:function(){return this.UI.$tabBodies.find(".tab-pane.active").find("textarea,input")},getTranslatedStrings:function(b){var c=this,e=[],f=this.translation.original,g=(this.translation.original+this.translation.originalPlural).indexOf("\n")>=0,h=!1,i=null,j=null;if(a.each(this.translation.translator.plurals,function(b){var k=a.trim(c.UI.$translated[b].val());k.length>0?(h=!0,g===!1&&k.indexOf("\n")>=0&&(j=b),k=d(f,k)):null===i&&(i=b),e.push(k)}),h===!1)return null;if(b===!0){if(null!==j)return this.showTranslationTab(j,!0),window.alert(k.No_newlines_in_translations_please),!1;if(null!==i)return this.showTranslationTab(i,!0),window.alert(k.Please_fill_in_all_plurals),!1}return e}}),{Singular:f,Plural:g}}();g.prototype={launch:function(){var b=this;this.UI={},this.UI.$container=a(this.containerID),delete this.containerID;var c=this.height;delete this.height,(!c||c<200)&&(c=200),this.UI.$container.append(a('<div class="row" />').append(a('<div class="'+l.colFilter+'" />').append(a('<div class="panel panel-info" />').append(a('<div class="panel-heading" />').append(a('<div class="panel-title" />').text(k.Filter))).append(a('<div class="panel-body" />').append(a('<div class="input-group">').append(a('<div class="input-group-btn" />').append(this.UI.$showTranslated=a('<a href="javascript:void(0)" class="btn btn-default" />').text(k.Show_translated)).append(this.UI.$showUntranslated=a('<a href="javascript:void(0)" class="btn btn-default" />').text(k.Show_untranslated))).append(this.UI.$searchText=a('<input type="text" class="form-control" />').attr("placeholder",k.Search_for_)).append(a('<div class="input-group-btn" />').append(this.UI.$searchButton=a('<button type="button" class="btn btn-primary"><span class="fa fa-search"></span></button>')).append(a('<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false" />').append(a('<span class="caret" />'))).append(a('<ul class="dropdown-menu dropdown-menu-right" role="menu" />').append(a("<li />").append(this.UI.$searchInOriginals=a('<a href="javascript:void(0)" />').text(" "+k.Search_in_originals).prepend(a('<i class="fa" />')))).append(a("<li />").append(this.UI.$searchInTranslations=a('<a href="javascript:void(0)" />').text(" "+k.Search_in_translations).prepend(a('<i class="fa" />')))).append(a("<li />").append(this.UI.$searchInContexts=a('<a href="javascript:void(0)" />').text(" "+k.Search_in_contexts).prepend(a('<i class="fa" />')))).append('<li class="divider"></li>').append(a("<li />").append(this.UI.$showUnapproved=a('<a href="javascript:void(0)" />').text(" "+k.Show_unapproved).prepend(a('<i class="fa" />')))).append(a("<li />").append(this.UI.$showApproved=a('<a href="javascript:void(0)" />').text(" "+k.Show_approved).prepend(a('<i class="fa" />'))))))))))).append(a('<div class="row" />').append(a('<div class="'+l.colOriginal+' ccm-translator-col-original" />').append(a('<div class="panel panel-primary" />').append(a('<div class="panel-heading clearfix" />').append(a("<span />").text(k.Original_String)).append(a("<span />").text(k.Translation))).append(this.UI.$list=a('<ul class="list-group" />').css("height",c+"px")))).append(a('<div class="'+l.colTranslations+' ccm-translator-col-translations" />').append(a('<div class="panel panel-primary" />').append(a('<div class="panel-heading" />').text(k.Translate)).append(this.UI.$translation=a('<div class="panel-body" />')).append(a('<div class="panel-footer text-center" />').append(a('<button class="btn btn-primary ccm-translator-savecontinue" data-toggle="tooltip" style="margin: 0 5px" />').attr("title",k.Keystroke_ctrl_return).data("text",k.Save_and_Continue).text(k.Save_and_Continue).on("click",function(){b.saveAndContinue()})).append(a('<button class="btn btn-success ccm-translator-savecontinue ccm-translator-approvecontinue" data-toggle="tooltip" style="margin: 0 5px" />').attr("title",k.Keystroke_ctrl_shift_return).data("text",k.Approve_and_Continue).text(k.Approve_and_Continue).on("click",function(){b.saveAndContinue(null,!0)})))))),this.UI.$container.find('[data-toggle="tooltip"]').tooltip(),this.on.uiLaunched&&this.on.uiLaunched(this);var d=this.translations.length;if(d<h){this.UI.$searchButton.remove();var e=null;this.UI.$searchText.on("change keydown keyup keypress",function(){e&&clearTimeout(e),e=setTimeout(function(){e=null,b.filter()},100)})}else this.UI.$searchText.on("keypress",function(a){(a.keyCode||a.charCode)===j&&b.filter()}),this.UI.$searchButton.on("click",function(){b.filter()});for(var f=!1,g=0;g<d;g++)this.translations[g].buildListItem(),this.translations[g].hasContext&&(f=!0);if(this.appliedFilter={text:"",searchInOriginals:!0,searchInTranslations:!0,searchInContexts:!1,showUnapproved:!0,showApproved:!0,showTranslated:!0,showUntranslated:!0},this.UI.$searchInOriginals.on("click",function(){b.filter({searchInOriginals:!b.appliedFilter.searchInOriginals})}),this.UI.$searchInTranslations.on("click",function(){b.filter({searchInTranslations:!b.appliedFilter.searchInTranslations})}),this.UI.$showTranslated.on("click",function(){b.filter({showTranslated:!b.appliedFilter.showTranslated})}),this.UI.$showUntranslated.on("click",function(){b.filter({showUntranslated:!b.appliedFilter.showUntranslated})}),this.approvalSupport?(this.UI.$showUnapproved.on("click",function(){b.filter({showUnapproved:!b.appliedFilter.showUnapproved})}),this.UI.$showApproved.on("click",function(){b.filter({showApproved:!b.appliedFilter.showApproved})})):(this.UI.$showUnapproved.closest("li").prev().remove(),this.UI.$showUnapproved.remove(),this.UI.$showApproved.remove(),delete this.appliedFilter.showUnapproved,delete this.appliedFilter.showApproved,delete this.UI.$showUnapproved,delete this.UI.$showApproved),this.approvalSupport&&this.canModifyApproved||this.UI.$container.find(".ccm-translator-approvecontinue").remove(),f?this.UI.$searchInContexts.on("click",function(){b.filter({searchInContexts:!b.appliedFilter.searchInContexts})}):this.UI.$searchInContexts.remove(),this.viewAppliedFilter(),a(window).on("beforeunload",function(){if(b.currentTranslationView&&b.currentTranslationView.isDirty())return k.AskDiscardDirtyTranslation}),d>0){var i=0;this.getInitialTranslationIndex&&(i=this.getInitialTranslationIndex()||0),this.setCurrentTranslation(this.translations[i])}this.UI.$container.on("keydown",function(a){switch(a.keyCode||a.which){case j:a.ctrlKey&&(a.preventDefault(),setTimeout(function(){b.saveAndContinue(!1,a.shiftKey)},0))}})},viewAppliedFilter:function(){var a=this.appliedFilter;this.UI.$searchText.text()!==a.text&&this.UI.$searchText.text(a.text),this.UI.$searchInOriginals.find("i").removeClass("fa-check-square-o fa-square-o").addClass(a.searchInOriginals?"fa-check-square-o":"fa-square-o"),this.UI.$searchInTranslations.find("i").removeClass("fa-check-square-o fa-square-o").addClass(a.searchInTranslations?"fa-check-square-o":"fa-square-o"),this.UI.$searchInContexts.find("i").removeClass("fa-check-square-o fa-square-o").addClass(a.searchInContexts?"fa-check-square-o":"fa-square-o"),this.approvalSupport&&(this.UI.$showUnapproved.find("i").removeClass("fa-check-square-o fa-square-o").addClass(a.showUnapproved?"fa-check-square-o":"fa-square-o"),this.UI.$showApproved.find("i").removeClass("fa-check-square-o fa-square-o").addClass(a.showApproved?"fa-check-square-o":"fa-square-o")),this.UI.$showTranslated.removeClass("btn-default btn-primary").addClass(a.showTranslated?"btn-primary":"btn-default"),this.UI.$showUntranslated.removeClass("btn-default btn-primary").addClass(a.showUntranslated?"btn-primary":"btn-default")},filter:function(b){var c=this,d=a.extend(!0,{},this.appliedFilter,b,{text:this.UI.$searchText.val()}),e=!1;if(a.each(d,function(a,b){if(b!==c.appliedFilter[a]){switch(a){case"searchInOriginals":case"searchInTranslations":case"searchInContexts":if(""===c.appliedFilter.text)return}return e=!0,!1}}),this.appliedFilter=d,this.viewAppliedFilter(),e){this.appliedFilter.lowerCaseText=this.appliedFilter.text.toLowerCase();for(var f=this.translations.length,g=0;g<f;g++)this.translations[g].applyFilter()}},setCurrentTranslation:function(a){var b=this;if(b.busy)return!1;if(b.currentTranslationView){if(b.currentTranslationView.translation===a)return;if(b.currentTranslationView.isDirty()&&!window.confirm(k.AskDiscardDirtyTranslation))return}var c=function(){b.currentTranslationView&&(b.currentTranslationView.dispose(),b.currentTranslationView=null,b.on.currentTranslationChanged&&b.on.currentTranslationChanged(b)),a&&(b.currentTranslationView=a.isPlural?new m.Plural(a):new m.Singular(a),b.on.currentTranslationChanged&&b.on.currentTranslationChanged(b))};b.on.beforeActivatingTranslation?(b.setBusy(!0),b.on.beforeActivatingTranslation(b,a,function(a){b.setBusy(!1),a!==!1&&c()})):c()},setTranslationText:function(a,b){var c=this.currentTranslationView.getCurrentTextInput(),d=c.val();if(b)c.val(a);else if(""!==a){var e=c[0];if(e.focus(),"selectionStart"in e&&"selectionEnd"in e){var f=d.substring(0,e.selectionStart),g=d.substring(e.selectionEnd);e.value=f+a+g,e.selectionEnd=e.selectionStart=f.length+a.length}else window.document.selection&&window.document.selection.createRange?(e.focus(),document.selection.createRange().text=a):c.val(a)}return c.trigger("change"),c},setBusy:function(b){var c=this;c.busy=!!b,c.UI.$container.find("button.ccm-translator-savecontinue").each(function(){var b=a(this);c.busy?b.css("width",b.outerWidth()+"px").html('<span class="fa fa-spinner fa-spin"></span>'):b.css("width","auto").text(b.data("text"))})},saveAndContinue:function(b,c){var d=this;if(!this.busy){if(d.approvalSupport&&c&&d.currentTranslationView.UI.$approved.prop("checked",!0).trigger("change"),this.currentTranslationView.isDirty()===!1)return void this.gotoNextTranslation(b);var e=this.currentTranslationView.getTranslatedState(!0);if(e!==!1){var f=this.currentTranslationView.translation,g={};g.id=f.id,null===e?g.clear=1:(g.translated=e.strings,"approved"in e&&(g.approved=e.approved?1:0)),this.setBusy(!0),a.isFunction(this.saveAction)?this.saveAction(f,g,function(a){d.setBusy(!1),a?window.alert(a):d.gotoNextTranslation(b)}):a.ajax({type:"POST",url:this.saveAction,data:g,dataType:"json"}).always(function(){d.setBusy(!1)}).fail(function(a){a.responseJSON&&a.responseJSON.errors?window.alert(a.responseJSON.errors.join("\n")):window.alert(a.responseText)}).done(function(a){return a&&a.error?void window.alert(a.errors.join("\n")):(f.translatedSaved(e.strings,e.approved),void d.gotoNextTranslation(b))})}}},gotoNextTranslation:function(b){var c=this.UI.$list.children(":visible");if(0===c.length)return void this.setCurrentTranslation(null);var d=0;if(this.currentTranslationView){var e=a.inArray(this.currentTranslationView.translation.li,c);b?e>=0&&(d=e-1,d<0&&(d=c.length-1)):e>=0&&e<c.length-1&&(d=e+1)}this.setCurrentTranslation(c[d].ccmTranslation)}};var n=function(){function a(){for(;c.length>0;)c.splice(0,1)[0].launch()}var b=!1,c=[];return{setDomReady:function(){b=!0,c.length&&a()},setTranslatorReady:function(d){c.push(d),b&&a()}}}();window.ccmTranslator={setI18NDictionart:function(b){a.extend(!0,k,b)},configureFrontend:function(b){a.isPlainObject(b)&&a.extend(l,b)},initialize:function(a){var b=new g(a);return n.setTranslatorReady(b),b},views:m},a(document).ready(function(){n.setDomReady()})}}(jQuery);