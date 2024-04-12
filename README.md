# PasswordGenerator Using Angular

[![Angular testing and build](https://github.com/Konadu-Akwasi-Akuoko/password-generator-angular/actions/workflows/angular-test.yml/badge.svg)](https://github.com/Konadu-Akwasi-Akuoko/password-generator-angular/actions/workflows/angular-test.yml)

## Table Of Contents

1. [Introduction](#introduction)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Credits](#credits)
6. [CI/CD](#cicd)
7. [Contributing](#contributing)
8. [Testing](#testing)
9. [License](#license)

## Introduction

This is a simple password generator application built using Angular. The application generates a random password based on the user's input. The user can specify the length of the password and the characters to include in the password. To view the deployed application, go to [password-generator.konadu.dev](https://password-generator.konadu.dev/).

## Technologies

The application was built using the following technologies:

- Angular
- TypeScript
- HTML
- CSS

## Installation

To install the application, follow the steps below:

1. Clone the repository using the command `git clone https://github.com/Konadu-Akwasi-Akuoko/password-generator-angular.git`
2. Change into the project directory using the command `cd password-generator-angular`
3. Install the dependencies using the command `pnpm install`
4. Start the application using the command `ng serve`
5. Open your browser and navigate to `http://localhost:4200`

## Usage

To use the application, follow the steps below:

1. Select the length of the password you want to generate
2. Check the checkboxes for the characters you want to include in the password
3. Click the `Generate Password` button to generate the password
4. Click the `Copy Password` button to copy the generated password to the clipboard

## Credits

Most algorithms used to generate the password and check the strength of the password were adapted from the following sources:

- [Password Generator Algorithm](https://stackoverflow.com/a/26528271/13107427): I adapted this algorithm on StackOverflow to generate the password, and it relies on the `crypto` module in browsers, as it is more secure than using `Math.random()` that most people use. Thanks to [saaj](https://stackoverflow.com/users/2072035/saaj) for the algorithm.
- [Password Strength Algorithm](https://github.com/zxcvbn-ts/zxcvbn): I used the zxcvbn implementation to check the strength of the password. The zxcvbn library is a password strength estimator that uses pattern matching and conservative estimation to provide a strength score for the password ([For more information check this site](https://www.usenix.org/conference/usenixsecurity16/technical-sessions/presentation/wheeler)). Teh zxvbn library was created by Dropbox and is available on [GitHub](https://github.com/dropbox/zxcvbn). And that is what they use to check the strength of their passwords. I specifically used a fork of their project that was written in [TypeScript](https://github.com/zxcvbn-ts/zxcvbn).

## CI/CD

The project uses GitHub Actions for CI/CD. The CI/CD pipeline is defined in the `.github/workflows/angular-test.yml` file. The pipeline runs the following steps:

1. Install the dependencies
2. Run the tests
3. Build the application
4. If there are no errors and not test failing, return a success status

This workflow runs on every push to the repository.

## Contributing

To contribute to the project, follow the steps below:

1. Fork the repository
2. Create a new branch (`git checkout -b feature`)
3. Make the appropriate changes in the files
4. Add changes to reflect the changes made in the project (`git add .`)
5. Commit your changes (`git commit -m 'feature'`)
6. Push to the branch (`git push origin feature`)
7. Create a Pull Request

## Testing

All tests in this application was written using the Jasmine testing framework.

To test the application, run the following command:

```bash
ng test
```

 if it is in a CI environment run:

 ```bash
ng test --no-watch --no-progress --browsers=ChromeHeadless
```

## License

The project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more details.
