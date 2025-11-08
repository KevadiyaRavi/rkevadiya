// Electrical Engineering Vector Graphics

function createSubstationVector(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 200 200");
  svg.style.width = "100%";
  svg.style.height = "100%";

  svg.innerHTML = `
        <!-- Base -->
        <rect x="20" y="140" width="160" height="50" fill="#1e293b" stroke="#3b82f6" stroke-width="2" />
        
        <!-- Towers -->
        <rect x="50" y="80" width="20" height="60" fill="#334155" stroke="#3b82f6" stroke-width="2">
            <animate attributeName="height" from="0" to="60" dur="0.5s" fill="freeze" />
        </rect>
        <rect x="90" y="60" width="20" height="80" fill="#334155" stroke="#3b82f6" stroke-width="2">
            <animate attributeName="height" from="0" to="80" dur="0.5s" begin="0.2s" fill="freeze" />
        </rect>
        <rect x="130" y="80" width="20" height="60" fill="#334155" stroke="#3b82f6" stroke-width="2">
            <animate attributeName="height" from="0" to="60" dur="0.5s" begin="0.4s" fill="freeze" />
        </rect>
        
        <!-- Insulators -->
        <circle cx="60" cy="75" r="5" fill="#22d3ee" />
        <circle cx="100" cy="55" r="5" fill="#22d3ee" />
        <circle cx="140" cy="75" r="5" fill="#22d3ee" />
        
        <!-- Power lines -->
        <line x1="60" y1="75" x2="100" y2="55" stroke="#fbbf24" stroke-width="2" />
        <line x1="100" y1="55" x2="140" y2="75" stroke="#fbbf24" stroke-width="2" />
        
        <!-- Electrical sparks -->
        <circle cx="60" cy="75" r="8" fill="none" stroke="#3b82f6" stroke-width="1">
            <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="140" cy="75" r="8" fill="none" stroke="#3b82f6" stroke-width="1">
            <animate attributeName="r" values="8;12;8" dur="2s" begin="1s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" begin="1s" repeatCount="indefinite" />
        </circle>
    `;

  container.appendChild(svg);
}

function createTransformerVector(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 200 200");
  svg.style.width = "100%";
  svg.style.height = "100%";

  svg.innerHTML = `
        <!-- Transformer body -->
        <rect x="60" y="80" width="80" height="90" fill="#1e293b" stroke="#3b82f6" stroke-width="2" rx="4" />
        
        <!-- Cooling fins -->
        <rect x="145" y="95" width="15" height="10" fill="#334155" stroke="#3b82f6" stroke-width="1">
            <animate attributeName="x" values="145;150;145" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="145" y="110" width="15" height="10" fill="#334155" stroke="#3b82f6" stroke-width="1">
            <animate attributeName="x" values="145;150;145" dur="2s" begin="0.2s" repeatCount="indefinite" />
        </rect>
        <rect x="145" y="125" width="15" height="10" fill="#334155" stroke="#3b82f6" stroke-width="1">
            <animate attributeName="x" values="145;150;145" dur="2s" begin="0.4s" repeatCount="indefinite" />
        </rect>
        <rect x="145" y="140" width="15" height="10" fill="#334155" stroke="#3b82f6" stroke-width="1">
            <animate attributeName="x" values="145;150;145" dur="2s" begin="0.6s" repeatCount="indefinite" />
        </rect>
        
        <!-- Bushings -->
        <rect x="75" y="60" width="12" height="20" fill="#fbbf24" stroke="#f59e0b" stroke-width="2" />
        <rect x="113" y="60" width="12" height="20" fill="#fbbf24" stroke="#f59e0b" stroke-width="2" />
        
        <!-- Oil level indicator -->
        <circle cx="100" cy="110" r="15" fill="#0f172a" stroke="#3b82f6" stroke-width="2" />
        <rect x="93" y="110" width="14" height="10" fill="#22d3ee">
            <animate attributeName="height" values="0;10;0" dur="3s" repeatCount="indefinite" />
        </rect>
        
        <!-- Rating plate -->
        <rect x="70" y="140" width="60" height="20" fill="#334155" stroke="#3b82f6" stroke-width="1" />
        <text x="100" y="153" font-size="8" fill="#3b82f6" text-anchor="middle">160 MVA</text>
        
        <!-- Electrical sparks -->
        <path d="M 81 50 L 85 55 L 83 55 L 87 62" stroke="#fbbf24" stroke-width="2" fill="none">
            <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" />
        </path>
        <path d="M 119 50 L 115 55 L 117 55 L 113 62" stroke="#fbbf24" stroke-width="2" fill="none">
            <animate attributeName="opacity" values="0;1;0" dur="1.5s" begin="0.7s" repeatCount="indefinite" />
        </path>
    `;

  container.appendChild(svg);
}

