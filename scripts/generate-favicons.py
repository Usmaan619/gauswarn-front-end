#!/usr/bin/env python3
"""
Generate properly sized favicon files from the source 1001x1001 PNG logo.

This script creates:
  - favicon-16x16.png
  - favicon-32x32.png
  - favicon-48x48.png  (Google Search minimum requirement)
  - favicon-96x96.png
  - favicon-192x192.png
  - favicon-512x512.png
  - favicon.ico (multi-size real ICO format: 16, 32, 48)
"""

import os
from PIL import Image

PUBLIC_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "public")

# Source image — the original 1001x1001 PNG
SOURCE = os.path.join(PUBLIC_DIR, "favicon-512x512.png")

# Target PNG sizes
PNG_SIZES = [16, 32, 48, 96, 192, 512]

# ICO sizes (embedded inside favicon.ico)
ICO_SIZES = [16, 32, 48]


def main():
    print(f"[INFO] Loading source image: {SOURCE}")
    src = Image.open(SOURCE).convert("RGBA")
    print(f"[INFO] Source dimensions: {src.size}")

    # Generate PNG favicons at each size
    for size in PNG_SIZES:
        out_path = os.path.join(PUBLIC_DIR, f"favicon-{size}x{size}.png")
        resized = src.resize((size, size), Image.LANCZOS)
        resized.save(out_path, "PNG", optimize=True)
        file_size = os.path.getsize(out_path)
        print(f"  ✅ {out_path}  →  {size}x{size}  ({file_size:,} bytes)")

    # Generate a real multi-size ICO file
    ico_path = os.path.join(PUBLIC_DIR, "favicon.ico")
    ico_images = [src.resize((s, s), Image.LANCZOS) for s in ICO_SIZES]
    ico_images[0].save(
        ico_path,
        format="ICO",
        sizes=[(s, s) for s in ICO_SIZES],
        append_images=ico_images[1:],
    )
    file_size = os.path.getsize(ico_path)
    print(f"  ✅ {ico_path}  →  ICO ({ICO_SIZES})  ({file_size:,} bytes)")

    print("\n[DONE] All favicons generated successfully.")


if __name__ == "__main__":
    main()
