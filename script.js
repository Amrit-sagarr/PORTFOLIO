// Mobile Menu Toggle
const mobileBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.nav-links');

if (mobileBtn && navLinks) {
  mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close mobile nav when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// Interactive Terminal Input simulation
const terminalOutput = document.getElementById('terminalOutput');
const commands = [
  { cmd: 'agy --explore agents', res: '🤖 Orchestrated multi-agent workflow: Autonomous Planner -> Developer -> Verifier' },
  { cmd: 'python3 -m unittest', res: 'Ran 14 tests in 0.042s - OK' },
  { cmd: 'curl wttr.in/gym_routine', res: '💪 5-Day Split: Progressive overload, discipline & consistency dialed in' },
  { cmd: 'echo $CONFIDENCE_LEVEL', res: 'Growing steadily every day 🚀' }
];

let cmdIndex = 0;

// Periodically simulate interactive terminal entries or let user click to run next command
if (terminalOutput) {
  terminalOutput.style.cursor = 'pointer';
  terminalOutput.title = 'Click to simulate terminal commands!';

  terminalOutput.addEventListener('click', () => {
    const item = commands[cmdIndex % commands.length];
    cmdIndex++;

    const newCmd = document.createElement('p');
    newCmd.innerHTML = `<span class="prompt">amrit@dev:~$</span> ${item.cmd}`;
    
    const newRes = document.createElement('p');
    newRes.className = 'term-res';
    newRes.textContent = item.res;

    const cursor = terminalOutput.querySelector('.term-cursor');
    if (cursor) {
      terminalOutput.insertBefore(newCmd, cursor);
      terminalOutput.insertBefore(newRes, cursor);
    } else {
      terminalOutput.appendChild(newCmd);
      terminalOutput.appendChild(newRes);
    }
  });
}
