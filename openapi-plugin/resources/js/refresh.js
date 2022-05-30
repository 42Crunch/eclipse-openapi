(function () {

    var fileIssues = [];
    var issues = ${issues};
    var fileName = ${fileName};

	var els = document.getElementsByClassName("c_roundedbox_section");
    for (var i = 0 ; i < els.length ; i++) {
		var issue = els[i];
        var line = issue.getElementsByClassName("focus-line");
        if (line.length > 0) {
            var href = line[0].href;
            if ((href.indexOf("file:///") === 0) && (href.indexOf("?") >= 0)) {
                if (href.split("?")[0].replace("file:///", "") === fileName) {
                    fileIssues.push(issue);
                }
            }
        }
    }

    var refreshLineNumber = function(line, lineNumber) {
        var text = line.innerText;
        if (text.indexOf(":") >= 0) {
            line.innerText = text.substring(0, text.lastIndexOf(":")) + ":" + lineNumber;
        }
    };

    var refreshIssue = function(o) {
        for (var i = 0 ; i < fileIssues.length ; i++) {
			var issue = fileIssues[i];
            var data = issue.getElementsByClassName("issue-id");
            if (data.length === 0) {
                continue;
            }
            var issueId = data[0].innerText;
            if (issueId === o.issueID) {
                var line = issue.getElementsByClassName("focus-line");
                if (line.length === 0) {
                    continue;
                }
                var href = line[0].href;
                if ((href.indexOf("file:///") === 0) && (href.indexOf("?") >= 0)) {
                    var textParts = href.split("?");
                    var issuePointer = textParts[1].replace("pointer=", "");
                    if (issuePointer === o.issuePointer) {
                        refreshLineNumber(line[0], o.issueLine);
                    }
                }
            }
        }
    };

    for (var i = 0 ; i < issues.length ; i++) {
        refreshIssue(issues[i]);
    }

}) ();