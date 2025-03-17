document.addEventListener("DOMContentLoaded", () => {
    setGreeting();
    document.addEventListener("keydown", (event) => {
        if (event.key === "2") {
            changeToRandomGif();
        }
    });
    // Initialize the arrows based on the current theme
    updateArrowIcons();
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

const gifArray = [
    "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif", // Cat waving
    "https://media3.giphy.com/media/fX5cZemSfX1cMZYuUJ/giphy.gif", // Excited cat
    "https://media2.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif", // Dancing baby
    "https://media3.giphy.com/media/bpfrJ6bV1D3107TFJi/giphy.gif", // Bear greeting
    "https://media2.giphy.com/media/fP3AqIomP4nrbv9Hzz/giphy.gif"  // Cute happy dog
];

function changeToRandomGif() {
    const dodoImage = document.getElementById("dodo-image");
    const randomGif = gifArray[Math.floor(Math.random() * gifArray.length)];
    dodoImage.src = randomGif;
}

function toggleNightMode() {
    document.body.classList.toggle('night');
    const themeIcon = document.getElementById('theme-icon');
    themeIcon.src = document.body.classList.contains('night') ? 'moon.svg' : 'sun.svg';
    
    // Update the arrows when night mode is toggled
    updateArrowIcons();
}

// Function to update the arrow icons based on night mode
function updateArrowIcons() {
    const backArrow = document.getElementById('back');
    const forwardArrow = document.getElementById('forward');

    if (document.body.classList.contains('night')) {
        backArrow.src = 'backwards-white.svg';
        forwardArrow.src = 'forward-white.svg';
    } else {
        backArrow.src = 'backwards-black.svg';
        forwardArrow.src = 'forward-black.svg';
    }
}

/* Show Tasks */
function showTasks() {
    document.getElementById('categories').classList.add('hidden');
    document.getElementById('tasks-container').classList.remove('hidden');
    document.getElementById('design-process').classList.add('hidden');
}

/* Show Design Process */
function showDesignProcess() {
    document.getElementById('categories').classList.add('hidden');
    document.getElementById('tasks-container').classList.add('hidden');
    document.getElementById('design-process').classList.remove('hidden');
}

/* Back Arrow Function */
function goBack() {
    document.getElementById('categories').classList.remove('hidden');
    document.getElementById('tasks-container').classList.add('hidden');
    document.getElementById('design-process').classList.add('hidden');
}

/* Forward Arrow Function */
function goForward() {
    if (document.getElementById('tasks-container').classList.contains('hidden')) {
        showTasks();
    } else {
        showDesignProcess();
    }
}

function openTask(taskName) {
    window.location.href = `task.html?task=${taskName}`;
}



document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const task = params.get("task");

    if (task) {
        document.getElementById("task-title").textContent = task.charAt(0).toUpperCase() + task.slice(1);
        document.getElementById("task-header").textContent = "Task: " + task.charAt(0).toUpperCase() + task.slice(1);

        // Load saved notes if any
        const savedNotes = localStorage.getItem(task + "-notes");
        if (savedNotes) {
            document.getElementById("task-notes").value = savedNotes;
        }
    }
});

function saveNotes() {
    const params = new URLSearchParams(window.location.search);
    const task = params.get("task");
    const notes = document.getElementById("task-notes").value;

    localStorage.setItem(task + "-notes", notes);
    alert("Notes saved!");
}