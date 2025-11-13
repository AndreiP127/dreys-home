function wipWarning() {
    alert("Ainda não está pronto...");
}

function calculateSpecificAge() {
    const dob = new Date(2005, 8, 12); 
    const currentDate = new Date();

    let age = currentDate.getFullYear() - dob.getFullYear();
    const monthDifference = currentDate.getMonth() - dob.getMonth();
    const dayDifference = currentDate.getDate() - dob.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    document.getElementById('ageResult').textContent = age;
}