#!/bin/bash
cd /home/kavia/workspace/code-generation/tyreshopper-31028-b9ced14d/tyresize_webapp
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

