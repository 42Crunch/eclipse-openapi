pipeline {
    agent any

    options {
        buildDiscarder(logRotator(numToKeepStr:'3'))
    }

    stages {
        stage('Checkout sources') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            agent {
                dockerfile {
                    filename 'Dockerfile'
	            additionalBuildArgs "--build-arg BUILD_TAG=${BUILD_TAG}"
                }
            }

            steps {
                sh 'cp /build/openapi-repository/target/openapi-repository-*.zip .'
                archiveArtifacts artifacts: 'openapi-repository-*.zip'
            }
        }
    }

    post {
        always {
            sh '''
              docker images --filter "label=jenkins.build.tag=${BUILD_TAG}"
            '''
            cleanWs()
        }
    }
}
