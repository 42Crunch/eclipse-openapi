(function () {

    var issues = ${issues};

    var removeIssue = function(o) {
		var els = document.getElementsByClassName("c_roundedbox_section");
        for (var i = 0 ; i < els.length ; i++) {
			var issue = els[i];
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
                    var issueFile = textParts[0].replace("file:///", "");
                    var issuePointer = textParts[1].replace("pointer=", "");
                    if ((issueFile === o.issueFile) && (issuePointer === o.issuePointer)) {
						document.body.removeChild(issue);
                    }
                }
            }
        }
    };

    for (var i = 0 ; i < issues.length ; i++) {
        removeIssue(issues[i]);
    }

}) ();