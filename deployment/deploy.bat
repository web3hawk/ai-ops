@echo off
echo ==========================================
echo  AI-Ops Kubernetes Deployment Script
echo ==========================================
echo.

REM Check if Helm is installed
helm version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Helm is not installed or not in PATH
    echo Please install Helm first: https://helm.sh/docs/intro/install/
    pause
    exit /b 1
)

REM Check if kubectl is available
kubectl cluster-info >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Unable to connect to Kubernetes cluster
    echo Please check your kubectl configuration
    pause
    exit /b 1
)

REM Set default values
set RELEASE_NAME=ai-ops
set NAMESPACE=default
set CHART_PATH=.\ai-ops-chart

REM Parse command line arguments
if "%1"=="" goto :deploy
if "%1"=="--help" goto :help
if "%1"=="-h" goto :help
if "%1"=="--release-name" (
    set RELEASE_NAME=%2
    shift
    shift
)
if "%1"=="--namespace" (
    set NAMESPACE=%2
    shift
    shift
)

:deploy
echo Deploying AI-Ops application...
echo Release Name: %RELEASE_NAME%
echo Namespace: %NAMESPACE%
echo Chart Path: %CHART_PATH%
echo.

REM Create namespace if it doesn't exist
kubectl create namespace %NAMESPACE% >nul 2>&1

REM Deploy using Helm
echo Running: helm upgrade --install %RELEASE_NAME% %CHART_PATH% --namespace %NAMESPACE%
helm upgrade --install %RELEASE_NAME% %CHART_PATH% --namespace %NAMESPACE%

if %errorlevel% equ 0 (
    echo.
    echo ==========================================
    echo  Deployment Successful!
    echo ==========================================
    echo.
    echo To check the status:
    echo   kubectl get pods -n %NAMESPACE%
    echo   kubectl get services -n %NAMESPACE%
    echo.
    echo To access the application:
    echo   kubectl port-forward svc/%RELEASE_NAME% 8080:80 -n %NAMESPACE%
    echo   Then open: http://localhost:8080
    echo.
) else (
    echo.
    echo ==========================================
    echo  Deployment Failed!
    echo ==========================================
    echo Please check the error messages above
)

pause
exit /b %errorlevel%

:help
echo Usage: deploy.bat [OPTIONS]
echo.
echo Options:
echo   --release-name NAME    Set the Helm release name (default: ai-ops)
echo   --namespace NAMESPACE  Set the Kubernetes namespace (default: default)
echo   -h, --help            Show this help message
echo.
echo Examples:
echo   deploy.bat
echo   deploy.bat --release-name my-ai-ops --namespace production
echo.
pause
exit /b 0