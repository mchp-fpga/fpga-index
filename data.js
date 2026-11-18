/* Microchip FPGA Open-Source Hub - catalogue data.
   Edit this file to add, remove, or re-categorise repositories.

   Repository fields:
     r       "owner/repo" (or an organization name when org: true)
     d       short description
     cat     category id (see CATEGORIES)
     fam     product family ids (see FAMILIES)
     kit     development kit id (see KITS), optional
     s, f    stars / forks snapshot (refreshed live in the browser when possible)
     u       last push date snapshot (YYYY-MM-DD)
     l       primary language
     legacy  true = archived or superseded (hidden unless "Include archived" is on)
     replace "owner/repo" or org that supersedes a legacy entry
     fork    true = fork of an upstream project
*/

window.HUB = {
  snapshot: "2026-11-18",

  ORGS: {
    "polarfire-soc":            { name: "PolarFire SoC",            id: 51128733,  followers: 293 },
    "linux4microchip":          { name: "Linux4Microchip",          id: 85181005,  followers: 83 },
    "Mi-V-Soft-RISC-V":         { name: "Mi-V Soft RISC-V",         id: 69243549,  followers: 41 },
    "Microchip-Vectorblox":     { name: "VectorBlox",               id: 73501811,  followers: 22 },
    "microchip-fpga-solutions": { name: "Microchip FPGA Solutions", id: 247337802, followers: 8 },
    "Zephyr4Microchip":         { name: "Zephyr4Microchip",         id: 183646887, followers: 32 },
    "microchip-fpga":           { name: "Microchip FPGA",           id: 139750243, followers: 2 },
    "Mi-V-Ecosystem":           { name: "Mi-V Ecosystem",           id: 36032132,  followers: 2 },
    "MicrochipTech":            { name: "MicrochipTech",            id: 8910143,   followers: null }
  },

  CATEGORIES: [
    { id: "boards",    name: "Board reference designs" },
    { id: "solutions", name: "Application solutions" },
    { id: "embedded",  name: "Embedded software" },
    { id: "linux",     name: "Linux" },
    { id: "rtos",      name: "RTOS" },
    { id: "miv",       name: "Mi-V soft RISC-V" },
    { id: "hls",       name: "SmartHLS" },
    { id: "ai",        name: "Edge AI" },
    { id: "tools",     name: "Tools and documentation" },
    { id: "legacy",    name: "Archived and legacy" }
  ],

  FAMILIES: [
    { id: "soc", name: "PolarFire\u00ae SoC", icon: "soc",
      blurb: "RISC-V based SoC FPGA. Reference designs, HSS boot loader, bare-metal drivers, Linux, and RTOS support." },
    { id: "pf",  name: "PolarFire\u00ae FPGA", icon: "fpga",
      blurb: "Mid-range FPGA. Video, camera, CoaXPress, and sensor-bridge solutions plus Mi-V soft-processor designs." },
    { id: "miv", name: "Mi-V RISC-V", icon: "cpu",
      blurb: "Soft RISC-V processors and ecosystem for PolarFire, RTG4\u2122, and partner boards, with SoftConsole IDE docs." },
    { id: "hls", name: "SmartHLS\u2122", icon: "code",
      blurb: "High-level synthesis from C++ to FPGA hardware. Examples, libraries, and documentation." },
    { id: "ai",  name: "VectorBlox\u2122 Edge AI", icon: "ai",
      blurb: "AI/ML inference accelerator SDK, model compression, and kit demonstrations." },
    { id: "os",  name: "Linux and RTOS", icon: "os",
      blurb: "Kernel, U-Boot, Yocto, Buildroot, device tree overlays, Zephyr, and RTEMS for PolarFire SoC." }
  ],

  KITS: [
    { id: "icicle",   name: "PolarFire SoC Icicle Kit",              fam: "soc" },
    { id: "disco",    name: "PolarFire SoC Discovery Kit",           fam: "soc", url: "https://www.microchip.com/en-us/development-tool/mpfs-disco-kit" },
    { id: "socvideo", name: "PolarFire SoC Video Kit",               fam: "soc" },
    { id: "motor",    name: "PolarFire SoC Motor Control Kit (MPFS095 SoM)", fam: "soc" },
    { id: "pfvideo",  name: "PolarFire Video Kit",          fam: "pf" },
    { id: "esb",      name: "PolarFire Ethernet Sensor Bridge Kit",  fam: "pf" },
    { id: "cxp",      name: "PolarFire Quad Channel CXP-12 Kit",     fam: "pf" },
    { id: "pfeval",   name: "PolarFire Evaluation Kit",              fam: "pf" },
    { id: "splash",   name: "PolarFire Splash Kit",                  fam: "pf" },
    { id: "rtg4",     name: "RTG4\u2122 Development Kit",            fam: "miv" },
    { id: "partner",  name: "Partner boards (Future Avalanche, Arrow Everest)", fam: "pf" }
  ],

  STEPS: [
    { t: "Read the docs",         d: "Board guides, boot flow, HSS, and Linux how-tos.",       href: "https://github.com/polarfire-soc/polarfire-soc-documentation" },
    { t: "Pick a kit",            d: "Libero reference designs for every development kit.",    href: "#kits" },
    { t: "Boot with HSS",         d: "Hart Software Services boot loader.",                    href: "https://github.com/polarfire-soc/hart-software-services" },
    { t: "Go bare metal",         d: "Driver examples for the MSS peripherals.",                href: "https://github.com/polarfire-soc/polarfire-soc-bare-metal-examples" },
    { t: "Build Linux",           d: "Yocto meta-mchp or the Buildroot external tree.",         href: "https://github.com/linux4microchip/meta-mchp" },
    { t: "Accelerate with HLS",   d: "Turn C++ into FPGA hardware with SmartHLS.",              href: "https://github.com/MicrochipTech/fpga-hls-examples" },
    { t: "Add Edge AI",           d: "Deploy models with the VectorBlox SDK.",                  href: "https://github.com/Microchip-Vectorblox/VectorBlox-SDK" }
  ],

  REPOS: [
    // Board reference designs
    { r: "polarfire-soc/icicle-kit-reference-design", d: "PolarFire SoC Icicle Kit Libero reference design.", cat: "boards", fam: ["soc"], kit: "icicle", s: 56, f: 30, u: "2026-11-17", l: "Tcl" },
    { r: "polarfire-soc/polarfire-soc-discovery-kit-reference-design", d: "PolarFire SoC Discovery Kit reference design and product page.", cat: "boards", fam: ["soc"], kit: "disco", s: 30, f: 5, u: "2026-11-17", l: "Tcl" },
    { r: "polarfire-soc/polarfire-soc-video-kit-reference-design", d: "PolarFire SoC Video Kit Libero reference design.", cat: "boards", fam: ["soc"], kit: "socvideo", s: 10, f: 7, u: "2025-09-04", l: "Tcl" },
    { r: "polarfire-soc/icicle-kit-minimal-bring-up-design-bitstream-builder", d: "Scripts to build the Icicle Kit minimal bring-up design bitstream.", cat: "boards", fam: ["soc"], kit: "icicle", s: 6, f: 3, u: "2022-04-27", l: "Python" },
    { r: "polarfire-soc/icicle-kit-minimal-bring-up-design-hdl-src", d: "HDL sources for the Icicle Kit minimal bring-up design.", cat: "boards", fam: ["soc"], kit: "icicle", s: 0, f: 1, u: "2022-04-27", l: "Tcl" },

    // Application solutions
    { r: "microchip-fpga-solutions/mpfs250-video-kit-drm", d: "DRM reference design for the PolarFire SoC MPFS250 Video Kit.", cat: "solutions", fam: ["soc"], kit: "socvideo", s: 0, f: 0, u: "2026-07-24", l: "Tcl" },
    { r: "microchip-fpga-solutions/mpfs250-video-kit-mjpeg-streaming", d: "Motion JPEG video streaming over Ethernet on the PolarFire SoC MPFS250 Video Kit.", cat: "solutions", fam: ["soc"], kit: "socvideo", s: 0, f: 1, u: "2026-10-11", l: "Tcl" },
    { r: "microchip-fpga-solutions/mpf300-video-kit-sdi-hdmi", d: "Bidirectional SDI/HDMI protocol converter for the PolarFire MPF300 Video Kit.", cat: "solutions", fam: ["pf"], kit: "pfvideo", s: 0, f: 0, u: "2026-09-07", l: "C" },
    { r: "microchip-fpga-solutions/mpf300-video-kit-dprx-dptx", d: "DisplayPort RX to TX passthrough for the PolarFire MPF300 Video Kit.", cat: "solutions", fam: ["pf"], kit: "pfvideo", s: 1, f: 0, u: "2026-08-13", l: "Tcl" },
    { r: "microchip-fpga-solutions/mpf200-esb-mipi", d: "Four-camera (MIPI IMX477) design for the PolarFire Ethernet Sensor Bridge Kit.", cat: "solutions", fam: ["pf"], kit: "esb", s: 1, f: 2, u: "2026-08-21", l: "Verilog" },
    { r: "microchip-fpga-solutions/mpf100-qcxp-kit-slvs-cxp", d: "SLVS to CoaXPress converter for the PolarFire Quad Channel CXP-12 Kit.", cat: "solutions", fam: ["pf"], kit: "cxp", s: 1, f: 0, u: "2026-10-11", l: "C" },
    { r: "microchip-fpga-solutions/mpfs095-motor-kit-bldc", d: "BLDC motor control for the PolarFire SoC Motor Control Kit (MPFS095 SoM).", cat: "solutions", fam: ["soc"], kit: "motor", s: 2, f: 1, u: "2026-07-21", l: "Tcl" },
    { r: "microchip-fpga-solutions/mpfs095-motor-kit-tsn", d: "CoreTSN-based solution for the PolarFire SoC MPFS095 Motor Control Kit.", cat: "solutions", fam: ["soc"], kit: "motor", s: 0, f: 0, u: "2026-07-23", l: "Tcl" },
    { r: "microchip-fpga-solutions/mpfs095-som-fcsg536e-base", d: "Base reference design for the PolarFire SoC MPFS095 SoM.", cat: "solutions", fam: ["soc"], kit: "motor", s: 0, f: 0, u: "2026-06-30", l: "Tcl" },

    // Embedded software
    { r: "polarfire-soc/hart-software-services", d: "Hart Software Services (HSS): boot loader and runtime services.", cat: "embedded", fam: ["soc"], s: 64, f: 62, u: "2026-11-16", l: "C" },
    { r: "polarfire-soc/polarfire-soc-bare-metal-examples", d: "Bare-metal example projects for PolarFire SoC.", cat: "embedded", fam: ["soc"], s: 55, f: 28, u: "2026-10-30", l: "C" },
    { r: "polarfire-soc/polarfire-soc-amp-examples", d: "Asymmetric multiprocessing (AMP) examples.", cat: "embedded", fam: ["soc"], s: 8, f: 3, u: "2026-11-16", l: "C" },
    { r: "polarfire-soc/platform", d: "Platform sources (HAL and drivers) shared by PolarFire SoC software projects.", cat: "embedded", fam: ["soc"], s: 12, f: 17, u: "2026-09-01", l: "C" },

    // Linux
    { r: "linux4microchip/meta-mchp", d: "Yocto BSP layer for Microchip devices, including PolarFire SoC.", cat: "linux", fam: ["soc", "os"], s: 16, f: 12, u: "2026-11-17", l: "BitBake" },
    { r: "linux4microchip/meta-mchp-manifest", d: "Repo manifest for meta-mchp Yocto builds.", cat: "linux", fam: ["soc", "os"], s: 0, f: 1, u: "2026-11-17", l: "" },
    { r: "linux4microchip/buildroot-external-microchip", d: "Buildroot external tree for Microchip SoCs.", cat: "linux", fam: ["soc", "os"], s: 32, f: 27, u: "2026-11-17", l: "Shell" },
    { r: "linux4microchip/linux", d: "Microchip Linux kernel source tree.", cat: "linux", fam: ["soc", "os"], s: 29, f: 53, u: "2026-11-13", l: "C" },
    { r: "linux4microchip/u-boot-mchp", d: "U-Boot for Microchip devices.", cat: "linux", fam: ["soc", "os"], s: 12, f: 25, u: "2026-11-13", l: "C" },
    { r: "linux4microchip/dt-overlay-mchp", d: "Device tree overlays for the Microchip Linux kernel.", cat: "linux", fam: ["soc", "os"], s: 6, f: 14, u: "2026-11-13", l: "Shell" },
    { r: "linux4microchip/libcamera-mchp", d: "libcamera port for Microchip processors, including PolarFire SoC.", cat: "linux", fam: ["soc", "os"], s: 1, f: 2, u: "2026-11-13", l: "C++" },
    { r: "polarfire-soc/polarfire-soc-linux-examples", d: "Linux user-space examples for PolarFire SoC.", cat: "linux", fam: ["soc", "os"], s: 16, f: 7, u: "2026-04-28", l: "JavaScript" },
    { r: "microchip-fpga-solutions/linux4polarfire", d: "Linux kernel tree for PolarFire SoC based solutions.", cat: "linux", fam: ["soc", "os"], s: 0, f: 0, u: "2026-11-11", l: "C" },
    { r: "microchip-fpga-solutions/dt-overlay4polarfire", d: "Device tree overlays for the linux4polarfire kernel.", cat: "linux", fam: ["soc", "os"], s: 0, f: 0, u: "2026-11-12", l: "" },
    { r: "microchip-fpga-solutions/meta-mchp-fpga-solns", d: "Yocto layer for PolarFire SoC FPGA solutions.", cat: "linux", fam: ["soc", "os"], s: 0, f: 0, u: "2026-11-12", l: "HTML" },
    { r: "microchip-fpga-solutions/meta-mchp-fpga-solns-manifest", d: "Repo manifest for PolarFire SoC FPGA solutions.", cat: "linux", fam: ["soc", "os"], s: 0, f: 0, u: "2026-10-08", l: "" },
    { r: "microchip-fpga-solutions/mchp-fpga-solns-linux-apps", d: "Linux demos and applications for PolarFire SoC.", cat: "linux", fam: ["soc", "os"], s: 1, f: 0, u: "2026-07-22", l: "C" },

    // RTOS
    { r: "polarfire-soc/zephyr", d: "Zephyr RTOS fork with PolarFire SoC support.", cat: "rtos", fam: ["soc", "os"], s: 5, f: 3, u: "2026-10-29", l: "C", fork: true },
    { r: "polarfire-soc/polarfire-soc-zephyr-applications", d: "Zephyr test and demo applications for PolarFire SoC.", cat: "rtos", fam: ["soc", "os"], s: 6, f: 1, u: "2023-03-23", l: "C" },
    { r: "polarfire-soc/zephyr-applications", d: "Zephyr applications for PolarFire SoC.", cat: "rtos", fam: ["soc", "os"], s: 3, f: 2, u: "2024-12-18", l: "Python" },
    { r: "polarfire-soc/zephyr-mpfs-hal_microchip", d: "Zephyr HAL module for PolarFire SoC (MPFS).", cat: "rtos", fam: ["soc", "os"], s: 1, f: 1, u: "2025-01-17", l: "C", fork: true },
    { r: "polarfire-soc/rtems", d: "RTEMS real-time kernel fork with PolarFire SoC BSP work.", cat: "rtos", fam: ["soc", "os"], s: 5, f: 1, u: "2022-08-12", l: "", fork: true },
    { r: "Zephyr4Microchip/zephyr", d: "Microchip's Zephyr RTOS repository with support for Microchip devices.", cat: "rtos", fam: ["soc", "os"], s: 12, f: 10, u: "2026-11-11", l: "C", fork: true },
    { r: "Zephyr4Microchip/microchip-zephyr", d: "Microchip downstream of the upstream Zephyr project.", cat: "rtos", fam: ["soc", "os"], s: 0, f: 4, u: "2026-11-02", l: "C" },
    { r: "Zephyr4Microchip/hal_microchip", d: "Zephyr HAL module for Microchip devices.", cat: "rtos", fam: ["soc", "os"], s: 2, f: 2, u: "2026-11-02", l: "C", fork: true },
    { r: "Zephyr4Microchip/microchip-hal", d: "Microchip downstream of the upstream Zephyr hal_microchip module.", cat: "rtos", fam: ["soc", "os"], s: 0, f: 2, u: "2026-11-02", l: "C" },
    { r: "Zephyr4Microchip/microchip-zsdk", d: "Microchip Zephyr SDK.", cat: "rtos", fam: ["soc", "os"], s: 1, f: 2, u: "2026-11-02", l: "C" },

    // Mi-V soft RISC-V
    { r: "Mi-V-Soft-RISC-V/miv-rv32-bare-metal-examples", d: "Bare-metal example projects for Mi-V RV32 soft processors.", cat: "miv", fam: ["miv"], s: 12, f: 6, u: "2026-09-01", l: "C" },
    { r: "Mi-V-Soft-RISC-V/platform", d: "Mi-V platform sources: HAL and drivers for Mi-V RV32 soft processors.", cat: "miv", fam: ["miv"], s: 5, f: 4, u: "2026-09-01", l: "C" },
    { r: "Mi-V-Soft-RISC-V/miv-rv32-documentation", d: "Documentation for Mi-V RV32 soft processors.", cat: "miv", fam: ["miv"], s: 0, f: 1, u: "2026-09-01", l: "" },
    { r: "Mi-V-Soft-RISC-V/PolarFire-Eval-Kit", d: "Mi-V soft RISC-V Libero designs for the PolarFire Evaluation Kit.", cat: "miv", fam: ["miv", "pf"], kit: "pfeval", s: 0, f: 4, u: "2026-02-20", l: "Tcl" },
    { r: "Mi-V-Soft-RISC-V/PolarFire-FPGA-Splash-Kit", d: "Mi-V soft RISC-V Libero designs for the PolarFire Splash Kit.", cat: "miv", fam: ["miv", "pf"], kit: "splash", s: 1, f: 1, u: "2026-02-20", l: "Tcl" },
    { r: "Mi-V-Soft-RISC-V/RTG4-Development-Kit", d: "Mi-V soft RISC-V Libero designs for the RTG4 Development Kit.", cat: "miv", fam: ["miv"], kit: "rtg4", s: 0, f: 1, u: "2026-02-20", l: "Tcl" },
    { r: "Mi-V-Soft-RISC-V/Future-Avalanche-Board", d: "Mi-V soft RISC-V Libero designs for the Future Electronics Avalanche board.", cat: "miv", fam: ["miv", "pf"], kit: "partner", s: 0, f: 1, u: "2026-02-20", l: "Tcl" },
    { r: "Mi-V-Soft-RISC-V/Arrow-Everest-Board", d: "Mi-V soft RISC-V Libero designs for the Arrow Everest board.", cat: "miv", fam: ["miv", "pf"], kit: "partner", s: 0, f: 1, u: "2026-02-20", l: "Tcl" },

    // SmartHLS
    { r: "MicrochipTech/fpga-hls-examples", d: "Open-source SmartHLS examples for Microchip FPGAs.", cat: "hls", fam: ["hls"], s: 57, f: 14, u: "2026-10-16", l: "C" },
    { r: "MicrochipTech/fpga-hls-libraries", d: "SmartHLS libraries for Microchip FPGAs.", cat: "hls", fam: ["hls"], s: 15, f: 5, u: "2026-11-17", l: "C" },

    // Edge AI
    { r: "Microchip-Vectorblox/VectorBlox-SDK", d: "VectorBlox 3.1.1 Accelerator SDK: software-based AI/ML deployment on PolarFire FPGAs and SoCs without reprogramming the FPGA.", cat: "ai", fam: ["ai"], s: 28, f: 18, u: "2026-09-11", l: "Python" },
    { r: "Microchip-Vectorblox/VectorBlox-SoC-Video-Kit-Demo", d: "VectorBlox 3.1 demo for the PolarFire SoC Video Kit.", cat: "ai", fam: ["ai", "soc"], kit: "socvideo", s: 4, f: 2, u: "2026-09-11", l: "Verilog" },
    { r: "Microchip-Vectorblox/VectorBlox-Video-Kit-Demo", d: "VectorBlox demo for the PolarFire Video Kit (SDK 2.0.3).", cat: "ai", fam: ["ai", "pf"], kit: "pfvideo", s: 3, f: 0, u: "2026-06-22", l: "Verilog" },
    { r: "Microchip-Vectorblox/VectorBlox-Discovery-Kit-Reference-Design", d: "Starting point for a VectorBlox 3.1.1 solution on the PolarFire SoC Discovery Kit.", cat: "ai", fam: ["ai", "soc"], kit: "disco", s: 0, f: 1, u: "2026-09-11", l: "Tcl" },
    { r: "Microchip-Vectorblox/VectorBlox-Compression", d: "Python module to compress PyTorch models during training for the VectorBlox Accelerator.", cat: "ai", fam: ["ai"], s: 0, f: 0, u: "2026-11-17", l: "Python" },
    { r: "Microchip-Vectorblox/assets", d: "Shared resources used by the other VectorBlox repositories.", cat: "ai", fam: ["ai"], s: 0, f: 1, u: "2026-09-11", l: "Shell" },

    // Tools and documentation
    { r: "polarfire-soc/polarfire-soc-documentation", d: "PolarFire SoC documentation: boards, boot, HSS, Linux, and more.", cat: "tools", fam: ["soc"], s: 80, f: 29, u: "2026-11-17", l: "" },
    { r: "microchip-fpga/directc", d: "DirectC: program PolarFire and PolarFire SoC over JTAG from a BeagleBone Black or Raspberry Pi.", cat: "tools", fam: ["soc", "pf"], s: 10, f: 2, u: "2023-07-20", l: "C" },
    { r: "microchip-fpga/openocd", d: "OpenOCD for Microchip FPGA devices.", cat: "tools", fam: ["soc", "pf", "miv"], s: 1, f: 2, u: "2024-10-08", l: "C" },
    { r: "polarfire-soc/polarfire-soc-configuration-generator", d: "Generates MSS configuration header files from the XML MSS description.", cat: "tools", fam: ["soc"], s: 3, f: 0, u: "2021-05-10", l: "Python" },
    { r: "MicrochipTech/adg_fpga_reconfiguration", d: "FPGA reconfiguration from a microcontroller example.", cat: "tools", fam: ["pf"], s: 6, f: 1, u: "2022-07-11", l: "C" },
    { r: "Mi-V-Ecosystem/SoftConsole-Documentation", d: "Documentation for SoftConsole, the Eclipse-based IDE for RISC-V software development.", cat: "tools", fam: ["miv", "soc"], s: 0, f: 1, u: "2025-09-16", l: "HTML" },
    { r: "Mi-V-Ecosystem/mi-v-ecosystem.github.io", d: "Source of the Mi-V Ecosystem web pages (GitHub Pages site).", cat: "tools", fam: ["miv"], s: 1, f: 15, u: "2026-11-17", l: "HTML" },

    // Archived and legacy
    { r: "polarfire-soc/meta-polarfire-soc-yocto-bsp", d: "Former PolarFire SoC Yocto BSP (archived).", cat: "legacy", fam: ["soc", "os"], s: 61, f: 40, u: "2026-04-21", l: "BitBake", legacy: true, replace: "linux4microchip/meta-mchp" },
    { r: "polarfire-soc/polarfire-soc-buildroot-sdk", d: "Former PolarFire SoC Buildroot SDK (archived).", cat: "legacy", fam: ["soc", "os"], s: 24, f: 13, u: "2022-11-25", l: "Makefile", legacy: true, replace: "linux4microchip/buildroot-external-microchip" },
    { r: "polarfire-soc/polarfire-soc-yocto-manifests", d: "Former Yocto manifests (no longer maintained).", cat: "legacy", fam: ["soc", "os"], s: 0, f: 4, u: "2025-03-27", l: "", legacy: true, replace: "linux4microchip/meta-mchp-manifest" },
    { r: "polarfire-soc/linux", d: "Former Linux kernel fork (archived).", cat: "legacy", fam: ["soc", "os"], s: 5, f: 2, u: "2022-06-01", l: "C", legacy: true, fork: true, replace: "linux4microchip/linux" },
    { r: "polarfire-soc/u-boot", d: "Former U-Boot fork (archived).", cat: "legacy", fam: ["soc", "os"], s: 3, f: 9, u: "2024-07-05", l: "C", legacy: true, fork: true, replace: "linux4microchip/u-boot-mchp" },
    { r: "polarfire-soc/polarfire-soc-bare-metal-library", d: "Original bare-metal drivers library (not updated since 2022).", cat: "legacy", fam: ["soc"], s: 25, f: 12, u: "2022-01-10", l: "C", legacy: true, replace: "polarfire-soc/polarfire-soc-bare-metal-examples" },
    { r: "polarfire-soc/zephyr-archive-Dec-2021", d: "Temporary Zephyr development repository (2021).", cat: "legacy", fam: ["soc", "os"], s: 2, f: 0, u: "2021-09-30", l: "C", legacy: true, replace: "polarfire-soc/zephyr" },
    { r: "microchip-fpga-solutions/linux4polarfire-legacy", d: "Legacy kernel tree for PolarFire SoC solutions.", cat: "legacy", fam: ["soc", "os"], s: 1, f: 0, u: "2026-10-07", l: "C", legacy: true, replace: "microchip-fpga-solutions/linux4polarfire" },
    { r: "microchip-fpga-solutions/dt-overlay4polarfire-legacy", d: "Legacy device tree overlays for PolarFire SoC solutions.", cat: "legacy", fam: ["soc", "os"], s: 0, f: 0, u: "2026-10-07", l: "Shell", legacy: true, replace: "microchip-fpga-solutions/dt-overlay4polarfire" },
    { r: "polarfire-soc/apps", d: "Early application repository (2021).", cat: "legacy", fam: ["soc"], s: 3, f: 0, u: "2021-07-29", l: "", legacy: true },
    { r: "RISCV-on-Microsemi-FPGA", org: true, d: "Original Microsemi RISC-V organization: 31 archived repositories (FreeRTOS, SoftConsole, IGLOO2, SmartFusion2, PolarFire, and RTG4 sample designs).", cat: "legacy", fam: ["miv"], s: 0, f: 0, u: "2021-05-20", l: "", legacy: true, replace: "Mi-V-Soft-RISC-V" },
    { r: "Microsemi-SoC-IP", org: true, d: "Original Microsemi PolarFire SoC Linux organization: 8 archived repositories (Linux, U-Boot, Buildroot, OpenSBI, QEMU).", cat: "legacy", fam: ["soc", "os"], s: 0, f: 0, u: "2020-06-11", l: "", legacy: true, replace: "linux4microchip" }
  ]
};
