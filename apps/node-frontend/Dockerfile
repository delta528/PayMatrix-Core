FROM node:22-alpine
WORKDIR /app

# Copy dependency locks and install
COPY package*.json ./
RUN npm ci --only=production

# Copy application source
COPY server.js .

EXPOSE 3000

# Security Hardening: Use non-root node user
USER node

CMD ["node", "server.js"]