# OpenAPI (Swagger) Editor plugin for Eclipse

This is a repository for OpenAPI (Swagger) Editor plugin for Eclipse.

## Build

1) Download all dependencies

```bash
cd openapi-plugin
mvn dependency:copy
cd ..
```

2) Update current version

```bash
mvn org.eclipse.tycho:tycho-versions-plugin:set-version -DnewVersion=1.0.2
```

3) Build

```bash
mvn clean install
```
