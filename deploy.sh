#!/bin/bash

# 检查是否提供了版本号
if [ -z "$1" ]; then
  echo "Usage: $0 <version>"
  exit 1
fi

EASY_CHAT_HOME_VERSION=$1
IMAGE_NAME="easychat-home"
DOCKERFILE_PATH="Dockerfile"
COMPOSE_FILE="docker-compose.yml"

echo "Building Docker image ${IMAGE_NAME}:${EASY_CHAT_HOME_VERSION}..."
docker build -t "${IMAGE_NAME}:${EASY_CHAT_HOME_VERSION}" -f "$DOCKERFILE_PATH" .

echo "Updating Docker Compose file with image version ${EASY_CHAT_HOME_VERSION}..."
export EASY_CHAT_HOME_VERSION=${EASY_CHAT_HOME_VERSION}

echo "Starting Docker Compose..."
docker-compose up -d

echo "Deployment completed."
