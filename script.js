const blogTitle = document.getElementsByTagName('h2');
const blogDetails = document.getElementsByTagName('p');
const bTitle = document.getElementById('btitle');
console.log(blogTitle);

for (const h2 of blogTitle) {
    h2.style.color = 'green';
    h2.style.textAlign = 'center';
}

for (const p of blogDetails) {
    p.style.background = 'yellow';
    p.style.textAlign = 'center';

}
bTitle.style.color = 'darkblue';
bTitle.style.fontStyle = 'italic';