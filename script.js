var list_link, item;


list_link = ['https://www.instagram.com/', 'https://www.facebook.com/'];


document.getElementById('list-links').addEventListener('click', (event) => {
  list_link.forEach((item) => {
    let element_list = document.getElementById('list');
    let new_li = document.createElement('li');
    let new_a = document.createElement('a');
    new_a.innerText = item;
    new_a.setAttribute("href", item);

    new_li.appendChild(new_a);

    element_list.appendChild(new_li);
  });

});