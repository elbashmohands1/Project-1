function get (el){
    return document.querySelectorAll(el)};

    const btn = get('.buttony')
    btn.addEventListener('click', () => {
        alert('Hello')
    })