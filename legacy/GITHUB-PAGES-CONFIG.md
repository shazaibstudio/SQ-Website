# GitHub Pages Configuration for SQ Interactive
# Note: GitHub Pages doesn't support .htaccess files
# This file documents the DNS and redirect setup

## DNS Configuration (GoDaddy):
# A Records:
# @ -> 185.199.108.153
# @ -> 185.199.109.153  
# @ -> 185.199.110.153
# @ -> 185.199.111.153

# CNAME Record:
# www -> your-username.github.io

## GitHub Pages Settings:
# Repository: SQ-Website
# Branch: main
# Custom domain: www.sqinteractive.com
# Enforce HTTPS: Enabled

## Redirects handled by GitHub Pages:
# sqinteractive.com -> www.sqinteractive.com (automatic)
# http -> https (automatic when "Enforce HTTPS" is enabled)

## File naming for GitHub Pages:
# Use hyphens instead of spaces in filenames
# GitHub Pages serves files directly without URL rewriting