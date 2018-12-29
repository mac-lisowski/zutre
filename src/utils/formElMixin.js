export default {
    props: {
        maxlength: [String, Number],
        autocomplete: String,
        counter: Boolean,
    },
    methods: {
        onBlur($event) {
            this.$emit('blur', $event);
        },
        onFocus($event) {
            this.$emit('focus', $event);
        },
    },
};