pipeline {
    agent any

    options {
        buildDiscarder(logRotator(numToKeepStr:'5'))
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
                    reuseNode true
                }
            }

            steps {
                sh 'cp /build/openapi-repository/target/openapi-repository-*.zip .'
            }
        }

        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: 'openapi-repository-*.zip'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
