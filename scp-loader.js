// Loads and displays SCP data from JSON
fetch('scp-data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('scp-list');
    if (!container) return;
    container.innerHTML = '';
    data.forEach(scp => {
      const scpDiv = document.createElement('div');
      scpDiv.className = 'scp-entry';
      scpDiv.innerHTML = `
        <h2>${scp.subject}</h2>
        <p><strong>Class:</strong> ${scp.class}</p>
        <p><strong>Containment:</strong> ${scp.containment}</p>
        <p><strong>Description:</strong> <span class="scp-desc">${scp.description}</span></p>
        <button class="speak-btn">🔊 Read Description</button>
      `;
      container.appendChild(scpDiv);
    });
    // Add speech API functionality
    document.querySelectorAll('.speak-btn').forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        const desc = data[idx].description;
        const utter = new window.SpeechSynthesisUtterance(desc);
        window.speechSynthesis.speak(utter);
      });
    });
  });
