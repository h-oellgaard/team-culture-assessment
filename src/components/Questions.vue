<template>
  <div class="questions">
    <div v-for="(questionSet, index) in questions" :key="index">
      <h2>{{ questionSet.title }}</h2>
      <div v-for="(question, qIndex) in questionSet.questions" :key="qIndex">
        <label >
          <input type="checkbox" v-model="questionSet.answers[qIndex]" @change="emitQuestions" />
          {{ question }}
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
    title: "Fiery Red",
    questions: [
      "There are often challenging and frank exchanges of views",
      "Decisions are communicated through directives, orders and instructions from the team leader(s)",
      "Success is defined by market leadership, winning and outpacing the competition",
      "The team values competitive actions and achievement",
      "If systems or rules get in the way, team members tend to ignore or by-pass them to accomplish their tasks or perform their function better",
      "The team constantly strives to achieve the long term vision with milestones to prove progress",
      "The leadership style in the team tends towards achievement, high demands and hard-driving competitiveness",
      "Successful team players are results focused, with a strong commitment to getting the job done",
      "The team is results oriented and competitive",
      "The team thrives on goal accomplishment – being aggressive and winning are common themes",
    ],
    answers: Array(10).fill(false),
  },
  {
    title: "Sunshine Yellow",
    questions: [
      "Agreement is reached through open dialogue and a search for creative solutions",
      "Decisions are made close to the point of action by people on the spot",
      "The success of the team relies on people being proactive and innovative",
      "Team members are encouraged to try new things and create new opportunities",
      "If team members come up against blocks, they use their influencing skills to try to change them",
      "It is important to the team that the vision inspires, creating excitement and motivation",
      "The team leaders value individual risk-taking, innovation, freedom and uniqueness",
      "People who are successful in the team are highly visible and effusive with a sociable manner",
      "The team is dynamic – people are willing to stick their necks out and take risks",
      "The team emphasises commitment to innovation and development",
    ],
    answers: Array(10).fill(false),
  },
  {
    title: "Earth Green",
    questions: [
      "Success is achieved by everyone working hard together to achieve 'win-win' solutions",
      "Decisions are made by consensus to ensure acceptance and support for the decision",
      "Success is measured by employee commitment and teamwork",
      "The team emphasises openness and participation – high trust persists",
      "In difficult situations team members offer each other personal support",
      "The team has a shared vision they are all working to attain",
      "Team leaders focus on teamwork, consensus and participation",
      "Team members build close working relationships with others by being cooperative, responsive, and caring",
      "The atmosphere in the team is personal – people share a lot of themselves and it is like an extended family",
      "Loyalty and mutual trust bonds the team together – commitment to the team and to individual members runs high",
    ],
    answers: Array(10).fill(false),
  },
  {
    title: "Cool Blue",
    questions: [
      "Agreement is reached by debate and review of operating guidelines, procedures, or key business objectives",
      "Decisions are made through application of principles and adherence to formal channels of responsibility",
      "Success is measured by dependable delivery and efficient operations",
      "The team values consistency and attention to detail",
      "The team generally abides by the rules or goes through proper channels to get permission to deviate from them",
      "Roles and responsibilities are clearly aligned to the vision",
      "The team leadership emphasises conformity, predictability and stability in relationships",
      "The most effective team members are knowledgeable, work within the system and strive to do things correctly",
      "The team environment is structured – formal procedures generally govern what people do",
      "The team focuses on process, systems and guidelines – smooth running operations are important",
    ],
    answers: Array(10).fill(false),
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
input[type="checkbox"] {
  margin-right: 10px;
}
</style>
