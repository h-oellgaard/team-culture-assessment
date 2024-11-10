import { ref } from 'vue';
import Questions from './components/Questions.vue';
import ScoreDisplay from './components/ScoreDisplay.vue';
import GroupJoins from './components/GroupJoins.vue';
import SelectedGroup from './components/SelectedGroup.vue';
import calculateScores from './services/calculate_scores.service.js'; // Denne import er nu opdateret og korrekt
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// Reaktive variabler til at gemme spørgsmål, resultater og gruppeinfo
const questions = ref([]);
const results = ref(null);
const currentGroup = ref(null);
// Funktion til at beregne scoren
const calculateResults = () => {
    results.value = calculateScores(questions.value);
};
// Funktion til at opdatere spørgsmål fra Questions.vue
const updateQuestions = (newQuestions) => {
    questions.value = newQuestions;
};
// Funktion til at håndtere valg af gruppe
const groupSelected = (group) => {
    currentGroup.value = group;
    results.value = null; // Nulstil resultater, når en ny gruppe vælges
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("app"), ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    // @ts-ignore
    [Questions,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Questions, new Questions({ ...{ 'onUpdateQuestions': {} }, }));
    const __VLS_1 = __VLS_0({ ...{ 'onUpdateQuestions': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    let __VLS_5;
    const __VLS_6 = {
        onUpdateQuestions: (__VLS_ctx.updateQuestions)
    };
    let __VLS_2;
    let __VLS_3;
    var __VLS_4;
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.calculateResults) }, });
    if (__VLS_ctx.results) {
        // @ts-ignore
        [ScoreDisplay,];
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(ScoreDisplay, new ScoreDisplay({ results: ((__VLS_ctx.results)), }));
        const __VLS_8 = __VLS_7({ results: ((__VLS_ctx.results)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    }
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
            Questions: Questions,
            ScoreDisplay: ScoreDisplay,
            results: results,
            calculateResults: calculateResults,
            updateQuestions: updateQuestions,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
