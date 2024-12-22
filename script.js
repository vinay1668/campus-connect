// DOM Elements
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const uploadBtn = document.getElementById('uploadBtn');
const authModal = document.getElementById('authModal');
const uploadModal = document.getElementById('uploadModal');
const modalTitle = document.getElementById('modalTitle');
const resourceGrid = document.getElementById('resourceGrid');
const closeBtns = document.querySelectorAll('.close');

// Sample data
let resources = [
    { title: 'Calculus Notes', type: 'notes', description: 'Complete calculus notes for semester 1' },
    { title: 'Physics Assignment', type: 'assignments', description: 'Week 3 physics problems' },
    { title: 'Study Resources', type: 'links', description: 'Useful online learning links' }
];

// Event Listeners
loginBtn.addEventListener('click', () => {
    modalTitle.textContent = 'Login';
    authModal.style.display = 'block';
});

signupBtn.addEventListener('click', () => {
    modalTitle.textContent = 'Sign Up';
    authModal.style.display = 'block';
});

uploadBtn.addEventListener('click', () => {
    uploadModal.style.display = 'block';
});

closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        authModal.style.display = 'none';
        uploadModal.style.display = 'none';
    });
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === authModal) authModal.style.display = 'none';
    if (e.target === uploadModal) uploadModal.style.display = 'none';
});

// Form submissions
document.getElementById('authForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Authentication successful!');
    authModal.style.display = 'none';
});

document.getElementById('uploadForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newResource = {
        title: e.target[0].value,
        description: e.target[1].value,
        type: e.target[2].value
    };
    resources.push(newResource);
    renderResources();
    uploadModal.style.display = 'none';
    e.target.reset();
});

// Render resources
function renderResources() {
    resourceGrid.innerHTML = resources.map(resource => `
        <div class="resource-card">
            <h3>${resource.title}</h3>
            <p>${resource.description}</p>
            <span class="tag">${resource.type}</span>
        </div>
    `).join('');
}

// Initial render
renderResources();