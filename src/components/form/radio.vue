<template>
    <label class="form-radio">
        <!-- radio input -->
        <input 
            type="radio"
            v-bind="$attrs"
            v-model="radioValue"
            ref="radio"
            :value="zValue"
            @focus="onFocus"
            @blur="onBlur"
        >
            <i class="form-icon"></i> <slot />
    </label>
</template>

<script>
import { formElMixin } from '@/utils';

export default {
    name: 'Radio',
    inheritAttrs: false,
    mixins: [ formElMixin ],
    props: {
        value: [String, Number, Array, Boolean, Object, Function, Symbol],
        // value for radio input needs to be passed by z-value
        zValue: [String, Number, Array, Boolean, Object, Function, Symbol],
    },
    data() {
        return {
            inputValue: this.value,
        };
    },
    computed: {
        radioValue: {
            get() {
                return this.inputValue;
            },
            set(val) {
                this.inputValue = val;
                this.$emit('input', val);
            }
        },
    },
    watch: {
        value(val) {
            this.inputValue = val;
        }
    }
};
</script>
