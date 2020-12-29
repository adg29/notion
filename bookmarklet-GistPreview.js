var gistURL = document.URL.split('/')
var baseURL = "https://gistpreview.github.io/?";
var url = baseURL + gistURL[gistURL.length-1]
t=url;d=document;d.body.appendChild(Object.assign(d.createElement('textarea'),{value:t})).select();d.execCommand('copy');
prompt("Gist URL:", url);
window.open(url)
