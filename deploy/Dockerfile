FROM nginx:1.13-alpine

COPY dist/ /dist/
COPY nginx.conf.template /etc/nginx/nginx.conf
VOLUME /var/log/nginx
ENV TZ=Asia/Hong_Kong
RUN ls dist
RUN echo "https://mirrors.aliyun.com/alpine/v3.5/main" >/etc/apk/repositories \
        && echo "https://mirrors.aliyun.com/alpine/v3.5/community" >>/etc/apk/repositories \
        && apk add --update tzdata \
        && rm -rf /var/cache/apk/* \
        && ln -snf /usr/share/zoneinfo/$TZ /etc/localtime \
        && echo $TZ > /etc/timezone
