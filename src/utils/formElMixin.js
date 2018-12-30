import { genID } from '@/utils';

export default {
    props: {
        label: {
            type: String,
            default: '' 
        },
        maxlength: [String, Number],
        autocomplete: String,
        counter: Boolean,
        loading: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            forID: null,
            isLoading: this.loading,
        };
    },
    watch: {
        loading(val) {
            this.isLoading = val;
        },
        isLoading(val) {
            this.$emit('update:loading', val);
        },
    },
    created() {
        if ((typeof this.$attrs.id === 'undefined' || this.$attrs.id.length < 1) && this.hasLabel) {
            this.forID = genID();
            this.$attrs.id = this.forID;
        } else {
            this.forID = this.$attrs.id;
        }
    },
    computed: {
        /**
         * hasLabel checks if label was passed in props
         * @return {boolean}
         */
        hasLabel() {
            return this.label !== '';
        },
        /**
         * labelFor check if id is set in input attributes by user, 
         * then will use it, if not then then will generate new id for field
         * @return {string}
         */
        labelFor() {
            return (this.forID !== null) ? this.forID : this.$attrs.id;
        },
        formGroupClass() {
            return {
                loading: this.isLoading,
            };
        },
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