function createPLCVector(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 200 200");
  svg.style.width = "100%";
  svg.style.height = "100%";

  svg.innerHTML = `
        <!-- PLC Cabinet -->
        <rect x="40" y="40" width="120" height="130" fill="#1e293b" stroke="#3b82f6" stroke-width="2" rx="4" />
        
        <!-- Screen -->
        <rect x="55" y="55" width="90" height="50" fill="#0f172a" stroke="#3b82f6" stroke-width="2" />
        <rect x="58" y="58" width="84" height="44" fill="url(#screenGradient)">
            <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2s" repeatCount="indefinite" />
        </rect>
        
        <!-- Screen text -->
        <text x="100" y="75" font-size="6" fill="#22d3ee" text-anchor="middle">SIEMENS S7</text>
        <text x="100" y="85" font-size="6" fill="#22d3ee" text-anchor="middle">TIA PORTAL</text>
        <text x="100" y="95" font-size="6" fill="#10b981" text-anchor="middle">RUNNING</text>
        
        <!-- LED indicators -->
        <circle cx="60" cy="120" r="4" fill="#10b981">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="78" cy="120" r="4" fill="#10b981">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" begin="0.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="96" cy="120" r="4" fill="#10b981">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" begin="0.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="114" cy="120" r="4" fill="#ef4444">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
        </circle>
        <circle cx="132" cy="120" r="4" fill="#ef4444">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" begin="0.8s" repeatCount="indefinite" />
        </circle>
        
        <!-- I/O Modules -->
        <rect x="55" y="135" width="25" height="25" fill="#334155" stroke="#3b82f6" stroke-width="1" />
        <rect x="87" y="135" width="25" height="25" fill="#334155" stroke="#3b82f6" stroke-width="1" />
        <rect x="119" y="135" width="25" height="25" fill="#334155" stroke="#3b82f6" stroke-width="1" />
        
        <!-- Module labels -->
        <text x="67.5" y="150" font-size="6" fill="#3b82f6" text-anchor="middle">DI</text>
        <text x="99.5" y="150" font-size="6" fill="#3b82f6" text-anchor="middle">DO</text>
        <text x="131.5" y="150" font-size="6" fill="#3b82f6" text-anchor="middle">AI</text>
        
        <defs>
            <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#1e3a8a" stop-opacity="0.5" />
                <stop offset="100%" stop-color="#1e293b" stop-opacity="0.5" />
            </linearGradient>
        </defs>
    `;

  container.appendChild(svg);
}

