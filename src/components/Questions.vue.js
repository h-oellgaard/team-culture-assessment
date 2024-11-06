import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// Definer `update-questions` event, der sendes til `App.vue`
const emit = defineEmits(['update-questions']);
const questions = ref([
    {
        title: "Study Group Goal Setting",
        questions: [
            "Do we often engage in challenging and open discussions to understand difficult concepts?",
            "Are decisions in the group made clearly by a leader(formal or informal)?",
            "Is our study group's success measured by how well we achieve set goals?",
            "Do we value assertiveness and cut-to-the chase attitude?",
            "If we face obstacles, do group members sometimes fall out?",
            "Do we strive to achieve our long-term study goals with clear milestones for progress?",
            "Does our study group encourage an environment of high expectations and motivation to achieve academic goals?",
            "Are successful group members results-oriented and committed to completing study tasks on time?",
            "Is our group focused on achieving learning goals effectively and supporting each other?",
            "Does the group thrive on achieving study targets and celebrating small wins?"
        ],
        answers: Array(10).fill(null),
    },
    {
        title: "Creative Collaboration",
        questions: [
            "Do we reach agreement through open dialogue and creative problem solving?",
            "Are decisions made collectively, with everyone encouraged to contribute?",
            "Is the success of the study group dependent on proactive and innovative approaches?",
            "Are group members encouraged to try new study techniques and methods?",
            "When facing challenges, do members use their creativity and influence to overcome them?",
            "Is it important that our study sessions are inspiring and motivating for all members?",
            "Does the group value individuality, risk-taking, and unique contributions?",
            "Are successful group members visible, engaging, and sociable with their peers?",
            "Is our study group dynamic, with members willing to take risks to explore new concepts?",
            "Do we emphasize innovation and personal development within our group?"
        ],
        answers: Array(10).fill(null),
    },
    {
        title: "Supportive Environment",
        questions: [
            "Is success achieved by everyone working together to reach shared learning outcomes?",
            "Are decisions made by consensus to ensure everyone's acceptance and support?",
            "Is our group's success measured by how committed and engaged everyone feels?",
            "Do we emphasize openness and participation, fostering trust among group members?",
            "In difficult situations, do we offer each other personal support and encouragement?",
            "Do we have a shared vision of our learning goals that we all work towards?",
            "Does our group focus on teamwork, consensus, and mutual support?",
            "Do members build strong relationships by being cooperative, responsive, and supportive?",
            "Is the atmosphere in our study group personal, where people feel comfortable sharing their thoughts?",
            "Do loyalty and trust bond us together, creating a high level of commitment to the group?"
        ],
        answers: Array(10).fill(null),
    },
    {
        title: "Structured Learning",
        questions: [
            "Do we reach agreement by reviewing key guidelines, processes, or study objectives?",
            "Are decisions made based on established principles and clear responsibilities?",
            "Is success measured by how well we deliver results and complete tasks efficiently?",
            "Do we value consistency and attention to detail in our study sessions?",
            "Do we follow agreed rules or processes when studying, and seek permission if deviating?",
            "Are roles and responsibilities clearly aligned to our group's learning objectives?",
            "Does our group emphasize predictability and stability in how we study together?",
            "Are the most effective group members knowledgeable, organized, and committed to accuracy?",
            "Is our study environment structured, with clear guidelines for how we proceed?",
            "Does the group focus on effective processes and guidelines to ensure smooth study sessions?"
        ],
        answers: Array(10).fill(null),
    },
]);
// Funktion til at udsende opdaterede spørgsmål til `App.vue`
const emitQuestions = () => {
    emit('update-questions', questions.value);
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
    __VLS_styleScopedClasses['question-label'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("questions") }, });
    for (const [questionSet, index] of __VLS_getVForSourceType((__VLS_ctx.questions))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((index)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        (questionSet.title);
        for (const [question, qIndex] of __VLS_getVForSourceType((questionSet.questions))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((qIndex)), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("question-label") }, });
            (question);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onChange: (__VLS_ctx.emitQuestions) }, type: ("radio"), name: (('question-' + index + '-' + qIndex)), value: ((true)), });
            (questionSet.answers[qIndex]);
            __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onChange: (__VLS_ctx.emitQuestions) }, type: ("radio"), name: (('question-' + index + '-' + qIndex)), value: ((false)), });
            (questionSet.answers[qIndex]);
        }
    }
    __VLS_styleScopedClasses['questions'];
    __VLS_styleScopedClasses['question-label'];
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
            questions: questions,
            emitQuestions: emitQuestions,
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
