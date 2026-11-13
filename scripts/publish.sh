#!/bin/sh
# Usage: scripts/publish.sh <local-file> <space-path>   (creates or replaces a shared-folder doc)
S=a988e2a2-16e8-48d8-8bab-f24f12f6faef
META=$(droid space doc get "$S" --path "$2" 2>/dev/null)
ID=$(printf '%s' "$META" | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{try{const j=JSON.parse(s);if(j.id)console.log(j.id+" "+j.version)}catch{}})')
if [ -n "$ID" ]; then
  set -- "$1" "$2" $ID
  droid space doc write "$S" "$2" --document-id "$3" --expected-version "$4" --file "$1" >/dev/null && echo "updated $2"
else
  droid space doc write "$S" "$2" --file "$1" >/dev/null && echo "created $2"
fi
