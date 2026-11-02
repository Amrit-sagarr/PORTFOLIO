// Mobile Menu Toggle
const mobileBtn = document.getElementById('mobileToggle') || document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.mech-nav-links') || document.querySelector('.nav-links');

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

// Interactive Robotics Terminal Telemetry
const terminalOutput = document.getElementById('terminalOutput');
const commands = [
  { 
    cmd: 'agy --orchestrate --mode=autonomous', 
    res: '[SYS_STATUS] Multi-Agent Pipeline Online: Planner -> Generator -> Verifier [ALL CLEAR]' 
  },
  { 
    cmd: 'cat ~/.gym_regimen.log', 
    res: '🏋️ PROGRESSIVE OVERLOAD // Reps: 5x5 | Consistency: 100% | Mental Grit: Maximum' 
  },
  { 
    cmd: 'gcc -Wall -O2 memory_arch.c -o sys_core && ./sys_core', 
    res: 'Pointers initialized. Heap allocated: 4096 bytes. Memory safety verified.' 
  },
  { 
    cmd: 'python3 -c "import antigravity; print(\'Momentum High\')"', 
    res: '>>> Momentum High: Rapidly building confidence & deploying agentic solutions 🚀' 
  }
];

let cmdIndex = 0;

if (terminalOutput) {
  terminalOutput.style.cursor = 'pointer';
  terminalOutput.title = 'Click anywhere inside to inject next telemetry command!';

  terminalOutput.addEventListener('click', () => {
    const item = commands[cmdIndex % commands.length];
    cmdIndex++;

    const row = document.createElement('div');
    row.className = 'term-row';
    row.innerHTML = `<span class="t-prompt">amrit@mech:~$</span> <span class="t-cmd">${item.cmd}</span>`;
    
    const res = document.createElement('div');
    res.className = 't-res text-yellow';
    res.textContent = item.res;

    const cursorRow = terminalOutput.querySelector('.term-cursor-row') || terminalOutput.querySelector('.term-cursor');
    if (cursorRow) {
      terminalOutput.insertBefore(row, cursorRow);
      terminalOutput.insertBefore(res, cursorRow);
    } else {
      terminalOutput.appendChild(row);
      terminalOutput.appendChild(res);
    }
  });
}
