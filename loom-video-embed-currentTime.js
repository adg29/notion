player = document.querySelector('.video-player-video');
$('header button:contains("Share")').click();
$('.share-video-embed-code-dropdown-item').click();
embed = $('.embed-code').text()
$embed = $(embed)
src = $embed.find('iframe').attr('src')
$embed.find('iframe').attr('src',src+'?t='+player.currentTime)
embedUpdate = $('.embed-code').text()
t=embedUpdate;d=document;d.body.appendChild(Object.assign(d.createElement('textarea'),{value:t})).select();d.execCommand('copy');
