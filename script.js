document.addEventListener("DOMContentLoaded", () => {
    setGreeting();
});

function setGreeting() {
    const hour = new Date().getHours();
    const greeting = document.getElementById("greeting");

    if (hour < 12) {
        greeting.textContent = "Good Morning!";
    } else if (hour < 18) {
        greeting.textContent = "Good Afternoon!";
    } else {
        greeting.textContent = "Good Evening!";
    }
}

function showTasks() {
    document.getElementById('categories').classList.add('hidden');
    document.getElementById('tasks-container').classList.remove('hidden');
}

function showDesignProcess() {
    document.getElementById('categories').classList.add('hidden');
    document.getElementById('design-process').classList.remove('hidden');
}

function toggleNightMode() {
    document.body.classList.toggle('night');
    const themeIcon = document.getElementById('theme-icon');
    themeIcon.src = document.body.classList.contains('night') ? 'moon.svg' : 'sun.svg';
}
