#!/bin/bash

# Install dependencies
cd "$(dirname "$0")"
npm install

# Make the CLI script executable
chmod +x src/index.js

echo "Setup complete! You can now use the CLI by running:"
echo "node ./src/index.js"
echo "or link it globally with:"
echo "npm link" 
