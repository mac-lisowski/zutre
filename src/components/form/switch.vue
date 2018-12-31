<template>
    <!-- switch control -->
    <div class="form-group">
        <label class="form-switch">
            <input 
                type="checkbox"
                ref="checkbox"
                v-bind="$attrs"
                v-model="checkboxValue"
                :value="zValue"
                @focus="onFocus"
                @blur="onBlur"
            >
            <i class="form-icon"></i> <slot />
        </label>
    </div>
</template>

<script>
import { formElMixin } from '@/utils';

export default {
    name: 'ZSwitch',
    inheritAttrs: false,
    mixins: [formElMixin],
    props: {
        value: [String, Number, Boolean, Function, Object, Array, Symbol],
        // value for checkbox input needs to be passed by z-value
        zValue: [String, Number, Boolean, Function, Object, Array, Symbol],
    },
    data() {
        return {
            inputValue: this.value,
        };
    },
    watch: {
        value(val) {
            this.inputValue = val;
        }
    },
    computed: {
        checkboxValue: {
            get() {
                return this.inputValue;
            },
            set(val) {
                this.inputValue = val;
                this.$emit('input', val);
            }
        }
    },
}
</script>
