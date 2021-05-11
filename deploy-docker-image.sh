docker image prune -f
docker stop portfolio-pwa
docker rm portfolio-pwa
docker run -dit -p 8087:80 --name portfolio-pwa --restart=always portfolio-pwa
