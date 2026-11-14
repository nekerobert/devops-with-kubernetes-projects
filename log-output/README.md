# Log Output

## Overview

Log Output is a Node.js application developed as part of the University of Helsinki DevOps with Kubernetes course.

The application generates a random UUID when it starts, stores it in memory, and outputs the UUID together with the current UTC timestamp every five seconds.

## Technologies

- Node.js 24
- Docker
- Kubernetes
- Docker Hub

## Running locally

Requirements: Node.js installed.

```bash
npm start
```

The application immediately outputs a timestamp and UUID, then repeats every five seconds.

## Building the Docker image

```bash
docker build -t nekerobert/log-output:1.1 .
```

## Publishing to Docker Hub

```bash
docker push nekerobert/log-output:1.1
```

## Deploying to Kubernetes

```bash
kubectl apply -f manifests/deployment.yaml
```

Check deployment status:

```bash
kubectl get deployments
kubectl get pods
```

## Viewing application logs

```bash
kubectl logs -f deployment/log-output
```
# ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
# ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

## Exercise 1.3 — Declarative approach

The Kubernetes Deployment is managed declaratively using:

`manifests/deployment.yaml`

Apply the configuration:

```bash
kubectl apply -f manifests/deployment.yaml

## Restart the Deployment:
kubectl rollout restart deployment/log-output
kubectl rollout status deployment/log-output

## Follow application logs:
kubectl logs -f deployment/log-output

## Exercise

- Course: University of Helsinki — DevOps with Kubernetes 2026
- Exercise: 1.1 — Getting started
- Exercise: 1.3 - Declarative approach
- Application: Log Output