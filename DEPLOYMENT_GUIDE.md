# NestJS Employee API - Azure Deployment Guide

## Project Overview
- **API Type**: Employee Management API
- **Framework**: NestJS with TypeScript
- **Authentication**: Removed (for simplicity and APIM testing)
- **Documentation**: Swagger UI at `/api-docs`
- **Root Path**: Redirects to Swagger documentation

## API Endpoints
1. `GET /employee/list` - Get all employees (5 dummy records)
2. `GET /employee/{id}` - Get employee by ID
3. `POST /employee` - Create new employee

## Azure Resources Configuration

### Resource Group
- **Name**: `rg-employee-api`
- **Location**: `Central India`

### Container Registry
- **Name**: `cremployeeapi`
- **URL**: `cremployeeapi.azurecr.io`
- **SKU**: Basic
- **Admin User**: Enabled (required for GitHub Actions)

### Container Apps Environment
- **Name**: `employee-api-env`
- **Location**: `Central India`

### Container App
- **Name**: `employee-api-env`
- **Target Port**: `3000`
- **Ingress**: HTTP, External, Accepting traffic from anywhere
- **Environment Variables**:
  - `PORT=3000`
  - `NODE_ENV=production`

## Files Created

### Dockerfile
```dockerfile
# Multi-stage Node.js 20-alpine build
# Production optimized with non-root user
# Exposes port 3000
# Health check included
```

### .dockerignore
```
# Excludes node_modules, tests, logs, IDE files
# Optimizes Docker build context
```

### GitHub Actions Workflow
```yaml
# File: .github/workflows/azure-deploy.yml
# Triggers: Push to main branch
# Steps: Build → Test → Docker Build → Push to ACR → Deploy to Container Apps
```

## GitHub Secrets Required

### AZURE_CREDENTIALS
```json
{
  "clientId": "service-principal-client-id",
  "clientSecret": "service-principal-secret",
  "subscriptionId": "azure-subscription-id",
  "tenantId": "azure-tenant-id"
}
```

### REGISTRY_USERNAME
- From Container Registry → Access Keys → Username

### REGISTRY_PASSWORD
- From Container Registry → Access Keys → Password

## Service Principal Setup
1. Azure Portal → App registrations → New registration
2. Name: `employee-api-github`
3. Create client secret (24 months expiry)
4. Assign "Contributor" role to resource group

## Deployment Process
1. **Code Push**: Push to main branch
2. **GitHub Actions**: Automatically triggered
3. **Build**: Install deps, run tests, build app
4. **Docker**: Build and push image to ACR
5. **Deploy**: Update Container App with new image
6. **Access**: Via generated Azure Container Apps URL

## Key Configuration Details
- **Runtime**: Node.js 20
- **Build**: Multi-stage Docker build for optimization
- **Scaling**: Auto-scaling with consumption pricing
- **Security**: Non-root user in container
- **Monitoring**: Built-in Azure Container Apps monitoring
- **SSL**: Automatic HTTPS at Azure edge

## Troubleshooting
- **Image not found error**: Normal before first deployment
- **403 Git error**: Need own GitHub repository (not forked)
- **Port issues**: Ensure target port matches container port (3000)

## Testing After Deployment
- Root URL: Redirects to Swagger
- `/api-docs`: Interactive API documentation
- `/employee/list`: Returns 5 dummy employees
- `/employee/1`: Returns specific employee
- `POST /employee`: Create new employee

## Cost Optimization
- Uses consumption pricing (pay per request)
- Scales to zero when not in use
- Basic Container Registry SKU
- Single environment for cost efficiency

## Next Steps for Production
1. Add environment-specific configurations
2. Implement proper database integration
3. Add authentication/authorization
4. Set up monitoring and alerting
5. Configure custom domains
6. Implement proper logging strategy
