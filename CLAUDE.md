# CLAUDE.md - BunnyBin UI Prototype Project

## Project Context
BunnyBin is an AI-powered interactive smart trash bin for kids. The UI runs on a 7-inch LCD (via ESP32 or Raspberry Pi) to guide children in waste segregation using a cute rabbit mascot.

## Technical Stack (UI Prototype)
- **Framework**: React.js or Next.js (for web-based prototype)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion (to mimic bunny animations)
- **Icons**: Lucide React
- **Themes**: Pastel colors (Pastel Green for Organic, Pastel Blue for Inorganic).

## Core UI States & Logic
Follow this workflow for the UI states:
1. **Idle State**: Show "Bunny" waving animation with "Halo Teman! Ayo Masukkan Sampah!".
2. **Scanning State**: Show a radar/scanning overlay on the bunny mascot.
3. **Question State**: Display "Menurutmu, ini sampah apa?" with two large buttons (Organic/Inorganic).
4. **Success State**: "YEAY! KAMU HEBAT!" with confetti and green LED visual.
5. **Error State**: "Hmm... Belum tepat nih!" followed by educational text about the material.

## Design Guidelines
- **Typography**: Rounded sans-serif (e.g., 'Quicksand' or 'Fredoka').
- **Buttons**: Large, touch-friendly, with icons (Leaf for Organic, Recycle symbol for Inorganic).
- **Mascot**: The Bunny mascot must be present in every state to maintain engagement.
- **Feedback**: Visual color cues must match physical bins (Green = Organic, Blue = Inorganic).

## Claude Code Instructions
- **Code Style**: Functional components, clean prop types.
- **Interactivity**: Implement state management to toggle between the 5 stages mentioned above.
- **Assets**: Use placeholder SVG illustrations for the Bunny and waste items.
- **Responsiveness**: Fixed aspect ratio 16:9 or 16:10 to mimic a 7-inch display (approx. 1024x600px).

## Commands
- `npm run dev` - Start the prototype server.
- `npm run build` - Build the static UI for deployment.