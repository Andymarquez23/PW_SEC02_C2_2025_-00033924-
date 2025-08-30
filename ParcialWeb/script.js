const title = document.getElementById('title');
const btnChangeTitle = document.getElementById('btnChangeTitle');
const btnSortColumns = document.getElementById('btnSortColumns');
const btnChangeColors = document.getElementById('btnChangeColors');
const btnAddFooterImage = document.getElementById('btnAddFooterImage');
const main = document.querySelector('main');
const footer = document.getElementById('footer');

btnChangeTitle.addEventListener('click',()=>{
    title.textContent = "University Demo Changed!";
});

btnSortColumns.addEventListener('click',()=>{
    const columns = Array.from(main.children);
    columns.reverse().forEach(col => main.appendChild(col));
});

btnChangeColors.addEventListener('click',()=>{
    document.querySelector('header').style.backgroundColor ='#FF5733';
    main.style.backgroundColor = '#F0F0F0';
    footer.style.backgroundColor = '#900C3F';
});

btnAddFooterImage.addEventListener('click',() => {
    if (!document.getElementById('footer-image')) {
        const img = document.createElement('img');
        img.id = 'footer-image';
        img.src = 'https://picsum.photos/200/300';
        img.alt = 'Footer Image';
        img.style.display = 'block';
        img.style.marginTop = '10px';
         footer.appendChild(img);
    }
});