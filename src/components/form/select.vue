<template>
    <div class="form-group" :class="formGroupClass">
        <!-- render label if passed in props -->
        <label 
            v-if="hasLabel" 
            class="form-label" 
            :for="labelFor"
        >{{ label }}</label>

        <!-- render select input -->
        <select 
            v-bind="$attrs"
            v-model="selectValue"
            class="form-select"
            ref="select"
            :id="forID"
            @focus="onFocus"
            @blur="onBlur"
        >
            <slot />
        </select>
    </div>
</template>

<script>
import { formElMixin } from '@/utils';

export default {
    name: 'Select',
    inheritAttrs: false,
    mixins: [ formElMixin ],
    props: {
        loading: {
            type: Boolean,
            default: false,
        },
        value: [String, Number]
    },
    computed: {
        formGroupClass() {
            return {
                loading: this.isLoading,
            };
        },
        selectValue: {
            get() {
                return this.selected
            },
            set(val) {
                this.selected = val;
                this.$emit('input', val);
            }
        }
    },
    data() {
        return {
            selected: this.value,
        };
    },
    watch: {
        value(val) {
            this.selected = val;
        }
    },
    created() {
        
    }
}
</script>
