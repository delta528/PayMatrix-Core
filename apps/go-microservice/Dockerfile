# Stage 1: Build binary
FROM golang:1.22-alpine AS builder
WORKDIR /app
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o fraud-detector main.go

# Stage 2: Minimal Distroless-like Runtime Container
FROM scratch
COPY --from=builder /app/fraud-detector /fraud-detector
EXPOSE 8080
ENTRYPOINT ["/fraud-detector"]