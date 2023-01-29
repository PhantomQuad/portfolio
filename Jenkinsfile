pipeline {
    agent {
        label 'npm'
    }
    stages {
        stage('Cache') {
            steps {
                script {
                    def npmCacheDir = "${env.WORKSPACE}/.npm"
                    sh "mkdir -p ${npmCacheDir}"
                    sh "cp package-lock.json ${npmCacheDir}"
                }
            }
        }
        stage('Dependencies') {
            steps {
                sh 'npm ci --cache ${npmCacheDir}'
            }
        }
        stage('Show cache') {
            steps {
                sh 'npm cache ls'
                sh 'npm cache verify'
            }
        }
        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }
        stage('Unit Tests') {
            steps {
                sh 'npm run test:ci'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Artifacts') {
            steps {
                script {
                    def artifactsDir = "${env.WORKSPACE}/build"
                    sh "mkdir -p ${artifactsDir}"
                    sh "cp -r build/* ${artifactsDir}"
                }
            }
        }
        stage('Deploy') {
            steps {
                // withAWS(credentials: 'Phantom Github', region: 'us-east-1') {
                //     sh "aws s3 cp ${env.WORKSPACE}/build s3://ssl-portfolio-customresourcestack-pi-s3bucketroot-q0dd16y5wq4z --recursive"
                // }
                echo 'Test Completed...'

            }
        }
    }
}
