!function(){if(self.Prism&&self.document&&document.querySelector){var t={js:"javascript",html:"markup",svg:"markup",xml:"markup",py:"python",rb:"ruby"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(e){console.log(e);var n=e.getAttribute("data-src"),r=(n.match(/\.(\w+)$/)||[,""])[1],a=t[r]||r,s=document.createElement("code");console.log(n);s.className="language-"+a,e.textContent="",s.textContent="Loading…",e.appendChild(s);var o=new XMLHttpRequest;o.open("GET",n,!0),o.onreadystatechange=function(){4==o.readyState&&(o.status<400&&o.responseText?(s.textContent=o.responseText,Prism.highlightElement(s)):s.textContent=o.status>=400?"✖ Error "+o.status+" while fetching file: "+o.statusText:"✖ Error: File does not exist or is empty")},o.send(null)})}}();
;