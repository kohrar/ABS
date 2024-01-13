
const desktop_headers = {
  "sec-ch-ua": '"Not_A Brand";v="8", "Chromium";v="120", "Microsoft Edge";v="120"',
  "sec-ch-ua-arch": '"x86"',
  "sec-ch-ua-bitness": '"64"',
  "sec-ch-ua-full-version": '"120.0.2210.91"',
  "sec-ch-ua-full-version-list": '"Not_A Brand";v="8.0.0.0", "Chromium";v="120.0.6099.130", "Microsoft Edge";v="120.0.2210.91"',
  "sec-ch-ua-mobile": '?0',
  "sec-ch-ua-model": '""',
  "sec-ch-ua-platform": '"Windows"',
  "sec-ch-ua-platform-version": '"10.0.0"',
  "sec-fetch-dest": 'document',
  "sec-fetch-mode": 'navigate',
  "sec-fetch-site": 'none',
  "sec-fetch-user": '?1',
  "sec-ms-gec": 'AA90B1DABCCB79DE179D1243FA79ED6C85D0ED70C3C272CEF5A399177CFEFCF2',
  "sec-ms-gec-version": '1-120.0.2210.91',
  "upgrade-insecure-requests": '1',
  "user-agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0',
};
const mobile_headers = {
  "sec-ch-ua": '"Not_A Brand";v="8", "Chromium";v="120", "Microsoft Edge";v="120"',
  "sec-ch-ua-arch": '',
  "sec-ch-ua-bitness": '',
  "sec-ch-ua-full-version": '"120.0.2210.126"',
  "sec-ch-ua-full-version-list": '"Not_A Brand";v="8.0.0.0", "Chromium";v="120.0.6099.200", "Microsoft Edge";v="120.0.2210.126"',
  "sec-ch-ua-mobile": '?1',
  "sec-ch-ua-model": '"Pixel 3a"',
  "sec-ch-ua-platform": '"Android"',
  "sec-ch-ua-platform-version": '"12.0.0"',
  "sec-ms-gec": 'AA90B1DABCCB79DE179D1243FA79ED6C85D0ED70C3C272CEF5A399177CFEFCF2',
  "sec-ms-gec-version": '1-120.0.2210.91',
  "user-agent": 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36 EdgA/120.0.0.0',
};

let doMobileSearches = false;

function mobileSpoof(value) {
	console.log("mobile spoof is set to: " + value);
  doMobileSearches = value;
}

chrome.webRequest.onBeforeSendHeaders.addListener(details => {
	const { requestHeaders } = details;

	console.log("Onbeforesendheaders call with  mode " + (doMobileSearches ? "mobile" : "desktop") + ".."   );

	requestHeaders.forEach(header => {
		let headerName = header.name.toLowerCase();

		// overwrite any headers we want to spoof for desktop
		if ( ! doMobileSearches ) {
			if (headerName in desktop_headers) {
				header.value = desktop_headers[headerName];
			}

		} else {
			// or for mobile
			if (headerName in mobile_headers) {
				header.value = mobile_headers[headerName];
			}
		}
  });
  return { requestHeaders };
}, {
  urls: ['https://*.bing.com/*'],
}, ['blocking', 'requestHeaders']);
