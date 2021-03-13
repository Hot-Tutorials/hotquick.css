console.log("%cThis site uses %cQuick.css!", "font-size: 20px;", "font-size: 20px; color: #3498db;", )

let styleStyle = document.createElement("style");
function addStyle(styleName) {
    var styles = document.querySelectorAll(`[class*='${styleName}-'`);
    for(let index = 0; index < styles.length; index++) {
        let style = styles[index];
        for(let classlistindex = 0; classlistindex < style.classList.length; classlistindex++) {

            let regex = new RegExp("(" + styleName + "-.*[0-9])+", "")
            if(style.classList[classlistindex].match(regex)) {
                let styleStrength = 0;
                let styleClassName = style.classList[classlistindex].match(regex)[1]

                styleStrength = styleClassName.split("-").pop();
                styleStyle.type = "text/css";
                styleStyle.innerHTML += `.${styleName}-${styleStrength} { ${styleName}: ${styleStrength}px; }`;
            }
        }
    }
}
document.head.appendChild(styleStyle)
let styleAttributes = [
    "padding",
    "margin",
    "border-radius"
]
styleAttributes.forEach((attributeInArray) => addStyle(attributeInArray));