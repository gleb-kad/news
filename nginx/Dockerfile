# Use an official Nginx image as the base
FROM nginx

# Copy your custom Nginx configuration file to the container
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the port that Nginx will listen on
EXPOSE 70

# ENTRYPOINT [ "/docker-entrypoint.sh" ]

CMD [ "nginx", "-g", "daemon off;" ]