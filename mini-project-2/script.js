const form = document.getElementById('todoForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    // preventDefault() : untuk mencegah form melakukan submit dan refresh halaman.

    
    const input = document.getElementById('todoInput');
    const task = input.value.trim();
    // .trim() : untuk menghapus spasi di awal dan akhir input.

    if (task === '') {
        alert('Tolong masukkan tugas yang valid!');
        return;
    }

    addTask(task);
    // addTask() : untuk menambahkan tugas ke dalam daftar.
    input.value = '';
});

function addTask(task) {
    const todoList = document.getElementById('todoList');
    const listItem = document.createElement('li');
    // createElement() : untuk membuat elemen HTML baru, dalam hal ini adalah <li> untuk setiap tugas.

    const span = document.createElement('span');
    span.textContent = task;
    listItem.appendChild(span)

    todoList.appendChild(listItem);
    // appendChild() : untuk menambahkan elemen baru ke dalam daftar tugas.

    const deleteButton = document.createElement('button');
    listItem.appendChild(deleteButton);
    deleteButton.textContent = "X";

    deleteButton.addEventListener('click', function() {
        todoList.removeChild(listItem);
        // removeChild() : untuk menghapus tugas dari daftar ketika tombol "Hapus" diklik.
    });

    listItem.addEventListener('click', function() {
        span.classList.toggle('completed');
        // toggle() : untuk menambahkan atau menghapus kelas "completed" pada tugas ketika diklik, menandakan bahwa tugas tersebut telah selesai.
    });
}
