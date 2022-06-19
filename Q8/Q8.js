const script_tag = document.createElement("script");
script_tag.setAttribute("src",
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.core.js"
);
document.body.appendChild(script_tag);
const src = script_tag.src;
console.log(src);