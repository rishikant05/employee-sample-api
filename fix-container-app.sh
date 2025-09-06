#!/bin/bash

echo "🔧 Fixing Azure Container App configuration..."

# Update the container app with correct ingress settings
az containerapp update \
  --name employee-api-env \
  --resource-group rg-employee-api \
  --ingress external \
  --target-port 3000 \
  --transport http \
  --set-env-vars PORT=3000 NODE_ENV=production \
  --cpu 0.25 \
  --memory 0.5Gi

echo "✅ Container App configuration updated!"

# Get the application URL
echo "🌐 Application URL:"
az containerapp show \
  --name employee-api-env \
  --resource-group rg-employee-api \
  --query properties.configuration.ingress.fqdn \
  --output tsv

echo "🧪 Test the health endpoint:"
APP_URL=$(az containerapp show --name employee-api-env --resource-group rg-employee-api --query properties.configuration.ingress.fqdn --output tsv)
echo "https://$APP_URL/health"
