addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("sendButton").addEventListener("click", sendData);
});

async function sendData(event) {
    event.preventDefault();
    const formData = new FormData(document.getElementById("entryForm"));

    res = await fetch(
        "/api/create_entry.php",
        {
            method: "POST",
            body: formData
        }
    )
    res = await res.text();
    alert(res);
    if (res == "Horoscopo registrado correctamente") {
        document.getElementById("entryForm").reset();
    }
}