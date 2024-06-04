# db-lib-database-mgmt
The database managament for the Database Libray PoC


## Create a new version

Build a new dist 
``` 
pnpm lib:build 
```
Commit and Push the new version, then tag
```
git tag -a "vX.X.X" -m "My new Release"
```

## Migrate Database

Generate a new .sql file with the migration
``` 
pnpm db:gen 
```

Apply the migration to the database
``` 
pnpm db:migrate
```