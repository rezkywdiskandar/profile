# ==========================================
# Production Web Server (Nginx Alpine)
# ==========================================
FROM nginx:alpine

# Remove default configuration and apply custom SPA Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy production distribution assets to Nginx web root
COPY dist /usr/share/nginx/html

# Expose standard HTTP port
EXPOSE 80

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
