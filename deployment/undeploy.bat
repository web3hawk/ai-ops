@echo off
echo ==========================================
echo  AI-Ops Kubernetes Undeployment Script
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

REM Parse command line arguments
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

echo Undeploying AI-Ops application...
echo Release Name: %RELEASE_NAME%
echo Namespace: %NAMESPACE%
echo.

REM Check if the release exists
helm list -n %NAMESPACE% | findstr /C:"%RELEASE_NAME%" >nul 2>&1
if %errorlevel% neq 0 (
    echo Warning: Helm release '%RELEASE_NAME%' not found in namespace '%NAMESPACE%'
    echo Available releases in namespace '%NAMESPACE%':
    helm list -n %NAMESPACE%
    echo.
    set /p choice="Do you want to continue anyway? (y/N): "
    if /i not "%choice%"=="y" (
        echo Operation cancelled.
        pause
        exit /b 0
    )
)

REM Uninstall using Helm
echo Running: helm uninstall %RELEASE_NAME% --namespace %NAMESPACE%
helm uninstall %RELEASE_NAME% --namespace %NAMESPACE%

if %errorlevel% equ 0 (
    echo.
    echo ==========================================
    echo  Undeployment Successful!
    echo ==========================================
    echo.
    echo The AI-Ops application has been removed from the cluster.
    echo.
    echo To verify removal:
    echo   kubectl get pods -n %NAMESPACE%
    echo   helm list -n %NAMESPACE%
    echo.
    set /p choice="Do you want to delete the namespace '%NAMESPACE%' as well? (y/N): "
    if /i "%choice%"=="y" (
        echo Deleting namespace %NAMESPACE%...
        kubectl delete namespace %NAMESPACE%
        if %errorlevel% equ 0 (
            echo Namespace %NAMESPACE% deleted successfully.
        ) else (
            echo Warning: Failed to delete namespace %NAMESPACE%
        )
    )
) else (
    echo.
    echo ==========================================
    echo  Undeployment Failed!
    echo ==========================================
    echo Please check the error messages above
)

pause
exit /b %errorlevel%

:help
echo Usage: undeploy.bat [OPTIONS]
echo.
echo Options:
echo   --release-name NAME    Set the Helm release name (default: ai-ops)
echo   --namespace NAMESPACE  Set the Kubernetes namespace (default: default)
echo   -h, --help            Show this help message
echo.
echo Examples:
echo   undeploy.bat
echo   undeploy.bat --release-name my-ai-ops --namespace production
echo.
pause
exit /b 0