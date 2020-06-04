# FROM 017357459259.dkr.ecr.ap-south-1.amazonaws.com/crimson_base:v3

COPY dockerconfig/trains.conf /etc/nginx/conf.d/trains.conf
COPY dockerconfig/nginx.conf /etc/nginx/nginx.conf
COPY dockerconfig/supervisord.conf /etc/supervisord.conf
COPY dockerconfig/supervisord /etc/rc.d/init.d/
COPY dockerconfig/services.conf /etc/supervisord.d/services.conf

WORKDIR /usr/local/goibibo/crimson

ARG BUILD_ENV

ENV BASE_DIR=/usr/local/goibibo/crimson \
    BUILD_CONFIG_PATH=/usr/local/goibibo/crimson/configs/build/${BUILD_ENV}/build_env.js

RUN \
  chmod 755 /etc/rc.d/init.d/supervisord


COPY ./ /usr/local/goibibo/crimson

RUN npm install && \
    npm run build-generic

CMD ["/usr/bin/supervisord", "-n"]
