# Contributing to [RefLink](https://github.com/0pen1Labs/RefLink/)

Thank you for considering contributing to RefLink! We welcome contributions from the community to make this project better.

Please take a moment to review this document to understand how to contribute effectively.

## Code of Conduct

We expect all contributors to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it carefully before making any contributions.

## Getting Started

Before you start contributing, ensure that you have:

1. [Node.js](https://nodejs.org/) installed (version 18.x.x).
2. [Next.js](https://nextjs.org/) (version 14.x.x)
3. [PNPM](https://pnpm.io/) installed (version 8.x.x).
4. To run on your local machine make sure you have a clerk Account and local PostgreSQL setup and running.
5. Cloned the repository.
   
### Tech used
```
* Next.js (version >= 14)
* Prisma ORM with PostgreSQL 
* Clerk Auth
* TailwindCSS and Shadcn-UI 
```

## Setting Up the Project

1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine.
4. Install the project dependencies by running `pnpm install`.
5. Start the development server using `pnpm dev`.

* Setup Clerk and Prisma
```bash
# Create '.env.local' in root & use .env.template for structure 

# Create '.env' for Prisma and add DATABASE_URL for example if on local with port 5432
DATABASE_URL="postgres://postgres:[your_password]@localhost:5432/[your_db_name]"
```

* Sync Prisma Schmea with your DB and generate a Prisma client.
```bash
pnpm db-migrate-dev --name init

# To view your DB use
pnpm db
```

* Run these commands in the project dir.
```bash
pnpm i
pnpm dev
```

## Raising an Issue

If you want to report a bug or raise a feature request please submit issue on [Issue Tracker](https://github.com/0pen1Labs/RefLink/issues) as per the template provided [Bug Report Template](https://github.com/0pen1Labs/RefLink/blob/main/.github/ISSUE_TEMPLATE/bug_report.md), [Feature Request Template](https://github.com/0pen1Labs/RefLink/blob/main/.github/ISSUE_TEMPLATE/feature_request.md).

## Making Changes

1. Create a new branch for your feature or bug fix: `git checkout -b feature/my-feature` or `git checkout -b bugfix/issue-number`.
2. Make your changes and ensure that the code follows the project's coding standards and guidelines.
3. Write tests for any new functionality or changes.
4. Run tests using `pnpm test` to ensure that they pass.
5. Commit your changes using descriptive commit messages: `git commit -m "feat: added new feature"` or `git commit -m "fix: resolved issue #123"`.
6. Push your changes to your forked repository: `git push origin feature/my-feature` or `git push origin bugfix/issue-number`.

## Submitting a Pull Request

1. Open a pull request against the `main` branch of the original repository.
2. Ensure your pull request includes a clear title and description of the changes you made.
3. Provide any additional information or context that could help with the review process.
4. Request reviews from maintainers or specific contributors, if needed.

## Code Reviews

All contributions will go through code reviews. Be prepared to make any necessary changes based on the feedback received.

## Additional Resources

- [Project Documentation](README.md)
- [Project Issue Tracker](https://github.com/0pen1Labs/RefLink/issues)
- [GitHub Pull Request Documentation](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests)

Thank you for contributing to RefLink a project by 0pen1labs!
