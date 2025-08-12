# AI-Ops Kubernetes Deployment

This directory contains all the necessary files and scripts to deploy the AI-Ops application to a Kubernetes cluster using Helm.

## Directory Structure

```
deployment/
├── README.md                    # This documentation file
├── deploy.bat                   # Windows deployment script
├── deploy.sh                    # Linux/Mac deployment script
├── undeploy.bat                 # Windows undeployment script
├── undeploy.sh                  # Linux/Mac undeployment script
└── ai-ops-chart/                # Helm chart for AI-Ops
    ├── Chart.yaml               # Chart metadata
    ├── values.yaml              # Default configuration values
    ├── charts/                  # Chart dependencies
    └── templates/               # Kubernetes resource templates
        ├── _helpers.tpl         # Template helpers
        ├── deployment.yaml      # Application deployment
        ├── service.yaml         # Service definition
        ├── serviceaccount.yaml  # Service account
        └── ingress.yaml         # Ingress configuration
```

## Prerequisites

Before deploying the AI-Ops application, ensure you have the following tools installed:

1. **kubectl** - Kubernetes command-line tool
   - Installation: https://kubernetes.io/docs/tasks/tools/
   - Verify: `kubectl version --client`

2. **Helm** - Package manager for Kubernetes
   - Installation: https://helm.sh/docs/intro/install/
   - Verify: `helm version`

3. **Kubernetes Cluster Access**
   - Ensure your `kubectl` is configured to connect to your target cluster
   - Verify: `kubectl cluster-info`

## Quick Start

### For Windows Users

1. Open Command Prompt or PowerShell
2. Navigate to the deployment directory
3. Run the deployment script:
   ```cmd
   deploy.bat
   ```

### For Linux/Mac Users

1. Open a terminal
2. Navigate to the deployment directory
3. Make scripts executable (if needed):
   ```bash
   chmod +x deploy.sh undeploy.sh
   ```
4. Run the deployment script:
   ```bash
   ./deploy.sh
   ```

## Deployment Options

Both deployment scripts support the following options:

- `--release-name NAME`: Set the Helm release name (default: `ai-ops`)
- `--namespace NAMESPACE`: Set the Kubernetes namespace (default: `default`)
- `-h, --help`: Show help message

### Examples

```bash
# Deploy with default settings
./deploy.sh

# Deploy with custom release name and namespace
./deploy.sh --release-name my-ai-ops --namespace production

# Deploy to specific namespace
./deploy.sh --namespace development
```

## Configuration

The application can be configured by modifying the `ai-ops-chart/values.yaml` file or by providing custom values during deployment.

### Key Configuration Options

```yaml
# Application settings
replicaCount: 1
image:
  repository: ai-ops/frontend
  tag: latest
  pullPolicy: IfNotPresent

# Service configuration
service:
  type: ClusterIP
  port: 80
  targetPort: 3000

# Ingress configuration
ingress:
  enabled: false
  className: ""
  annotations: {}
  hosts:
    - host: ai-ops.local
      paths:
        - path: /
          pathType: Prefix
  tls: []

# Environment variables
app:
  env:
    - name: NODE_ENV
      value: "production"
    - name: API_URL
      value: "http://localhost:8080/api"
```

### Custom Values Deployment

You can provide custom values using a separate values file:

```bash
# Create custom values file
cp ai-ops-chart/values.yaml my-values.yaml

# Edit my-values.yaml with your configurations

# Deploy with custom values
helm upgrade --install ai-ops ai-ops-chart -f my-values.yaml --namespace your-namespace
```

## Accessing the Application

After successful deployment, you can access the application in several ways:

### 1. Port Forward (Quick Access)
```bash
kubectl port-forward svc/ai-ops 8080:80 -n default
```
Then open: http://localhost:8080

### 2. Using Ingress (Production)
If ingress is enabled, access via the configured hostname.

### 3. NodePort Service
Change service type to `NodePort` in values.yaml and access via `<node-ip>:<node-port>`.

## Monitoring and Troubleshooting

### Check Deployment Status
```bash
# Check pods
kubectl get pods -n default

# Check services
kubectl get services -n default

# Check ingress
kubectl get ingress -n default

# View logs
kubectl logs -l app.kubernetes.io/name=ai-ops -n default
```

### Helm Commands
```bash
# List releases
helm list -n default

# Get release status
helm status ai-ops -n default

# View release history
helm history ai-ops -n default
```

## Undeployment

To remove the AI-Ops application from your cluster:

### For Windows Users
```cmd
undeploy.bat
```

### For Linux/Mac Users
```bash
./undeploy.sh
```

The undeploy scripts will:
1. Remove the Helm release
2. Optionally delete the namespace (with user confirmation)
3. Display verification commands

## Security Considerations

1. **Image Security**: Ensure container images are from trusted sources
2. **Network Policies**: Consider implementing network policies for production
3. **RBAC**: The chart includes a service account for proper RBAC setup
4. **Secrets Management**: Store sensitive data in Kubernetes secrets
5. **Resource Limits**: Configure appropriate resource limits in values.yaml

## Production Deployment Checklist

- [ ] Update image repository and tag in values.yaml
- [ ] Configure appropriate resource limits and requests
- [ ] Enable and configure ingress with TLS
- [ ] Set up persistent volumes if needed
- [ ] Configure monitoring and logging
- [ ] Set up backup strategies
- [ ] Review security contexts and policies
- [ ] Configure horizontal pod autoscaling if needed
- [ ] Set up health checks (liveness/readiness probes)

## Support and Contributing

For issues, questions, or contributions, please contact the AI-Ops team or create an issue in the project repository.

## License

This deployment configuration is part of the AI-Ops project. Please refer to the main project license for details.