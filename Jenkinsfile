pipeline {
  agent {
    docker {
        image 'node:lts-bullseye-slim'
        args '-p 3000:3000'
    }
  }
  environment {
    CI = 'true'
    HOME = '.'
    npm_config_cache = 'npm-cache'
  }
  stages {
    stage('Install Packages') {
      steps {
        sh 'npm ci --cache'
        sh 'npm cache ls'
        sh 'npm cache verify'
      }
    }
    stage('Test and Build') {
      parallel {
        stage('Run Tests') {
          steps {
            sh 'npm run lint'
            sh 'npm run test:ci'
          }
        }
        stage('Create Build Artifacts') {
          steps {
            sh 'npm run build'
          }
        }
      }
    }

stage('Production') {
  steps {
    withAWS(region:'us-east-1',credentials:'nathan') {
    s3Delete(bucket: 'ssl-portfolio-customresourcestack-pi-s3bucketroot-q0dd16y5wq4z', path:'**/*')
    s3Upload(bucket: 'ssl-portfolio-customresourcestack-pi-s3bucketroot-q0dd16y5wq4z', workingDir:'build', includePathPattern:'**/*');
            }
          }
        }
    }
}