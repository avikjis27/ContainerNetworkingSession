FROM node:alpine
ENV TYPE today
ENV PORT 5000
COPY package.json ./
COPY package-lock.json ./
RUN npm install
ADD index.js ./
EXPOSE ${PORT}/tcp
CMD [ "node", "index.js" ]