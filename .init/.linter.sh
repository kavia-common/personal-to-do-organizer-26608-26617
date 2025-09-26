#!/bin/bash
cd /home/kavia/workspace/code-generation/personal-to-do-organizer-26608-26617/react_js_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

