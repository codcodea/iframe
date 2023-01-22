

const device = document.getElementById('macbook');
const iframe = document.getElementById('iframe')[0];

// Postar musens scrollY position till iframe
const postMessageToIFrame = function(e){
  e.preventDefault();
  const data = e.deltaY
  iframe.contentWindow.postMessage(data, "http://127.0.0.1:5500/");
}

// Men jag kan inte fånga upp meddelandet alls     
const messageEventHandler = function(event){

	if(event.origin == "http://127.0.0.1:5500"){
		console.log(event.data);
	}
  // Och nedaststående ger cross-origin error
  iframe.contentWindow.scrollBy(0, event.data);
}

document.addEventListener('DOMContentLoaded', function() {
  device.addEventListener('wheel', postMessageToIFrame, false);
  iframe.addEventListener('message', messageEventHandler, false);
}, false);



















