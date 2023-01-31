pipelineJob("Deploy-Portfolio"){
    description("Deploys portfolio site to AWS")
    logRotator {
        daysToKeep(5)
        numToKeep(20)
    }
    properties {
        disableConcurrentBuilds()
    }
    properties {
        pipelineTriggers {
            triggers {
                scm("* * * * *"){
                    ignorePostCommitHooks(ignorePostCommitHooks = false)
                }
            }
        }
    }
    parameters {
      stringParam("UNIQUE_ANIMAL_IDENTIFIER", defaultValue = "portfolioaws", description = "Unique identifier!")
    }
    definition {
    cpsScm {
      scm {
        git {
          branch("development")
          remote {
            credentials("${GIT_USER}")
            url("${GIT_URL}")
          }
        }
      }
      scriptPath('./jenkins/vanilla/Jenkinsfile')
    }
  }
}
pipelineJob("Destroy-Portfolio"){
    description("Destroys portfolio site on AWS")
    logRotator {
        daysToKeep(5)
        numToKeep(20)
    }
    properties {
        disableConcurrentBuilds()
    }
    parameters {
      stringParam("UNIQUE_ANIMAL_IDENTIFIER", defaultValue = "portfolioaws", description = "Unique identifier!")
    }
    definition {
    cpsScm {
      scm {
        git {
          branch("development")
          remote {
            credentials("${GIT_USER}")
            url("${GIT_URL}")
          }
        }
      }
      scriptPath('destroy.Jenkinsfile')
    }
  }
}