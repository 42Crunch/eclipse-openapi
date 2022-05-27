(function () {

    var newFile = ${newFile};
    var oldFile = ${oldFile};

    var newShortFile = "";
    if (newFile.indexOf("/") >= 0) {
        newShortFile = newFile.split("/").pop();
    }
    else {
        return;
    }

    var oldShortFile = "";
    if (oldFile.indexOf("/") >= 0) {
        oldShortFile = oldFile.split("/").pop();
    }
    else {
        return;
    }

	var els = document.getElementsByClassName("focus-line");
    for (var i = 0 ; i < els.length ; i++) {
		var line = els[i];
        var text = line.innerText;
        if (text.indexOf(":") >= 0) {
            var id = text.lastIndexOf(":");
            var filePart = text.substring(0, id);
            var linePart = text.substring(id + 1);
            if (filePart === oldShortFile) {
                line.innerText = newShortFile + ":" + linePart;
            }
        }
        var href = line.href;
        if ((href.indexOf("file:///") === 0) && (href.indexOf("?") >= 0)) {
            var textParts = href.split("?");
            if (textParts[0].replace("file:///", "") === oldFile) {
                line.href = "file:///" + newFile + "?" + textParts[1];
            }
        }
    }

}) ();