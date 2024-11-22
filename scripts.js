const uploadBtn = document.getElementById("upload-btn");
const uploadInput = document.getElementById("upload-input");
const madingContainer = document.getElementById("mading-container");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeModalBtn = document.getElementById("close-modal");
const saveBtn = document.getElementById("save-task");
const deleteBtn = document.getElementById("delete-task");

// Menambahkan tugas ke mading
uploadBtn.addEventListener("click", () => {
    const file = uploadInput.files[0];

    if (file && file.type.startsWith("image/")) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(file);
        img.addEventListener("click", () => openModal(img.src));
        
        madingContainer.appendChild(img);
        uploadInput.value = ""; // Reset input
    } else {
        alert("Harap unggah file gambar.");
    }
});

// Modal untuk melihat tugas secara detail
function openModal(src) {
    modal.style.display = "flex";
    modalImg.src = src;
}

// Menutup modal
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Simpan foto
saveBtn.addEventListener("click", () => {
    alert("Tugas berhasil disimpan.");
    modal.style.display = "none";
});

// Hapus foto
deleteBtn.addEventListener("click", () => {
    const src = modalImg.src;
    const imgElements = madingContainer.querySelectorAll("img");

    imgElements.forEach((img) => {
        if (img.src === src) {
            madingContainer.removeChild(img);
        }
    });
    modal.style.display = "none";
});
