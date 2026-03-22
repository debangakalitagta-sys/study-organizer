let resources = JSON.parse(localStorage.getItem('resources')) || [];

function addResource() {
  const title = document.getElementById('title').value;
  const subject = document.getElementById('subject').value;
  const semester = document.getElementById('semester').value;

  if (!title || !subject || !semester) {
    alert('Please fill all fields');
    return;
  }

  resources.push({ title, subject, semester });
  localStorage.setItem('resources', JSON.stringify(resources));

  document.getElementById('title').value = '';
  document.getElementById('subject').value = '';
  document.getElementById('semester').value = '';

  displayResources();
}

function displayResources() {
  const list = document.getElementById('resourceList');
  const search = document.getElementById('search').value.toLowerCase();

  list.innerHTML = '';

  resources
    .filter(r => r.title.toLowerCase().includes(search))
    .forEach((r, index) => {
      const div = document.createElement('div');
      div.className = 'resource';

      div.innerHTML = `
        <h3>${r.title}</h3>
        <p>Subject: ${r.subject}</p>
        <p>Semester: ${r.semester}</p>
        <button onclick="deleteResource(${index})">Delete</button>
      `;

      list.appendChild(div);
    });
}

function deleteResource(index) {
  resources.splice(index, 1);
  localStorage.setItem('resources', JSON.stringify(resources));
  displayResources();
}

displayResources();