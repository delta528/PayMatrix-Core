# PayMatrix-Core 💳

An enterprise-grade, polyglot cloud-native platform designed for modern high-concurrency financial operations.

## Architecture & Microservices

| Service | Runtime / Language | Purpose | Port |
| :--- | :--- | :--- | :--- |
| **`java-backend`** | Java 21 / Spring Boot | Core Payment Ledger Engine | `8080` |
| **`go-microservice`** | Go 1.22 | Low-Latency Fraud Detection Gateway | `8080` |
| **`node-frontend`** | Node.js 22 / Express | Merchant & Customer Dashboard | `3000` |
| **`python-analytics`** | Python 3.12 / Flask | Transaction Risk Analytics Engine | `5000` |

## CI/CD Pipeline Workflow

`GitHub` ➔ `Webhook` ➔ `Jenkins` ➔ `SonarQube & SCA` ➔ `Kaniko Build` ➔ `Trivy Scan` ➔ `AWS ECR` ➔ `ArgoCD / EKS`

---
*Created as part of the PayMatrix-Core enterprise platform setup.*