function createSVCVector(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 200 200");
  svg.style.width = "100%";
  svg.style.height = "100%";

  svg.innerHTML = `
        <!-- Main SVC structure -->
        <rect x="30" y="100" width="140" height="70" fill="#1e293b" stroke="#3b82f6" stroke-width="2" />
        
        <!-- Thyristor modules -->
        <rect x="40" y="110" width="18" height="50" fill="#334155" stroke="#3b82f6" stroke-width="2">
            <animateTransform attributeName="transform" type="scale" from="1,0" to="1,1" dur="0.5s" fill="freeze" additive="sum" />
        </rect>
        <rect x="65" y="110" width="18" height="50" fill="#334155" stroke="#3b82f6" stroke-width="2">
            <animateTransform attributeName="transform" type="scale" from="1,0" to="1,1" dur="0.5s" begin="0.1s" fill="freeze" additive="sum" />
        </rect>
        <rect x="90" y="110" width="18" height="50" fill="#334155" stroke="#3b82f6" stroke-width="2">
            <animateTransform attributeName="transform" type="scale" from="1,0" to="1,1" dur="0.5s" begin="0.2s" fill="freeze" additive="sum" />
        </rect>
        <rect x="115" y="110" width="18" height="50" fill="#334155" stroke="#3b82f6" stroke-width="2">
            <animateTransform attributeName="transform" type="scale" from="1,0" to="1,1" dur="0.5s" begin="0.3s" fill="freeze" additive="sum" />
        </rect>
        <rect x="140" y="110" width="18" height="50" fill="#334155" stroke="#3b82f6" stroke-width="2">
            <animateTransform attributeName="transform" type="scale" from="1,0" to="1,1" dur="0.5s" begin="0.4s" fill="freeze" additive="sum" />
        </rect>
        
        <!-- Firing pulses -->
        <circle cx="49" cy="125" r="3" fill="#fbbf24">
            <animate attributeName="r" values="3;5;3" dur="1s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
        </circle>
        <circle cx="74" cy="125" r="3" fill="#fbbf24">
            <animate attributeName="r" values="3;5;3" dur="1s" begin="0.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.3;1" dur="1s" begin="0.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="99" cy="125" r="3" fill="#fbbf24">
            <animate attributeName="r" values="3;5;3" dur="1s" begin="0.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.3;1" dur="1s" begin="0.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="124" cy="125" r="3" fill="#fbbf24">
            <animate attributeName="r" values="3;5;3" dur="1s" begin="0.6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.3;1" dur="1s" begin="0.6s" repeatCount="indefinite" />
        </circle>
        <circle cx="149" cy="125" r="3" fill="#fbbf24">
            <animate attributeName="r" values="3;5;3" dur="1s" begin="0.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.3;1" dur="1s" begin="0.8s" repeatCount="indefinite" />
        </circle>
        
        <!-- Reactor coils -->
        <g transform="translate(70, 40)">
            <circle cx="0" cy="0" r="15" fill="none" stroke="#22d3ee" stroke-width="3">
                <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="0" cy="0" r="10" fill="none" stroke="#22d3ee" stroke-width="2">
                <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="-360 0 0" dur="3s" repeatCount="indefinite" />
            </circle>
        </g>
        
        <g transform="translate(130, 40)">
            <circle cx="0" cy="0" r="15" fill="none" stroke="#22d3ee" stroke-width="3">
                <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="4s" begin="0.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="0" cy="0" r="10" fill="none" stroke="#22d3ee" stroke-width="2">
                <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="-360 0 0" dur="3s" begin="0.5s" repeatCount="indefinite" />
            </circle>
        </g>
        
        <!-- Rating label -->
        <rect x="60" y="75" width="80" height="15" fill="#334155" stroke="#3b82f6" stroke-width="1" />
        <text x="100" y="85" font-size="8" fill="#fbbf24" text-anchor="middle">175 MVAR SVC</text>
        
        <!-- Power flow arrows -->
        <path d="M 20 135 L 30 135" stroke="#10b981" stroke-width="3" marker-end="url(#arrow)">
            <animate attributeName="x1" values="20;25;20" dur="1.5s" repeatCount="indefinite" />
            <animate attributeName="x2" values="30;35;30" dur="1.5s" repeatCount="indefinite" />
        </path>
        <path d="M 170 135 L 180 135" stroke="#10b981" stroke-width="3" marker-end="url(#arrow)">
            <animate attributeName="x1" values="170;175;170" dur="1.5s" begin="0.7s" repeatCount="indefinite" />
            <animate attributeName="x2" values="180;185;180" dur="1.5s" begin="0.7s" repeatCount="indefinite" />
        </path>
        
        <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="#10b981" />
            </marker>
        </defs>
    `;

  container.appendChild(svg);
}

function createRelayVector(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 200 200");
  svg.style.width = "100%";
  svg.style.height = "100%";

  svg.innerHTML = `
        <!-- Relay panel -->
        <rect x="50" y="50" width="100" height="120" fill="#1e293b" stroke="#3b82f6" stroke-width="2" rx="4" />
        
        <!-- Display screen -->
        <rect x="65" y="65" width="70" height="40" fill="#0f172a" stroke="#3b82f6" stroke-width="2" />
        <text x="100" y="80" font-size="8" fill="#10b981" text-anchor="middle">
            SIEMENS
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
        </text>
        <text x="100" y="95" font-size="7" fill="#22d3ee" text-anchor="middle">7UT613</text>
        
        <!-- LED indicators -->
        <circle cx="70" cy="120" r="4" fill="#ef4444">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="90" cy="120" r="4" fill="#fbbf24">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="110" cy="120" r="4" fill="#10b981">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" begin="1s" repeatCount="indefinite" />
        </circle>
        
        <text x="70" y="133" font-size="5" fill="#94a3b8" text-anchor="middle">TRIP</text>
        <text x="90" y="133" font-size="5" fill="#94a3b8" text-anchor="middle">ALARM</text>
        <text x="110" y="133" font-size="5" fill="#94a3b8" text-anchor="middle">READY</text>
        
        <!-- Connection ports -->
        <rect x="60" y="145" width="10" height="15" fill="#334155" stroke="#3b82f6" stroke-width="1" />
        <rect x="80" y="145" width="10" height="15" fill="#334155" stroke="#3b82f6" stroke-width="1" />
        <rect x="100" y="145" width="10" height="15" fill="#334155" stroke="#3b82f6" stroke-width="1" />
        <rect x="120" y="145" width="10" height="15" fill="#334155" stroke="#3b82f6" stroke-width="1" />
        
        <!-- Data flow animation -->
        <circle cx="65" cy="152" r="2" fill="#22d3ee">
            <animate attributeName="cx" values="65;125" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0" dur="2s" repeatCount="indefinite" />
        </circle>
    `;

  container.appendChild(svg);
}

// Initialize all vectors
document.addEventListener("DOMContentLoaded", function () {
  createSubstationVector("substationVector");
  createSubstationVector("project1");
  createTransformerVector("project2");
  createPLCVector("project3");
  createSVCVector("project4");
  createRelayVector("project5");
});
