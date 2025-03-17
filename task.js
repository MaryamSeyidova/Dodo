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
