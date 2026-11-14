
# Todo App

A simple Node.js HTTP web server created for Exercise 1.2 of the University of Helsinki DevOps with Kubernetes 2026 course.

## Requirements

- Node.js 24
- Docker
- Kubernetes cluster
- kubectl

## Run locally

Install dependencies (there are no external dependencies):

```bash
npm start
```

The server listens on port `3000` by default.

To specify a different port, set the `PORT` environment variable.

For example, in Git Bash:

```bash
PORT=8081 npm start
```

Expected startup message:

```text
Server started in port 8081
```

Open the following URL in your browser or use curl:

```text
http://localhost:8081
```

Expected response:

```text
Todo app is running
```

## Build the Docker image

From the `todo-app` directory, run:

```bash
docker build -t nekerobert/todo-app:1.2 .
```

## Run the Docker container locally

```bash
docker run --rm -d \
  --name todo-app-test \
  -p 8082:8080 \
  -e PORT=8080 \
  nekerobert/todo-app:1.2
```

Check the container logs:

```bash
docker logs todo-app-test
```

Test the application:

```bash
curl http://localhost:8082
```

Expected response:

```text
Todo app is running
```

Stop the test container:

```bash
docker stop todo-app-test
```

## Push the Docker image

Push the image to Docker Hub:

```bash
docker push nekerobert/todo-app:1.2
```

Docker Hub image:

`nekerobert/todo-app:1.2`

## Deploy to Kubernetes

Apply the Kubernetes Deployment manifest:

```bash
kubectl apply -f manifests/deployment.yaml
```

Check the Deployment:

```bash
kubectl get deployment todo-app
```

Check the Pod:

```bash
kubectl get pods -l app=todo-app
```

Check the application logs:

```bash
kubectl logs deployment/todo-app
```

Verify the configured port inside the container:

```bash
kubectl exec deployment/todo-app -- printenv PORT
```

Expected output:

```text
8080
```

## Kubernetes configuration

The Kubernetes Deployment manifest is located at:

`manifests/deployment.yaml`

Apply the configuration:

```bash
kubectl apply -f manifests/deployment.yaml
```

Restart the Deployment:
````bash
kubectl rollout restart deployment/log-output
kubectl rollout status deployment/log-output
````

Follow application logs:
````bash
kubectl logs -f deployment/todo-app
````

The Deployment runs one replica of the Todo App.

The application uses port `8080` inside the Kubernetes container, configured through the `PORT` environment variable.

No Kubernetes Service or Ingress is configured in this exercise. Network access will be configured in a later exercise as specified by the course instructions.

## Project structure

```text
todo-app/
├── README.md
├── app.js
├── package.json
├── Dockerfile
└── manifests/
    └── deployment.yaml
```

## Technologies used

- Node.js 24
- JavaScript
- Docker
- Docker Hub
- Kubernetes
- k3d / K3s

## Exercise information

- **Course:** University of Helsinki — DevOps with Kubernetes 2026
- **Exercise:** 1.2 — The project, step 1
- **Exercise:** 1.4 — The project, step 2
- **Application:** Todo App
- **Docker image:** `nekerobert/todo-app:1.2`