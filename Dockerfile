ARG BUILD_TAG

LABEL jenkins.build.tag="${BUILD_TAG}"

FROM maven:3.9.9-eclipse-temurin-17

RUN curl -sSfL https://raw.githubusercontent.com/anchore/syft/main/install.sh | sh -s -- -b /usr/local/bin

WORKDIR /build
COPY . /build

# Generate SPDX report and count total lines of code
RUN syft -o spdx-json . > spdx-report.json
RUN find /build -name '*.java' -print0 | xargs -0 cat | wc -l > total-lines.txt

# Build
RUN cd openapi-plugin && mvn dependency:copy -Declipse.p2.mirrors=false
RUN mvn install -Declipse.p2.mirrors=false
