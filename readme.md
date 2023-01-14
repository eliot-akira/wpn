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

- Stop all processes: `docker stop $(docker ps -a -q)`

- Remove processes: `docker rm $(docker ps -a -q)`
  
- Remove all images: `docker rmi $(docker images -a -q)`

