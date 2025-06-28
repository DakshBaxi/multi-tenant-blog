 FROM node:23.8.0-alpine

ARG DATABASE_URL
ARG NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
ENV DATABASE_URL=${DATABASE_URL}
ENV NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=${NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}

WORKDIR ./app

COPY ./package.json ./package.json
RUN npm install
COPY . .

RUN npx prisma generate
RUN  npm run build

CMD [ "npm","start" ]
