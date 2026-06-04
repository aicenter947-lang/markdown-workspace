const marked = window.marked;

async function loadMD(file) {
  const res = await fetch(`data/${file}.md`);
  if (!res.ok) {
    document.getElementById('content').innerHTML = `<p>❌ ${file}.md not found</p>`;
    return;
  }
  const text = await res.text();
  document.getElementById('content').innerHTML = marked(text);
}

document.addEventListener('DOMContentLoaded', () => {
  loadMD('dashboard');

  document.getElementById('dashboardBtn').onclick = () => loadMD('dashboard');
  document.getElementById('todoBtn').onclick = () => loadMD('todo');
  document.getElementById('kanbanBtn').onclick = () => loadMD('kanban');

  const darkBtn = document.getElementById('darkModeBtn');
  darkBtn.onclick = () => {
    document.body.classList.toggle('dark');
    darkBtn.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
  };
});
