player = document.querySelector('.video-player-video');
jQuery('header button:contains("Share")').click();
jQuery('.share-video-embed-code-dropdown-item').click();
jQuery('.embed-show-code-button').click();
embed = jQuery('.embed-code').text();
$embed = jQuery(embed);
src = $embed.find('iframe').attr('src');
$embed.find('iframe').attr('src', src+'?t='+parseInt(player.currentTime));
embedUpdate = $embed.prop('outerHTML');
jQuery('.embed-code').text(embedUpdate);
t=embedUpdate;d=document;d.body.appendChild(Object.assign(d.createElement('textarea'),{value:t})).select();d.execCommand('copy');
$('[data-val="responsive"].radio-label').click()
jQuery('header button:contains("Copy Code")').click();

