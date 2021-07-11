FROM httpd:2.4-alpine
COPY ./dist/app1/ /usr/local/apache2/htdocs/

