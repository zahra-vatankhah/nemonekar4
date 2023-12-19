const textarea = document.querySelector('#input-text-area');
const wordcount = document.querySelector('#word-count');
const characcount = document.querySelector('#charac-count');
textarea.addEventListener('input', () => {
    characcount.textContent = textarea.value.length;
    let text = textarea.value.trim();
    wordcount.textContent = text.split(/\s+/).filter((item) => item).length;

})