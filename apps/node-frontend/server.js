const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    service: 'Dashboard-NodeJS-Frontend',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/v1/dashboard', (req, res) => {
  res.status(200).json({
    message: 'Welcome to PayMatrix Merchant Dashboard',
    activeMerchantCount: 1420
  });
});

app.listen(PORT, () => {
  console.log(`[PayMatrix-Core] Dashboard Frontend listening on port ${PORT}...`);
});