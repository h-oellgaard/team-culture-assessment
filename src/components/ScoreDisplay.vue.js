import { ref, onMounted, watch } from 'vue';
import { Chart, registerables } from 'chart.js';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// Registrer de nødvendige komponenter fra Chart.js
Chart.register(...registerables);
// Ref for canvas element
const scoreChart = ref(null);
let chartInstance = null;
// Props for at modtage resultaterne
const props = defineProps({
    results: {
        type: Object,
        required: true,
    },
});
// Funktion til at initialisere eller opdatere grafen
const renderChart = () => {
    if (chartInstance) {
        chartInstance.destroy();
    }
    if (scoreChart.value) {
        const ctx = scoreChart.value.getContext('2d');
        chartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Fiery Red', 'Sunshine Yellow', 'Earth Green', 'Cool Blue'],
                datasets: [{
                        label: 'Team Culture Scores',
                        data: Object.values(props.results),
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)', // Rød
                            'rgba(255, 206, 86, 0.2)', // Gul
                            'rgba(75, 192, 192, 0.2)', // Grøn
                            'rgba(54, 162, 235, 0.2)' // Blå
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)', // Rød
                            'rgba(255, 206, 86, 1)', // Gul
                            'rgba(75, 192, 192, 1)', // Grøn
                            'rgba(54, 162, 235, 1)' // Blå
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
};
onMounted(() => {
    renderChart();
});
// Watch for changes in props.results to re-render the chart
watch(() => props.results, () => {
    renderChart();
}, { deep: true });
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        results: {
            type: Object,
            required: true,
        },
    },
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("score-display") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.canvas, __VLS_intrinsicElements.canvas)({ ref: ("scoreChart"), });
    // @ts-ignore navigation for `const scoreChart = ref()`
    __VLS_ctx.scoreChart;
    __VLS_styleScopedClasses['score-display'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "scoreChart": __VLS_nativeElements['canvas'],
    };
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
            $props: __VLS_makeOptional(props),
            ...props,
            scoreChart: scoreChart,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(props),
            ...props,
        };
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
