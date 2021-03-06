# Full Stack Web Development - Lab 6: Testing and Pull Requesting

## Setup

* Pair up (or three up if an odd number)
* Nominate a primary code owner
* That person forks this repository to their own GitHub account
  * And then gives access to that repository to their teammates

## Exercise

* Everybody clone that primary repository to your machine
* Run npm test
* Setup an account with [Travis CI](https://travis-ci.org) and direct it to your repository
* Import one of your authentication systems (or a combination of more than one, or start from scratch if you would prefer)
* Run npm test
* Commit the change and push it to git
* Watch what Travis does with it
* Write up a couple test cases (in plain English)
* One person translates those test cases into actual tests, the other should work on the server implementation of those cases.
* Tester commits the tests to git, and push to the repository
* Developer pulls from git and incorporates (manually or via git) the server code changes
* Run npm test, commit, and push
* Repeat until you can no longer come up with additional test cases
* Finally, submit a pull request to the original Betamore repository with your fancy new code and tests!
