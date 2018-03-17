var isChrome = typeof browser === 'undefined';

function saveOptions(e) {
	if (!isChrome) {
		browser.storage.sync.set({
			_pikatools_background_color: document.querySelector("#color").value
		});
	} else {
		chrome.storage.sync.set({
			_pikatools_background_color: document.querySelector("#color").value
		});
	}
	e.preventDefault();
}

function restoreOptions() {
	if (!isChrome) {
		browser.storage.sync.get('_pikatools_background_color').then((res) => {
    		document.querySelector("#color").value = res._pikatools_background_color || '';
		});
	} else {
		chrome.storage.sync.get('_pikatools_background_color', res => {
			document.querySelector("#color").value = res._pikatools_background_color || '';
		});
	}
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);

