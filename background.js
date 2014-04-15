function interceptRequest(request) {
  if (request && request.url && request.url.indexOf('www.amazon.com') !== -1) {
    var newUrl = request.url.replace('www.amazon.com', 'smile.amazon.com');
    return { redirectUrl: newUrl };
  }
}

chrome.webRequest.onBeforeRequest.addListener(interceptRequest, {urls: ['*://www.amazon.com/*']}, ['blocking']);
