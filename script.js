window.addEventListener('load', function autoClick() {
    const homeButton = document.querySelector('.list-pages li:nth-child(2) a');
    if (homeButton) {
        homeButton.click();
    }
});

window.addEventListener('load', function calculateSpecificAge() {
    const dob = new Date(2005, 9, 12); 
    const currentDate = new Date();

    let age = currentDate.getFullYear() - dob.getFullYear();
    const monthDifference = currentDate.getMonth() - dob.getMonth();
    const dayDifference = currentDate.getDate() - dob.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    document.getElementById('ageResult').textContent = age;
});

function wipWarning() {
    alert("Ainda não está pronto...");
}

function changePage(btn, contentId) {
    const parentLi = btn.closest('li');
    if (!parentLi) return;
    const allLis = document.querySelectorAll('ul.list-pages li');
    allLis.forEach(li => li.classList.remove('active'));
    parentLi.classList.add('active');

    const allContents = document.querySelectorAll('.toggleablePage');
    allContents.forEach(div => div.style.display = 'none');
    const targetDiv = document.getElementById(contentId);
    if (targetDiv) {
        targetDiv.style.display = 'block';
    }
}