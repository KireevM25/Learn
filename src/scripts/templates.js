Array.from(document.querySelectorAll("[data-template]")).forEach(elem => {
    var xhr= new XMLHttpRequest();
    xhr.open('GET', elem.getAttribute('data-template'), true);
    xhr.onreadystatechange= function() {
        if (this.readyState!==4) return;
        if (this.status!==200) return;
        elem.outerHTML = this.responseText.replace(/@root/g, '/max');
    };
    xhr.send();
})
