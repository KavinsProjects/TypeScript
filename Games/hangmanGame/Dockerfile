#-- Useing node and apline linux as build tool
FROM node:20-alpine AS build

#-- selecting the root folder
WORKDIR /app


  
#-- copyeing the nesscaey installed dependencies react and more
COPY package.json package-lock.json ./
RUN npm ci

##copy all file from dir
COPY . .
RUN npm run build
# it build help to run 

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]