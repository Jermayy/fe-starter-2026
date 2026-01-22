#!/bin/zsh
echo "Cleaning Next/Turbopack caches..."
rm -rf .next node_modules/.cache
rm -rf ~/Library/Caches/next ~/Library/Caches/turbo
