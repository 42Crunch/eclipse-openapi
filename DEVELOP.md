# OpenAPI (Swagger) Editor plugin for Eclipse

This is a repository for OpenAPI (Swagger) Editor plugin for Eclipse.

## Setup Equo

```bash
CD C:\Users\xxx\eclipse\eclipse-committers-2021-03-R-win32-x86_64\eclipse
eclipsec.exe  -application org.eclipse.equinox.p2.director -repository https://dl.equo.dev/middleware/1.2/repo -installIU com.equo.middleware.api,com.equo.middleware.ee.provider
```

## Build

1) Download all dependencies

```bash
cd openapi-plugin
mvn dependency:copy
cd ..
```

If build is failing, make sure to do a clean check out from the source control, to make sure old
versions of the libraries are not being picked up by the build.

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
