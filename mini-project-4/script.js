// D A T A - L A T I H A N
let dataLatihan = JSON.parse(localStorage.getItem(`datalatihan`)) || [];

// C R E A T E
function tambahLatihan () {
    const ex_name = document.getElementById(`exercise-name`);
    const ex_reps = document.getElementById(`exercise-reps`);

    if (!ex_name.value || !ex_reps.value) {
        return alert(`Isi terlebih dahulu`);
    };

    const data_baru = {
        id : Date.now(),
        name : ex_name.value,
        reps : parseInt(ex_reps.value),
    };

    dataLatihan.unshift(data_baru);

    localStorage.setItem(`datalatihan`, JSON.stringify(dataLatihan));

    tampilkanData();

    ex_name.value = ``;
    ex_reps.value = ``;
}

// R E A D E R
function tampilkanData () {
    const listLatihan = document.getElementById(`list-latihan`);
    listLatihan.innerHTML = ``;

    dataLatihan.forEach( item => { 
        const li = document.createElement(`li`);
        li.textContent = `${item.name} | ${item.reps} Reps`;
        listLatihan.appendChild(li);

        const btnDelete = document.createElement(`button`);
        btnDelete.textContent = `X`;
        btnDelete.onclick = () => hapusLatihan(item.id);

        const btnEdit = document.createElement(`button`);
        btnEdit.textContent = `Edit`;
        btnEdit.onclick = () => editLatihan(item.id);

        const span = document.createElement(`span`);
        span.appendChild(btnDelete);
        span.appendChild(btnEdit);

        li.appendChild(span);
    });
}

// U P D A T E
function editLatihan (idTarget) {
    let updateNama = prompt(`Ganti Jenis Latihan ...`);
    let updateReps = parseInt(prompt(`Ganti Jumlah Reps ...`));

    const dataEdit = dataLatihan.find( item => item.id === idTarget);

    if (!updateNama || !updateReps) {
        return alert(`Isi terlebih dahulu kolom edit!`);
    }

    if (!dataEdit) {
        return alert(`Error : Item tidak ada!`);
    }

    dataEdit.name = updateNama;
    dataEdit.reps = updateReps;
    
    localStorage.setItem(`datalatihan`, JSON.stringify(dataLatihan));

    tampilkanData();
}

// D E L E T E
function hapusLatihan (idTarget) {
    const dataLatihanFilter = dataLatihan.filter( item => item.id !== idTarget);

    dataLatihan = dataLatihanFilter;

    localStorage.setItem(`datalatihan`, JSON.stringify(dataLatihan));

    // menuList.style.display = `none`;

    tampilkanData();
}

tampilkanData();