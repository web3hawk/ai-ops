#!/bin/bash

echo "=========================================="
echo " AI-Ops Kubernetes Undeployment Script"
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

# Function to show help
show_help() {
    echo "Usage: undeploy.sh [OPTIONS]"
    echo
    echo "Options:"
    echo "  --release-name NAME    Set the Helm release name (default: ai-ops)"
    echo "  --namespace NAMESPACE  Set the Kubernetes namespace (default: default)"
    echo "  -h, --help            Show this help message"
    echo
    echo "Examples:"
    echo "  ./undeploy.sh"
    echo "  ./undeploy.sh --release-name my-ai-ops --namespace production"
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

echo "Undeploying AI-Ops application..."
echo "Release Name: $RELEASE_NAME"
echo "Namespace: $NAMESPACE"
echo

# Check if the release exists
if ! helm list -n "$NAMESPACE" | grep -q "$RELEASE_NAME"; then
    echo "Warning: Helm release '$RELEASE_NAME' not found in namespace '$NAMESPACE'"
    echo "Available releases in namespace '$NAMESPACE':"
    helm list -n "$NAMESPACE"
    echo
    read -p "Do you want to continue anyway? (y/N): " choice
    case "$choice" in
        y|Y ) ;;
        * ) echo "Operation cancelled."; exit 0;;
    esac
fi

# Uninstall using Helm
echo "Running: helm uninstall $RELEASE_NAME --namespace $NAMESPACE"
if helm uninstall "$RELEASE_NAME" --namespace "$NAMESPACE"; then
    echo
    echo "=========================================="
    echo " Undeployment Successful!"
    echo "=========================================="
    echo
    echo "The AI-Ops application has been removed from the cluster."
    echo
    echo "To verify removal:"
    echo "  kubectl get pods -n $NAMESPACE"
    echo "  helm list -n $NAMESPACE"
    echo
    read -p "Do you want to delete the namespace '$NAMESPACE' as well? (y/N): " choice
    case "$choice" in
        y|Y )
            echo "Deleting namespace $NAMESPACE..."
            if kubectl delete namespace "$NAMESPACE"; then
                echo "Namespace $NAMESPACE deleted successfully."
            else
                echo "Warning: Failed to delete namespace $NAMESPACE"
            fi
            ;;
    esac
    exit 0
else
    echo
    echo "=========================================="
    echo " Undeployment Failed!"
    echo "=========================================="
    echo "Please check the error messages above"
    exit 1
fi