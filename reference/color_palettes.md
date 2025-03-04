# Color Palettes

<!-- BACKLOG: Color Palettes
created::2024-03-03T18:53:00Z
priority::normal
due::2024-03-10T00:00:00Z
owner::@dionedge
estimate::1h
project::brain
-->

## Status Colors
```
BACKLOG:  #A5A5A5 (pastel_gray)    - Items to be processed
PLANNING: #74C3D1 (pastel_cyan)    - In planning phase
NOTE:     #FFE599 (pastel_yellow)  - General notes and documentation
TODO:     #A4C2F4 (pastel_blue)    - Ready to work on
DOING:    #A1D9A0 (pastel_green)   - Currently in progress
DONE:     #B5A0E3 (pastel_purple)  - Completed tasks
REVIEW:   #F4A6C0 (pastel_pink)    - Needs review
CODIFY:   #F6B786 (pastel_orange)  - To be codified
TECH_DEBT: #E69999 (pastel_red)    - Technical debt to address
```

## Priority Colors
```
High:   #E69999 (pastel_red)
Medium: #FFE599 (pastel_yellow)
Low:    #A1D9A0 (pastel_green)
```

## UI Elements
```
Card Background:    #FFFFFF (white)
List Background:    #F6F8FA (light_gray)
Board Background:   #F0F2F5 (lighter_gray)
Progress Bar Base:  #E1E4E8 (gray)
Progress Bar Fill:  #A1D9A0 (pastel_green)
```

## Usage Guidelines
1. Use status colors to quickly identify card types
2. Priority colors indicate task urgency
3. UI colors provide clean, readable interface
4. All colors chosen for reduced eye strain

## Implementation
- Colors defined in `.imdone/board.js`
- Styles applied via `.imdone/style.css`
- Status colors used in list headers
- Priority colors shown as left borders

Related:
- journal/projects/color_scheme_update.md
- .imdone/style.css
- .imdone/board.js

#documentation #design #ui #reference

## Color_Palettes.md

### 🌙 Dark Palette 1: "Midnight UI" (Elegant & Minimal)
- **Primary**: `#1B03A3` (Neon Blue)
- **Secondary**: `#9D00FF` (Neon Purple)
- **Accent**: `#FF10F0` (Neon Pink)
- **Error**: `#FF3131` (Neon Red)
- **Success**: `#39FF14` (Neon Green)
- **Warning**: `#E9FF32` (Neon Yellow)
- **Info**: `#00FFFF` (Neon Cyan)
- **Primary Foreground**: `#E3E3E3` (Soft White)
- **Secondary Foreground**: `#A3A3A3` (Stone Grey)
- **Disabled Foreground**: `#606770` (Neutral Grey)
- **Primary Background**: `#010B13` (Rich Black)
- **Secondary Background**: `#0F1111` (Charcoal Black)
- **Surface Background**: `#1A1A1A` (Midnight Black)
- **Overlay Color**: `#121212AA` (Transparent Dark)

### 🌙 Dark Palette 2: "Cyber Dark" (Futuristic & High Contrast)
- **Primary**: `#FF0090` (Neon Magenta)
- **Secondary**: `#C7EA46` (Neon Lime)
- **Accent**: `#FF5F1F` (Neon Orange)
- **Error**: `#FF3131` (Neon Red)
- **Success**: `#39FF14` (Neon Green)
- **Warning**: `#E9FF32` (Neon Yellow)
- **Info**: `#1B03A3` (Neon Blue)
- **Primary Foreground**: `#F5F5F5` (Snow White)
- **Secondary Foreground**: `#7D8B99` (Cool Grey)
- **Disabled Foreground**: `#606770` (Neutral Grey)
- **Primary Background**: `#0A0A0A` (Pure Black)
- **Secondary Background**: `#1B1B1B` (Dark Grey)
- **Surface Background**: `#2C2F33` (Gunmetal Grey)
- **Overlay Color**: `#191919AA` (Soft Black Transparent)

