<template>
  <div class="questions">
    <div v-for="(questionSet, index) in questions" :key="index">
      <h2>{{ questionSet.title }}</h2>
      <div v-for="(question, qIndex) in questionSet.questions" :key="qIndex">
        <label class="question-label">
          {{ question }}
          <div>
            <label>
              <input type="radio" :name="'question-' + index + '-' + qIndex" v-model="questionSet.answers[qIndex]" :value="true" @change="emitQuestions" />
              Yes
            </label>
            <label>
              <input type="radio" :name="'question-' + index + '-' + qIndex" v-model="questionSet.answers[qIndex]" :value="false" @change="emitQuestions" />
              No
            </label>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Definer `update-questions` event, der sendes til `App.vue`
const emit = defineEmits(['update-questions']);

const questions = ref([
  {
    title: "Study Group Goal Setting",
    questions: [
      "Do we often engage in challenging and open discussions to understand difficult concepts?",
      "Are decisions in the group made clearly by a designated leader or agreed upon by everyone?",
      "Is our study group's success measured by how well we achieve our learning goals together?",
      "Do we value active participation and contributions from all members?",
      "If we face obstacles, do group members adapt or find alternative ways to continue?",
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
</script>

<style scoped>
.questions {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}
.question-set {
  margin-bottom: 20px;
}
h2 {
  color: #007bff;
  font-weight: bold;
}
.question-label {
  text-align: left;
  display: block;
  margin: 15px 0;
  padding: 10px;
  border: 1px solid #007bff;
  border-radius: 5px;
  background-color: #eef6ff;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.question-label:hover {
  background-color: #e0eaff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
input[type="radio"] {
  margin-right: 10px;
}
</style>