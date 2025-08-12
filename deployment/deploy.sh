#!/bin/bash

echo "=========================================="
echo " AI-Ops Kubernetes Deployment Script"
echo "=========================================="
echo

# Check if Helm is installed
if ! command -v helm &> /dev/null; then
    echo "Error: Helm is not installed or not in PATH"
    echo "Please install Helm first: https://helm.sh/docs/intro/install/"
    exit 1
fi

# Check if kubectl is available
if ! kubectl cluster-info &> /dev/null; then
    echo "Error: Unable to connect to Kubernetes cluster"
    echo "Please check your kubectl configuration"
    exit 1
fi

# Set default values
RELEASE_NAME="ai-ops"
NAMESPACE="default"
CHART_PATH="./ai-ops-chart"

# Function to show help
show_help() {
    echo "Usage: deploy.sh [OPTIONS]"
    echo
    echo "Options:"
    echo "  --release-name NAME    Set the Helm release name (default: ai-ops)"
    echo "  --namespace NAMESPACE  Set the Kubernetes namespace (default: default)"
    echo "  -h, --help            Show this help message"
    echo
    echo "Examples:"
    echo "  ./deploy.sh"
    echo "  ./deploy.sh --release-name my-ai-ops --namespace production"
    echo
    exit 0
}

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --release-name)
            RELEASE_NAME="$2"
            shift 2
            ;;
        --namespace)
            NAMESPACE="$2"
            shift 2
            ;;
        -h|--help)
            show_help
            ;;
        *)
            echo "Unknown option: $1"
            show_help
            ;;
    esac
done

echo "Deploying AI-Ops application..."
echo "Release Name: $RELEASE_NAME"
echo "Namespace: $NAMESPACE"
echo "Chart Path: $CHART_PATH"
echo

# Create namespace if it doesn't exist
kubectl create namespace "$NAMESPACE" &> /dev/null || true

# Deploy using Helm
echo "Running: helm upgrade --install $RELEASE_NAME $CHART_PATH --namespace $NAMESPACE"
if helm upgrade --install "$RELEASE_NAME" "$CHART_PATH" --namespace "$NAMESPACE"; then
    echo
    echo "=========================================="
    echo " Deployment Successful!"
    echo "=========================================="
    echo
    echo "To check the status:"
    echo "  kubectl get pods -n $NAMESPACE"
    echo "  kubectl get services -n $NAMESPACE"
    echo
    echo "To access the application:"
    echo "  kubectl port-forward svc/$RELEASE_NAME 8080:80 -n $NAMESPACE"
    echo "  Then open: http://localhost:8080"
    echo
    exit 0
else
    echo
    echo "=========================================="
    echo " Deployment Failed!"
    echo "=========================================="
    echo "Please check the error messages above"
    exit 1
fi