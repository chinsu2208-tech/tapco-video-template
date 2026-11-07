#!/usr/bin/env bash
# Tải kho b-roll Tonelux từ Drive về public/tlv/lib (chạy trong thư mục tonelux/)
set -e
mkdir -p public/tlv/lib /tmp/tlv-zip
for k in s2 v2; do
  id=$(python3 -c "import json;print(json.load(open('clips.json'))['zips']['$k'])")
  [ -d public/tlv/lib/$k ] && continue
  curl -sL -o /tmp/tlv-zip/$k.zip "https://drive.usercontent.google.com/download?id=$id&export=download&confirm=t"
  unzip -oq /tmp/tlv-zip/$k.zip -d public/tlv/lib/$k
done
ls public/tlv/lib/*/ | head
