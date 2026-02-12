FROM ghcr.io/berriai/litellm:main-stable

# Add custom config into the image
COPY ./omar-ai-llm-proxy/litellm-config.yaml /app/config.yaml

CMD ["--config", "/app/config.yaml", "--port", "4000"]