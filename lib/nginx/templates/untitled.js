module.exports = `
server {
    listen 80;
    server_name meredith.seaba.enyosolutions.com;
    root /apps/meredith.seaba/dist;

    location / {
        proxy_set_header   X-Real-IP $remote_addr;
        proxy_set_header   Host      $http_host;
        proxy_pass         http://127.0.0.1:5008;
    }
}
`;
