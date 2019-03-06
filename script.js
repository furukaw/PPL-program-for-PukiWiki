function catnToString(catDiv) {
    const title = catDiv.getElementsByClassName('title')[0].innerText;
    const catSpan = catDiv.getElementsByClassName('cat');
    const cat = catSpan.length === 0 ? "" : catSpan[0].innerText;
    const authorName = catDiv.getElementsByClassName('names')[0].innerText;
    const authorAff = catDiv.getElementsByClassName('affiliation')[0].innerText;
    return `- ${title}${cat} - ${authorName} ${authorAff}\n\n`;
}

function eventToString(eventDiv) {
    if(eventDiv.children.length === 1) return "";
    const eventName = eventDiv.children[0].innerText.match(/\d{1,2}:\d{1,2}-\d{1,2}:\d{1,2}\s(.*)\s\(\D.*$/)[1];
    let str = `*** ${eventName}\n\n`;
    for(let i = 1; i < eventDiv.children.length; i++) {
        str += catnToString(eventDiv.children[i]);
    }
    return str;
}

function partToString(partDiv) {
    const partName = partDiv.children[1].innerText.match(/(.*)\s\(.*$/)[1];
    let str = `** ${partName}\n\n`;
    for(i = 2; i < partDiv.children.length; i++) {
       	str += eventToString(partDiv.children[i]);
    }
    return str;
}

const partDivs = document.getElementsByClassName('part');

let str = "";

for(let i = 0; i < partDivs.length; i++) {
    str += partToString(partDivs[i]);
}

