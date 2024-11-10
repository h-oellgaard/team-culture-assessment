import { ref, onMounted } from 'vue';
import { addGroup, getGroup, getAllGroups, validateGroup } from '../services/group.service.js';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// Emit event for group selection
const emit = defineEmits(['group-selected']);
const groupName = ref('');
const password = ref('');
const error = ref(null);
const groups = ref([]);
const selectedGroupName = ref('');
// Load all existing groups when the component is mounted
onMounted(() => {
    groups.value = getAllGroups(); // Fetch all groups from the mock service
});
// Function to handle group creation or joining
const createOrJoinGroup = () => {
    if (groupName.value === '' && selectedGroupName.value === '') {
        error.value = 'Group name is required';
        return;
    }
    try {
        let group;
        if (selectedGroupName.value !== '') {
            // Join the selected existing group
            group = getGroup(selectedGroupName.value);
            if (validateGroup(selectedGroupName.value, password.value)) {
                emit('group-selected', group);
                error.value = null;
            }
            else {
                error.value = 'Incorrect password';
            }
        }
        else {
            // Create a new group
            group = addGroup(groupName.value, password.value);
            emit('group-selected', group);
            error.value = null;
            groups.value = getAllGroups(); // Update the list of groups
        }
    }
    catch (err) {
        error.value = err.message;
    }
};
// Function to handle changes in group selection dropdown
const handleGroupSelection = () => {
    groupName.value = selectedGroupName.value; // Update groupName based on dropdown selection
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({
    emits: {},
});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("group-join") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("group-form") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ onChange: (__VLS_ctx.handleGroupSelection) }, value: ((__VLS_ctx.selectedGroupName)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: (""), });
    for (const [group] of __VLS_getVForSourceType((__VLS_ctx.groups))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ key: ((group.id)), value: ((group.name)), });
        (group.name);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), value: ((__VLS_ctx.groupName)), placeholder: ("Enter group name"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("password"), });
    (__VLS_ctx.password);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.createOrJoinGroup) }, });
    if (__VLS_ctx.error) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("error") }, });
        (__VLS_ctx.error);
    }
    __VLS_styleScopedClasses['group-join'];
    __VLS_styleScopedClasses['group-form'];
    __VLS_styleScopedClasses['error'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            $emit: emit,
            groupName: groupName,
            password: password,
            error: error,
            groups: groups,
            selectedGroupName: selectedGroupName,
            createOrJoinGroup: createOrJoinGroup,
            handleGroupSelection: handleGroupSelection,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {
            $emit: emit,
        };
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
