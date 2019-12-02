<template>
    <div :class="[small ? 'input-group' : 'form-group', formGroupClass]">
        <span class="input-group-addon" v-if='small && hasLabel'>{{ label }}</span>

        <!-- render label if passed in props -->
        <label 
            v-if="hasLabel && !small" 
            class="form-label" 
            :for="labelFor"
        >{{ label }}</label>

        <!-- if input type is other than textarea then render this -->
        <input 
            v-if="type !== 'textarea'"
            v-bind="$attrs"
            ref="input"
            :id="forID"
            class="form-input"
            :class="inputClass"
            :type="inputType" 
            :value="inputValue"
            :maxlength="maxlength"
            @input="onInput"
            @focus="onFocus"
            @blur="onBlur"
        >

        <!-- if input type === textarea then render this -->
        <textarea 
            v-else
            v-bind="$attrs"
            ref="textarea"
            class="form-input"
            :id="forID"
            :class="inputClass"
            :value="inputValue"
            :maxlength="maxlength"
            @input="onInput"
            @focus="onFocus"
            @blur="onBlur"
        />

        <!-- render char counter if maxlength is set and counter in props is set to true -->
        <small v-if="type !== 'number' && maxlength && counter === true">
            {{ valueLength }} / {{ maxlength }}
        </small>

        <slot name="button-append">
            <z-button class="input-group-btn" @click="$emit('append-click')" v-if='buttonText && small'>{{ buttonText }}</z-button>
        </slot>

    </div>
</template>

<script>
/**
 * Input
 * 
 * @author Maciej Lisowski <maciej.lisowski.elk@gmail.com>
 * @prop {String} type input type, all html input types plus textarea
 * @prop {String} label if set, renders label for input
 * @prop {String|Number} value field value
 * @prop {Boolean} small is use input group addon
 * @prop {String} buttonText button text for input group button
 */
import { formElMixin } from '@/utils';

export default {
    name: 'Input',
    inheritAttrs: false,
    mixins: [ formElMixin ],
    props: {
        type: {
            type: String, 
            default: 'text'
        },
        value: [String, Number],
        small: {
            type: Boolean,
            default: false
        },
        buttonText: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            inputValue: this.value,
            inputType: this.type,
        };
    },
    computed: {
        /**
         * valueLength counts length of current value
         */
        valueLength() {
            if (typeof this.inputValue === 'string') {
                return this.inputValue.length;
            }

            return 0;
        },
        inputClass() {
            return {};
        }
    },
    watch: {
        value(val) {
            this.inputValue = val;
        },
        inputValue(val) {
            this.$emit('input', val);
        },
    },
    methods: {
        onInput(event) {
            this.$nextTick(() => { 
               this.inputValue = event.target.value
            });
        },
    },
};
</script>