### ☀️ Light Palette 1: "Modern Soft" (Neutral & Minimal)
- **Primary**: `#AEC6CF` (Pastel Blue)
- **Secondary**: `#D8BFD8` (Pastel Purple)
- **Accent**: `#FFB347` (Pastel Orange)
- **Error**: `#FF6961` (Pastel Red)
- **Success**: `#77DD77` (Pastel Green)
- **Warning**: `#FDFD96` (Pastel Yellow)
- **Info**: `#99C5C4` (Pastel Teal)
- **Primary Foreground**: `#212121` (Dark Grey)
- **Secondary Foreground**: `#616161` (Medium Grey)
- **Disabled Foreground**: `#A3A3A3` (Stone Grey)
- **Primary Background**: `#FFFFFF` (Pure White)
- **Secondary Background**: `#FAFAFA` (Off White)
- **Surface Background**: `#F5F5F5` (Snow White)
- **Overlay Color**: `#00000033` (Transparent Black)

### ☀️ Light Palette 2: "Pastel UI" (Soft & Friendly)
- **Primary**: `#FFD1DC` (Pastel Pink)
- **Secondary**: `#81D4FA` (Pastel Blue)
- **Accent**: `#FFDAB9` (Pastel Peach)
- **Error**: `#FF5252` (Pastel Red Variant)
- **Success**: `#69F0AE` (Mint Green)
- **Warning**: `#FFEA00` (Bright Yellow)
- **Info**: `#40C4FF` (Baby Blue)
- **Primary Foreground**: `#212121` (Deep Grey)
- **Secondary Foreground**: `#606770` (Neutral Grey)
- **Disabled Foreground**: `#9E9E9E` (Soft Grey)
- **Primary Background**: `#FFF8E1` (Warm White)
- **Secondary Background**: `#FFEBEE` (Very Light Pink)
- **Surface Background**: `#FCE4EC` (Blush White)
- **Overlay Color**: `#0000001A` (Soft Black)

### 🌙 Dark Palette: "Electric Dream" (Vibrant & Edgy)
- **Primary**: `#FF10F0` (Neon Pink)
- **Secondary**: `#81D4FA` (Pastel Blue)
- **Accent**: `#FFD180` (Pastel Orange)
- **Error**: `#FF3131` (Neon Red)
- **Success**: `#69F0AE` (Mint Green)
- **Warning**: `#E9FF32` (Neon Yellow)
- **Info**: `#40C4FF` (Baby Blue)
- **Primary Foreground**: `#E3E3E3` (Soft White)
- **Secondary Foreground**: `#B8B8B8` (Light Ash Grey)
- **Disabled Foreground**: `#7D8B99` (Cool Grey)
- **Primary Background**: `#0A0A0A` (Pure Black)
- **Secondary Background**: `#1B1B1B` (Dark Grey)
- **Surface Background**: `#2C2F33` (Gunmetal Grey)
- **Overlay Color**: `#191919AA` (Soft Black Transparent)

### ☀️ Light Palette: "Cyber Cotton Candy" (Soft but Electric)
- **Primary**: `#FF80AB` (Pastel Pink)
- **Secondary**: `#39FF14` (Neon Green)
- **Accent**: `#FFB347` (Pastel Orange)
- **Error**: `#FF5252` (Pastel Red)
- **Success**: `#00FFFF` (Neon Cyan)
- **Warning**: `#FFEA00` (Bright Yellow)
- **Info**: `#BB86FC` (Lavender Neon)
- **Primary Foreground**: `#212121` (Deep Grey)
- **Secondary Foreground**: `#616161` (Medium Grey)
- **Disabled Foreground**: `#A3A3A3` (Stone Grey)
- **Primary Background**: `#FFF8E1` (Warm White)
- **Secondary Background**: `#FFEBEE` (Very Light Pink)
- **Surface Background**: `#FCE4EC` (Blush White)
- **Overlay Color**: `#0000001A` (Soft Black)
<!--
order::65
NOTE::2025-03-03T18:57:00.710Z
BACKLOG::2025-03-03T19:18:08.721Z
-->
