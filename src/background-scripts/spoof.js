const mobileUserAgent = getRandomElement(constants.MOBILE_USER_AGENTS);
const edgeUserAgent = constants.EDGE_USER_AGENT;

let spoofUserAgent = false;
let doMobileSearches = false;

// TODO: have these functions set storage values, instead of local variables, once we
// rewrite this to be a non-persisted script (currently persisted due to blocking web requests)
function spoof(value) {
  spoofUserAgent = value;
}

function mobileSpoof(value) {
  doMobileSearches = value;
}

chrome.webRequest.onBeforeSendHeaders.addListener(details => {
  const { requestHeaders } = details;
  requestHeaders.forEach(header => {
    if (header.name === 'User-Agent' && spoofUserAgent) {
      header.value = doMobileSearches ? mobileUserAgent : edgeUserAgent;
    }
   //  if (header.name === 'Sec-Ch-Ua-Full-Version-List' && spoofUserAgent) {
   //    if ( ! doMobileSearches) header.value='"Chromium";v="120.0.6099.71", "Microsoft Edge";v="120.0.2210.61", "Not=A?Brand";v="8.0.0.0"'
   //  }
   //  if (header.name === 'Sec-Ch-Ua' && spoofUserAgent) {
   //    if ( ! doMobileSearches) header.value='"Chromium";v="120", "Microsoft Edge";v="120", "Not=A?Brand";v="8"'
   //  }
  });
  return { requestHeaders };
}, {
  urls: ['https://*.bing.com/*'],
}, ['blocking', 'requestHeaders']);
