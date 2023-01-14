# WPNV - WordPress environment manager

Currently being rewritten, not ready for production use.

## Requires

- Node.js
- Docker and Docker Compose


## Commands

```sh
wpnv
wpnv start
wpnv stop
wpnv info
wpnv shell
wpnv import-db
wpnv export-db
```

## Notes

- Add watch mode to watch a folder of files and reload

- Rename config file to `wpnv.json`

- Add support for multiple sites 
- Add logic to detect if another instance is already running

- List Docker images: `docker image ls`
- Remove old images: 
  docker image prune
  docker image prune -a

- Stop all processes: `docker ps -a -q | xargs docker rm` or

  docker stop $(docker ps -a -q)
- Remove all images: `docker images -a -q | xargs docker rmi -f`

