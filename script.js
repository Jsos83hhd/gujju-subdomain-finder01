// Example list of subdomains for demonstration
const subdomains = [
    'sub1.domain.com',
    'sub2.domain.com',
    'sub3.domain.com',
    'sub4.domain.com',
    'sub5.domain.com'
];

// Function to display the subdomains with animation
function displaySubdomains() {
    const subdomainsList = document.getElementById('subdomains-list');
    subdomains.forEach(subdomain => {
        const li = document.createElement('li');
        li.textContent = subdomain;
        subdomainsList.appendChild(li);
    });
}

// Function to download the subdomains as a .txt file
document.getElementById('download-btn').addEventListener('click', function() {
    const blob = new Blob([subdomains.join('\n')], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'subdomains.txt';
    link.click();
});

// Initialize the subdomain display
window.onload = displaySubdomains;
