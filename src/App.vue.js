import { ref, onMounted } from 'vue';
import Questions from './components/Questions.vue';
import ScoreDisplay from './components/ScoreDisplay.vue';
import calculateScores from './services/calculate_scores.js';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// Reaktive variabler til at gemme spørgsmål og resultater
const questions = ref([]);
const results = ref(null);
const showCookiePopup = ref(false);
// Funktion til at beregne scoren
const calculateResults = () => {
    results.value = calculateScores(questions.value);
};
// Funktion til at opdatere spørgsmål fra Questions.vue
const updateQuestions = (newQuestions) => {
    questions.value = newQuestions;
};
// Funktion til at acceptere cookies
const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    showCookiePopup.value = false;
};
onMounted(() => {
    // Check if cookies have been accepted
    if (!localStorage.getItem('cookiesAccepted')) {
        showCookiePopup.value = true;
    }
});
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
    __VLS_styleScopedClasses['cookie-popup'];
    __VLS_styleScopedClasses['cookie-popup'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("app"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("./assets/logo.svg"), alt: ("Logo"), ...{ style: ({}) }, });
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
    if (__VLS_ctx.showCookiePopup) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("cookie-popup") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.acceptCookies) }, ...{ style: ({}) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.showCookiePopup)))
                        return;
                    __VLS_ctx.showCookiePopup = false;
                } }, ...{ style: ({}) }, });
    }
    __VLS_styleScopedClasses['cookie-popup'];
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
            showCookiePopup: showCookiePopup,
            calculateResults: calculateResults,
            updateQuestions: updateQuestions,
            acceptCookies: acceptCookies,
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
