# OpenAPI (Swagger) Editor plugin for Eclipse

This is a repository for OpenAPI (Swagger) Editor plugin for Eclipse.

## Build

1) Download all dependencies

```bash
cd openapi-plugin
mvn dependency:copy
cd ..
```

2) Test

```bash
cd openapi-plugin
mvn test
cd ..
```

3) Update current version

```bash
mvn org.eclipse.tycho:tycho-versions-plugin:set-version -DnewVersion=1.0.2
```

4) Build

```bash
mvn clean install
```
