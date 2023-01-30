pipeline {
  agent {
    docker {
      image 'node:lts-bullseye-slim'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('Install Dependencies') {
      steps {
        sh 'npm ci --cache'
        sh 'npm cache ls'
        sh 'npm cache verify'
      }
    }

    stage('Test') {
      steps {
        sh "chmod +x -R ${env.WORKSPACE}"
        sh './jenkins/scripts/test.sh'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

  }
}