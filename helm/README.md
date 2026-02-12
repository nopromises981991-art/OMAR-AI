# OMAR AI Helm Charts

This directory contains Helm charts for deploying OMAR AI on Kubernetes.

## Documentation

For complete deployment instructions, see:
**[Helm Deployment Guide](https://docs.omar-ai.ai/deployment/helm)**

## Quick Start

```bash
# Clone repository
git clone https://github.com/omar-ai-ai/omar-ai.git
cd omar-ai

# Create values.yaml with your API key(s)
cat > values.yaml <<EOF
omar-ai-agent:
  apiKeys:
    anthropic:
      value: "sk-ant-your-key-here"
EOF

# Install
helm install omar-ai ./helm --namespace omar-ai --create-namespace -f values.yaml

# Access
kubectl port-forward -n omar-ai svc/omar-ai-ui 9992:9992
```

Access at: http://localhost:9992

## Structure

```
helm/
├── Chart.yaml              # Main chart
├── values.yaml             # Default values
├── values-proxy.yaml       # LiteLLM proxy configuration
├── templates/              # Kubernetes templates
└── charts/                 # Subcharts
    ├── omar-ai-desktop/    # Desktop VNC service
    ├── omar-ai-agent/      # Backend API service
    ├── omar-ai-ui/         # Frontend UI service
    ├── omar-ai-llm-proxy/  # Optional LiteLLM proxy
    └── postgresql/         # PostgreSQL database
```