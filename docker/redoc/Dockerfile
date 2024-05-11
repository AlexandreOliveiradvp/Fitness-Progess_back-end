FROM alpine:3.17.3

WORKDIR /spec

RUN apk add --update nodejs npm
RUN npm set progress=false && npm config set depth 0
RUN npm install -g @redocly/cli@latest

EXPOSE 80

CMD ["openapi", "preview-docs", "-p", "80","-h", "0.0.0.0", "openapi.yaml"]
