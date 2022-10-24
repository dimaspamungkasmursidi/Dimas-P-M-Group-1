const mydata = document.getElementById("data-masuk");
let datarow = 0;



const klikSubmit = (event) => {
    event.preventDefault();
    const {inputNama,inputEmail,inputRole,inputKelompok} = event.target;
    datarow++;
    mydata.innerHTML += 
    `<tr id="data-${datarow}">
        <td id="nama-${datarow}">${inputNama.value}</td>
        <td id="email-${datarow}">${inputEmail.value}</td>
        <td id="kelompok">
            <select id="optionKelompok-${datarow}" disabled>
                <option value="${inputKelompok.value}">${inputKelompok.value}</option>
                <option value="1" >1</option>
                <option value="2" >2</option>
                <option value="3" >3</option>
                <option value="4" >4</option>
                <option value="5" >5</option>
                <option value="6" >6</option>
                <option value="7" >7</option>
                <option value="8" >8</option>
            </select>
        </td>
        <td id="role-${datarow}">
            <select id="optionRole-${datarow}" disabled>
                <option value="${inputRole.value}">${inputRole.value}</option>
                <option value="Project Manager" >Project Manager</option>
                <option value="Desainer" >Desainer</option>
                <option value="Coder" >Coder</option>
            </select>
        </td>
        <td>
            <button type="hapus" class="btn btn-danger" onclick="hapus(this)" data-id="${datarow}" id="hapusData-${datarow}" >Hapus</button>
            <button type="edit" class="btn btn-success" onclick="edit(this)" data-id="${datarow}" id="editData-${datarow}" >Edit</button>
            <button type="save" class="btn btn-success" onclick="save(this)" data-id="${datarow}" id="saveData-${datarow}" hidden>Save</button>
        </td>
    </tr>`;
    let dataId = document.getElementById("dataId")
    dataId.reset();
}

addEventListener("submit", klikSubmit);


function hapus(x){
    let dataId = x.getAttribute("data-id");
    console.log("Data berhasil di Hapus");
    let tabelId = document.getElementById("data-"+dataId);
    tabelId.remove();
}

function edit(x){
    let dataId = x.getAttribute("data-id");
    let saveId = document.getElementById("saveData-"+dataId);
    let editId = document.getElementById("editData-"+dataId);
    let hapusId = document.getElementById("hapusData-"+dataId);
    let getNama = document.getElementById("nama-"+dataId);
    let getEmail = document.getElementById("email-"+dataId);
    let getKelompok = document.getElementById("optionKelompok-"+dataId);
    let getRole = document.getElementById("optionRole-"+dataId);

    getNama.setAttribute("contenteditable",true);
    getEmail.setAttribute("contenteditable",true);
    getKelompok.removeAttribute("disabled");
    getRole.removeAttribute("disabled");

    saveId.removeAttribute("hidden");
    editId.setAttribute("hidden",true);
    hapusId.setAttribute("hidden",true);
}

function save(x){
    let dataId = x.getAttribute("data-id");
    let saveId = document.getElementById("saveData-"+dataId);
    let editId = document.getElementById("editData-"+dataId);
    let hapusId = document.getElementById("hapusData-"+dataId);
    let getNama = document.getElementById("nama-"+dataId);
    let getEmail = document.getElementById("email-"+dataId);
    let getKelompok = document.getElementById("optionKelompok-"+dataId);
    let getRole = document.getElementById("optionRole-"+dataId);

    console.log("Update Success");

    getNama.removeAttribute("contenteditable");
    getEmail.removeAttribute("contenteditable");
    getKelompok.setAttribute("disabled",true);
    getRole.setAttribute("disabled",true);
    
    saveId.setAttribute("hidden",true);
    editId.removeAttribute("hidden");
    hapusId.removeAttribute("hidden");
}
