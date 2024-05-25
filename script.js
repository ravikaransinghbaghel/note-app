let new2 = document.querySelector("#new");
let new3 = document.querySelector("#new2");
let remove = document.querySelector("#remove");
let main = document.querySelector(".main");
let title = document.querySelector("#title");
let text = document.querySelector("#text");
let add = document.querySelector("#add");



new2.addEventListener("click", () => {
    main.style.top = "25%";
    title.value = "";
    text.value = "";
});
new3.addEventListener("click", () => {
    main.style.top = "25%";
    title.value = "";
    text.value = "";
});
new2.addEventListener("dblclick", () => {
    main.style.top = "-100%";
});
new3.addEventListener("dblclick", () => {
    main.style.top = "-100%";
});

remove.addEventListener("click", () => {
    main.style.top = "110%";
});


function createnote(title, text) {
    let paper = document.createElement("div");
    paper.classList.add("note");
    paper.innerHTML = `<h2>${title}</h2>
    <p>${text}</p>
    <button id="delete" class="btn2 btn">DELETE</button>
    `;
    paper.querySelector("#delete").addEventListener("click",
        () => {
            let ok = confirm("you are sure, delete note ...");
            if (ok) {
                paper.remove();
                alert("it's okk 👍");
            }

        }
    )
    document.querySelector(".containor").appendChild(paper);
}

function loadNotes() {
    let data = localStorage.getItem('notes');
    if (data) {
        JSON.parse(data).forEach(noteData => {
            createnote(noteData.title, noteData.text);
        });
    }
}

function saveNotes() {
    let notes = document.querySelectorAll('.note');
    let data = [];
    notes.forEach(note => {
        data.push({
            title: note.querySelector('h2').innerText,
            text: note.querySelector('p').innerText
        });
    });
    localStorage.setItem('notes', JSON.stringify(data));
}

add.addEventListener("click", function () {
    main.style.top = "110%";
    createnote(title.value, text.value);
    saveNotes();

});

loadNotes();
console.log(loadNotes());




