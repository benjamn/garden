let opacityTimeout;
let contentTimeout;
let transitionDurationMs = 100;

const iframe = document.createElement('iframe');
const tooltipWrapper = document.createElement('div');
const tooltipContent = document.createElement('div');

const linkHistories = Object.create(null);

function hideTooltip() {
  opacityTimeout = setTimeout(function() {
    tooltipWrapper.style.opacity = 0;
    contentTimeout = setTimeout(function() {
      tooltipContent.innerHTML = '';
      tooltipWrapper.style.display = 'none';
    }, transitionDurationMs + 1);
  }, transitionDurationMs);
}

function showTooltip(event) {
  var elem = event.target;
  var elem_props = elem.getClientRects()[elem.getClientRects().length - 1];
  var top = window.pageYOffset || document.documentElement.scrollTop;

  if (event.target.host === window.location.host) {
    if (!linkHistories[event.target.href]) {
      iframe.src = event.target.href;
      iframe.onload = function() {
        let tooltipContentHtml = '';
        tooltipContentHtml += '<div style="font-weight: bold;">' + iframe.contentWindow.document.querySelector('h1').innerHTML + '</div>';
        tooltipContentHtml += iframe.contentWindow.document.querySelector('content').innerHTML;

        tooltipContent.innerHTML = tooltipContentHtml;
        linkHistories[event.target.href] = tooltipContentHtml;

        tooltipWrapper.style.display = 'block';
        setTimeout(function() {
          tooltipWrapper.style.opacity = 1;
        }, 1);
      }
    } else {
      tooltipContent.innerHTML = linkHistories[event.target.href];
      tooltipWrapper.style.display = 'block';
      setTimeout(function() {
        tooltipWrapper.style.opacity = 1;
      }, 1);
    }

    tooltipWrapper.style.left = elem_props.left - (tooltipWrapper.offsetWidth / 2) + (elem_props.width / 2) + "px";
    if ((window.innerHeight - elem_props.top) < (tooltipWrapper.offsetHeight)) {
      tooltipWrapper.style.top = elem_props.top + top - tooltipWrapper.offsetHeight - 10 + "px";
    } else if ((window.innerHeight - elem_props.top) > (tooltipWrapper.offsetHeight)) {
      tooltipWrapper.style.top = elem_props.top + top + 35 + "px";
    }

    if ((elem_props.left + (elem_props.width / 2)) < (tooltipWrapper.offsetWidth / 2)) {
      tooltipWrapper.style.left = "10px";
    } else if ((document.body.clientWidth - elem_props.left - (elem_props.width / 2)) < (tooltipWrapper.offsetWidth / 2)) {
      tooltipWrapper.style.left = document.body.clientWidth - tooltipWrapper.offsetWidth - 20 + "px";
    }
  }
}

let linkPreviewStyleElem = null;
function styleInstall() {
  if (!linkPreviewStyleElem) {
    linkPreviewStyleElem = document.createElement("style");
    linkPreviewStyleElem.setAttribute("type", "text/css");
    linkPreviewStyleElem.innerHTML = `
content a.internal-link {
  border-color: #8b88e6;
  background-color: #efefff;
}
#tooltip-wrapper {
  background: white;
  padding: 1em;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  position: absolute;
  width: 400px;
  height: 250px;
  font-size: 0.8em;
  box-shadow: 0 5px 10px rgba(0,0,0,0.1);
  opacity: 0;
  transition: opacity 100ms;
}
#tooltip-wrapper:after {
  content: "";
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  pointer-events: none;
  background-image: linear-gradient(to bottom, rgba(255,255,255, 0), rgba(255,255,255, 1) 90%);
  width: 100%;
  height: 75px;
}`;
    document.head.appendChild(linkPreviewStyleElem);
  }
  return linkPreviewStyleElem;
}

function iframeInstall() {
  if (iframeInstall.ed) return;
  iframeInstall.ed = true;

  iframe.setAttribute("id", "link-preview-iframe");
  iframe.setAttribute("style", "display: none; height: 0; width: 0;");
  document.body.appendChild(iframe);

  tooltipWrapper.setAttribute("id", "tooltip-wrapper");
  tooltipWrapper.setAttribute("style", "opacity: 0; display: none;");
  tooltipContent.setAttribute("id", "tooltip-content");
  tooltipWrapper.appendChild(tooltipContent);

  iframe.parentNode.insertBefore(tooltipWrapper, iframe);
}

export function attach(wrapperQuerySelector = "") {
  styleInstall();
  iframeInstall();

  document.querySelectorAll(
    `${wrapperQuerySelector} a`
  ).forEach(function setupListeners(linkElement) {
    linkElement.addEventListener('mouseleave', function(_event) {
      hideTooltip();
    });

    tooltipWrapper.addEventListener('mouseleave', function(_event) {
      hideTooltip();
    });

    linkElement.addEventListener('touchend', function(_event) {
      hideTooltip();
    });

    tooltipWrapper.addEventListener('touchend', function(_event) {
      hideTooltip();
    });

    linkElement.addEventListener('mouseenter', function(event) {
      clearTimeout(opacityTimeout);
      clearTimeout(contentTimeout);
      showTooltip(event);
    });

    tooltipWrapper.addEventListener('mouseenter', function(event) {
      clearTimeout(opacityTimeout);
      clearTimeout(contentTimeout);
    });
  });
}
