var bodyClassList = document.getElementsByTagName("body")[0].classList;

if (bodyClassList.contains("vscode-dark")) {
    bodyClassList.remove("vscode-dark");
}

const els = document.getElementsByTagName("img");
for (var i = 0 ; i < els.length ; i++) { 
    var img = els[i];	
    var imgSrc = img.src;
    if (imgSrc.endsWith('logoDark.svg')) {
        img.src = imgSrc.replace('logoDark.svg', 'logo.svg')
    }
}
