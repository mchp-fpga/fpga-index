# Microchip FPGA on GitHub

Microchip provides mid-range density FPGAs and SoC FPGAs known for power efficiency, reliability, and defense-grade security, for Industrial, Medical, Aerospace and Defense, Communications, and AI/ML inferencing applications. This page brings together every public Microchip FPGA repository on GitHub: reference designs, embedded software, Linux, RTOS, soft RISC-V, high-level synthesis, and Edge AI.

---

## Start here

| I want to... | Go to |
|---|---|
| Learn PolarFire&reg; SoC: boards, boot flow, Linux how-tos | [polarfire-soc-documentation](https://github.com/polarfire-soc/polarfire-soc-documentation) |
| Build the reference design for my kit | [Development kits](#development-kits) |
| Boot the RISC-V cores | [hart-software-services](https://github.com/polarfire-soc/hart-software-services) |
| Run bare-metal code on the MSS | [polarfire-soc-bare-metal-examples](https://github.com/polarfire-soc/polarfire-soc-bare-metal-examples) |
| Build Linux (Yocto or Buildroot) | [meta-mchp](https://github.com/linux4microchip/meta-mchp) &middot; [buildroot-external-microchip](https://github.com/linux4microchip/buildroot-external-microchip) |
| Turn C++ into FPGA hardware | [fpga-hls-examples](https://github.com/MicrochipTech/fpga-hls-examples) |
| Run AI/ML models on the FPGA | [VectorBlox-SDK](https://github.com/Microchip-Vectorblox/VectorBlox-SDK) |
| Use a soft RISC-V on PolarFire or RTG4&trade; | [miv-rv32-bare-metal-examples](https://github.com/Mi-V-Soft-RISC-V/miv-rv32-bare-metal-examples) |

---

## Product families

| | Family | What you'll find |
|:---:|---|---|
| <img src="https://avatars.githubusercontent.com/u/51128733?s=80" width="40" alt=""> | **[PolarFire&reg; SoC](https://github.com/polarfire-soc)** | RISC-V SoC FPGA: kit reference designs, HSS boot loader, bare-metal drivers, AMP, Zephyr and RTEMS |
| <img src="https://avatars.githubusercontent.com/u/247337802?s=80" width="40" alt=""> | **[FPGA Solutions](https://github.com/microchip-fpga-solutions)** | Complete solutions: video (SDI, HDMI, DisplayPort, DRM, MJPEG), MIPI cameras, CoaXPress, motor control, TSN |
| <img src="https://avatars.githubusercontent.com/u/69243549?s=80" width="40" alt=""> | **[Mi-V Soft RISC-V](https://github.com/Mi-V-Soft-RISC-V)** | Mi-V RV32 soft processors: Libero designs, bare-metal examples, HAL for PolarFire, RTG4, and partner boards |
| <img src="https://avatars.githubusercontent.com/u/73501811?s=80" width="40" alt=""> | **[VectorBlox&trade; Edge AI](https://github.com/Microchip-Vectorblox)** | AI/ML inference SDK, model compression, and kit demos |
| <img src="https://avatars.githubusercontent.com/u/8910143?s=80" width="40" alt=""> | **[SmartHLS&trade;](https://github.com/MicrochipTech/fpga-hls-examples)** | High-level synthesis [examples](https://github.com/MicrochipTech/fpga-hls-examples) and [libraries](https://github.com/MicrochipTech/fpga-hls-libraries) |
| <img src="https://avatars.githubusercontent.com/u/85181005?s=80" width="40" alt=""> | **[Linux4Microchip](https://github.com/linux4microchip)** | Kernel, U-Boot, Yocto (meta-mchp), Buildroot, device tree overlays |

---

## Popular repositories

| Repository | Description | Stars |
|---|---|:---:|
| [polarfire-soc-documentation](https://github.com/polarfire-soc/polarfire-soc-documentation) | PolarFire SoC documentation: boards, boot, HSS, Linux | ![](https://img.shields.io/github/stars/polarfire-soc/polarfire-soc-documentation?style=flat&label=&color=1a8fd1) |
| [hart-software-services](https://github.com/polarfire-soc/hart-software-services) | HSS boot loader and runtime services | ![](https://img.shields.io/github/stars/polarfire-soc/hart-software-services?style=flat&label=&color=1a8fd1) |
| [fpga-hls-examples](https://github.com/MicrochipTech/fpga-hls-examples) | Open-source SmartHLS examples | ![](https://img.shields.io/github/stars/MicrochipTech/fpga-hls-examples?style=flat&label=&color=1a8fd1) |
| [icicle-kit-reference-design](https://github.com/polarfire-soc/icicle-kit-reference-design) | PolarFire SoC Icicle Kit Libero reference design | ![](https://img.shields.io/github/stars/polarfire-soc/icicle-kit-reference-design?style=flat&label=&color=1a8fd1) |
| [polarfire-soc-bare-metal-examples](https://github.com/polarfire-soc/polarfire-soc-bare-metal-examples) | Bare-metal example projects | ![](https://img.shields.io/github/stars/polarfire-soc/polarfire-soc-bare-metal-examples?style=flat&label=&color=1a8fd1) |
| [buildroot-external-microchip](https://github.com/linux4microchip/buildroot-external-microchip) | Buildroot external tree for Microchip SoCs | ![](https://img.shields.io/github/stars/linux4microchip/buildroot-external-microchip?style=flat&label=&color=1a8fd1) |
| [polarfire-soc-discovery-kit-reference-design](https://github.com/polarfire-soc/polarfire-soc-discovery-kit-reference-design) | PolarFire SoC Discovery Kit reference design | ![](https://img.shields.io/github/stars/polarfire-soc/polarfire-soc-discovery-kit-reference-design?style=flat&label=&color=1a8fd1) |
| [VectorBlox-SDK](https://github.com/Microchip-Vectorblox/VectorBlox-SDK) | VectorBlox Accelerator SDK for AI/ML inference | ![](https://img.shields.io/github/stars/Microchip-Vectorblox/VectorBlox-SDK?style=flat&label=&color=1a8fd1) |

---

## Development kits

| Kit | Repositories |
|---|---|
| **PolarFire SoC Icicle Kit** | [icicle-kit-reference-design](https://github.com/polarfire-soc/icicle-kit-reference-design) |
| **PolarFire SoC Discovery Kit** | [polarfire-soc-discovery-kit-reference-design](https://github.com/polarfire-soc/polarfire-soc-discovery-kit-reference-design) &middot; [VectorBlox-Discovery-Kit-Reference-Design](https://github.com/Microchip-Vectorblox/VectorBlox-Discovery-Kit-Reference-Design) |
| **PolarFire SoC Video Kit** | [polarfire-soc-video-kit-reference-design](https://github.com/polarfire-soc/polarfire-soc-video-kit-reference-design) &middot; [mpfs250-video-kit-drm](https://github.com/microchip-fpga-solutions/mpfs250-video-kit-drm) &middot; [mpfs250-video-kit-mjpeg-streaming](https://github.com/microchip-fpga-solutions/mpfs250-video-kit-mjpeg-streaming) &middot; [VectorBlox-SoC-Video-Kit-Demo](https://github.com/Microchip-Vectorblox/VectorBlox-SoC-Video-Kit-Demo) |
| **PolarFire SoC Motor Control Kit** (MPFS095 SoM) | [mpfs095-motor-kit-bldc](https://github.com/microchip-fpga-solutions/mpfs095-motor-kit-bldc) &middot; [mpfs095-motor-kit-tsn](https://github.com/microchip-fpga-solutions/mpfs095-motor-kit-tsn) &middot; [mpfs095-som-fcsg536e-base](https://github.com/microchip-fpga-solutions/mpfs095-som-fcsg536e-base) |
| **PolarFire Video Kit** (MPF300) | [mpf300-video-kit-sdi-hdmi](https://github.com/microchip-fpga-solutions/mpf300-video-kit-sdi-hdmi) &middot; [mpf300-video-kit-dprx-dptx](https://github.com/microchip-fpga-solutions/mpf300-video-kit-dprx-dptx) &middot; [VectorBlox-Video-Kit-Demo](https://github.com/Microchip-Vectorblox/VectorBlox-Video-Kit-Demo) |
| **PolarFire Ethernet Sensor Bridge Kit** | [mpf200-esb-mipi](https://github.com/microchip-fpga-solutions/mpf200-esb-mipi) |
| **PolarFire Quad Channel CXP-12 Kit** | [mpf100-qcxp-kit-slvs-cxp](https://github.com/microchip-fpga-solutions/mpf100-qcxp-kit-slvs-cxp) |
| **PolarFire Evaluation Kit** | [PolarFire-Eval-Kit](https://github.com/Mi-V-Soft-RISC-V/PolarFire-Eval-Kit) (Mi-V) |
| **PolarFire Splash Kit** | [PolarFire-FPGA-Splash-Kit](https://github.com/Mi-V-Soft-RISC-V/PolarFire-FPGA-Splash-Kit) (Mi-V) |
| **RTG4&trade; Development Kit** | [RTG4-Development-Kit](https://github.com/Mi-V-Soft-RISC-V/RTG4-Development-Kit) (Mi-V) |
| **Partner boards** | [Future-Avalanche-Board](https://github.com/Mi-V-Soft-RISC-V/Future-Avalanche-Board) &middot; [Arrow-Everest-Board](https://github.com/Mi-V-Soft-RISC-V/Arrow-Everest-Board) (Mi-V) |

---

## Software

**Linux** &nbsp; [linux](https://github.com/linux4microchip/linux) &middot; [u-boot-mchp](https://github.com/linux4microchip/u-boot-mchp) &middot; [meta-mchp](https://github.com/linux4microchip/meta-mchp) &middot; [buildroot-external-microchip](https://github.com/linux4microchip/buildroot-external-microchip) &middot; [dt-overlay-mchp](https://github.com/linux4microchip/dt-overlay-mchp) &middot; [polarfire-soc-linux-examples](https://github.com/polarfire-soc/polarfire-soc-linux-examples)

**RTOS** &nbsp; [zephyr](https://github.com/polarfire-soc/zephyr) &middot; [polarfire-soc-zephyr-applications](https://github.com/polarfire-soc/polarfire-soc-zephyr-applications) &middot; [rtems](https://github.com/polarfire-soc/rtems)

**Bare metal and boot** &nbsp; [hart-software-services](https://github.com/polarfire-soc/hart-software-services) &middot; [polarfire-soc-bare-metal-examples](https://github.com/polarfire-soc/polarfire-soc-bare-metal-examples) &middot; [polarfire-soc-amp-examples](https://github.com/polarfire-soc/polarfire-soc-amp-examples) &middot; [platform](https://github.com/polarfire-soc/platform)

**SmartHLS&trade;** &nbsp; [fpga-hls-examples](https://github.com/MicrochipTech/fpga-hls-examples) &middot; [fpga-hls-libraries](https://github.com/MicrochipTech/fpga-hls-libraries)

**Edge AI** &nbsp; [VectorBlox-SDK](https://github.com/Microchip-Vectorblox/VectorBlox-SDK) &middot; [VectorBlox-Compression](https://github.com/Microchip-Vectorblox/VectorBlox-Compression)

**Mi-V soft RISC-V** &nbsp; [miv-rv32-bare-metal-examples](https://github.com/Mi-V-Soft-RISC-V/miv-rv32-bare-metal-examples) &middot; [platform](https://github.com/Mi-V-Soft-RISC-V/platform) &middot; [miv-rv32-documentation](https://github.com/Mi-V-Soft-RISC-V/miv-rv32-documentation)

**Tools** &nbsp; [SoftConsole-Documentation](https://github.com/Mi-V-Ecosystem/SoftConsole-Documentation)

---

> **Looking for an older repository?** Several repositories have moved. For example, `meta-polarfire-soc-yocto-bsp` is now [meta-mchp](https://github.com/linux4microchip/meta-mchp), and `polarfire-soc-buildroot-sdk` is now [buildroot-external-microchip](https://github.com/linux4microchip/buildroot-external-microchip). The [hub website](https://mchp-fpga.github.io/fpga-index/) lists every archived repository with its replacement.

<sub>Community-maintained index, not an official Microchip page. Microchip and Microchip product names are trademarks or registered trademarks of Microchip Technology Incorporated in the U.S.A. and other countries. [Suggest a repository](https://github.com/mchp-fpga/fpga-index/issues).</sub>
