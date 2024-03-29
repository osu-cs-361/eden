# Eden
Eden is a plant care app that shows you a dashboard of your plants, giving you status updates at a glance.

## Build and Run Eden

The simplest way to build and run Eden is with Docker.

To run CourseSignal in development mode, open a terminal in the docker directory and run

```bash
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
```

This brings up docker containers corresponding to the various Eden services.

### Database

On first run, the database is populated using the SQL scripts in the `database/setup` directory. In development mode, the Eden tables are written to the `test` database. If these scripts are changed in any way, the container should be rebuilt by running the command `docker-compose build` from the `docker` directory.

The container is set up to mirror the contents of `/var/lib/mysql` onto the host filesystem in the `database/data` directory. To reset the database and run the setup scripts again, stop `docker-compose`, delete the `database/data` directory, and run `docker-compose` again.

To explore the database in the command line, while `docker-compose` is running, open another terminal and run

```bash
docker exec -it (docker ps --filter "label=container_name=eden_db" -q) mysql
```
