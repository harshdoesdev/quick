# quick 🚀
a blazing-fast fastn library for creating forms, quick! [DEMO](https://harshdoesdev.github.io/quick/demo/)

## Table of Contents
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Example Usage](#example-usage)
- [Todos](#todos)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with `quick`, simply add it as a dependency in your `FASTN.ftd` and import it into your project using the following import statement:

`FASTN.ftd`
```
-- fastn.dependency: harshdoesdev.github.io/quick
```

`index.ftd`
```ftd
-- import: harshdoesdev.github.io/quick
```

## Getting Started

1. Define a form key using the following syntax:

```ftd
-- string form-key: user-registration-form
```

2. Create an initial state for your form:

```ftd
-- string $state: *$quick.initial-state
```

## Example Usage

Here's a simple example of creating a form using `quick`:

```ftd
-- quick.form:

-- quick.text-field: Full name
key: $form-key
name: name
placeholder: Your Full Name
full-width: true

-- quick.text-field: Job Position
key: $form-key
name: job
placeholder: Your Job Position
full-width: true

-- quick.button: Submit
key: $form-key
action: https://reqres.in/api/users
$state: $state

-- end: quick.form
```

## Todos

My todos:
- [x] Basic Async Form
- [_] Implement a switch element (I don't like checkboxes)
- [_] Enhance styling support for the forms
- [_] Integrate radio buttons
- [_] Add dropdown functionality
- [_] Include Email, Tel, and other input tags

## Contributing

We welcome contributions from the fastn community to make `quick` even better!

## License

This project is licensed under the [MIT License](LICENSE).

---

Made with ❤️ by [harshdoesdev]
