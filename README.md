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

2. Create an initial state and data models for your form:

```ftd
-- string $state: *$quick.initial-state

-- record user-model:
string id:

-- user-model user:
id: $ftd.empty
```

## Example Usage

Here's a simple example of creating a form using `quick`:

```ftd
-- ftd.column:
align-content: center
width: fill-container
height: fill-container
spacing.fixed.rem: 2

-- ftd.row:
spacing.fixed.rem: 1
if: { state == "SUCCESS" }

-- ftd.text: Your User Id is:

-- ftd.text: $user.id

-- end: ftd.row

;; PRINT CURRENT FORM STATE

-- ftd.text: $state

;; FORM

-- quick.form:

-- ftd.column:
width: fill-container
align-content: center
spacing.fixed.rem: 1

-- ftd.text-input:
placeholder: Your name
$on-input$: $quick.handle-input(key = $form-key, name = name, value = $VALUE)

-- ftd.text-input:
placeholder: Your job position
$on-input$: $quick.handle-input(key = $form-key, name = job, value = $VALUE)

-- ftd.text: Submit
role: $inherited.types.copy-small
background.solid: $inherited.colors.cta-primary.base
padding.rem: .5
$on-click$: $submit-form(action = https://reqres.in/api/users, key = $form-key, $state = $state, data = $user)

-- end: ftd.column

-- end: quick.form

-- end: ftd.column





-- void submit-form(key, action, state, data):
string key:
string action:
string $state:
user-model data:

form = quickform(key);
form.post(action, state, null, data)
```

## Todos

My todos:
- [x] Basic Async Form
- [x] Data mapping

## Contributing

We welcome contributions from the fastn community to make `quick` even better!

## License

This project is licensed under the [MIT License](LICENSE).

---

Made with ❤️ by [harshdoesdev]
