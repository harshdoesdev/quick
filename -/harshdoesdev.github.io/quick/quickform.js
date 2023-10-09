const forms = {};

const createForm = () => {
    return {
        data: {},
        update(name, value) {
            this.data[name] = value;
        },
        async post(action, state) {
            state.set("LOADING");
            try {
                await fetch(action, {
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type': 'application/json',
                    }),
                    body: JSON.stringify(this.data),
                });

                state.set("SUCCESS");
            } catch(e) {
                state.set("ERROR");
            }
        }
    }
};

const quickform = formId => forms[formId] ??= createForm();
