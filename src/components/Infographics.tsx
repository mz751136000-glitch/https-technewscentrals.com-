import React from 'react';

interface InfographicProps {
  id: string;
  className?: string;
  seoAlt: string;
}

export const InfographicRenderer: React.FC<InfographicProps> = ({ id, className = '', seoAlt }) => {
  return (
    <div 
      className={`relative w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#0b2721] to-[#051411] border border-[#5fdee7]/25 shadow-2xl p-4 sm:p-6 transition-all duration-300 hover:border-[#5fdee7]/50 ${className}`}
      role="img"
      aria-label={seoAlt}
    >
      <div className="absolute top-2 right-3 text-[10px] font-mono tracking-wider text-[#5fdee7]/60 uppercase">
        ARCHITECTURAL SCHEMATIC // TNC-SPEC-{id.slice(0, 4).toUpperCase()}
      </div>
      {renderInfographic(id, seoAlt)}
      <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-[#5fdee7]/15 pt-2">
        <span className="text-[#5fdee7]">FIGURE // {seoAlt}</span>
        <span className="text-slate-500">2026 technewscentrals peer review</span>
      </div>
    </div>
  );
};

function renderInfographic(id: string, seoAlt: string) {
  switch (id) {
    case 'llm-orchestration-agentic-workflows':
      return (
        <svg viewBox="0 0 800 360" className="w-full h-auto text-slate-100 select-none">
          <defs>
            <linearGradient id="embossGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#134e42" />
              <stop offset="50%" stopColor="#0b2721" />
              <stop offset="100%" stopColor="#051411" />
            </linearGradient>
            <filter id="glowCyan" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          {/* 3D Embossed Header */}
          <rect x="20" y="15" width="760" height="42" rx="8" fill="url(#embossGrad)" stroke="#5fdee7" strokeWidth="1.5" />
          <text x="40" y="41" fill="#5fdee7" fontSize="13" fontWeight="700" letterSpacing="1.5" fontFamily="monospace">ENTERPRISE AGENTIC ORCHESTRATION PIPELINE (RECURSIVE DAG)</text>
          <text x="640" y="41" fill="#00ffaa" fontSize="11" fontFamily="monospace">TTFT: 142ms // P99</text>
          
          {/* Agent Graph Nodes */}
          {/* User Request */}
          <rect x="30" y="100" width="130" height="140" rx="8" fill="#0d2e27" stroke="#33786a" strokeWidth="1.5" />
          <text x="45" y="125" fill="#e2e8f0" fontSize="12" fontWeight="600">Context Router</text>
          <text x="45" y="145" fill="#94a3b8" fontSize="10">Semantic Dispatcher</text>
          <rect x="45" y="160" width="100" height="20" rx="4" fill="#081c18" />
          <text x="52" y="174" fill="#5fdee7" fontSize="9" fontFamily="monospace">Tokens: 128k cap</text>
          <rect x="45" y="190" width="100" height="20" rx="4" fill="#081c18" />
          <text x="52" y="204" fill="#00ffaa" fontSize="9" fontFamily="monospace">Latency: 18ms</text>

          {/* Connection Lines */}
          <path d="M 160 170 L 220 120" stroke="#5fdee7" strokeWidth="2" strokeDasharray="4,4" filter="url(#glowCyan)" />
          <path d="M 160 170 L 220 220" stroke="#5fdee7" strokeWidth="2" strokeDasharray="4,4" />

          {/* Agent Node A: Planner */}
          <rect x="220" y="70" width="160" height="90" rx="8" fill="#0f362e" stroke="#5fdee7" strokeWidth="1.5" />
          <circle cx="240" cy="90" r="5" fill="#00ffaa" filter="url(#glowCyan)" />
          <text x="255" y="94" fill="#ffffff" fontSize="12" fontWeight="700">Sub-Goal Planner</text>
          <text x="235" y="120" fill="#cbd5e1" fontSize="10">Decomposition Engine</text>
          <text x="235" y="140" fill="#5fdee7" fontSize="9" fontFamily="monospace">Reflection Loop: 3x max</text>

          {/* Agent Node B: Tool Actuator */}
          <rect x="220" y="180" width="160" height="90" rx="8" fill="#0f362e" stroke="#5fdee7" strokeWidth="1.5" />
          <circle cx="240" cy="200" r="5" fill="#5fdee7" />
          <text x="255" y="204" fill="#ffffff" fontSize="12" fontWeight="700">Tool Actuator</text>
          <text x="235" y="230" fill="#cbd5e1" fontSize="10">Sandboxed gRPC / IPC</text>
          <text x="235" y="250" fill="#00ffaa" fontSize="9" fontFamily="monospace">Fail-safe Guardrails</text>

          {/* Aggregator Node */}
          <path d="M 380 115 L 440 170" stroke="#5fdee7" strokeWidth="2" />
          <path d="M 380 225 L 440 170" stroke="#5fdee7" strokeWidth="2" />
          <rect x="440" y="105" width="150" height="130" rx="8" fill="#13433a" stroke="#00ffaa" strokeWidth="2" />
          <text x="455" y="130" fill="#ffffff" fontSize="12" fontWeight="700">Verifier & Critic</text>
          <text x="455" y="150" fill="#94a3b8" fontSize="10">AST & Schema Validate</text>
          <rect x="455" y="165" width="120" height="22" rx="4" fill="#081c18" />
          <text x="462" y="180" fill="#5fdee7" fontSize="9" fontFamily="monospace">Confidence: 99.4%</text>
          <rect x="455" y="195" width="120" height="22" rx="4" fill="#081c18" />
          <text x="462" y="210" fill="#00ffaa" fontSize="9" fontFamily="monospace">Token Spill: 0%</text>

          {/* Output Deliverable */}
          <path d="M 590 170 L 640 170" stroke="#00ffaa" strokeWidth="2" markerEnd="url(#arrow)" />
          <rect x="640" y="110" width="130" height="120" rx="8" fill="#081c18" stroke="#5fdee7" strokeWidth="1.5" />
          <text x="655" y="135" fill="#5fdee7" fontSize="11" fontWeight="700">OUTPUT BUFFER</text>
          <text x="655" y="160" fill="#cbd5e1" fontSize="10">Streaming SSE</text>
          <text x="655" y="180" fill="#94a3b8" fontSize="10">Verified Payload</text>
          <text x="655" y="210" fill="#00ffaa" fontSize="9" fontFamily="monospace">Latency: 284ms</text>
          
          {/* Bottom Telemetry Banner */}
          <rect x="20" y="290" width="760" height="48" rx="6" fill="#061613" stroke="#25554b" />
          <text x="40" y="320" fill="#94a3b8" fontSize="11" fontFamily="monospace">SPECS: Distributed Actor System · Raft Consensus State Store · Zero-Data Leakage Boundary</text>
        </svg>
      );

    case 'deep-learning-quantization':
      return (
        <svg viewBox="0 0 800 360" className="w-full h-auto text-slate-100 select-none">
          <defs>
            <linearGradient id="metallicHeader" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e3a34" />
              <stop offset="50%" stopColor="#2e6459" />
              <stop offset="100%" stopColor="#132824" />
            </linearGradient>
          </defs>
          <rect x="20" y="15" width="760" height="42" rx="8" fill="url(#metallicHeader)" stroke="#5fdee7" strokeWidth="1.5" />
          <text x="40" y="41" fill="#5fdee7" fontSize="13" fontWeight="700" letterSpacing="1.5" fontFamily="monospace">TENSOR QUANTIZATION MATRIX: FP16 VS AWQ / GPTQ INT4/INT8</text>
          
          {/* Left: FP16 Uncompressed */}
          <rect x="30" y="75" width="220" height="200" rx="8" fill="#0e2a24" stroke="#48655e" strokeWidth="1.5" />
          <text x="45" y="105" fill="#ffffff" fontSize="13" fontWeight="700">FP16 Baseline</text>
          <text x="45" y="125" fill="#94a3b8" fontSize="11">16-bit Floating Point</text>
          <rect x="45" y="145" width="190" height="24" rx="4" fill="#081c18" />
          <text x="55" y="161" fill="#f87171" fontSize="10" fontFamily="monospace">VRAM Footprint: 32.4 GB</text>
          <rect x="45" y="178" width="190" height="24" rx="4" fill="#081c18" />
          <text x="55" y="194" fill="#94a3b8" fontSize="10" fontFamily="monospace">Throughput: 42 tok/sec</text>
          <rect x="45" y="211" width="190" height="24" rx="4" fill="#081c18" />
          <text x="55" y="227" fill="#94a3b8" fontSize="10" fontFamily="monospace">Perplexity: 5.12 (Ref)</text>

          {/* Middle: Quantization Engine */}
          <path d="M 260 175 L 300 175" stroke="#5fdee7" strokeWidth="3" markerEnd="url(#arrow)" />
          <rect x="300" y="75" width="200" height="200" rx="8" fill="#123a31" stroke="#5fdee7" strokeWidth="2" />
          <text x="315" y="105" fill="#5fdee7" fontSize="13" fontWeight="700">AWQ / SmoothQuant</text>
          <text x="315" y="125" fill="#94a3b8" fontSize="11">Salience-Preserving Scaling</text>
          {/* Grid pattern representing weights */}
          <g transform="translate(320, 145)">
            {[0, 1, 2, 3].map(row => 
              [0, 1, 2, 3].map(col => (
                <rect 
                  key={`${row}-${col}`} 
                  x={col * 38} 
                  y={row * 24} 
                  width="32" 
                  height="18" 
                  rx="3" 
                  fill={(row + col) % 2 === 0 ? '#5fdee7' : '#00ffaa'} 
                  opacity={(row + col) % 3 === 0 ? 0.9 : 0.4} 
                />
              ))
            )}
          </g>

          {/* Right: INT4 / INT8 Outcome */}
          <path d="M 510 175 L 550 175" stroke="#00ffaa" strokeWidth="3" markerEnd="url(#arrow)" />
          <rect x="550" y="75" width="220" height="200" rx="8" fill="#0e2a24" stroke="#00ffaa" strokeWidth="1.5" />
          <text x="565" y="105" fill="#00ffaa" fontSize="13" fontWeight="700">INT4 Optimized</text>
          <text x="565" y="125" fill="#94a3b8" fontSize="11">Activation-Aware Grouping</text>
          <rect x="565" y="145" width="190" height="24" rx="4" fill="#081c18" />
          <text x="575" y="161" fill="#00ffaa" fontSize="10" fontFamily="monospace">VRAM Footprint: 8.8 GB (-73%)</text>
          <rect x="565" y="178" width="190" height="24" rx="4" fill="#081c18" />
          <text x="575" y="194" fill="#5fdee7" fontSize="10" fontFamily="monospace">Throughput: 138 tok/sec (+228%)</text>
          <rect x="565" y="211" width="190" height="24" rx="4" fill="#081c18" />
          <text x="575" y="227" fill="#cbd5e1" fontSize="10" fontFamily="monospace">Perplexity Delta: +0.06</text>

          <rect x="20" y="295" width="760" height="45" rx="6" fill="#061613" stroke="#25554b" />
          <text x="40" y="323" fill="#94a3b8" fontSize="11" fontFamily="monospace">BENCHMARK: NVIDIA H100 SXM5 · Llama-3-70B Batch Size 16 · CUDA Kernel Auto-Tuned</text>
        </svg>
      );

    case 'transformer-architectures-attention-benchmarks':
      return (
        <svg viewBox="0 0 800 360" className="w-full h-auto text-slate-100 select-none">
          <rect x="20" y="15" width="760" height="42" rx="8" fill="#0f362e" stroke="#5fdee7" strokeWidth="1.5" />
          <text x="40" y="41" fill="#5fdee7" fontSize="13" fontWeight="700" letterSpacing="1.5" fontFamily="monospace">FLASHATTENTION-3 VS MULTI-HEAD ATTENTION FLOP UTILIZATION</text>
          {/* Heatmap Matrix */}
          <g transform="translate(40, 80)">
            <text x="0" y="15" fill="#cbd5e1" fontSize="12" fontWeight="600">Q × K^T Attention Heatmap Grid (Tiled SRAM)</text>
            {[0, 1, 2, 3, 4, 5].map(r => 
              [0, 1, 2, 3, 4, 5].map(c => {
                const intensity = (r === c ? 1 : Math.abs(r - c) < 2 ? 0.65 : 0.2);
                return (
                  <rect 
                    key={`h-${r}-${c}`}
                    x={c * 42}
                    y={30 + r * 30}
                    width="38"
                    height="26"
                    rx="4"
                    fill={r === c ? '#00ffaa' : '#5fdee7'}
                    opacity={intensity}
                  />
                );
              })
            )}
          </g>

          {/* Data Flow & Metallic Callouts */}
          <rect x="330" y="85" width="200" height="180" rx="8" fill="#0a221d" stroke="#5fdee7" strokeWidth="1.5" />
          <text x="345" y="115" fill="#5fdee7" fontSize="12" fontWeight="700">Memory Bandwidth Bottleneck</text>
          <text x="345" y="135" fill="#94a3b8" fontSize="10">Standard Attention: O(N²) HBM IO</text>
          <line x1="345" y1="145" x2="515" y2="145" stroke="#25554b" />
          <text x="345" y="165" fill="#ffffff" fontSize="11" fontWeight="600">FlashAttention-3 Kernel:</text>
          <text x="345" y="185" fill="#00ffaa" fontSize="10">✓ Online Softmax Rescaling</text>
          <text x="345" y="205" fill="#00ffaa" fontSize="10">✓ Ping-Pong Asynchronous Copy</text>
          <text x="345" y="225" fill="#00ffaa" fontSize="10">✓ Warp-Specialized Tensor Core</text>

          {/* Benchmark Comparison Card */}
          <rect x="555" y="85" width="215" height="180" rx="8" fill="#0d2b24" stroke="#00ffaa" strokeWidth="1.5" />
          <text x="570" y="115" fill="#00ffaa" fontSize="12" fontWeight="700">H100 GPU Peak TFLOPs</text>
          <text x="570" y="145" fill="#94a3b8" fontSize="11">Standard MHA: 35% Peak</text>
          <rect x="570" y="155" width="180" height="12" rx="4" fill="#1b453b" />
          <rect x="570" y="155" width="63" height="12" rx="4" fill="#f87171" />
          
          <text x="570" y="195" fill="#5fdee7" fontSize="11">FlashAttention-3: 75% Peak</text>
          <rect x="570" y="205" width="180" height="12" rx="4" fill="#1b453b" />
          <rect x="570" y="205" width="135" height="12" rx="4" fill="#00ffaa" />

          <rect x="20" y="285" width="760" height="48" rx="6" fill="#061613" stroke="#25554b" />
          <text x="40" y="315" fill="#94a3b8" fontSize="11" fontFamily="monospace">ALGORITHM: Tri Dao et al. · Hopper FP8 Tensor Cores · Sequence Length 128k Tokens</text>
        </svg>
      );

    case 'diffusion-models-real-time-latent-generation':
      return (
        <svg viewBox="0 0 800 360" className="w-full h-auto text-slate-100 select-none">
          <rect x="20" y="15" width="760" height="42" rx="8" fill="#0f362e" stroke="#5fdee7" strokeWidth="1.5" />
          <text x="40" y="41" fill="#5fdee7" fontSize="13" fontWeight="700" letterSpacing="1.5" fontFamily="monospace">LATENT DIFFUSION: REVERSE SDE DENOISING PIPELINE (T=1.0 TO T=0.0)</text>
          
          {/* Step 1: Pure Noise */}
          <rect x="40" y="85" width="140" height="180" rx="8" fill="#091d19" stroke="#37675c" strokeWidth="1" />
          <text x="55" y="115" fill="#94a3b8" fontSize="11" fontWeight="700">T = 1.0 (Gaussian)</text>
          <circle cx="110" cy="165" r="35" fill="none" stroke="#5fdee7" strokeWidth="1" strokeDasharray="3,3" />
          <text x="55" y="225" fill="#64748b" fontSize="10">z_t ~ N(0, I)</text>
          <text x="55" y="245" fill="#94a3b8" fontSize="9" fontFamily="monospace">Entropy: Maximum</text>

          {/* Denoising Arrow */}
          <path d="M 190 175 L 240 175" stroke="#5fdee7" strokeWidth="2" />
          
          {/* Step 2: DiT Transformer Backbone */}
          <rect x="240" y="75" width="280" height="200" rx="8" fill="#103830" stroke="#5fdee7" strokeWidth="2" />
          <text x="260" y="105" fill="#ffffff" fontSize="13" fontWeight="700">DiT Latent Transformer Backbone</text>
          <text x="260" y="125" fill="#5fdee7" fontSize="11">Cross-Attention Guidance (CFG: 3.5)</text>
          
          <rect x="260" y="145" width="240" height="30" rx="4" fill="#081c18" stroke="#00ffaa" strokeWidth="1" />
          <text x="270" y="165" fill="#00ffaa" fontSize="10" fontFamily="monospace">Step 4/4 · Consistency Distillation</text>
          
          <rect x="260" y="185" width="240" height="30" rx="4" fill="#081c18" stroke="#5fdee7" strokeWidth="1" />
          <text x="270" y="205" fill="#5fdee7" fontSize="10" fontFamily="monospace">Inference Latency: 48ms @ 60 FPS</text>
          
          <text x="260" y="245" fill="#94a3b8" fontSize="10">Flow Matching ODE Solver · RK4 Adaptive</text>

          {/* Step 3: High Fidelity Latent Decoded */}
          <path d="M 530 175 L 580 175" stroke="#00ffaa" strokeWidth="2" />
          <rect x="580" y="85" width="170" height="180" rx="8" fill="#0b2b24" stroke="#00ffaa" strokeWidth="1.5" />
          <text x="595" y="115" fill="#00ffaa" fontSize="11" fontWeight="700">T = 0.0 (Decoded)</text>
          <rect x="605" y="130" width="120" height="70" rx="4" fill="#144b3e" stroke="#5fdee7" strokeWidth="1" />
          <text x="615" y="165" fill="#ffffff" fontSize="10" fontWeight="600">Spatial Latents</text>
          <text x="615" y="185" fill="#00ffaa" fontSize="9" fontFamily="monospace">1024 × 1024 px</text>
          <text x="595" y="225" fill="#cbd5e1" fontSize="10">VAE Decode: 8ms</text>
          <text x="595" y="245" fill="#94a3b8" fontSize="9" fontFamily="monospace">FID Score: 2.15</text>

          <rect x="20" y="295" width="760" height="45" rx="6" fill="#061613" stroke="#25554b" />
          <text x="40" y="323" fill="#94a3b8" fontSize="11" fontFamily="monospace">ENGINE: Flow Matching (Rectified Flow) · SD3.5 / Flux DiT Block · NVENC Multimodal Streaming</text>
        </svg>
      );

    case 'robotics-ros2-autonomous-navigation':
      return (
        <svg viewBox="0 0 800 360" className="w-full h-auto text-slate-100 select-none">
          <rect x="20" y="15" width="760" height="42" rx="8" fill="#0f362e" stroke="#5fdee7" strokeWidth="1.5" />
          <text x="40" y="41" fill="#5fdee7" fontSize="13" fontWeight="700" letterSpacing="1.5" fontFamily="monospace">ROS2 HUMBLE EDGE NAVIGATION & 3D LIDAR SLAM TELEMETRY</text>

          {/* Lidar Spatial Grid */}
          <g transform="translate(40, 75)">
            <rect x="0" y="0" width="280" height="200" rx="8" fill="#081c18" stroke="#33786a" strokeWidth="1.5" />
            <circle cx="140" cy="100" r="80" fill="none" stroke="#5fdee7" strokeWidth="1" strokeDasharray="4,4" />
            <circle cx="140" cy="100" r="50" fill="none" stroke="#5fdee7" strokeWidth="1" strokeDasharray="2,2" />
            <circle cx="140" cy="100" r="20" fill="none" stroke="#5fdee7" strokeWidth="1" />
            <circle cx="140" cy="100" r="4" fill="#00ffaa" />
            
            {/* Lidar Point Cloud hits */}
            <circle cx="180" cy="70" r="2" fill="#5fdee7" />
            <circle cx="185" cy="75" r="2" fill="#5fdee7" />
            <circle cx="100" cy="60" r="2" fill="#5fdee7" />
            <circle cx="95" cy="65" r="2" fill="#5fdee7" />
            <circle cx="190" cy="140" r="2" fill="#00ffaa" />
            <circle cx="80" cy="150" r="2" fill="#5fdee7" />
            <text x="15" y="25" fill="#5fdee7" fontSize="11" fontFamily="monospace">LIDAR: 128-Beam Ouster</text>
            <text x="15" y="185" fill="#00ffaa" fontSize="10" fontFamily="monospace">Pose Covariance: ±0.8mm</text>
          </g>

          {/* ROS2 Micro-Executor Architecture */}
          <rect x="340" y="75" width="220" height="200" rx="8" fill="#0d2c25" stroke="#5fdee7" strokeWidth="1.5" />
          <text x="355" y="105" fill="#ffffff" fontSize="12" fontWeight="700">ROS2 Nav2 Pipeline</text>
          <rect x="355" y="120" width="190" height="28" rx="4" fill="#081c18" />
          <text x="365" y="138" fill="#5fdee7" fontSize="10" fontFamily="monospace">DDS: Cyclone Zero-Copy</text>
          <rect x="355" y="155" width="190" height="28" rx="4" fill="#081c18" />
          <text x="365" y="173" fill="#00ffaa" fontSize="10" fontFamily="monospace">Costmap: GPU Voxel Filter</text>
          <rect x="355" y="190" width="190" height="28" rx="4" fill="#081c18" />
          <text x="365" y="208" fill="#cbd5e1" fontSize="10" fontFamily="monospace">MPPI Controller: 100 Hz</text>
          <rect x="355" y="225" width="190" height="28" rx="4" fill="#081c18" />
          <text x="365" y="243" fill="#f87171" fontSize="10" fontFamily="monospace">Safety Watchdog: 2ms</text>

          {/* Jetson Orin Edge Telemetry Panel */}
          <rect x="580" y="75" width="190" height="200" rx="8" fill="#0b241e" stroke="#00ffaa" strokeWidth="1.5" />
          <text x="595" y="105" fill="#00ffaa" fontSize="12" fontWeight="700">Jetson AGX Orin</text>
          <text x="595" y="125" fill="#94a3b8" fontSize="10">275 TOPS Compute</text>
          <text x="595" y="150" fill="#cbd5e1" fontSize="10">Power Draw: 38.5W</text>
          <text x="595" y="175" fill="#cbd5e1" fontSize="10">E-Stop Latency: 1.2ms</text>
          <text x="595" y="200" fill="#5fdee7" fontSize="10">Path Smoothness: 98.7%</text>
          <text x="595" y="225" fill="#00ffaa" fontSize="10">Jitter: &lt; 0.15ms</text>

          <rect x="20" y="295" width="760" height="45" rx="6" fill="#061613" stroke="#25554b" />
          <text x="40" y="323" fill="#94a3b8" fontSize="11" fontFamily="monospace">HARDWARE: Nvidia DriveOS 6.0 · RT-PREEMPT Real-time Linux 6.6 · CAN-FD 5 Mbps Bus</text>
        </svg>
      );

    case 'smartphone-mobile-soc-thermal-architecture':
      return (
        <svg viewBox="0 0 800 360" className="w-full h-auto text-slate-100 select-none">
          <rect x="20" y="15" width="760" height="42" rx="8" fill="#0f362e" stroke="#5fdee7" strokeWidth="1.5" />
          <text x="40" y="41" fill="#5fdee7" fontSize="13" fontWeight="700" letterSpacing="1.5" fontFamily="monospace">EXPLODED 3NM MOBILE SOC MOTHERBOARD & VAPOR CHAMBER DYNAMICS</text>
          
          {/* Vapor chamber schematic */}
          <rect x="40" y="75" width="220" height="200" rx="8" fill="#0e2f27" stroke="#5fdee7" strokeWidth="1.5" />
          <text x="55" y="105" fill="#5fdee7" fontSize="12" fontWeight="700">Dual-Circulation VC</text>
          <path d="M 60 130 C 120 110, 180 150, 240 130" stroke="#00ffaa" strokeWidth="3" fill="none" />
          <path d="M 60 170 C 120 150, 180 190, 240 170" stroke="#5fdee7" strokeWidth="3" fill="none" />
          <text x="55" y="210" fill="#cbd5e1" fontSize="10">Capillary Wick Matrix</text>
          <text x="55" y="230" fill="#00ffaa" fontSize="10" fontFamily="monospace">Dissipation: 14.8 W Peak</text>
          <text x="55" y="250" fill="#94a3b8" fontSize="9">Graphite Thermal Spreader: 0.12mm</text>

          {/* Exploded SOC Die Layout */}
          <rect x="280" y="75" width="260" height="200" rx="8" fill="#123b32" stroke="#00ffaa" strokeWidth="2" />
          <text x="295" y="105" fill="#ffffff" fontSize="13" fontWeight="700">3nm Flagship SOC Die</text>
          <rect x="295" y="120" width="115" height="45" rx="4" fill="#081c18" stroke="#5fdee7" strokeWidth="1" />
          <text x="305" y="140" fill="#5fdee7" fontSize="10" fontWeight="600">Prime Core (4.3GHz)</text>
          <text x="305" y="155" fill="#f87171" fontSize="9" fontFamily="monospace">TDP: 5.2W</text>

          <rect x="415" y="120" width="115" height="45" rx="4" fill="#081c18" stroke="#5fdee7" strokeWidth="1" />
          <text x="425" y="140" fill="#5fdee7" fontSize="10" fontWeight="600">NPU (45 TOPS)</text>
          <text x="425" y="155" fill="#00ffaa" fontSize="9" fontFamily="monospace">FP8 Tensor Engine</text>

          <rect x="295" y="175" width="115" height="50" rx="4" fill="#081c18" stroke="#00ffaa" strokeWidth="1" />
          <text x="305" y="195" fill="#00ffaa" fontSize="10" fontWeight="600">GPU (RDNA/Adreno)</text>
          <text x="305" y="210" fill="#cbd5e1" fontSize="9" fontFamily="monospace">Hardware Ray Tracing</text>

          <rect x="415" y="175" width="115" height="50" rx="4" fill="#081c18" stroke="#00ffaa" strokeWidth="1" />
          <text x="425" y="195" fill="#ffffff" fontSize="10" fontWeight="600">LPDDR5X (9.6Gbps)</text>
          <text x="425" y="210" fill="#cbd5e1" fontSize="9" fontFamily="monospace">Unified 16GB PoP</text>

          {/* Sustained Clock Rate Card */}
          <rect x="560" y="75" width="200" height="200" rx="8" fill="#0a221d" stroke="#5fdee7" strokeWidth="1.5" />
          <text x="575" y="105" fill="#5fdee7" fontSize="12" fontWeight="700">Thermal Throttling Delta</text>
          <text x="575" y="130" fill="#94a3b8" fontSize="10">Without Vapor Chamber:</text>
          <text x="575" y="148" fill="#f87171" fontSize="11" fontFamily="monospace">Sustained: 52% @ 10min</text>
          
          <text x="575" y="180" fill="#94a3b8" fontSize="10">With 3D Vapor Chamber:</text>
          <text x="575" y="198" fill="#00ffaa" fontSize="11" fontFamily="monospace">Sustained: 91% @ 60min</text>
          
          <text x="575" y="235" fill="#cbd5e1" fontSize="10">Delta T Skin: -4.8°C</text>

          <rect x="20" y="295" width="760" height="45" rx="6" fill="#061613" stroke="#25554b" />
          <text x="40" y="323" fill="#94a3b8" fontSize="11" fontFamily="monospace">TEST RIG: 3DMark Wild Life Extreme 20-Loop Stress · Anodized Titanium Frame · Ambient 23°C</text>
        </svg>
      );

    case 'wearables-biosensor-technology-guide':
      return (
        <svg viewBox="0 0 800 360" className="w-full h-auto text-slate-100 select-none">
          <rect x="20" y="15" width="760" height="42" rx="8" fill="#0f362e" stroke="#5fdee7" strokeWidth="1.5" />
          <text x="40" y="41" fill="#5fdee7" fontSize="13" fontWeight="700" letterSpacing="1.5" fontFamily="monospace">CONTINUOUS BIOSENSOR ARRAY & MULTI-SPECTRAL PPG PHOTODIODE MATRIX</text>
          
          {/* Photodiode Array Diagram */}
          <g transform="translate(40, 75)">
            <rect x="0" y="0" width="230" height="200" rx="8" fill="#0a2520" stroke="#5fdee7" strokeWidth="1.5" />
            <text x="15" y="25" fill="#5fdee7" fontSize="12" fontWeight="700">8-Channel LED Cluster</text>
            <circle cx="65" cy="70" r="16" fill="#10b981" />
            <text x="58" y="74" fill="#000" fontSize="9" fontWeight="700">525nm</text>
            <circle cx="115" cy="70" r="16" fill="#ef4444" />
            <text x="108" y="74" fill="#fff" fontSize="9" fontWeight="700">660nm</text>
            <circle cx="165" cy="70" r="16" fill="#7c3aed" />
            <text x="158" y="74" fill="#fff" fontSize="9" fontWeight="700">940nm</text>

            <rect x="35" y="115" width="160" height="35" rx="4" fill="#081c18" stroke="#00ffaa" strokeWidth="1" />
            <text x="45" y="135" fill="#00ffaa" fontSize="10" fontFamily="monospace">Photodiode Area: 4.8mm²</text>
            <text x="15" y="180" fill="#94a3b8" fontSize="10">ECG Differential Lead Electrodes</text>
          </g>

          {/* Microcontroller & Analog Front End */}
          <rect x="290" y="75" width="250" height="200" rx="8" fill="#0e322a" stroke="#00ffaa" strokeWidth="1.5" />
          <text x="305" y="105" fill="#ffffff" fontSize="13" fontWeight="700">Ultra-Low Power Cortex-M55 AFE</text>
          <rect x="305" y="120" width="220" height="30" rx="4" fill="#081c18" />
          <text x="315" y="139" fill="#5fdee7" fontSize="10" fontFamily="monospace">ADC: 24-bit Delta-Sigma (128dB SNR)</text>
          <rect x="305" y="160" width="220" height="30" rx="4" fill="#081c18" />
          <text x="315" y="179" fill="#00ffaa" fontSize="10" fontFamily="monospace">Ambient Light Cancellation: 100dB</text>
          <rect x="305" y="200" width="220" height="30" rx="4" fill="#081c18" />
          <text x="315" y="219" fill="#cbd5e1" fontSize="10" fontFamily="monospace">Active Sleep Draw: 1.8 µA</text>

          {/* Battery & Health Metrics Callout */}
          <rect x="560" y="75" width="200" height="200" rx="8" fill="#0a221d" stroke="#5fdee7" strokeWidth="1.5" />
          <text x="575" y="105" fill="#5fdee7" fontSize="12" fontWeight="700">Clinical Accuracy Data</text>
          <text x="575" y="130" fill="#cbd5e1" fontSize="10">SpO2 Error: ±1.2%</text>
          <text x="575" y="155" fill="#cbd5e1" fontSize="10">HRV RMSSD Error: &lt; 2.5ms</text>
          <text x="575" y="180" fill="#00ffaa" fontSize="10">Afib Detection Sensitivity: 98.4%</text>
          <text x="575" y="205" fill="#5fdee7" fontSize="10">Continuous Autonomy: 14 Days</text>
          <text x="575" y="230" fill="#94a3b8" fontSize="9">300mAh Silicon-Carbon Cell</text>

          <rect x="20" y="295" width="760" height="45" rx="6" fill="#061613" stroke="#25554b" />
          <text x="40" y="323" fill="#94a3b8" fontSize="11" fontFamily="monospace">VALIDATION: FDA 510(k) Equivalence Testbed · 12-Lead Holter Benchmark · Sub-dermal Optical Modeling</text>
        </svg>
      );

    case 'laptops-oled-panel-burn-in-prevention':
      return (
        <svg viewBox="0 0 800 360" className="w-full h-auto text-slate-100 select-none">
          <rect x="20" y="15" width="760" height="42" rx="8" fill="#0f362e" stroke="#5fdee7" strokeWidth="1.5" />
          <text x="40" y="41" fill="#5fdee7" fontSize="13" fontWeight="700" letterSpacing="1.5" fontFamily="monospace">TANDEM OLED PANEL SUB-PIXEL MATRIX & REAL-TIME COMPENSATION LUT</text>
          
          {/* Subpixel matrix representation */}
          <g transform="translate(40, 75)">
            <rect x="0" y="0" width="240" height="200" rx="8" fill="#081c18" stroke="#33786a" strokeWidth="1.5" />
            <text x="15" y="25" fill="#5fdee7" fontSize="12" fontWeight="700">Tandem Two-Stack OLED</text>
            {/* RGB Subpixel clusters */}
            {[0, 1, 2].map(r => (
              <g key={`sub-${r}`} transform={`translate(20, ${40 + r * 50})`}>
                <rect x="0" y="0" width="40" height="38" rx="3" fill="#ef4444" opacity="0.85" />
                <rect x="46" y="0" width="40" height="38" rx="3" fill="#10b981" opacity="0.85" />
                <rect x="92" y="0" width="55" height="38" rx="3" fill="#3b82f6" opacity="0.85" />
                <rect x="153" y="0" width="40" height="38" rx="3" fill="#ffffff" opacity="0.6" />
              </g>
            ))}
            <text x="15" y="190" fill="#00ffaa" fontSize="10" fontFamily="monospace">RGBW 4K Tandem Stack (120Hz)</text>
          </g>

          {/* Real-time Aging LUT Engine */}
          <rect x="300" y="75" width="240" height="200" rx="8" fill="#0f362e" stroke="#5fdee7" strokeWidth="1.5" />
          <text x="315" y="105" fill="#ffffff" fontSize="13" fontWeight="700">Hardware Aging Compensation</text>
          <rect x="315" y="125" width="210" height="30" rx="4" fill="#081c18" />
          <text x="325" y="145" fill="#5fdee7" fontSize="10" fontFamily="monospace">Pixel-Shift: 1px micro-orbit</text>
          <rect x="315" y="165" width="210" height="30" rx="4" fill="#081c18" />
          <text x="325" y="185" fill="#00ffaa" fontSize="10" fontFamily="monospace">Current-Sense Dynamic Voltage (Vth)</text>
          <text x="315" y="220" fill="#94a3b8" fontSize="10">Continuous TCON Frame Integration</text>
          <text x="315" y="240" fill="#cbd5e1" fontSize="10">Logo & Taskbar Luminance Dimming: -30%</text>

          {/* Efficiency & Lifespan Callout */}
          <rect x="560" y="75" width="200" height="200" rx="8" fill="#0a221d" stroke="#00ffaa" strokeWidth="1.5" />
          <text x="575" y="105" fill="#00ffaa" fontSize="12" fontWeight="700">Lifespan & Power Metrics</text>
          <text x="575" y="130" fill="#cbd5e1" fontSize="10">Peak Luminance: 1,600 nits</text>
          <text x="575" y="155" fill="#5fdee7" fontSize="10">T90 Half-Life: 38,000 Hours</text>
          <text x="575" y="180" fill="#00ffaa" fontSize="10">Power Draw: -40% vs Single-Stack</text>
          <text x="575" y="205" fill="#cbd5e1" fontSize="10">DCI-P3 Coverage: 100%</text>
          <text x="575" y="230" fill="#94a3b8" fontSize="9">Delta E Color Accuracy: &lt; 0.8</text>

          <rect x="20" y="295" width="760" height="45" rx="6" fill="#061613" stroke="#25554b" />
          <text x="40" y="323" fill="#94a3b8" fontSize="11" fontFamily="monospace">TEST PROTOCOL: IEC 62341-5-1 Static Stress Pattern 5000h · TCON Embedded FPGA Profiling</text>
        </svg>
      );

    case 'mobile-reviews-benchmark-methodology-chart':
      return (
        <svg viewBox="0 0 800 360" className="w-full h-auto text-slate-100 select-none">
          <rect x="20" y="15" width="760" height="42" rx="8" fill="#0f362e" stroke="#5fdee7" strokeWidth="1.5" />
          <text x="40" y="41" fill="#5fdee7" fontSize="13" fontWeight="700" letterSpacing="1.5" fontFamily="monospace">MOBILE GAMING SOC: 60-MINUTE SUSTAINED FPS & THERMAL EFFICIENCY</text>
          
          {/* Bar Chart Graphics */}
          <g transform="translate(50, 80)">
            {/* SOC 1 */}
            <text x="0" y="20" fill="#cbd5e1" fontSize="11" fontWeight="600">Snapdragon 8 Gen 4 / Elite</text>
            <rect x="0" y="30" width="340" height="20" rx="4" fill="#13473c" />
            <rect x="0" y="30" width="320" height="20" rx="4" fill="#00ffaa" />
            <text x="330" y="45" fill="#ffffff" fontSize="10" fontFamily="monospace">59.4 FPS (98% Stab)</text>
            
            {/* SOC 2 */}
            <text x="0" y="75" fill="#cbd5e1" fontSize="11" fontWeight="600">Apple A18 Pro</text>
            <rect x="0" y="85" width="340" height="20" rx="4" fill="#13473c" />
            <rect x="0" y="85" width="295" height="20" rx="4" fill="#5fdee7" />
            <text x="305" y="100" fill="#ffffff" fontSize="10" fontFamily="monospace">54.2 FPS (89% Stab)</text>

            {/* SOC 3 */}
            <text x="0" y="130" fill="#cbd5e1" fontSize="11" fontWeight="600">Dimensity 9400</text>
            <rect x="0" y="140" width="340" height="20" rx="4" fill="#13473c" />
            <rect x="0" y="140" width="312" height="20" rx="4" fill="#38bdf8" />
            <text x="320" y="155" fill="#ffffff" fontSize="10" fontFamily="monospace">58.1 FPS (96% Stab)</text>
          </g>

          {/* Thermals & Power Side Card */}
          <rect x="520" y="75" width="240" height="200" rx="8" fill="#0c2721" stroke="#5fdee7" strokeWidth="1.5" />
          <text x="535" y="105" fill="#5fdee7" fontSize="12" fontWeight="700">Power Metering (Monsoon Rig)</text>
          <text x="535" y="130" fill="#cbd5e1" fontSize="10">Peak Package Power: 12.2W</text>
          <text x="535" y="155" fill="#00ffaa" fontSize="10">Average Power: 5.6W</text>
          <text x="535" y="180" fill="#cbd5e1" fontSize="10">Skin Thermals Max: 41.8°C</text>
          <text x="535" y="205" fill="#5fdee7" fontSize="10">1% Low Frame Time: 17.2ms</text>
          <text x="535" y="235" fill="#94a3b8" fontSize="9" fontFamily="monospace">Jitter Standard Deviation: 0.8ms</text>

          <rect x="20" y="295" width="760" height="45" rx="6" fill="#061613" stroke="#25554b" />
          <text x="40" y="323" fill="#94a3b8" fontSize="11" fontFamily="monospace">ENVIRONMENT: Genshin Impact Max Settings 864p · 60-Min Continuous Log · Monsoon High-Voltage Monitor</text>
        </svg>
      );

    case 'tech-accessories-thunderbolt-5-architecture':
      return (
        <svg viewBox="0 0 800 360" className="w-full h-auto text-slate-100 select-none">
          <rect x="20" y="15" width="760" height="42" rx="8" fill="#0f362e" stroke="#5fdee7" strokeWidth="1.5" />
          <text x="40" y="41" fill="#5fdee7" fontSize="13" fontWeight="700" letterSpacing="1.5" fontFamily="monospace">THUNDERBOLT 5 / USB4 V2 PAM3 MODULATION & 120GBPS BANDWIDTH</text>
          
          {/* Connector Pinout */}
          <g transform="translate(40, 75)">
            <rect x="0" y="0" width="240" height="200" rx="8" fill="#081c18" stroke="#33786a" strokeWidth="1.5" />
            <text x="15" y="25" fill="#5fdee7" fontSize="12" fontWeight="700">Type-C 24-Pin Differential Map</text>
            <rect x="20" y="45" width="200" height="50" rx="6" fill="#0e322a" stroke="#5fdee7" strokeWidth="1" />
            <text x="30" y="65" fill="#00ffaa" fontSize="10" fontFamily="monospace">TX1+/TX1- · RX1+/RX1-</text>
            <text x="30" y="82" fill="#5fdee7" fontSize="10" fontFamily="monospace">TX2+/TX2- · RX2+/RX2-</text>
            
            <text x="15" y="125" fill="#cbd5e1" fontSize="10">PAM3 Signaling Encoding:</text>
            <text x="15" y="145" fill="#00ffaa" fontSize="10" fontFamily="monospace">3 Voltage Levels: -1, 0, +1</text>
            <text x="15" y="165" fill="#94a3b8" fontSize="10">1.58 bits per clock cycle</text>
            <text x="15" y="185" fill="#5fdee7" fontSize="9">Insertion Loss Target: &lt; -18dB @ 20GHz</text>
          </g>

          {/* Asymmetric Bandwidth Boost Mode */}
          <rect x="300" y="75" width="240" height="200" rx="8" fill="#103a31" stroke="#5fdee7" strokeWidth="1.5" />
          <text x="315" y="105" fill="#ffffff" fontSize="13" fontWeight="700">Bandwidth Boost Mode</text>
          <text x="315" y="130" fill="#94a3b8" fontSize="11">Bidirectional: 80Gbps / 80Gbps</text>
          <rect x="315" y="140" width="210" height="18" rx="3" fill="#081c18" />
          <rect x="315" y="140" width="140" height="18" rx="3" fill="#5fdee7" />
          
          <text x="315" y="180" fill="#00ffaa" fontSize="11" fontWeight="600">Asymmetric Dynamic Reallocation:</text>
          <text x="315" y="200" fill="#00ffaa" fontSize="12" fontWeight="700">120 Gbps Transmit / 40 Gbps Receive</text>
          <rect x="315" y="210" width="210" height="18" rx="3" fill="#081c18" />
          <rect x="315" y="210" width="210" height="18" rx="3" fill="#00ffaa" />

          {/* Display & PCIe Tunneling Specs */}
          <rect x="560" y="75" width="200" height="200" rx="8" fill="#0c2721" stroke="#00ffaa" strokeWidth="1.5" />
          <text x="575" y="105" fill="#00ffaa" fontSize="12" fontWeight="700">Protocol Support</text>
          <text x="575" y="130" fill="#cbd5e1" fontSize="10">PCIe Gen 4 x4 (64 Gbps)</text>
          <text x="575" y="155" fill="#5fdee7" fontSize="10">DisplayPort 2.1 (UHBR20)</text>
          <text x="575" y="180" fill="#cbd5e1" fontSize="10">USB PD 3.1: 240W (48V / 5A)</text>
          <text x="575" y="205" fill="#00ffaa" fontSize="10">Dual 8K 60Hz or Triple 4K 144Hz</text>
          <text x="575" y="235" fill="#94a3b8" fontSize="9">Active Retimer: Intel Barlow Ridge</text>

          <rect x="20" y="295" width="760" height="45" rx="6" fill="#061613" stroke="#25554b" />
          <text x="40" y="323" fill="#94a3b8" fontSize="11" fontFamily="monospace">INSTRUMENT: Teledyne LeCroy 65GHz Oscilloscope · Eye Diagram Jitter & Bit Error Rate &lt; 1e-12</text>
        </svg>
      );

    case 'cloud-computing-serverless-edge-architecture':
      return (
        <svg viewBox="0 0 800 360" className="w-full h-auto text-slate-100 select-none">
          <rect x="20" y="15" width="760" height="42" rx="8" fill="#0f362e" stroke="#5fdee7" strokeWidth="1.5" />
          <text x="40" y="41" fill="#5fdee7" fontSize="13" fontWeight="700" letterSpacing="1.5" fontFamily="monospace">GLOBAL EDGE CDN RUNTIME & MICRO-VM COLD-START MITIGATION</text>
          
          {/* CDN Edge Node Visual */}
          <g transform="translate(40, 75)">
            <rect x="0" y="0" width="240" height="200" rx="8" fill="#081c18" stroke="#33786a" strokeWidth="1.5" />
            <text x="15" y="25" fill="#5fdee7" fontSize="12" fontWeight="700">Anycast PoP Mesh (300+ Cities)</text>
            {/* World node links */}
            <circle cx="50" cy="80" r="8" fill="#00ffaa" />
            <circle cx="120" cy="65" r="8" fill="#5fdee7" />
            <circle cx="190" cy="90" r="8" fill="#00ffaa" />
            <circle cx="80" cy="140" r="8" fill="#5fdee7" />
            <circle cx="160" cy="145" r="8" fill="#00ffaa" />
            <line x1="50" y1="80" x2="120" y2="65" stroke="#5fdee7" strokeWidth="1" strokeDasharray="2,2" />
            <line x1="120" y1="65" x2="190" y2="90" stroke="#00ffaa" strokeWidth="1" strokeDasharray="2,2" />
            <line x1="50" y1="80" x2="80" y2="140" stroke="#5fdee7" strokeWidth="1" strokeDasharray="2,2" />
            <line x1="120" y1="65" x2="160" y2="145" stroke="#00ffaa" strokeWidth="1" strokeDasharray="2,2" />
            <text x="15" y="185" fill="#cbd5e1" fontSize="10">Mean Global Ping: 8.4ms</text>
          </g>

          {/* Micro-VM / V8 Isolate Isolation */}
          <rect x="300" y="75" width="240" height="200" rx="8" fill="#0e3128" stroke="#5fdee7" strokeWidth="1.5" />
          <text x="315" y="105" fill="#ffffff" fontSize="13" fontWeight="700">V8 Isolate vs Container</text>
          <rect x="315" y="125" width="210" height="30" rx="4" fill="#081c18" />
          <text x="325" y="145" fill="#f87171" fontSize="10" fontFamily="monospace">Docker Cold Start: 450 - 1200ms</text>
          <rect x="315" y="165" width="210" height="30" rx="4" fill="#081c18" />
          <text x="325" y="185" fill="#00ffaa" fontSize="10" fontFamily="monospace">V8 Isolate Snapshot: 0.8ms</text>
          <text x="315" y="220" fill="#5fdee7" fontSize="10">Memory Overhead: 128KB per tenant</text>
          <text x="315" y="240" fill="#cbd5e1" fontSize="10">Direct WASM / Rust JIT Compile</text>

          {/* Distributed State Sync */}
          <rect x="560" y="75" width="200" height="200" rx="8" fill="#0c2721" stroke="#00ffaa" strokeWidth="1.5" />
          <text x="575" y="105" fill="#00ffaa" fontSize="12" fontWeight="700">Edge Storage KV & D1</text>
          <text x="575" y="130" fill="#cbd5e1" fontSize="10">Global Read Latency: 2.1ms</text>
          <text x="575" y="155" fill="#5fdee7" fontSize="10">Durable Objects: Strong Consistency</text>
          <text x="575" y="180" fill="#cbd5e1" fontSize="10">Cold Start P99: 1.4ms</text>
          <text x="575" y="205" fill="#00ffaa" fontSize="10">Bandwidth Cost Savings: -82%</text>
          <text x="575" y="235" fill="#94a3b8" fontSize="9">Zero-Trust TLS 1.3 / Encrypted Client</text>

          <rect x="20" y="295" width="760" height="45" rx="6" fill="#061613" stroke="#25554b" />
          <text x="40" y="323" fill="#94a3b8" fontSize="11" fontFamily="monospace">INFRASTRUCTURE: Cloudflare Workers · Fastly Compute@Edge · AWS Lambda SnapStart Comparison</text>
        </svg>
      );

    case 'operating-systems-linux-kernel-ebpf-diagram':
      return (
        <svg viewBox="0 0 800 360" className="w-full h-auto text-slate-100 select-none">
          <rect x="20" y="15" width="760" height="42" rx="8" fill="#0f362e" stroke="#5fdee7" strokeWidth="1.5" />
          <text x="40" y="41" fill="#5fdee7" fontSize="13" fontWeight="700" letterSpacing="1.5" fontFamily="monospace">KERNEL-LEVEL EBPF BYTECODE IN-SITU VERIFICATION & RING BUFFER TRACING</text>
          
          {/* User Space vs Kernel Space Split */}
          <rect x="40" y="75" width="340" height="200" rx="8" fill="#0c2620" stroke="#33786a" strokeWidth="1.5" />
          <text x="55" y="105" fill="#ffffff" fontSize="12" fontWeight="700">User Space Application</text>
          <rect x="55" y="120" width="310" height="40" rx="4" fill="#081c18" stroke="#5fdee7" strokeWidth="1" />
          <text x="70" y="145" fill="#5fdee7" fontSize="11" fontFamily="monospace">Control Plane Agent (BCC / Go Cilium)</text>
          
          <rect x="55" y="180" width="310" height="75" rx="4" fill="#081c18" stroke="#00ffaa" strokeWidth="1" />
          <text x="70" y="205" fill="#00ffaa" fontSize="11" fontWeight="600">BPF Ring Buffer (Zero-Copy MMap)</text>
          <text x="70" y="225" fill="#94a3b8" fontSize="10">Event Throughput: 1.8M events/sec</text>
          <text x="70" y="242" fill="#cbd5e1" fontSize="9" fontFamily="monospace">Drop Rate: 0.0000%</text>

          {/* Kernel Space */}
          <rect x="400" y="75" width="360" height="200" rx="8" fill="#11392f" stroke="#00ffaa" strokeWidth="2" />
          <text x="415" y="105" fill="#00ffaa" fontSize="13" fontWeight="700">Linux Kernel Core (Ring 0)</text>
          
          {/* In-Kernel Verifier */}
          <rect x="415" y="120" width="330" height="40" rx="4" fill="#081c18" stroke="#5fdee7" strokeWidth="1" />
          <text x="430" y="145" fill="#5fdee7" fontSize="11" fontFamily="monospace">BPF Verifier (CFG Directed Graph & Bounds)</text>
          
          {/* Hooks: kprobe, tracepoint, XDP */}
          <g transform="translate(415, 175)">
            <rect x="0" y="0" width="100" height="45" rx="4" fill="#081c18" stroke="#33786a" />
            <text x="12" y="25" fill="#cbd5e1" fontSize="10" fontWeight="600">XDP Hook</text>
            <text x="12" y="38" fill="#00ffaa" fontSize="8" fontFamily="monospace">NIC Driver</text>

            <rect x="115" y="0" width="100" height="45" rx="4" fill="#081c18" stroke="#33786a" />
            <text x="125" y="25" fill="#cbd5e1" fontSize="10" fontWeight="600">kprobe</text>
            <text x="125" y="38" fill="#5fdee7" fontSize="8" fontFamily="monospace">Syscall Hook</text>

            <rect x="230" y="0" width="100" height="45" rx="4" fill="#081c18" stroke="#33786a" />
            <text x="240" y="25" fill="#cbd5e1" fontSize="10" fontWeight="600">LSM Hook</text>
            <text x="240" y="38" fill="#f87171" fontSize="8" fontFamily="monospace">Security Gate</text>
          </g>

          <rect x="20" y="295" width="760" height="45" rx="6" fill="#061613" stroke="#25554b" />
          <text x="40" y="323" fill="#94a3b8" fontSize="11" fontFamily="monospace">SECURITY: Kernel 6.10+ Hardening · No Kernel Module Recompilation · Zero-Downtime Hot Patching</text>
        </svg>
      );

    case 'cyber-security-zero-trust-architecture-infographic':
      return (
        <svg viewBox="0 0 800 360" className="w-full h-auto text-slate-100 select-none">
          <rect x="20" y="15" width="760" height="42" rx="8" fill="#0f362e" stroke="#5fdee7" strokeWidth="1.5" />
          <text x="40" y="41" fill="#5fdee7" fontSize="13" fontWeight="700" letterSpacing="1.5" fontFamily="monospace">IDENTITY-FIRST ZERO-TRUST ARCHITECTURE (NIST SP 800-207)</text>
          
          {/* Identity Claims */}
          <rect x="40" y="75" width="200" height="200" rx="8" fill="#09211c" stroke="#33786a" strokeWidth="1.5" />
          <text x="55" y="105" fill="#5fdee7" fontSize="12" fontWeight="700">Subject Context & Telemetry</text>
          <rect x="55" y="125" width="170" height="28" rx="4" fill="#081c18" />
          <text x="65" y="143" fill="#cbd5e1" fontSize="10">Hardware FIDO2 / Passkey</text>
          <rect x="55" y="160" width="170" height="28" rx="4" fill="#081c18" />
          <text x="65" y="178" fill="#cbd5e1" fontSize="10">Device Health (TPM 2.0)</text>
          <rect x="55" y="195" width="170" height="28" rx="4" fill="#081c18" />
          <text x="65" y="213" fill="#5fdee7" fontSize="10">Geo-Velocity & IP Salience</text>
          <text x="55" y="250" fill="#00ffaa" fontSize="10" fontFamily="monospace">Continuous Auth Loop</text>

          {/* Policy Decision Point (PDP) */}
          <path d="M 250 175 L 290 175" stroke="#5fdee7" strokeWidth="2" />
          <rect x="290" y="75" width="240" height="200" rx="8" fill="#133d32" stroke="#5fdee7" strokeWidth="2" />
          <text x="305" y="105" fill="#ffffff" fontSize="13" fontWeight="700">Policy Engine & PDP</text>
          <text x="305" y="128" fill="#5fdee7" fontSize="11">Ephemeral SPIFFE / SPIRE Token</text>
          <rect x="305" y="145" width="210" height="30" rx="4" fill="#081c18" stroke="#00ffaa" strokeWidth="1" />
          <text x="315" y="165" fill="#00ffaa" fontSize="10" fontFamily="monospace">Dynamic Trust Score: 96/100</text>
          <rect x="305" y="185" width="210" height="30" rx="4" fill="#081c18" stroke="#5fdee7" strokeWidth="1" />
          <text x="315" y="205" fill="#5fdee7" fontSize="10" fontFamily="monospace">mTLS WireGuard Mesh (AES-GCM)</text>
          <text x="305" y="245" fill="#cbd5e1" fontSize="10">Session Validity: 60 Seconds TTL</text>

          {/* Workload PEP Gate */}
          <path d="M 540 175 L 580 175" stroke="#00ffaa" strokeWidth="2" />
          <rect x="580" y="75" width="180" height="200" rx="8" fill="#0b241e" stroke="#00ffaa" strokeWidth="1.5" />
          <text x="595" y="105" fill="#00ffaa" fontSize="12" fontWeight="700">Protected Workload (PEP)</text>
          <text x="595" y="130" fill="#cbd5e1" fontSize="10">Micro-Segmented Pod</text>
          <text x="595" y="155" fill="#5fdee7" fontSize="10">No Implicit Ingress</text>
          <text x="595" y="180" fill="#00ffaa" fontSize="10">Blast Radius: 1 Pod</text>
          <text x="595" y="210" fill="#cbd5e1" fontSize="10">SIEM Audit Stream</text>
          <text x="595" y="235" fill="#94a3b8" fontSize="9" fontFamily="monospace">Strict Least Privilege</text>

          <rect x="20" y="295" width="760" height="45" rx="6" fill="#061613" stroke="#25554b" />
          <text x="40" y="323" fill="#94a3b8" fontSize="11" fontFamily="monospace">COMPLIANCE: FedRAMP High · CMMC Level 3 · Post-Quantum Kyber-768 Handshake Ready</text>
        </svg>
      );

    case 'productivity-apps-crdt-sync-architecture':
      return (
        <svg viewBox="0 0 800 360" className="w-full h-auto text-slate-100 select-none">
          <rect x="20" y="15" width="760" height="42" rx="8" fill="#0f362e" stroke="#5fdee7" strokeWidth="1.5" />
          <text x="40" y="41" fill="#5fdee7" fontSize="13" fontWeight="700" letterSpacing="1.5" fontFamily="monospace">LOCAL-FIRST CRDT P2P STATE SYNCHRONIZATION & STATE-BASED CONVERGENCE</text>
          
          {/* Peer Node 1 */}
          <g transform="translate(50, 80)">
            <rect x="0" y="0" width="180" height="180" rx="8" fill="#0a231d" stroke="#5fdee7" strokeWidth="1.5" />
            <text x="15" y="25" fill="#5fdee7" fontSize="12" fontWeight="700">Client Node A (Berlin)</text>
            <text x="15" y="48" fill="#94a3b8" fontSize="10">Local SQLite / OPFS DB</text>
            <rect x="15" y="65" width="150" height="24" rx="4" fill="#081c18" />
            <text x="22" y="81" fill="#00ffaa" fontSize="9" fontFamily="monospace">Insert(pos: 12, 'X')</text>
            <text x="15" y="115" fill="#cbd5e1" fontSize="10">Lamport Clock: L=42</text>
            <text x="15" y="140" fill="#5fdee7" fontSize="10">Offline Queue: 0 Pending</text>
            <text x="15" y="165" fill="#94a3b8" fontSize="9" fontFamily="monospace">Latency to local: 0.1ms</text>
          </g>

          {/* Central Conflict-Free Merge Engine */}
          <rect x="280" y="80" width="240" height="180" rx="8" fill="#11392f" stroke="#00ffaa" strokeWidth="2" />
          <text x="295" y="105" fill="#ffffff" fontSize="13" fontWeight="700">CRDT Vector Clock & YATA</text>
          <text x="295" y="125" fill="#00ffaa" fontSize="11">Strong Eventual Consistency</text>
          
          <path d="M 230 170 L 280 170" stroke="#5fdee7" strokeWidth="2" strokeDasharray="3,3" />
          <path d="M 520 170 L 570 170" stroke="#00ffaa" strokeWidth="2" strokeDasharray="3,3" />

          <rect x="295" y="145" width="210" height="30" rx="4" fill="#081c18" />
          <text x="305" y="165" fill="#5fdee7" fontSize="10" fontFamily="monospace">Commutative & Associative Op</text>
          <rect x="295" y="185" width="210" height="30" rx="4" fill="#081c18" />
          <text x="305" y="205" fill="#00ffaa" fontSize="10" fontFamily="monospace">Delta Sync: 42 bytes payload</text>
          <text x="295" y="240" fill="#94a3b8" fontSize="10">No Central Lock · Peer WebSocket Mesh</text>

          {/* Peer Node 2 */}
          <g transform="translate(570, 80)">
            <rect x="0" y="0" width="180" height="180" rx="8" fill="#0a231d" stroke="#00ffaa" strokeWidth="1.5" />
            <text x="15" y="25" fill="#00ffaa" fontSize="12" fontWeight="700">Client Node B (Tokyo)</text>
            <text x="15" y="48" fill="#94a3b8" fontSize="10">Local SQLite / OPFS DB</text>
            <rect x="15" y="65" width="150" height="24" rx="4" fill="#081c18" />
            <text x="22" y="81" fill="#5fdee7" fontSize="9" fontFamily="monospace">Insert(pos: 12, 'Y')</text>
            <text x="15" y="115" fill="#cbd5e1" fontSize="10">Lamport Clock: L=43</text>
            <text x="15" y="140" fill="#00ffaa" fontSize="10">Deterministically Ordered</text>
            <text x="15" y="165" fill="#94a3b8" fontSize="9" fontFamily="monospace">Resolution: ClientID Tie-Break</text>
          </g>

          <rect x="20" y="295" width="760" height="45" rx="6" fill="#061613" stroke="#25554b" />
          <text x="40" y="323" fill="#94a3b8" fontSize="11" fontFamily="monospace">LIBRARIES: Yjs & Automerge-rs · WebRTC Data Channels · Zero Cloud Server Downtime Vulnerability</text>
        </svg>
      );

    case 'web-development-webassembly-execution-pipeline':
      return (
        <svg viewBox="0 0 800 360" className="w-full h-auto text-slate-100 select-none">
          <rect x="20" y="15" width="760" height="42" rx="8" fill="#0f362e" stroke="#5fdee7" strokeWidth="1.5" />
          <text x="40" y="41" fill="#5fdee7" fontSize="13" fontWeight="700" letterSpacing="1.5" fontFamily="monospace">WASM LINEAR MEMORY PIPELINE VS JAVASCRIPT JIT COMPILATION ENGINE</text>
          
          {/* JavaScript Engine Pathway */}
          <rect x="40" y="75" width="340" height="95" rx="8" fill="#0a221d" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="55" y="100" fill="#f59e0b" fontSize="12" fontWeight="700">JavaScript V8 Pipeline (Interpreted / JIT)</text>
          <text x="55" y="120" fill="#94a3b8" fontSize="10">AST Parse → Ignition Bytecode → TurboFan JIT (De-opt Hazards)</text>
          <text x="55" y="145" fill="#f87171" fontSize="10" fontFamily="monospace">JIT Warmup Latency: 120ms - 450ms · GC Pauses</text>

          {/* WebAssembly Pipeline */}
          <rect x="40" y="185" width="340" height="95" rx="8" fill="#0f362e" stroke="#5fdee7" strokeWidth="2" />
          <text x="55" y="210" fill="#5fdee7" fontSize="12" fontWeight="700">WASM (Rust/C++) Liftoff + TurboFan</text>
          <text x="55" y="230" fill="#cbd5e1" fontSize="10">Direct Binary Decode → Streaming Baseline JIT → Native Machine Code</text>
          <text x="55" y="255" fill="#00ffaa" fontSize="10" fontFamily="monospace">Instantiation Time: 2.4ms · Zero GC Overhead</text>

          {/* WASM Linear Memory Model */}
          <rect x="420" y="75" width="340" height="205" rx="8" fill="#0a2620" stroke="#00ffaa" strokeWidth="1.5" />
          <text x="435" y="105" fill="#00ffaa" fontSize="13" fontWeight="700">SharedArrayBuffer & SIMD128 Execution</text>
          <text x="435" y="130" fill="#cbd5e1" fontSize="11">Continuous 64KB Page Allocation</text>
          
          <rect x="435" y="145" width="310" height="30" rx="4" fill="#081c18" stroke="#5fdee7" strokeWidth="1" />
          <text x="445" y="165" fill="#5fdee7" fontSize="10" fontFamily="monospace">128-bit Vector Registers (SIMD Intrinsics)</text>
          
          <rect x="435" y="185" width="310" height="30" rx="4" fill="#081c18" stroke="#00ffaa" strokeWidth="1" />
          <text x="445" y="205" fill="#00ffaa" fontSize="10" fontFamily="monospace">Throughput: 94% of Native Clang Binary</text>

          <text x="435" y="245" fill="#94a3b8" fontSize="10">WebGPU zero-copy buffer interop enabled</text>

          <rect x="20" y="295" width="760" height="45" rx="6" fill="#061613" stroke="#25554b" />
          <text x="40" y="323" fill="#94a3b8" fontSize="11" fontFamily="monospace">STANDARD: W3C WASM 2.0 · Threading & Atomicity Proposal · Firefox Gecko / Chromium Blink Tested</text>
        </svg>
      );

    case 'pc-gaming-directstorage-pipeline-diagram':
      return (
        <svg viewBox="0 0 800 360" className="w-full h-auto text-slate-100 select-none">
          <rect x="20" y="15" width="760" height="42" rx="8" fill="#0f362e" stroke="#5fdee7" strokeWidth="1.5" />
          <text x="40" y="41" fill="#5fdee7" fontSize="13" fontWeight="700" letterSpacing="1.5" fontFamily="monospace">DIRECTSTORAGE 1.2: BYPASSING CPU TO STREAM 14.5 GB/S NVME TO VRAM</text>
          
          {/* Legacy Path */}
          <rect x="40" y="75" width="220" height="85" rx="8" fill="#09201a" stroke="#4a5568" strokeWidth="1" />
          <text x="55" y="98" fill="#94a3b8" fontSize="11" fontWeight="700">Legacy Storage Pipeline</text>
          <text x="55" y="118" fill="#f87171" fontSize="9" fontFamily="monospace">NVMe → RAM → CPU Decompress → VRAM</text>
          <text x="55" y="138" fill="#cbd5e1" fontSize="10">CPU Overhead: 100% Core Load · 2.8 GB/s</text>

          {/* DirectStorage 1.2 Path */}
          <rect x="40" y="175" width="720" height="105" rx="8" fill="#0e332a" stroke="#00ffaa" strokeWidth="2" />
          <text x="55" y="200" fill="#00ffaa" fontSize="13" fontWeight="700">DirectStorage 1.2 GPU Decompression Stream</text>
          
          <g transform="translate(55, 215)">
            <rect x="0" y="0" width="130" height="45" rx="4" fill="#081c18" stroke="#5fdee7" strokeWidth="1" />
            <text x="10" y="22" fill="#5fdee7" fontSize="10" fontWeight="600">PCIe 5.0 NVMe</text>
            <text x="10" y="36" fill="#00ffaa" fontSize="9" fontFamily="monospace">14.5 GB/s Read</text>

            <path d="M 135 22 L 185 22" stroke="#5fdee7" strokeWidth="2" markerEnd="url(#arrow)" />

            <rect x="190" y="0" width="160" height="45" rx="4" fill="#081c18" stroke="#5fdee7" strokeWidth="1" />
            <text x="200" y="22" fill="#5fdee7" fontSize="10" fontWeight="600">Direct DMA via GPU</text>
            <text x="200" y="36" fill="#cbd5e1" fontSize="9" fontFamily="monospace">Zero CPU Copying</text>

            <path d="M 355 22 L 405 22" stroke="#00ffaa" strokeWidth="2" markerEnd="url(#arrow)" />

            <rect x="410" y="0" width="170" height="45" rx="4" fill="#081c18" stroke="#00ffaa" strokeWidth="1" />
            <text x="420" y="22" fill="#00ffaa" fontSize="10" fontWeight="600">GDeflate Shader Units</text>
            <text x="420" y="36" fill="#00ffaa" fontSize="9" fontFamily="monospace">24 GB/s Decompression</text>

            <path d="M 585 22 L 635 22" stroke="#00ffaa" strokeWidth="2" markerEnd="url(#arrow)" />

            <rect x="640" y="0" width="140" height="45" rx="4" fill="#081c18" stroke="#00ffaa" strokeWidth="1" />
            <text x="650" y="22" fill="#ffffff" fontSize="10" fontWeight="600">VRAM Textures</text>
            <text x="650" y="36" fill="#5fdee7" fontSize="9" fontFamily="monospace">Load Time: 0.4s</text>
          </g>

          <rect x="20" y="295" width="760" height="45" rx="6" fill="#061613" stroke="#25554b" />
          <text x="40" y="323" fill="#94a3b8" fontSize="11" fontFamily="monospace">BENCHMARK: Forspoken & Cyberpunk 2077 · Samsung 990 PRO 4TB · RTX 4090 24GB VRAM</text>
        </svg>
      );

    case 'console-hardware-apu-memory-architecture':
      return (
        <svg viewBox="0 0 800 360" className="w-full h-auto text-slate-100 select-none">
          <rect x="20" y="15" width="760" height="42" rx="8" fill="#0f362e" stroke="#5fdee7" strokeWidth="1.5" />
          <text x="40" y="41" fill="#5fdee7" fontSize="13" fontWeight="700" letterSpacing="1.5" fontFamily="monospace">NEXT-GEN CUSTOM APU: 256-BIT BUS GDDR7 & UNIFIED MEMORY TOPOLOGY</text>
          
          {/* APU Die Diagram */}
          <rect x="40" y="75" width="340" height="200" rx="8" fill="#0f362e" stroke="#00ffaa" strokeWidth="2" />
          <text x="55" y="105" fill="#ffffff" fontSize="13" fontWeight="700">Monolithic Custom APU Silicon</text>
          
          <rect x="55" y="120" width="150" height="60" rx="4" fill="#081c18" stroke="#5fdee7" strokeWidth="1" />
          <text x="65" y="142" fill="#5fdee7" fontSize="11" fontWeight="600">Zen 5 CPU (8C / 16T)</text>
          <text x="65" y="160" fill="#94a3b8" fontSize="9" fontFamily="monospace">5.0 GHz All-Core Clock</text>

          <rect x="215" y="120" width="150" height="60" rx="4" fill="#081c18" stroke="#00ffaa" strokeWidth="1" />
          <text x="225" y="142" fill="#00ffaa" fontSize="11" fontWeight="600">RDNA 4/5 Compute</text>
          <text x="225" y="160" fill="#cbd5e1" fontSize="9" fontFamily="monospace">60 CUs · 36.8 TFLOPs</text>

          <rect x="55" y="195" width="310" height="60" rx="4" fill="#081c18" stroke="#5fdee7" strokeWidth="1" />
          <text x="65" y="220" fill="#ffffff" fontSize="11" fontWeight="600">Coherent Infinity Fabric Crossbar</text>
          <text x="65" y="240" fill="#5fdee7" fontSize="10" fontFamily="monospace">Bandwidth: 1.2 TB/s Low Latency Interconnect</text>

          {/* Unified Memory System */}
          <rect x="420" y="75" width="340" height="200" rx="8" fill="#0b2923" stroke="#5fdee7" strokeWidth="1.5" />
          <text x="435" y="105" fill="#5fdee7" fontSize="13" fontWeight="700">24GB Unified GDDR7 Subsystem</text>
          <text x="435" y="130" fill="#cbd5e1" fontSize="11">256-Bit Wide Memory Interface</text>
          
          <rect x="435" y="145" width="310" height="35" rx="4" fill="#081c18" stroke="#00ffaa" strokeWidth="1" />
          <text x="445" y="168" fill="#00ffaa" fontSize="11" fontFamily="monospace">Effective Bandwidth: 896 GB/s</text>
          
          <text x="435" y="205" fill="#cbd5e1" fontSize="10">Zero-Copy CPU/GPU Resource Sharing</text>
          <text x="435" y="225" fill="#94a3b8" fontSize="10">Ray Tracing BVH Accelerator in Hardware</text>
          <text x="435" y="250" fill="#5fdee7" fontSize="10" fontFamily="monospace">Dedicated Neural Upscaling NPU: 120 TOPS</text>

          <rect x="20" y="295" width="760" height="45" rx="6" fill="#061613" stroke="#25554b" />
          <text x="40" y="323" fill="#94a3b8" fontSize="11" fontFamily="monospace">SPECIFICATION: TSMC N4P Node · Liquid Metal Interface Material · Unified Memory Controller v4</text>
        </svg>
      );

    case 'gaming-laptops-dynamic-power-sharing-architecture':
      return (
        <svg viewBox="0 0 800 360" className="w-full h-auto text-slate-100 select-none">
          <rect x="20" y="15" width="760" height="42" rx="8" fill="#0f362e" stroke="#5fdee7" strokeWidth="1.5" />
          <text x="40" y="41" fill="#5fdee7" fontSize="13" fontWeight="700" letterSpacing="1.5" fontFamily="monospace">DYNAMIC POWER BUDGETING: CPU/GPU SMARTSHIFT 200W TOTAL DISSIPATION</text>
          
          {/* Dual VRM Schematic */}
          <rect x="40" y="75" width="340" height="200" rx="8" fill="#0d2e27" stroke="#5fdee7" strokeWidth="1.5" />
          <text x="55" y="105" fill="#5fdee7" fontSize="12" fontWeight="700">Digital VRM Multi-Phase Rail</text>
          <rect x="55" y="125" width="140" height="60" rx="4" fill="#081c18" stroke="#5fdee7" strokeWidth="1" />
          <text x="65" y="147" fill="#5fdee7" fontSize="11" fontWeight="600">CPU Power Budget</text>
          <text x="65" y="167" fill="#00ffaa" fontSize="12" fontFamily="monospace">25W - 75W Dyn</text>

          <rect x="210" y="125" width="150" height="60" rx="4" fill="#081c18" stroke="#00ffaa" strokeWidth="1" />
          <text x="220" y="147" fill="#00ffaa" fontSize="11" fontWeight="600">GPU Power Budget</text>
          <text x="220" y="167" fill="#5fdee7" fontSize="12" fontFamily="monospace">125W - 175W Dyn</text>

          <text x="55" y="215" fill="#cbd5e1" fontSize="10">Polling Frequency: 1,000 Hz EC Loop</text>
          <text x="55" y="240" fill="#94a3b8" fontSize="10">Proportional-Integral-Derivative (PID) Controller</text>

          {/* Allocation Gauge */}
          <rect x="420" y="75" width="340" height="200" rx="8" fill="#10362e" stroke="#00ffaa" strokeWidth="2" />
          <text x="435" y="105" fill="#ffffff" fontSize="13" fontWeight="700">Real-Time Scenario Dynamic Shift</text>
          
          {/* Heavy GPU Load (e.g. 4K Ultra Gaming) */}
          <text x="435" y="135" fill="#cbd5e1" fontSize="10">Heavy GPU Frame (4K Ray Tracing):</text>
          <rect x="435" y="145" width="310" height="20" rx="4" fill="#081c18" />
          <rect x="435" y="145" width="55" height="20" rx="4" fill="#5fdee7" />
          <rect x="490" y="145" width="255" height="20" rx="4" fill="#00ffaa" />
          <text x="440" y="160" fill="#000" fontSize="9" fontWeight="700">35W CPU</text>
          <text x="540" y="160" fill="#000" fontSize="9" fontWeight="700">165W GPU (Max Boost)</text>

          {/* CPU Bound Scenario (e.g. Competitive 500FPS CS2) */}
          <text x="435" y="195" fill="#cbd5e1" fontSize="10">CPU Bound Frame (500Hz Competitive):</text>
          <rect x="435" y="205" width="310" height="20" rx="4" fill="#081c18" />
          <rect x="435" y="205" width="130" height="20" rx="4" fill="#5fdee7" />
          <rect x="565" y="205" width="180" height="20" rx="4" fill="#00ffaa" />
          <text x="460" y="220" fill="#000" fontSize="9" fontWeight="700">75W CPU</text>
          <text x="610" y="220" fill="#000" fontSize="9" fontWeight="700">125W GPU</text>

          <rect x="20" y="295" width="760" height="45" rx="6" fill="#061613" stroke="#25554b" />
          <text x="40" y="323" fill="#94a3b8" fontSize="11" fontFamily="monospace">BENCHMARK: Vapor Chamber Sub-Chassis 200W Total Dissipation · Thermal Headroom Gain: +18.4%</text>
        </svg>
      );

    case 'esports-tech-system-latency-pipeline-diagram':
      return (
        <svg viewBox="0 0 800 360" className="w-full h-auto text-slate-100 select-none">
          <rect x="20" y="15" width="760" height="42" rx="8" fill="#0f362e" stroke="#5fdee7" strokeWidth="1.5" />
          <text x="40" y="41" fill="#5fdee7" fontSize="13" fontWeight="700" letterSpacing="1.5" fontFamily="monospace">END-TO-END CLICK-TO-PHOTON PIPELINE & 540HZ E-TN PANEL LATENCY</text>
          
          {/* Latency Pipeline Stages */}
          <g transform="translate(30, 80)">
            {/* Stage 1: Mouse */}
            <rect x="0" y="0" width="135" height="180" rx="6" fill="#0a2520" stroke="#33786a" />
            <text x="12" y="25" fill="#5fdee7" fontSize="11" fontWeight="700">1. Peripheral</text>
            <text x="12" y="45" fill="#cbd5e1" fontSize="10">8000Hz Optical</text>
            <rect x="12" y="60" width="110" height="25" rx="4" fill="#081c18" />
            <text x="18" y="77" fill="#00ffaa" fontSize="10" fontFamily="monospace">0.125ms</text>
            <text x="12" y="110" fill="#94a3b8" fontSize="9">Switch Debounce: 0.1ms</text>
            <text x="12" y="135" fill="#94a3b8" fontSize="9">USB Polling: 0.125ms</text>

            {/* Stage 2: PC Processing */}
            <rect x="150" y="0" width="140" height="180" rx="6" fill="#0d2f28" stroke="#5fdee7" strokeWidth="1.5" />
            <text x="162" y="25" fill="#5fdee7" fontSize="11" fontWeight="700">2. OS & Game Loop</text>
            <text x="162" y="45" fill="#cbd5e1" fontSize="10">Sim Tick @ 500Hz</text>
            <rect x="162" y="60" width="115" height="25" rx="4" fill="#081c18" />
            <text x="168" y="77" fill="#5fdee7" fontSize="10" fontFamily="monospace">2.00ms</text>
            <text x="162" y="110" fill="#94a3b8" fontSize="9">DWM Flush Bypass</text>
            <text x="162" y="135" fill="#94a3b8" fontSize="9">Raw Input API</text>

            {/* Stage 3: Render Queue & GPU */}
            <rect x="305" y="0" width="140" height="180" rx="6" fill="#103a31" stroke="#00ffaa" strokeWidth="1.5" />
            <text x="317" y="25" fill="#00ffaa" fontSize="11" fontWeight="700">3. GPU Render</text>
            <text x="317" y="45" fill="#cbd5e1" fontSize="10">NVIDIA Reflex / Anti-Lag</text>
            <rect x="317" y="60" width="115" height="25" rx="4" fill="#081c18" />
            <text x="323" y="77" fill="#00ffaa" fontSize="10" fontFamily="monospace">1.85ms</text>
            <text x="317" y="110" fill="#94a3b8" fontSize="9">Zero Render Queue</text>
            <text x="317" y="135" fill="#94a3b8" fontSize="9">Just-In-Time Sampling</text>

            {/* Stage 4: Display Refresh */}
            <rect x="460" y="0" width="140" height="180" rx="6" fill="#0f362e" stroke="#5fdee7" strokeWidth="1.5" />
            <text x="472" y="25" fill="#5fdee7" fontSize="11" fontWeight="700">4. 540Hz Display</text>
            <text x="472" y="45" fill="#cbd5e1" fontSize="10">Fast-TN Panel Cycle</text>
            <rect x="472" y="60" width="115" height="25" rx="4" fill="#081c18" />
            <text x="478" y="77" fill="#5fdee7" fontSize="10" fontFamily="monospace">1.85ms</text>
            <text x="472" y="110" fill="#94a3b8" fontSize="9">G-to-G Response: 0.2ms</text>
            <text x="472" y="135" fill="#94a3b8" fontSize="9">ULMB 2 Strobing</text>

            {/* Stage 5: Total Click to Photon */}
            <rect x="615" y="0" width="125" height="180" rx="6" fill="#144b3e" stroke="#00ffaa" strokeWidth="2" />
            <text x="625" y="25" fill="#00ffaa" fontSize="11" fontWeight="700">TOTAL SYSTEM</text>
            <text x="625" y="45" fill="#ffffff" fontSize="10">End-to-End Latency</text>
            <rect x="625" y="60" width="105" height="35" rx="4" fill="#081c18" />
            <text x="632" y="83" fill="#00ffaa" fontSize="13" fontWeight="700" fontFamily="monospace">5.82ms</text>
            <text x="625" y="120" fill="#5fdee7" fontSize="9">60Hz Old: 48ms</text>
            <text x="625" y="140" fill="#5fdee7" fontSize="9">144Hz: 18ms</text>
            <text x="625" y="160" fill="#00ffaa" fontSize="9" fontWeight="600">540Hz: 5.8ms</text>
          </g>

          <rect x="20" y="295" width="760" height="45" rx="6" fill="#061613" stroke="#25554b" />
          <text x="40" y="323" fill="#94a3b8" fontSize="11" fontFamily="monospace">HARDWARE: ASUS ROG Swift Pro PG248QP 540Hz · LDAT V2 Optical Latency Tool · Valorant 1080p</text>
        </svg>
      );

    case 'virtual-reality-foveated-rendering-architecture':
      return (
        <svg viewBox="0 0 800 360" className="w-full h-auto text-slate-100 select-none">
          <rect x="20" y="15" width="760" height="42" rx="8" fill="#0f362e" stroke="#5fdee7" strokeWidth="1.5" />
          <text x="40" y="41" fill="#5fdee7" fontSize="13" fontWeight="700" letterSpacing="1.5" fontFamily="monospace">DYNAMIC FOVEATED RENDERING & EYE-TRACKING VARIABLE RATE SHADING</text>
          
          {/* Foveated Heatmap Grid */}
          <g transform="translate(40, 75)">
            <rect x="0" y="0" width="240" height="200" rx="8" fill="#081c18" stroke="#33786a" strokeWidth="1.5" />
            <text x="15" y="25" fill="#5fdee7" fontSize="12" fontWeight="700">Fovea Gaze Target (120Hz Eye-Tracker)</text>
            
            {/* Outer low-res zone */}
            <circle cx="120" cy="110" r="75" fill="#0e322a" opacity="0.4" />
            <text x="15" y="185" fill="#94a3b8" fontSize="9" fontFamily="monospace">Periphery: 1/16 Shading Rate</text>

            {/* Mid foveal zone */}
            <circle cx="120" cy="110" r="45" fill="#144b3e" opacity="0.7" />

            {/* Core fovea (100% full res) */}
            <circle cx="120" cy="110" r="18" fill="#00ffaa" opacity="0.9" />
            <line x1="120" y1="85" x2="120" y2="135" stroke="#ffffff" strokeWidth="1" />
            <line x1="95" y1="110" x2="145" y2="110" stroke="#ffffff" strokeWidth="1" />
            <text x="105" y="105" fill="#000" fontSize="8" fontWeight="700">100% Res</text>
          </g>

          {/* Shading Rate Distribution Table */}
          <rect x="300" y="75" width="240" height="200" rx="8" fill="#0f362e" stroke="#5fdee7" strokeWidth="1.5" />
          <text x="315" y="105" fill="#ffffff" fontSize="13" fontWeight="700">VRS Tier Configuration</text>
          <rect x="315" y="125" width="210" height="30" rx="4" fill="#081c18" />
          <text x="325" y="145" fill="#00ffaa" fontSize="10" fontFamily="monospace">Foveal Core: 1x1 (Full MSAA 4x)</text>
          <rect x="315" y="165" width="210" height="30" rx="4" fill="#081c18" />
          <text x="325" y="185" fill="#5fdee7" fontSize="10" fontFamily="monospace">Paraveal Ring: 2x2 (50% Shading)</text>
          <rect x="315" y="205" width="210" height="30" rx="4" fill="#081c18" />
          <text x="325" y="225" fill="#94a3b8" fontSize="10" fontFamily="monospace">Periphery: 4x4 (12.5% Shading)</text>
          <text x="315" y="255" fill="#cbd5e1" fontSize="10">Pixel Shading Savings: 72.4%</text>

          {/* Frame Rate & Performance Gain */}
          <rect x="560" y="75" width="200" height="200" rx="8" fill="#0a221d" stroke="#00ffaa" strokeWidth="1.5" />
          <text x="575" y="105" fill="#00ffaa" fontSize="12" fontWeight="700">VR Frametime Delta</text>
          <text x="575" y="130" fill="#cbd5e1" fontSize="10">Target: 90 FPS @ 4K per eye</text>
          <text x="575" y="155" fill="#f87171" fontSize="10" fontFamily="monospace">Native: 14.8ms (Drops to 60)</text>
          <text x="575" y="185" fill="#00ffaa" fontSize="11" fontFamily="monospace">With DFR: 7.2ms (Solid 90 FPS)</text>
          <text x="575" y="215" fill="#5fdee7" fontSize="10">Eye-Tracker Latency: 3.5ms</text>
          <text x="575" y="235" fill="#94a3b8" fontSize="9">Perceptual Quality Loss: 0.00%</text>

          <rect x="20" y="295" width="760" height="45" rx="6" fill="#061613" stroke="#25554b" />
          <text x="40" y="323" fill="#94a3b8" fontSize="11" fontFamily="monospace">DEVICE: Apple Vision Pro / PSVR2 Optical Testbench · Unreal Engine 5.4 Nanite / Variable Rate Shading</text>
        </svg>
      );

    default:
      return (
        <div className="flex h-64 items-center justify-center text-slate-400 font-mono text-sm">
          [VECTOR INFOGRAPHIC: {seoAlt}]
        </div>
      );
  }
}
