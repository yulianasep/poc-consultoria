<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { supabase } from "../api";
import { pipeline } from "@xenova/transformers";

const state = reactive({
  question: "",
  similarQuestions: [],
});

const calculateSimilarity = async () => {
  let reviewer = await pipeline(
    "sentiment-analysis",
    "Xenova/bert-base-multilingual-uncased-sentiment"
  );

  let result = await reviewer(
    "The Shawshank Redemption is a true masterpiece of cinema."
  );

  console.log(result);

  // const model = await Word2VecModel.load(
  //   "https://huggingface.co/facebook/bart-base/resolve/main/pytorch_model.bin"
  // );
  // const questionEmbeddings = model.encode(state.question);

  // const { data, error } = await supabase.from("questions").select("*");
  // if (error) console.error(error);

  // const similarities = data.map((question) => {
  //   const questionEmbeddingsDB = question.question.embeddings;
  //   const similarity = model.cosineSimilarity(
  //     questionEmbeddings,
  //     questionEmbeddingsDB
  //   );
  //   return { ...question, similarity };
  // });

  // state.similarQuestions = similarities.sort(
  //   (a, b) => b.similarity - a.similarity
  // );
};

const getQuestions = async () => {
  await supabase
    .from("questions")
    .select("*")
    .then(({ data, error }) => {
      if (error) {
        console.log(error);
      }
      if (data) {
        console.log(data);
      }
    });
};

onMounted(() => {
  getQuestions();
});
</script>

<template>
  <div>
    <input type="text" v-model="question" @keyup="calculateSimilarity" />
    <ul>
      <li v-for="question in similarQuestions" :key="question.id">
        {{ question.question }} (Similitud: {{ question.similarity }})
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
