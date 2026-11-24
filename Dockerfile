FROM maven:3.9.9-eclipse-temurin-17

ARG BUILD_TAG
ARG BRANCH_NAME
LABEL jenkins.build.tag="${BUILD_TAG}"

RUN curl -sSfL https://raw.githubusercontent.com/anchore/syft/main/install.sh | sh -s -- -b /usr/local/bin

WORKDIR /build
COPY . /build

# Generate SPDX report and count total lines of code
RUN syft -o spdx-json . > spdx-report.json
RUN find /build -name '*.java' -print0 | xargs -0 cat | wc -l > total-lines.txt

# Non-master builds get an OSGi qualifier, e.g. 5.12.0.build-20261124120000
RUN if [ -n "$BRANCH_NAME" ] && [ "$BRANCH_NAME" != "master" ]; then \
      BASE_VERSION=`sed -n 's:.*<version>\(.*\)</version>.*:\1:p' pom.xml | head -1`; \
      mvn org.eclipse.tycho:tycho-versions-plugin:set-version -DnewVersion=$BASE_VERSION.build-`date +"%Y%m%d%H%M%S"` -Declipse.p2.mirrors=false; \
    fi

# Build
RUN cd openapi-plugin && mvn dependency:copy -Declipse.p2.mirrors=false
RUN mvn install -Declipse.p2.mirrors=false
