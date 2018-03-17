// var bacgroundColor = localStorage.getItem('_pikatools_background_color')
// var bacgroundColor = browser.storage.managed.get('_pikatools_background_color')

var isChrome = typeof browser === 'undefined';

if (!isChrome) {
    browser.storage.sync.get('_pikatools_background_color').then((res) => {
        var bacgroundColor = res._pikatools_background_color;
    
        if (bacgroundColor !== null) {
            if (/(^#[a-fA-F0-9]{3}$)|(^#[a-fA-F0-9]{6}$)/.test(bacgroundColor)) {
                document.body.style.background = bacgroundColor;
            }
        }
    });
} else {
    chrome.storage.sync.get('_pikatools_background_color', res => {
        var bacgroundColor = res._pikatools_background_color;

		if (bacgroundColor !== null) {
			if (/(^#[a-fA-F0-9]{3}$)|(^#[a-fA-F0-9]{6}$)/.test(bacgroundColor)) {
				document.body.style.background = bacgroundColor;
			}
		}
	});
}

