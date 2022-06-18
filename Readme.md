# Base Backend Node Structure


## Setup


### Clone the project and install dependencies

```bash
git clone https://github.com/eduardo-js/node-ts-api.git
cd ./node-ts-api && pnpm i
```

### Docker

```dockerfile
docker pull postgres:14.3-alpine
docker run --name postgresql -e POSTGRES_USER=dev -e POSTGRES_PASSWORD=dev -p 5432:5432 postgres:14.3-alpine
```

### Populate *.env* with the following information:

```typescript
DATABASE_CONNECTION_STRING="postgresql://dev:dev@localhost:5432/dev"
PORT=3000
```

### Run the server 
```bash
pnpm dev
```