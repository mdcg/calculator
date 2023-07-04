from python:3.9.16-alpine3.17

RUN mkdir /app

WORKDIR /app

COPY ./assets /app/assets/
COPY ./index.html /app/

CMD python -m http.server 8888

EXPOSE 8888
