const forms = {};

const getValueByDotNotation = (o, p) => p.split('.').reduce((o, k) => o[k], o);

const createForm = () => {
    return {
        body: {},
        update(name, value) {
            this.body[name] = value;
        },
        async post(action, state, token, data) {
            state.set("LOADING");
            try {
                const res = await fetch(action, {
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type': 'application/json',
                        ...token && {
                            'Authorization': `Bearer ${token}`,
                        },
                    }),
                    body: JSON.stringify(this.body),
                });

                if(data instanceof fastn.recordInstanceClass) {
                    const json = await res.json();

                    for(const [key, value] of Object.entries(json)) {
                        data.set(key, value);
                    }
                }

                state.set("SUCCESS");
            } catch(e) {
                console.log(e)
                state.set("ERROR");
            }
        }
    }
};

const quickform = formId => forms[formId] ??= createForm();
