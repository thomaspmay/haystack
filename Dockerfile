FROM node:12

WORKDIR /tom/src/app

COPY package*.json ./

RUN npm install
# RUN npm ci --only=production

COPY . .

# Builds NestJS NOT angular
RUN npm run build

EXPOSE 8080
CMD ["node","dist/main"]