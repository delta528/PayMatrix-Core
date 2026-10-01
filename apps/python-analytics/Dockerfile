# Stage 1: Dependency builder
FROM python:3.12-alpine AS builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --prefix=/install --no-cache-dir -r requirements.txt

# Stage 2: Runtime image
FROM python:3.12-alpine
WORKDIR /app

# Copy installed dependencies from builder
COPY --from=builder /install /usr/local
COPY app.py .

# Hardening: Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser:appgroup

EXPOSE 5000

CMD ["python", "app.py"]