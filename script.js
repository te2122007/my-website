function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    const button = document.getElementById("noButton");
    const maxX = window.innerWidth - button.offsetWidth - 20;
    const maxY = window.innerHeight - button.offsetHeight - 20;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    button.style.position = "absolute";
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

// ทำให้ปุ่ม No ขยับเมื่อถูกกด
document.getElementById("noButton").addEventListener("click", moveButton);
